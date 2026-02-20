const notesInput = document.getElementById("notesInput");
const notesInputWrap = document.getElementById("notesInputWrap");
const cleanButton = document.getElementById("cleanButton");
const statusText = document.getElementById("statusText");
const cleanNotesList = document.getElementById("cleanNotesList");
const studyTasksList = document.getElementById("studyTasksList");
const studyOrderList = document.getElementById("studyOrderList");
const themeToggle = document.getElementById("themeToggle");
const appLogo = document.getElementById("appLogo");

const filesList = document.getElementById("filesList");
const newFileButton = document.getElementById("newFileButton");
const saveFileButton = document.getElementById("saveFileButton");
const renameFileButton = document.getElementById("renameFileButton");
const deleteFileButton = document.getElementById("deleteFileButton");
const articleUrlInput = document.getElementById("articleUrlInput");
const summarizeLinkButton = document.getElementById("summarizeLinkButton");
const articleInputWrap = document.getElementById("articleInputWrap");
const notesModeButton = document.getElementById("notesModeButton");
const articleModeButton = document.getElementById("articleModeButton");
const summaryModeInputs = document.querySelectorAll('input[name="summaryMode"]');

const THEME_KEY = "ai-study-planner-theme";
const STUDY_FILES_STORAGE = "study_files_v1";
const ACTIVE_FILE_ID_STORAGE = "active_study_file_id_v1";
const SUMMARY_MODE_STORAGE = "summary_mode_v1";

let studyFiles = loadStudyFiles();
let activeFileId = loadActiveFileId(studyFiles);

loadTheme();
renderFiles();
loadActiveFileIntoEditor();

cleanButton.addEventListener("click", handleCleanNotes);
themeToggle.addEventListener("click", toggleTheme);
newFileButton.addEventListener("click", createFile);
saveFileButton.addEventListener("click", exportActiveFile);
renameFileButton.addEventListener("click", renameActiveFile);
deleteFileButton.addEventListener("click", deleteActiveFile);
if (summarizeLinkButton) {
  summarizeLinkButton.addEventListener("click", summarizeArticleFromLink);
}
notesInput.addEventListener("input", saveCurrentFileText);
if (notesModeButton) {
  notesModeButton.addEventListener("click", () => setSummaryMode("notes"));
}
if (articleModeButton) {
  articleModeButton.addEventListener("click", () => setSummaryMode("article"));
}
summaryModeInputs.forEach((input) => {
  input.addEventListener("change", () => setSummaryMode(input.value));
});
setSummaryMode(loadSummaryMode());

if (appLogo) {
  const hideBrokenLogo = () => {
    appLogo.style.display = "none";
  };

  appLogo.addEventListener("error", hideBrokenLogo);

  // If the image failed before listeners were attached, hide it on load.
  if (appLogo.complete && appLogo.naturalWidth === 0) {
    hideBrokenLogo();
  }
}

async function handleCleanNotes() {
  const rawNotes = notesInput.value.trim();

  if (!rawNotes) {
    statusText.textContent = "Please paste notes first.";
    return;
  }

  triggerSummarizeClickAnimation(cleanButton);
  setLoadingState(true, "clean");

  try {
    const result = await cleanNotesWithOpenRouter(rawNotes);

    renderList(cleanNotesList, result.cleanNotes);
    renderList(studyTasksList, result.studyTasks);
    renderList(studyOrderList, result.studyOrder);
    saveActiveFileResults(result);

    statusText.textContent = "Done. Your study plan is ready.";
  } catch (error) {
    statusText.textContent = error.message;
  } finally {
    setLoadingState(false);
  }
}

async function summarizeArticleFromLink() {
  const articleUrl = articleUrlInput.value.trim();

  if (!articleUrl) {
    statusText.textContent = "Paste an article link first.";
    return;
  }

  if (!isValidHttpUrl(articleUrl)) {
    statusText.textContent = "Please enter a valid http/https URL.";
    return;
  }

  triggerSummarizeClickAnimation(summarizeLinkButton);
  setLoadingState(true, "article");

  try {
    const articleText = await fetchArticleTextFromUrl(articleUrl);
    const result = await cleanNotesWithOpenRouter(
      `Article URL: ${articleUrl}\n\nArticle content:\n${articleText}`
    );

    renderList(cleanNotesList, result.cleanNotes);
    renderList(studyTasksList, result.studyTasks);
    renderList(studyOrderList, result.studyOrder);
    saveActiveFileResults(result);

    const generatedNotes = result.cleanNotes.map((line) => `- ${line}`).join("\n");
    notesInput.value = generatedNotes;
    saveCurrentFileText();

    statusText.textContent = "Article summarized into school notes.";
  } catch (error) {
    statusText.textContent = error.message;
  } finally {
    setLoadingState(false);
  }
}

async function cleanNotesWithOpenRouter(rawNotes) {
  // Use the Cloudflare Worker backend
  const workerUrl = "https://ai-study-planner-backend.mavrick-blackburn.workers.dev/api/clean-notes";

  const response = await fetch(workerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      notes: rawNotes
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to clean notes");
  }

  const result = await response.json();

  return {
    cleanNotes: ensureStringArray(result.cleanNotes),
    studyTasks: ensureStringArray(result.studyTasks),
    studyOrder: ensureStringArray(result.studyOrder)
  };
}

function loadStudyFiles() {
  try {
    const raw = localStorage.getItem(STUDY_FILES_STORAGE);

    if (!raw) {
      return [createStudyFile("My First Notes")];
    }

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed) || parsed.length === 0) {
      return [createStudyFile("My First Notes")];
    }

    const sanitized = parsed
      .filter((file) => file && typeof file.id === "string" && typeof file.name === "string")
      .map((file) => ({
        id: file.id,
        name: file.name,
        content: typeof file.content === "string" ? file.content : "",
        cleanNotes: ensureStringArray(file.cleanNotes),
        studyTasks: ensureStringArray(file.studyTasks),
        studyOrder: ensureStringArray(file.studyOrder)
      }));

    if (sanitized.length === 0) {
      return [createStudyFile("My First Notes")];
    }

    return sanitized;
  } catch (_error) {
    return [createStudyFile("My First Notes")];
  }
}

function loadActiveFileId(files) {
  const savedId = localStorage.getItem(ACTIVE_FILE_ID_STORAGE);
  const exists = files.some((file) => file.id === savedId);

  if (exists) {
    return savedId;
  }

  return files[0].id;
}

function createStudyFile(name) {
  return {
    id: `file_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
    name,
    content: "",
    cleanNotes: [],
    studyTasks: [],
    studyOrder: []
  };
}

function persistFiles() {
  localStorage.setItem(STUDY_FILES_STORAGE, JSON.stringify(studyFiles));
  localStorage.setItem(ACTIVE_FILE_ID_STORAGE, activeFileId);
}

function renderFiles() {
  filesList.innerHTML = "";

  studyFiles.forEach((file) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = `file-chip${file.id === activeFileId ? " active" : ""}`;
    button.textContent = file.name;
    button.addEventListener("click", () => {
      activeFileId = file.id;
      persistFiles();
      renderFiles();
      loadActiveFileIntoEditor();
      statusText.textContent = `Opened file: ${file.name}`;
    });
    li.appendChild(button);
    filesList.appendChild(li);
  });
}

function getActiveFile() {
  return studyFiles.find((file) => file.id === activeFileId) || null;
}

function loadActiveFileIntoEditor() {
  const activeFile = getActiveFile();

  if (!activeFile) {
    notesInput.value = "";
    renderFileResults(null);
    return;
  }

  notesInput.value = activeFile.content || "";
  renderFileResults(activeFile);
}

function saveCurrentFileText() {
  const activeFile = getActiveFile();

  if (!activeFile) {
    return;
  }

  activeFile.content = notesInput.value;
  persistFiles();
}

function saveActiveFileResults(result) {
  const activeFile = getActiveFile();

  if (!activeFile) {
    return;
  }

  activeFile.cleanNotes = ensureStringArray(result.cleanNotes);
  activeFile.studyTasks = ensureStringArray(result.studyTasks);
  activeFile.studyOrder = ensureStringArray(result.studyOrder);
  persistFiles();
}

function createFile() {
  const name = window.prompt("New file name:", `Study Notes ${studyFiles.length + 1}`);

  if (!name || !name.trim()) {
    return;
  }

  const newFile = createStudyFile(name.trim());
  studyFiles.push(newFile);
  activeFileId = newFile.id;

  persistFiles();
  renderFiles();
  loadActiveFileIntoEditor();
  statusText.textContent = `Created file: ${newFile.name}`;
}

function exportActiveFile() {
  const activeFile = getActiveFile();

  if (!activeFile) {
    statusText.textContent = "No active file to save.";
    return;
  }

  saveCurrentFileText();

  const lines = [
    `File: ${activeFile.name}`,
    "",
    "Raw Notes",
    notesInput.value.trim() || "(empty)",
    "",
    "Clean Notes",
    ...(activeFile.cleanNotes.length > 0 ? activeFile.cleanNotes.map((item) => `- ${item}`) : ["- (empty)" ]),
    "",
    "Study Tasks",
    ...(activeFile.studyTasks.length > 0 ? activeFile.studyTasks.map((item) => `- ${item}`) : ["- (empty)"] ),
    "",
    "Suggested Study Order",
    ...(activeFile.studyOrder.length > 0 ? activeFile.studyOrder.map((item, index) => `${index + 1}. ${item}`) : ["1. (empty)"])
  ];

  const content = lines.join("\n");
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  const safeName = slugifyFileName(activeFile.name) || "study-notes";

  link.href = URL.createObjectURL(blob);
  link.download = `${safeName}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 0);

  statusText.textContent = `Saved file: ${activeFile.name}.txt`;
}

function renameActiveFile() {
  const activeFile = getActiveFile();

  if (!activeFile) {
    return;
  }

  const updatedName = window.prompt("Rename file:", activeFile.name);

  if (!updatedName || !updatedName.trim()) {
    return;
  }

  activeFile.name = updatedName.trim();
  persistFiles();
  renderFiles();
  statusText.textContent = `Renamed file to: ${activeFile.name}`;
}

function deleteActiveFile() {
  const activeFile = getActiveFile();

  if (!activeFile) {
    return;
  }

  const shouldDelete = window.confirm(`Delete "${activeFile.name}"?`);

  if (!shouldDelete) {
    return;
  }

  studyFiles = studyFiles.filter((file) => file.id !== activeFile.id);

  if (studyFiles.length === 0) {
    const fallback = createStudyFile("My First Notes");
    studyFiles = [fallback];
    activeFileId = fallback.id;
  } else {
    activeFileId = studyFiles[0].id;
  }

  persistFiles();
  renderFiles();
  loadActiveFileIntoEditor();
  statusText.textContent = "File deleted.";
}



function ensureStringArray(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item) => typeof item === "string" && item.trim().length > 0);
}

function parseModelJson(text) {
  try {
    return JSON.parse(text);
  } catch (_error) {
    const firstBrace = text.indexOf("{");
    const lastBrace = text.lastIndexOf("}");

    if (firstBrace === -1 || lastBrace === -1 || firstBrace >= lastBrace) {
      throw new Error("Model output was not valid JSON.");
    }

    return JSON.parse(text.slice(firstBrace, lastBrace + 1));
  }
}

function setLoadingState(isLoading, mode = "clean") {
  cleanButton.disabled = isLoading;
  cleanButton.classList.toggle("is-loading", isLoading && mode === "clean");
  if (summarizeLinkButton) {
    summarizeLinkButton.disabled = isLoading;
    summarizeLinkButton.classList.toggle("is-loading", isLoading && mode === "article");
  }
  cleanButton.textContent = isLoading && mode === "clean" ? "Summarizing Notes..." : "Summarize Notes";
  if (summarizeLinkButton) {
    summarizeLinkButton.textContent = isLoading && mode === "article" ? "Summarizing Article..." : "Summarize Article";
  }
  statusText.classList.toggle("is-processing", isLoading);

  if (isLoading) {
    statusText.textContent = "AI is organizing your notes...";
  }
}

function triggerSummarizeClickAnimation(button) {
  if (!button) {
    return;
  }

  button.classList.remove("click-burst");
  void button.offsetWidth;
  button.classList.add("click-burst");
}

function renderList(listElement, items) {
  listElement.innerHTML = "";

  if (!Array.isArray(items) || items.length === 0) {
    const fallbackItem = document.createElement("li");
    fallbackItem.textContent = "No items generated yet.";
    listElement.appendChild(fallbackItem);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function renderFileResults(file) {
  if (!file) {
    renderList(cleanNotesList, []);
    renderList(studyTasksList, []);
    renderList(studyOrderList, []);
    return;
  }

  renderList(cleanNotesList, file.cleanNotes);
  renderList(studyTasksList, file.studyTasks);
  renderList(studyOrderList, file.studyOrder);
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  updateThemeButtonLabel(isDark);
}

function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const shouldUseDark = savedTheme === "dark";

  if (shouldUseDark) {
    document.body.classList.add("dark");
  }

  updateThemeButtonLabel(shouldUseDark);
}

function updateThemeButtonLabel(isDark) {
  themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
}

function loadSummaryMode() {
  const savedMode = localStorage.getItem(SUMMARY_MODE_STORAGE);
  return savedMode === "article" ? "article" : "notes";
}

function setSummaryMode(mode) {
  const normalizedMode = mode === "article" ? "article" : "notes";
  localStorage.setItem(SUMMARY_MODE_STORAGE, normalizedMode);
  handleSummaryModeChange(normalizedMode);
}

function handleSummaryModeChange(mode) {
  const isArticle = mode === "article";

  if (articleInputWrap) {
    articleInputWrap.classList.toggle("hidden", !isArticle);
  }
  if (notesInputWrap) {
    notesInputWrap.classList.toggle("hidden", isArticle);
  }
  notesInput.disabled = isArticle;
  if (summarizeLinkButton) {
    summarizeLinkButton.classList.toggle("hidden", !isArticle);
  }
  cleanButton.classList.toggle("hidden", isArticle);
  if (notesModeButton) {
    notesModeButton.classList.toggle("active", !isArticle);
  }
  if (articleModeButton) {
    articleModeButton.classList.toggle("active", isArticle);
  }
  summaryModeInputs.forEach((input) => {
    input.checked = input.value === (isArticle ? "article" : "notes");
  });

  if (isArticle) {
    statusText.textContent = "Article mode selected. Paste a link and summarize.";
  } else {
    statusText.textContent = "Notes mode selected. Paste notes and summarize.";
  }
}

function isValidHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch (_error) {
    return false;
  }
}

async function fetchArticleTextFromUrl(articleUrl) {
  const normalized = articleUrl.replace(/^https?:\/\//i, "");
  const readerUrl = `https://r.jina.ai/http://${normalized}`;
  const response = await fetch(readerUrl);
  const text = (await response.text()).trim();

  if (!response.ok) {
    throw new Error("Could not read article URL.");
  }

  if (text.length < 180) {
    throw new Error("Article text was too short to summarize.");
  }

  return text.slice(0, 14000);
}

function slugifyFileName(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
