const notesInput = document.getElementById("notesInput");
const notesInputWrap = document.getElementById("notesInputWrap");
const inputCard = document.querySelector(".input-card");
const cleanButton = document.getElementById("cleanButton");
const statusText = document.getElementById("statusText");
const resultsSection = document.getElementById("resultsSection");
const cleanNotesList = document.getElementById("cleanNotesList");
const studyTasksList = document.getElementById("studyTasksList");
const studyOrderList = document.getElementById("studyOrderList");
const copyStudyTasksButton = document.getElementById("copyStudyTasksButton");
const copyStudyPlanButton = document.getElementById("copyStudyPlanButton");
const copyCleanNotesButton = document.getElementById("copyCleanNotesButton");
const copyFlashcardsButton = document.getElementById("copyFlashcardsButton");
const copyQuizButton = document.getElementById("copyQuizButton");
const studyTasksCard = document.getElementById("studyTasksCard");
const studyPlanCard = document.getElementById("studyPlanCard");
const flashcardsList = document.getElementById("flashcardsList");
const quizQuestionsList = document.getElementById("quizQuestionsList");
const cleanNotesCard = document.getElementById("cleanNotesCard");
const flashcardsCard = document.getElementById("flashcardsCard");
const quizQuestionsCard = document.getElementById("quizQuestionsCard");
const outputStudyTasks = document.getElementById("outputStudyTasks");
const outputStudyPlan = document.getElementById("outputStudyPlan");
const outputCleanNotes = document.getElementById("outputCleanNotes");
const outputFlashcards = document.getElementById("outputFlashcards");
const outputQuizQuestions = document.getElementById("outputQuizQuestions");
const outputOptionInputs = [
  outputStudyTasks,
  outputStudyPlan,
  outputCleanNotes,
  outputFlashcards,
  outputQuizQuestions
].filter(Boolean);
const copyTargets = [
  { button: copyStudyTasksButton, list: studyTasksList },
  { button: copyStudyPlanButton, list: studyOrderList },
  { button: copyCleanNotesButton, list: cleanNotesList },
  { button: copyFlashcardsButton, list: flashcardsList },
  { button: copyQuizButton, list: quizQuestionsList }
];
const themeToggle = document.getElementById("themeToggle");
const performanceToggle = document.getElementById("performanceToggle");
const performanceLoader = document.getElementById("performanceLoader");
const performanceLoaderText = document.getElementById("performanceLoaderText");
const appLogo = document.getElementById("appLogo");

const filesList = document.getElementById("filesList");
const filesCard = document.querySelector(".files-card");
const newFileButton = document.getElementById("newFileButton");
const saveFileButton = document.getElementById("saveFileButton");
const renameFileButton = document.getElementById("renameFileButton");
const deleteFileButton = document.getElementById("deleteFileButton");
const renameModal = document.getElementById("renameModal");
const renameForm = document.getElementById("renameForm");
const renameInput = document.getElementById("renameInput");
const renameCancelButton = document.getElementById("renameCancelButton");
const newFileModal = document.getElementById("newFileModal");
const newFileForm = document.getElementById("newFileForm");
const newFileInput = document.getElementById("newFileInput");
const newFileCancelButton = document.getElementById("newFileCancelButton");
const deleteFileModal = document.getElementById("deleteFileModal");
const deleteFileMessage = document.getElementById("deleteFileMessage");
const deleteFileCancelButton = document.getElementById("deleteFileCancelButton");
const deleteFileConfirmButton = document.getElementById("deleteFileConfirmButton");
const tutorialCoach = document.getElementById("tutorialCoach");
const tutorialCloseButton = document.getElementById("tutorialCloseButton");
const tutorialBackButton = document.getElementById("tutorialBackButton");
const tutorialNextButton = document.getElementById("tutorialNextButton");
const tutorialText = document.getElementById("tutorialText");
const tutorialExample = document.getElementById("tutorialExample");
const tutorialExampleLabel = document.getElementById("tutorialExampleLabel");
const tutorialStepCounter = document.getElementById("tutorialStepCounter");
const tutorialExampleWrap = document.querySelector(".tutorial-example-wrap");
const welcomeModal = document.getElementById("welcomeModal");
const welcomeStartButton = document.getElementById("welcomeStartButton");
const tutorialSkipConfirmModal = document.getElementById("tutorialSkipConfirmModal");
const tutorialSkipCancelButton = document.getElementById("tutorialSkipCancelButton");
const tutorialSkipConfirmButton = document.getElementById("tutorialSkipConfirmButton");
const articleUrlInput = document.getElementById("articleUrlInput");
const summarizeLinkButton = document.getElementById("summarizeLinkButton");
const articleInputWrap = document.getElementById("articleInputWrap");
const summarizeModeCard = document.querySelector(".summarize-mode-card");
const topActions = document.querySelector(".top-actions");
const outputOptionsWrap = document.querySelector(".output-options-wrap");
const notesModeButton = document.getElementById("notesModeButton");
const articleModeButton = document.getElementById("articleModeButton");
const summaryModeInputs = document.querySelectorAll('input[name="summaryMode"]');
const authGate = document.getElementById("authGate");
const authGateTitle = document.getElementById("authGateTitle");
const authGateText = document.getElementById("authGateText");
const authSignInTab = document.getElementById("authSignInTab");
const authSignUpTab = document.getElementById("authSignUpTab");
const clerkAuthMount = document.getElementById("clerkAuthMount");
const clerkUserButton = document.getElementById("clerkUserButton");

const THEME_KEY = "ai-study-planner-theme";
const PERFORMANCE_MODE_KEY = "performance_mode_v1";
const TUTORIAL_SEEN_KEY = "tutorial_seen_v1";
const STUDY_FILES_STORAGE = "study_files_v1";
const ACTIVE_FILE_ID_STORAGE = "active_study_file_id_v1";
const SUMMARY_MODE_STORAGE = "summary_mode_v1";

let studyFiles = loadStudyFiles();
let activeFileId = loadActiveFileId(studyFiles);
let isGenerating = false;
let createdFileIdForAnimation = "";
let tutorialStepIndex = 0;
let allowNativeCopyOnce = false;
let isPerformanceToggleBusy = false;
let tutorialPendingAction = "";
let tutorialDynamicStep = null;
let didRunTutorialGateCheck = false;
let isUserAuthenticated = false;
let authView = "sign-in";
let clerkLoaded = false;
const FALLBACK_CLERK_PUBLISHABLE_KEY = "pk_test_YXJyaXZpbmctaGVyb24tNTQuY2xlcmsuYWNjb3VudHMuZGV2JA";

const tutorialSteps = [
  {
    title: "Welcome",
    target: "summarize",
    exampleLabel: "Tip",
    text: "This island controls your study workflow. Use Notes/Article mode and start from here.",
    example:
      "You can switch between Summarize Notes and Summarize Article anytime."
  },
  {
    title: "Outputs + Buttons",
    target: "outputs",
    text: "Pick outputs you want in your study pack: tasks, plan, clean notes, flashcards, and quiz questions.",
    waitForAction: "select-output",
    exampleLabel: "Try",
    example:
      "Try these outputs: Study Tasks + Study Plan + Flashcards."
  },
  {
    title: "Try Generate",
    target: "generate",
    text: "Click Generate Study Pack once. Continue after generation fully completes.",
    waitForAction: "generate",
    hideExample: true,
    fillNotesText:
      "Math test tmrw not ready need to practice fractions still dont get how to divide decimals lol. English read chapter 5 of Call of the Wild dont forget to summarize 3 lines only maybe write like gamer style. Science project omg need to finish volcano but dont have enough baking soda??? maybe ask mom for more. History quiz next week on egypt pharaohs and pyramids confusing af. Spelling words ugh too many cant remember them all. PE tomorrow run laps hope it doesnt rain. Art sketch still not done want to add more colors maybe neon?? also draw robot idea. Computer class test on coding syntax forgot loops how they work. Music need to practice piano scales last time my hand hurt so much. Lunch forgot sandwich at home had to buy chips rip."
  },
  {
    title: "Done",
    target: "files",
    exampleLabel: "Assignment",
    text: "Use New/Save/Rename/Delete to manage files in this section. Create one new file now to finish.",
    waitForAction: "create-file",
    example:
      "Create one file per subject for cleaner study sessions."
  }
];

loadTheme();
loadPerformanceMode();
renderFiles();
loadActiveFileIntoEditor();

cleanButton.addEventListener("click", handleCleanNotes);
themeToggle.addEventListener("click", toggleTheme);
if (performanceToggle) {
  performanceToggle.addEventListener("click", togglePerformanceMode);
}
newFileButton.addEventListener("click", createFile);
saveFileButton.addEventListener("click", exportActiveFile);
renameFileButton.addEventListener("click", renameActiveFile);
deleteFileButton.addEventListener("click", deleteActiveFile);
if (renameForm) {
  renameForm.addEventListener("submit", submitRenameFile);
}
if (renameCancelButton) {
  renameCancelButton.addEventListener("click", closeRenameModal);
}
if (renameModal) {
  renameModal.addEventListener("click", (event) => {
    if (event.target === renameModal) {
      closeRenameModal();
    }
  });
}
if (newFileForm) {
  newFileForm.addEventListener("submit", submitCreateFile);
}
if (newFileCancelButton) {
  newFileCancelButton.addEventListener("click", closeNewFileModal);
}
if (newFileModal) {
  newFileModal.addEventListener("click", (event) => {
    if (event.target === newFileModal) {
      closeNewFileModal();
    }
  });
}
if (deleteFileCancelButton) {
  deleteFileCancelButton.addEventListener("click", closeDeleteFileModal);
}
if (deleteFileConfirmButton) {
  deleteFileConfirmButton.addEventListener("click", confirmDeleteFile);
}
if (deleteFileModal) {
  deleteFileModal.addEventListener("click", (event) => {
    if (event.target === deleteFileModal) {
      closeDeleteFileModal();
    }
  });
}
if (tutorialCloseButton) {
  tutorialCloseButton.addEventListener("click", skipTutorial);
}
if (welcomeStartButton) {
  welcomeStartButton.addEventListener("click", startTutorialFromWelcome);
}
if (tutorialSkipCancelButton) {
  tutorialSkipCancelButton.addEventListener("click", () => closeModalWithAnimation(tutorialSkipConfirmModal));
}
if (tutorialSkipConfirmButton) {
  tutorialSkipConfirmButton.addEventListener("click", () => {
    closeModalWithAnimation(tutorialSkipConfirmModal);
    skipTutorial();
  });
}
if (tutorialBackButton) {
  tutorialBackButton.addEventListener("click", goToPreviousTutorialStep);
}
if (tutorialNextButton) {
  tutorialNextButton.addEventListener("click", goToNextTutorialStep);
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && renameModal && !renameModal.classList.contains("hidden")) {
    closeRenameModal();
    return;
  }
  if (event.key === "Escape" && newFileModal && !newFileModal.classList.contains("hidden")) {
    closeNewFileModal();
    return;
  }
  if (event.key === "Escape" && deleteFileModal && !deleteFileModal.classList.contains("hidden")) {
    closeDeleteFileModal();
    return;
  }
  if (event.key === "Escape" && tutorialCoach && !tutorialCoach.classList.contains("hidden")) {
    skipTutorial();
  }
});
document.addEventListener(
  "click",
  (event) => {
    if (!isTutorialActive() || tutorialStepIndex !== 0) {
      return;
    }

    const target = event.target;
    const clickedCoach = target instanceof HTMLElement && target.closest("#tutorialCoach");
    const clickedSkipConfirm = target instanceof HTMLElement && target.closest("#tutorialSkipConfirmModal");
    const highlightTarget = getTutorialTarget(tutorialSteps[tutorialStepIndex]?.target);
    const clickedHighlight =
      highlightTarget &&
      target instanceof Node &&
      (target === highlightTarget || (highlightTarget instanceof HTMLElement && highlightTarget.contains(target)));

    if (clickedCoach || clickedHighlight || clickedSkipConfirm) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    openTutorialSkipConfirm();
  },
  true
);
document.addEventListener("copy", (event) => {
  if (allowNativeCopyOnce) {
    allowNativeCopyOnce = false;
    return;
  }

  event.preventDefault();
});
document.addEventListener("cut", (event) => {
  if (allowNativeCopyOnce) {
    allowNativeCopyOnce = false;
    return;
  }

  event.preventDefault();
});
document.addEventListener("contextmenu", (event) => {
  const target = event.target;
  const isCopyButton = target instanceof HTMLElement && target.closest(".copy-btn");
  if (!isCopyButton) {
    event.preventDefault();
  }
});
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
if (authSignInTab) {
  authSignInTab.addEventListener("click", () => switchAuthView("sign-in"));
}
if (authSignUpTab) {
  authSignUpTab.addEventListener("click", () => switchAuthView("sign-up"));
}
if (cleanButton) {
  cleanButton.addEventListener("click", handleTutorialGenerateAction);
}
summaryModeInputs.forEach((input) => {
  input.addEventListener("change", () => setSummaryMode(input.value));
});
if (outputCleanNotes) {
  outputCleanNotes.addEventListener("change", () => {
    triggerCheckboxAnimation(outputCleanNotes);
    updateOptionalOutputCards();
    syncTutorialStepActionState();
  });
}
if (outputStudyTasks) {
  outputStudyTasks.addEventListener("change", () => {
    triggerCheckboxAnimation(outputStudyTasks);
    updateOptionalOutputCards();
    syncTutorialStepActionState();
  });
}
if (outputStudyPlan) {
  outputStudyPlan.addEventListener("change", () => {
    triggerCheckboxAnimation(outputStudyPlan);
    updateOptionalOutputCards();
    syncTutorialStepActionState();
  });
}
if (outputFlashcards) {
  outputFlashcards.addEventListener("change", () => {
    triggerCheckboxAnimation(outputFlashcards);
    updateOptionalOutputCards();
    syncTutorialStepActionState();
  });
}
if (outputQuizQuestions) {
  outputQuizQuestions.addEventListener("change", () => {
    triggerCheckboxAnimation(outputQuizQuestions);
    updateOptionalOutputCards();
    syncTutorialStepActionState();
  });
}
setSummaryMode(loadSummaryMode());
updateOptionalOutputCards();
bindCopyButtons();
initializeAuthGate();

if (appLogo) {
  const logoCandidates = [
    appLogo.getAttribute("src"),
    "Untitled design (14).png",
    "logo.png",
    "logo.jpg",
    "logo.jpeg",
    "logo.webp"
  ].filter(Boolean);
  let logoIndex = 0;

  const hideBrokenLogo = () => {
    appLogo.style.display = "none";
  };

  const tryNextLogo = () => {
    logoIndex += 1;

    if (logoIndex >= logoCandidates.length) {
      hideBrokenLogo();
      return;
    }

    appLogo.src = logoCandidates[logoIndex];
  };

  appLogo.addEventListener("error", tryNextLogo);

  if (appLogo.complete && appLogo.naturalWidth === 0) {
    tryNextLogo();
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
    const result = await generateStudyPack(rawNotes, getSelectedOutputs());

    statusText.textContent = "AI is typing your study pack...";
    await renderResultsWithTyping(result);
    saveActiveFileResults(result);

    statusText.textContent = "Done. Your study pack is ready.";
    handleTutorialGenerationCompleted();
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
    const result = await generateStudyPack(
      `Article URL: ${articleUrl}\n\nArticle content:\n${articleText}`,
      getSelectedOutputs()
    );

    statusText.textContent = "AI is typing your study pack...";
    await renderResultsWithTyping(result);
    saveActiveFileResults(result);

    statusText.textContent = "Article converted into your study pack.";
    handleTutorialGenerationCompleted();
  } catch (error) {
    statusText.textContent = error.message;
  } finally {
    setLoadingState(false);
  }
}

function getSelectedOutputs() {
  return {
    studyTasks: Boolean(outputStudyTasks?.checked),
    studyPlan: Boolean(outputStudyPlan?.checked),
    cleanNotes: Boolean(outputCleanNotes?.checked),
    flashcards: Boolean(outputFlashcards?.checked),
    quizQuestions: Boolean(outputQuizQuestions?.checked)
  };
}

async function generateStudyPack(text, selectedOutputs) {
  const base = await cleanNotesWithOpenRouter(text);
  const sourceLines = base.cleanNotes.length > 0 ? base.cleanNotes : base.studyTasks;

  return {
    cleanNotes: selectedOutputs.cleanNotes ? base.cleanNotes : [],
    studyTasks: selectedOutputs.studyTasks ? base.studyTasks : [],
    studyOrder: selectedOutputs.studyPlan ? base.studyOrder : [],
    flashcards: selectedOutputs.flashcards ? generateFlashcards(sourceLines) : [],
    quizQuestions: selectedOutputs.quizQuestions ? generateQuizQuestions(sourceLines) : [],
    selectedOutputs
  };
}

async function cleanNotesWithOpenRouter(rawNotes) {
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
        studyOrder: ensureStringArray(file.studyOrder),
        flashcards: ensureStringArray(file.flashcards),
        quizQuestions: ensureStringArray(file.quizQuestions)
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
    studyOrder: [],
    flashcards: [],
    quizQuestions: []
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
    button.disabled = isGenerating;
    button.addEventListener("click", () => {
      if (isGenerating) {
        statusText.textContent = "Please wait for generation to finish before switching files.";
        return;
      }
      activeFileId = file.id;
      persistFiles();
      renderFiles();
      loadActiveFileIntoEditor();
      triggerFileOpenAnimation();
      statusText.textContent = `Opened file: ${file.name}`;
    });
    li.appendChild(button);
    filesList.appendChild(li);
    if (file.id === createdFileIdForAnimation) {
      playTransientAnimation(button, "file-create-in");
    }
  });

  if (createdFileIdForAnimation) {
    createdFileIdForAnimation = "";
  }
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
  activeFile.flashcards = ensureStringArray(result.flashcards);
  activeFile.quizQuestions = ensureStringArray(result.quizQuestions);
  persistFiles();
}

function createFile() {
  openNewFileModal();
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
    "Study Tasks",
    ...(activeFile.studyTasks.length > 0 ? activeFile.studyTasks.map((item) => `- ${item}`) : ["- (empty)"]),
    "",
    "Study Plan",
    ...(activeFile.studyOrder.length > 0 ? activeFile.studyOrder.map((item, index) => `${index + 1}. ${item}`) : ["1. (empty)"]),
    "",
    "Clean Notes",
    ...(activeFile.cleanNotes.length > 0 ? activeFile.cleanNotes.map((item) => `- ${item}`) : ["- (empty)"]),
    "",
    "Flashcards",
    ...(activeFile.flashcards.length > 0 ? activeFile.flashcards.map((item) => `- ${item}`) : ["- (empty)"]),
    "",
    "Quiz Questions",
    ...(activeFile.quizQuestions.length > 0 ? activeFile.quizQuestions.map((item, index) => `${index + 1}. ${item}`) : ["1. (empty)"])
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

  openRenameModal(activeFile.name);
}

function openRenameModal(currentName) {
  if (!renameModal || !renameInput) {
    return;
  }

  renameInput.value = currentName || "";
  renameModal.classList.remove("hidden");
  setTimeout(() => {
    renameInput.focus();
    renameInput.select();
  }, 0);
}

function closeRenameModal() {
  closeModalWithAnimation(renameModal);
}

function submitRenameFile(event) {
  event.preventDefault();

  const activeFile = getActiveFile();

  if (!activeFile || !renameInput) {
    closeRenameModal();
    return;
  }

  const updatedName = renameInput.value.trim();

  if (!updatedName) {
    statusText.textContent = "Please enter a file name.";
    renameInput.focus();
    return;
  }

  activeFile.name = updatedName;
  persistFiles();
  renderFiles();
  closeRenameModal();
  statusText.textContent = `Renamed file to: ${activeFile.name}`;
}

function openNewFileModal() {
  if (!newFileModal || !newFileInput) {
    return;
  }

  newFileInput.value = `Study Notes ${studyFiles.length + 1}`;
  newFileModal.classList.remove("hidden");
  setTimeout(() => {
    newFileInput.focus();
    newFileInput.select();
  }, 0);
}

function closeNewFileModal() {
  closeModalWithAnimation(newFileModal);
}

function submitCreateFile(event) {
  event.preventDefault();

  if (!newFileInput) {
    closeNewFileModal();
    return;
  }

  const name = newFileInput.value.trim();
  if (!name) {
    statusText.textContent = "Please enter a file name.";
    newFileInput.focus();
    return;
  }

  const newFile = createStudyFile(name);
  studyFiles.push(newFile);
  activeFileId = newFile.id;
  createdFileIdForAnimation = newFile.id;

  persistFiles();
  renderFiles();
  loadActiveFileIntoEditor();
  triggerFileOpenAnimation();
  closeNewFileModal();
  statusText.textContent = `Created file: ${newFile.name}`;
  handleTutorialCreateFileCompleted();
}

function deleteActiveFile() {
  const activeFile = getActiveFile();

  if (!activeFile) {
    return;
  }

  openDeleteFileModal(activeFile.name);
}

function openDeleteFileModal(fileName) {
  if (!deleteFileModal) {
    return;
  }

  if (deleteFileMessage) {
    deleteFileMessage.textContent = `Are you sure you want to delete "${fileName}"? This cannot be undone.`;
  }
  deleteFileModal.classList.remove("hidden");
}

function closeDeleteFileModal() {
  closeModalWithAnimation(deleteFileModal);
}

function confirmDeleteFile() {
  const activeFile = getActiveFile();

  if (!activeFile) {
    closeDeleteFileModal();
    return;
  }

  const activeChipButton = filesList.querySelector(".file-chip.active");
  const finalizeDelete = () => {
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
    closeDeleteFileModal();
    statusText.textContent = "File deleted.";
  };

  if (!activeChipButton) {
    finalizeDelete();
    return;
  }

  activeChipButton.classList.add("delete-out");
  setTimeout(finalizeDelete, 220);
}

function ensureStringArray(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item) => typeof item === "string" && item.trim().length > 0);
}

function setLoadingState(isLoading, mode = "clean") {
  isGenerating = isLoading;
  cleanButton.disabled = isLoading;
  newFileButton.disabled = isLoading;
  saveFileButton.disabled = isLoading;
  renameFileButton.disabled = isLoading;
  deleteFileButton.disabled = isLoading;
  outputOptionInputs.forEach((input) => {
    input.disabled = isLoading;
  });
  const fileButtons = filesList.querySelectorAll(".file-chip");
  fileButtons.forEach((button) => {
    button.disabled = isLoading;
  });
  if (isLoading) {
    setAllCopyButtonsEnabled(false);
  } else {
    refreshCopyButtonsFromContent();
  }
  cleanButton.classList.toggle("is-loading", isLoading && mode === "clean");
  if (summarizeLinkButton) {
    summarizeLinkButton.disabled = isLoading;
    summarizeLinkButton.classList.toggle("is-loading", isLoading && mode === "article");
  }
  cleanButton.textContent = isLoading && mode === "clean" ? "Generating Study Pack..." : "Generate Study Pack";
  if (summarizeLinkButton) {
    summarizeLinkButton.textContent = isLoading && mode === "article" ? "Generating Study Pack..." : "Generate Study Pack";
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

async function renderResultsWithTyping(result) {
  setAllCopyButtonsEnabled(false);
  setCardVisibility(studyTasksCard, result.selectedOutputs?.studyTasks);
  setCardVisibility(studyPlanCard, result.selectedOutputs?.studyPlan);
  setCardVisibility(cleanNotesCard, result.selectedOutputs?.cleanNotes);
  setCardVisibility(flashcardsCard, result.selectedOutputs?.flashcards);
  setCardVisibility(quizQuestionsCard, result.selectedOutputs?.quizQuestions);

  await renderListWithTyping(studyTasksList, result.studyTasks);
  setCopyButtonEnabledByContent(copyStudyTasksButton, studyTasksList);
  await renderListWithTyping(studyOrderList, result.studyOrder);
  setCopyButtonEnabledByContent(copyStudyPlanButton, studyOrderList);
  await renderListWithTyping(cleanNotesList, result.cleanNotes);
  setCopyButtonEnabledByContent(copyCleanNotesButton, cleanNotesList);
  await renderListWithTyping(flashcardsList, result.flashcards);
  setCopyButtonEnabledByContent(copyFlashcardsButton, flashcardsList);
  await renderListWithTyping(quizQuestionsList, result.quizQuestions);
  setCopyButtonEnabledByContent(copyQuizButton, quizQuestionsList);
}

function triggerCheckboxAnimation(checkbox) {
  if (!checkbox) {
    return;
  }

  checkbox.classList.remove("check-pop");
  void checkbox.offsetWidth;
  checkbox.classList.add("check-pop");
}

async function renderListWithTyping(listElement, items) {
  listElement.innerHTML = "";

  if (!Array.isArray(items) || items.length === 0) {
    const fallbackItem = document.createElement("li");
    fallbackItem.textContent = "No items generated yet.";
    listElement.appendChild(fallbackItem);
    return;
  }

  for (const item of items) {
    const li = document.createElement("li");
    listElement.appendChild(li);
    await typeText(li, item, 16);
  }
}

function typeText(element, text, delayMs = 16) {
  return new Promise((resolve) => {
    let index = 0;

    const tick = () => {
      element.textContent = text.slice(0, index);
      index += 1;

      if (index <= text.length) {
        setTimeout(tick, delayMs);
      } else {
        resolve();
      }
    };

    tick();
  });
}

function renderFileResults(file) {
  if (!file) {
    renderList(studyTasksList, []);
    renderList(studyOrderList, []);
    renderList(cleanNotesList, []);
    renderList(flashcardsList, []);
    renderList(quizQuestionsList, []);
    updateOptionalOutputCards();
    refreshCopyButtonsFromContent();
    return;
  }

  renderList(studyTasksList, file.studyTasks);
  renderList(studyOrderList, file.studyOrder);
  renderList(cleanNotesList, file.cleanNotes);
  renderList(flashcardsList, file.flashcards);
  renderList(quizQuestionsList, file.quizQuestions);

  setCardVisibility(cleanNotesCard, file.cleanNotes.length > 0 || Boolean(outputCleanNotes?.checked));
  setCardVisibility(studyTasksCard, file.studyTasks.length > 0 || Boolean(outputStudyTasks?.checked));
  setCardVisibility(studyPlanCard, file.studyOrder.length > 0 || Boolean(outputStudyPlan?.checked));
  setCardVisibility(flashcardsCard, file.flashcards.length > 0 || Boolean(outputFlashcards?.checked));
  setCardVisibility(quizQuestionsCard, file.quizQuestions.length > 0 || Boolean(outputQuizQuestions?.checked));
  refreshCopyButtonsFromContent();
}

function updateOptionalOutputCards() {
  setCardVisibility(studyTasksCard, Boolean(outputStudyTasks?.checked));
  setCardVisibility(studyPlanCard, Boolean(outputStudyPlan?.checked));
  setCardVisibility(cleanNotesCard, Boolean(outputCleanNotes?.checked));
  setCardVisibility(flashcardsCard, Boolean(outputFlashcards?.checked));
  setCardVisibility(quizQuestionsCard, Boolean(outputQuizQuestions?.checked));
}

function setCardVisibility(card, isVisible) {
  if (!card) {
    return;
  }

  const existingTimer = Number(card.dataset.hideTimer || 0);
  if (existingTimer) {
    clearTimeout(existingTimer);
    card.dataset.hideTimer = "";
  }

  const wasHidden = card.classList.contains("hidden");
  if (isVisible) {
    card.classList.remove("hidden", "pop-out");
    if (wasHidden) {
      card.classList.remove("pop-in");
      void card.offsetWidth;
      card.classList.add("pop-in");
    }
    return;
  }

  if (wasHidden) {
    return;
  }

  card.classList.remove("pop-in");
  card.classList.add("pop-out");
  const timerId = setTimeout(() => {
    card.classList.add("hidden");
    card.classList.remove("pop-out");
    card.dataset.hideTimer = "";
  }, 220);
  card.dataset.hideTimer = String(timerId);
}

function generateFlashcards(sourceLines) {
  return ensureStringArray(sourceLines)
    .slice(0, 10)
    .map((line, index) => `Card ${index + 1}: ${line}`);
}

function generateQuizQuestions(sourceLines) {
  return ensureStringArray(sourceLines)
    .slice(0, 8)
    .map((line, index) => `Question ${index + 1}: Explain "${line}" in your own words.`);
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
  if (!themeToggle) {
    return;
  }

  themeToggle.innerHTML = isDark
    ? '<img class="btn-icon" src="icons/theme-light.svg" alt="" aria-hidden="true" /><span class="btn-label">Light Mode</span>'
    : '<img class="btn-icon" src="icons/theme-dark.svg" alt="" aria-hidden="true" /><span class="btn-label">Dark Mode</span>';
}

async function togglePerformanceMode() {
  if (isPerformanceToggleBusy) {
    return;
  }

  isPerformanceToggleBusy = true;
  if (performanceToggle) {
    performanceToggle.disabled = true;
  }
  showPerformanceLoader();
  await delay(320);
  clearTransientAnimationClasses();

  const enabled = document.body.classList.toggle("performance-mode");
  localStorage.setItem(PERFORMANCE_MODE_KEY, enabled ? "on" : "off");
  updatePerformanceButtonLabel(enabled);
  clearTransientAnimationClasses();

  hidePerformanceLoader();
  if (performanceToggle) {
    performanceToggle.disabled = false;
  }
  isPerformanceToggleBusy = false;
}

function loadPerformanceMode() {
  const enabled = localStorage.getItem(PERFORMANCE_MODE_KEY) === "on";
  document.body.classList.toggle("performance-mode", enabled);
  updatePerformanceButtonLabel(enabled);
}

function updatePerformanceButtonLabel(enabled) {
  if (!performanceToggle) {
    return;
  }

  performanceToggle.innerHTML = enabled
    ? '<img class="btn-icon" src="icons/performance-on.svg" alt="" aria-hidden="true" /><span class="btn-label">Performance Mode: On</span>'
    : '<img class="btn-icon" src="icons/performance-off.svg" alt="" aria-hidden="true" /><span class="btn-label">Performance Mode: Off</span>';
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

  [summarizeModeCard, articleInputWrap, inputCard, resultsSection].forEach((element) => {
    if (!element) {
      return;
    }
    element.classList.remove("file-open-in", "mode-pop-in", "mode-pop-out");
  });

  if (summarizeModeCard && isArticle) {
    summarizeModeCard.classList.remove("island-pop");
    void summarizeModeCard.offsetWidth;
    summarizeModeCard.classList.add("island-pop");
  }

  if (articleInputWrap) {
    articleInputWrap.classList.toggle("hidden", !isArticle);
  }
  // Keep the notes island content structurally visible; the parent card handles show/hide by mode.
  if (notesInputWrap) {
    notesInputWrap.classList.remove("hidden");
  }
  if (inputCard) {
    const existingHideTimer = Number(inputCard.dataset.hideTimer || 0);
    if (existingHideTimer) {
      clearTimeout(existingHideTimer);
      inputCard.dataset.hideTimer = "";
    }
    inputCard.classList.remove("mode-pop-in", "mode-pop-out");
    inputCard.classList.toggle("hidden", isArticle);
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
    statusText.textContent = "Article mode selected. Paste a link and generate your study pack.";
  } else {
    statusText.textContent = "Notes mode selected. Paste notes and generate your study pack.";
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

function bindCopyButtons() {
  bindCopyButton(copyStudyTasksButton, "Study Tasks", studyTasksList, false);
  bindCopyButton(copyStudyPlanButton, "Study Plan", studyOrderList, true);
  bindCopyButton(copyCleanNotesButton, "Clean Notes", cleanNotesList, false);
  bindCopyButton(copyFlashcardsButton, "Flashcards", flashcardsList, false);
  bindCopyButton(copyQuizButton, "Quiz Questions", quizQuestionsList, true);
}

function bindCopyButton(button, title, listElement, ordered) {
  if (!button || !listElement) {
    return;
  }

  button.addEventListener("click", async () => {
    const lines = getListLines(listElement, ordered);

    if (lines.length === 0) {
      statusText.textContent = `No ${title.toLowerCase()} to copy yet.`;
      return;
    }

    const text = `${title}\n${lines.join("\n")}`;
    const copied = await copyTextToClipboard(text);
    statusText.textContent = copied
      ? `${title} copied.`
      : "Could not copy automatically. Please try again.";
  });
}

function getListLines(listElement, ordered) {
  const rawItems = Array.from(listElement.querySelectorAll("li"))
    .map((li) => li.textContent.trim())
    .filter((text) => text.length > 0 && text !== "No items generated yet.");

  if (!ordered) {
    return rawItems.map((item) => `- ${item}`);
  }

  return rawItems.map((item, index) => `${index + 1}. ${item}`);
}

function hasCopyableItems(listElement) {
  return getListLines(listElement, false).length > 0;
}

function setCopyButtonEnabled(button, enabled) {
  if (!button) {
    return;
  }

  button.disabled = !enabled;
}

function setCopyButtonEnabledByContent(button, listElement) {
  setCopyButtonEnabled(button, hasCopyableItems(listElement));
}

function setAllCopyButtonsEnabled(enabled) {
  copyTargets.forEach(({ button }) => {
    setCopyButtonEnabled(button, enabled);
  });
}

function refreshCopyButtonsFromContent() {
  copyTargets.forEach(({ button, list }) => {
    setCopyButtonEnabledByContent(button, list);
  });
}

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (_error) {
    const temp = document.createElement("textarea");
    temp.value = text;
    temp.setAttribute("readonly", "");
    temp.style.position = "fixed";
    temp.style.opacity = "0";
    document.body.appendChild(temp);
    temp.select();

    let copied = false;
    try {
      allowNativeCopyOnce = true;
      copied = document.execCommand("copy");
    } catch (_execError) {
      copied = false;
    }

    temp.remove();
    return copied;
  }
}

function slugifyFileName(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function closeModalWithAnimation(modalElement) {
  if (!modalElement || modalElement.classList.contains("hidden")) {
    return;
  }

  modalElement.classList.remove("modal-closing");
  void modalElement.offsetWidth;
  modalElement.classList.add("modal-closing");

  setTimeout(() => {
    modalElement.classList.add("hidden");
    modalElement.classList.remove("modal-closing");
  }, 180);
}

function triggerFileOpenAnimation() {
  const activeChip = filesList.querySelector(".file-chip.active");

  if (activeChip) {
    playTransientAnimation(activeChip, "file-open-in");
  }

  [summarizeModeCard, inputCard].forEach((element) => {
    if (!element || element.classList.contains("hidden")) {
      return;
    }

    playTransientAnimation(element, "file-open-in");
  });
}

function playTransientAnimation(element, className) {
  if (!element || !className) {
    return;
  }

  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  element.addEventListener(
    "animationend",
    () => {
      element.classList.remove(className);
    },
    { once: true }
  );
}

function getClerkPublishableKey() {
  const metaKey =
    document.querySelector('meta[name="clerk-publishable-key"]')?.getAttribute("content") || "";
  const key =
    window.APP_CONFIG?.CLERK_PUBLISHABLE_KEY ||
    window.CLERK_PUBLISHABLE_KEY ||
    metaKey ||
    FALLBACK_CLERK_PUBLISHABLE_KEY ||
    "";
  return typeof key === "string" ? key.trim() : "";
}

function lockAppForAuth() {
  document.body.classList.add("auth-locked");
  if (authGate) {
    authGate.classList.remove("hidden");
  }
  if (clerkUserButton) {
    clerkUserButton.classList.add("hidden");
  }
}

function unlockAppAfterAuth() {
  document.body.classList.remove("auth-locked");
  if (authGate) {
    authGate.classList.add("hidden");
  }
  if (clerkUserButton) {
    clerkUserButton.classList.remove("hidden");
  }
}

function updateAuthTabs(view) {
  if (authSignInTab) {
    authSignInTab.classList.toggle("active", view === "sign-in");
  }
  if (authSignUpTab) {
    authSignUpTab.classList.toggle("active", view === "sign-up");
  }
}

async function switchAuthView(nextView) {
  if (!clerkLoaded || !window.Clerk || !clerkAuthMount) {
    return;
  }

  authView = nextView === "sign-up" ? "sign-up" : "sign-in";
  updateAuthTabs(authView);

  if (authGateTitle) {
    authGateTitle.textContent = authView === "sign-up" ? "Create your account" : "Sign in to continue";
  }
  if (authGateText) {
    authGateText.textContent =
      authView === "sign-up"
        ? "Create an account, then the app and tutorial will unlock."
        : "Login is required before the app and tutorial are available.";
  }

  clerkAuthMount.innerHTML = "";
  const appearance = {
    variables: {
      colorPrimary: "#3557ff",
      colorBackground: "transparent",
      colorText: "#1d2240",
      colorInputBackground: "#ffffff",
      colorInputText: "#1d2240",
      borderRadius: "12px",
      fontFamily: "Outfit, sans-serif"
    }
  };

  if (authView === "sign-up") {
    await window.Clerk.mountSignUp(clerkAuthMount, {
      appearance,
      signInUrl: "#sign-in"
    });
    return;
  }

  await window.Clerk.mountSignIn(clerkAuthMount, {
    appearance,
    signUpUrl: "#sign-up"
  });
}

function handleAuthSignedIn() {
  isUserAuthenticated = true;
  unlockAppAfterAuth();
  if (!didRunTutorialGateCheck) {
    didRunTutorialGateCheck = true;
    showTutorialIfNeeded();
  }
}

async function handleAuthSignedOut() {
  isUserAuthenticated = false;
  lockAppForAuth();
  await switchAuthView(authView);
}

async function initializeAuthGate() {
  const clerkPublishableKey = getClerkPublishableKey();
  lockAppForAuth();

  if (!clerkPublishableKey) {
    if (authGateTitle) {
      authGateTitle.textContent = "Missing Clerk key";
    }
    if (authGateText) {
      authGateText.textContent =
        "Set CLERK_PUBLISHABLE_KEY in config.js to enable login and access the app.";
    }
    if (clerkAuthMount) {
      clerkAuthMount.innerHTML = "";
    }
    return;
  }

  if (!window.Clerk) {
    if (authGateTitle) {
      authGateTitle.textContent = "Login script failed to load";
    }
    if (authGateText) {
      authGateText.textContent = "Reload and try again. If it persists, verify internet access.";
    }
    return;
  }

  try {
    await window.Clerk.load({
      publishableKey: clerkPublishableKey
    });
    clerkLoaded = true;

    if (window.Clerk.user) {
      if (clerkUserButton) {
        await window.Clerk.mountUserButton(clerkUserButton, {
          appearance: {
            variables: {
              colorPrimary: "#3557ff",
              fontFamily: "Outfit, sans-serif"
            }
          }
        });
      }
      handleAuthSignedIn();
    } else {
      await switchAuthView(authView);
    }

    window.Clerk.addListener(({ user }) => {
      if (user) {
        handleAuthSignedIn();
      } else {
        handleAuthSignedOut();
      }
    });
  } catch (error) {
    if (authGateTitle) {
      authGateTitle.textContent = "Could not initialize login";
    }
    if (authGateText) {
      authGateText.textContent = error?.message || "Unexpected auth initialization error.";
    }
  }
}

function showTutorialIfNeeded() {
  if (!tutorialCoach) {
    return;
  }

  if (!isUserAuthenticated) {
    return;
  }

  const hasSeenTutorial = localStorage.getItem(TUTORIAL_SEEN_KEY) === "yes";
  if (hasSeenTutorial) {
    return;
  }

  if (welcomeModal) {
    welcomeModal.classList.remove("hidden");
    return;
  }

  startTutorial();
}

function startTutorialFromWelcome() {
  closeModalWithAnimation(welcomeModal);
  startTutorial();
}

function startTutorial() {
  if (!tutorialCoach) {
    return;
  }

  tutorialStepIndex = 0;
  renderTutorialStep();
  document.body.classList.add("tutorial-lock");
  tutorialCoach.classList.remove("hidden");
}

function renderTutorialStep() {
  const step = getCurrentTutorialStep();
  if (!step || !tutorialText || !tutorialExample || !tutorialBackButton || !tutorialNextButton) {
    return;
  }

  if (step.target === "generate") {
    setSummaryMode("notes");
  }

  clearTutorialHighlights();
  const target = getTutorialTarget(step.target);
  if (target) {
    target.classList.add("tutorial-highlight");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (tutorialStepCounter) {
    tutorialStepCounter.textContent = `Step ${tutorialStepIndex + 1} of ${getTutorialStepCount()}`;
  }
  if (step.title) {
    const titleNode = document.getElementById("tutorialTitle");
    if (titleNode) {
      titleNode.textContent = step.title;
    }
  }
  tutorialText.textContent = step.text;
  if (tutorialExampleWrap) {
    tutorialExampleWrap.classList.toggle("hidden", Boolean(step.hideExample));
  }
  if (tutorialExampleLabel) {
    tutorialExampleLabel.textContent = step.exampleLabel || "Assignment";
  }
  if (tutorialExample) {
    tutorialExample.textContent = step.example || "";
  }
  if (step.fillNotesText && notesInput) {
    notesInput.value = step.fillNotesText;
    saveCurrentFileText();
  }
  tutorialBackButton.disabled = tutorialStepIndex === 0 || tutorialStepIndex === 3;
  tutorialNextButton.disabled =
    step.waitForAction === "generate" ||
    step.waitForAction === "create-file" ||
    (step.waitForAction === "select-output" && !hasAnyOutputSelected());
  tutorialNextButton.textContent =
    tutorialStepIndex === getTutorialStepCount() - 1 ? "Finish" : "Next";
  tutorialPendingAction = step.waitForAction || "";
}

function goToNextTutorialStep() {
  const step = getCurrentTutorialStep();
  if (step?.waitForAction === "select-output" && !hasAnyOutputSelected()) {
    statusText.textContent = "Select at least one output to continue.";
    return;
  }

  if (tutorialStepIndex === 2) {
    tutorialDynamicStep = buildDynamicOutputStep();
  }

  if (tutorialStepIndex >= getTutorialStepCount() - 1) {
    finishTutorial();
    return;
  }

  tutorialStepIndex += 1;
  renderTutorialStep();
}

function goToPreviousTutorialStep() {
  if (tutorialStepIndex <= 0 || tutorialStepIndex === 3) {
    return;
  }

  tutorialStepIndex -= 1;
  renderTutorialStep();
}

function skipTutorial() {
  finishTutorial();
}

function finishTutorial() {
  localStorage.setItem(TUTORIAL_SEEN_KEY, "yes");
  clearTutorialHighlights();
  document.body.classList.remove("tutorial-lock");
  closeModalWithAnimation(tutorialSkipConfirmModal);
  closeModalWithAnimation(welcomeModal);
  if (tutorialCoach) {
    tutorialCoach.classList.add("hidden");
  }
}

function handleTutorialGenerateAction() {
  const step = getCurrentTutorialStep();
  if (!step || step.waitForAction !== "generate") {
    return;
  }

  tutorialPendingAction = "generate";
}

function handleTutorialGenerationCompleted() {
  const step = getCurrentTutorialStep();
  if (!step || step.waitForAction !== "generate" || tutorialPendingAction !== "generate") {
    return;
  }

  tutorialPendingAction = "";
  tutorialNextButton.disabled = false;
  goToNextTutorialStep();
}

function handleTutorialCreateFileCompleted() {
  const step = getCurrentTutorialStep();
  if (!step || step.waitForAction !== "create-file" || tutorialPendingAction !== "create-file") {
    return;
  }

  tutorialPendingAction = "";
  tutorialNextButton.disabled = false;
  statusText.textContent = "Nice. File created. Click Finish in the tutorial to complete.";
}

function getTutorialTarget(targetKey) {
  if (targetKey === "summarize") {
    return summarizeModeCard;
  }
  if (targetKey === "outputs") {
    return outputOptionsWrap;
  }
  if (targetKey === "generate") {
    return cleanButton;
  }
  if (targetKey === "tasks") {
    return studyTasksCard;
  }
  if (targetKey === "plan") {
    return studyPlanCard;
  }
  if (targetKey === "clean") {
    return cleanNotesCard;
  }
  if (targetKey === "flashcards") {
    return flashcardsCard;
  }
  if (targetKey === "quiz") {
    return quizQuestionsCard;
  }
  if (targetKey === "files") {
    return filesCard || filesList;
  }
  if (targetKey === "topActions") {
    return topActions;
  }
  return null;
}

function clearTutorialHighlights() {
  document.querySelectorAll(".tutorial-highlight").forEach((element) => {
    element.classList.remove("tutorial-highlight");
  });
}

function hasAnyOutputSelected() {
  return outputOptionInputs.some((input) => Boolean(input?.checked));
}

function syncTutorialStepActionState() {
  if (!isTutorialActive()) {
    return;
  }

  const step = getCurrentTutorialStep();
  if (!step || step.waitForAction !== "select-output" || !tutorialNextButton) {
    return;
  }

  tutorialNextButton.disabled = !hasAnyOutputSelected();
}

function getCurrentTutorialStep() {
  if (tutorialStepIndex === 3) {
    return tutorialDynamicStep || buildDynamicOutputStep();
  }
  if (tutorialStepIndex >= 4) {
    return tutorialSteps[tutorialStepIndex - 1] || null;
  }
  return tutorialSteps[tutorialStepIndex] || null;
}

function getTutorialStepCount() {
  return tutorialSteps.length + 1;
}

function buildDynamicOutputStep() {
  const firstSelectedOutput = getFirstSelectedOutputKey();

  if (firstSelectedOutput === "studyPlan") {
    return {
      title: "Study Plan Section",
      target: "plan",
      exampleLabel: "Assignment",
      text: "This section orders your study session step-by-step.",
      hideExample: true,
      example: "Follow the order from top to bottom for focused study flow."
    };
  }

  if (firstSelectedOutput === "cleanNotes") {
    return {
      title: "Clean Notes Section",
      target: "clean",
      exampleLabel: "Assignment",
      text: "This section rewrites messy notes into clearer study notes.",
      hideExample: true,
      example: "Use these clean notes as your main review sheet."
    };
  }

  if (firstSelectedOutput === "flashcards") {
    return {
      title: "Flashcards Section",
      target: "flashcards",
      exampleLabel: "Assignment",
      text: "This section creates quick flashcards for active recall.",
      hideExample: true,
      example: "Review cards in short rounds: 5 to 10 minutes each."
    };
  }

  if (firstSelectedOutput === "quizQuestions") {
    return {
      title: "Quiz Questions Section",
      target: "quiz",
      exampleLabel: "Assignment",
      text: "This section gives practice quiz questions from your notes.",
      hideExample: true,
      example: "Answer without looking, then check and correct."
    };
  }

  return {
    title: "Study Tasks Section",
    target: "tasks",
    exampleLabel: "Assignment",
    text: "This section shows actionable tasks to complete first.",
    hideExample: true,
    example: "Use tasks as your checklist and mark them off as you finish."
  };
}

function getFirstSelectedOutputKey() {
  const outputMap = [
    { key: "studyTasks", input: outputStudyTasks },
    { key: "studyPlan", input: outputStudyPlan },
    { key: "cleanNotes", input: outputCleanNotes },
    { key: "flashcards", input: outputFlashcards },
    { key: "quizQuestions", input: outputQuizQuestions }
  ];

  const first = outputMap.find((entry) => entry.input && entry.input.checked);
  return first ? first.key : "studyTasks";
}

function isTutorialActive() {
  return Boolean(tutorialCoach && !tutorialCoach.classList.contains("hidden"));
}

function openTutorialSkipConfirm() {
  if (!tutorialSkipConfirmModal || tutorialSkipConfirmModal.classList.contains("modal-closing")) {
    return;
  }
  tutorialSkipConfirmModal.classList.remove("hidden");
}

function showPerformanceLoader() {
  if (!performanceLoader) {
    return;
  }

  if (performanceLoaderText) {
    performanceLoaderText.textContent = "Applying performance mode...";
  }
  performanceLoader.classList.remove("hidden");
}

function hidePerformanceLoader() {
  if (!performanceLoader) {
    return;
  }

  performanceLoader.classList.add("hidden");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function clearTransientAnimationClasses() {
  document.querySelectorAll(
    ".file-open-in, .file-create-in, .mode-pop-in, .mode-pop-out, .island-pop, .pop-in, .pop-out, .check-pop, .click-burst, .modal-closing"
  ).forEach((element) => {
    element.classList.remove(
      "file-open-in",
      "file-create-in",
      "mode-pop-in",
      "mode-pop-out",
      "island-pop",
      "pop-in",
      "pop-out",
      "check-pop",
      "click-burst",
      "modal-closing"
    );
  });
}

