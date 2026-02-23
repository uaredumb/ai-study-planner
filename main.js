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
const downloadFlashcardsButton = document.getElementById("downloadFlashcardsButton");
const moreFlashcardsButton = document.getElementById("moreFlashcardsButton");
const flashcardsPdfPreviewWrap = document.getElementById("flashcardsPdfPreviewWrap");
const flashcardsPdfPreview = document.getElementById("flashcardsPdfPreview");
const previewFrontsButton = document.getElementById("previewFrontsButton");
const previewBacksButton = document.getElementById("previewBacksButton");
const moreFlashcardsModal = document.getElementById("moreFlashcardsModal");
const moreFlashcardsCloseButton = document.getElementById("moreFlashcardsCloseButton");
const webcamCaptureModal = document.getElementById("webcamCaptureModal");
const webcamVideo = document.getElementById("webcamVideo");
const webcamCanvas = document.getElementById("webcamCanvas");
const webcamCancelButton = document.getElementById("webcamCancelButton");
const webcamCaptureButton = document.getElementById("webcamCaptureButton");
const copyQuizButton = document.getElementById("copyQuizButton");
const studyTasksCard = document.getElementById("studyTasksCard");
const studyPlanCard = document.getElementById("studyPlanCard");
const flashcardsList = document.getElementById("flashcardsList");
const flashcardsVisualGrid = document.getElementById("flashcardsVisualGrid");
const quizQuestionsList = document.getElementById("quizQuestionsList");
const cleanNotesCard = document.getElementById("cleanNotesCard");
const flashcardsCard = document.getElementById("flashcardsCard");
const quizQuestionsCard = document.getElementById("quizQuestionsCard");
const outputStudyTasks = document.getElementById("outputStudyTasks");
const outputStudyPlan = document.getElementById("outputStudyPlan");
const outputCleanNotes = document.getElementById("outputCleanNotes");
const outputFlashcards = document.getElementById("outputFlashcards");
const outputQuizQuestions = document.getElementById("outputQuizQuestions");
const flashcardsCountWrap = document.getElementById("flashcardsCountWrap");
const flashcardsCountSelect = document.getElementById("flashcardsCountSelect");
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
const regenerateConfirmModal = document.getElementById("regenerateConfirmModal");
const regenerateCancelButton = document.getElementById("regenerateCancelButton");
const regenerateConfirmButton = document.getElementById("regenerateConfirmButton");
const tutorialCoach = document.getElementById("tutorialCoach");
const tutorialCloseButton = document.getElementById("tutorialCloseButton");
const tutorialBackButton = document.getElementById("tutorialBackButton");
const tutorialNextButton = document.getElementById("tutorialNextButton");
const tutorialText = document.getElementById("tutorialText");
const tutorialExample = document.getElementById("tutorialExample");
const tutorialExampleLabel = document.getElementById("tutorialExampleLabel");
const tutorialStepCounter = document.getElementById("tutorialStepCounter");
const tutorialExampleWrap = document.querySelector(".tutorial-example-wrap");
const tutorialSkipConfirmModal = document.getElementById("tutorialSkipConfirmModal");
const tutorialSkipCancelButton = document.getElementById("tutorialSkipCancelButton");
const tutorialSkipConfirmButton = document.getElementById("tutorialSkipConfirmButton");
const articleUrlInput = document.getElementById("articleUrlInput");
const summarizeLinkButton = document.getElementById("summarizeLinkButton");
const articleInputWrap = document.getElementById("articleInputWrap");
const photoInputWrap = document.getElementById("photoInputWrap");
const uploadPhotoButton = document.getElementById("uploadPhotoButton");
const takePhotoButton = document.getElementById("takePhotoButton");
const notesPhotoUploadInput = document.getElementById("notesPhotoUploadInput");
const notesPhotoCameraInput = document.getElementById("notesPhotoCameraInput");
const notesPhotoPreview = document.getElementById("notesPhotoPreview");
const photoPreviewWrap = document.getElementById("photoPreviewWrap");
const clearPhotoButton = document.getElementById("clearPhotoButton");
const summarizeModeCard = document.querySelector(".summarize-mode-card");
const topActions = document.querySelector(".top-actions");
const outputOptionsWrap = document.querySelector(".output-options-wrap");
const tutorialLaunchButton = document.getElementById("tutorialLaunchButton");
const accountLoginButton = document.getElementById("accountLoginButton");
const notesModeButton = document.getElementById("notesModeButton");
const articleModeButton = document.getElementById("articleModeButton");
const photoModeButton = document.getElementById("photoModeButton");
const summaryModeInputs = document.querySelectorAll('input[name="summaryMode"]');
const authGate = document.getElementById("authGate");
const authGatePanel = document.querySelector(".auth-gate-panel");
const authGateTitle = document.getElementById("authGateTitle");
const authGateText = document.getElementById("authGateText");
const authWelcomeIsland = document.getElementById("authWelcomeIsland");
const authWelcomeSignIn = document.getElementById("authWelcomeSignIn");
const authWelcomeSignUp = document.getElementById("authWelcomeSignUp");
const authSkipButton = document.getElementById("authSkipButton");
const authFormShell = document.getElementById("authFormShell");
const authSignInTab = document.getElementById("authSignInTab");
const authSignUpTab = document.getElementById("authSignUpTab");
const clerkAuthStack = document.getElementById("clerkAuthStack");
const clerkSignInMount = document.getElementById("clerkSignInMount");
const clerkSignUpMount = document.getElementById("clerkSignUpMount");
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
let isUserAuthenticated = false;
let authView = "sign-in";
let clerkLoaded = false;
let authFormsMounted = false;
let authFlowStarted = false;
const ENABLE_AUTH = false;
let pendingRegenerateResolver = null;
let uploadedNotesPhotoDataUrl = "";
let flashcardsFrontsPreviewUrl = "";
let flashcardsBacksPreviewUrl = "";
let webcamStream = null;

const authClerkAppearance = {
  variables: {
    colorPrimary: "#4c6cff",
    colorBackground: "transparent",
    colorText: "#e7eeff",
    colorTextSecondary: "#afbbe8",
    colorInputBackground: "#f2f4ff",
    colorInputText: "#18213f",
    colorNeutral: "#afbbe8",
    borderRadius: "14px",
    fontFamily: "Outfit, sans-serif"
  },
  layout: {
    socialButtonsVariant: "blockButton"
  },
  elements: {
    rootBox: {
      width: "100%",
      margin: "0 auto"
    },
    main: {
      width: "100%"
    },
    cardBox: {
      width: "100%",
      margin: "0 auto"
    },
    card: {
      boxShadow: "none",
      border: "none",
      background: "transparent",
      padding: "0.25rem"
    },
    headerTitle: {
      color: "#d7e2ff",
      fontSize: "1.02rem"
    },
    headerSubtitle: {
      color: "#96a6df",
      fontSize: "0.86rem"
    },
    socialButtonsBlockButton: {
      background: "rgba(21, 31, 84, 0.95)",
      border: "1px solid rgba(75, 101, 198, 0.5)",
      color: "#e6eeff"
    },
    socialButtonsBlockButtonText: {
      color: "#e6eeff"
    },
    dividerText: {
      color: "#96a6df",
      fontSize: "0.8rem"
    },
    dividerLine: {
      background: "rgba(80, 106, 203, 0.5)"
    },
    formFieldLabel: {
      color: "#b2bfeb"
    },
    formFieldInput: {
      background: "#f2f4ff",
      border: "1px solid #e2e7ff",
      color: "#18213f",
      minHeight: "2.75rem"
    },
    formButtonPrimary: {
      background: "linear-gradient(180deg, #5472ff 0%, #4362f2 100%)",
      border: "none",
      color: "#ffffff",
      minHeight: "2.65rem"
    },
    footerActionText: {
      color: "#8e9fd7"
    },
    footerActionLink: {
      color: "#6f8fff"
    },
    formResendCodeLink: {
      color: "#90a7ff"
    }
  }
};

function getFallbackAuthAppearance() {
  return {
    variables: {
      colorPrimary: "#4c6cff",
      colorBackground: "transparent",
      colorText: "#e7eeff",
      colorInputBackground: "#f2f4ff",
      colorInputText: "#18213f",
      borderRadius: "14px",
      fontFamily: "Outfit, sans-serif"
    }
  };
}

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
    text: "Use New/Save/Rename/Delete to manage files in this section. Create one new file now to finish. You can replay this tutorial any time with the Tutorial button at the top.",
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
if (accountLoginButton) {
  accountLoginButton.addEventListener("click", openAccountLogin);
}
if (tutorialLaunchButton) {
  tutorialLaunchButton.addEventListener("click", openTutorialFromTopBar);
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
if (regenerateCancelButton) {
  regenerateCancelButton.addEventListener("click", () => settleRegenerateConfirmation(false));
}
if (regenerateConfirmButton) {
  regenerateConfirmButton.addEventListener("click", () => settleRegenerateConfirmation(true));
}
if (regenerateConfirmModal) {
  regenerateConfirmModal.addEventListener("click", (event) => {
    if (event.target === regenerateConfirmModal) {
      settleRegenerateConfirmation(false);
    }
  });
}
if (moreFlashcardsCloseButton) {
  moreFlashcardsCloseButton.addEventListener("click", () => closeModalWithAnimation(moreFlashcardsModal));
}
if (moreFlashcardsModal) {
  moreFlashcardsModal.addEventListener("click", (event) => {
    if (event.target === moreFlashcardsModal) {
      closeModalWithAnimation(moreFlashcardsModal);
    }
  });
}
if (webcamCancelButton) {
  webcamCancelButton.addEventListener("click", closeWebcamCaptureModal);
}
if (webcamCaptureButton) {
  webcamCaptureButton.addEventListener("click", captureFromWebcam);
}
if (webcamCaptureModal) {
  webcamCaptureModal.addEventListener("click", (event) => {
    if (event.target === webcamCaptureModal) {
      closeWebcamCaptureModal();
    }
  });
}
if (previewFrontsButton) {
  previewFrontsButton.addEventListener("click", () => {
    if (!flashcardsFrontsPreviewUrl || !flashcardsPdfPreview) {
      return;
    }
    flashcardsPdfPreview.src = flashcardsFrontsPreviewUrl;
    previewFrontsButton.classList.add("active");
    if (previewBacksButton) {
      previewBacksButton.classList.remove("active");
    }
  });
}
if (previewBacksButton) {
  previewBacksButton.addEventListener("click", () => {
    if (!flashcardsBacksPreviewUrl || !flashcardsPdfPreview) {
      return;
    }
    flashcardsPdfPreview.src = flashcardsBacksPreviewUrl;
    previewBacksButton.classList.add("active");
    if (previewFrontsButton) {
      previewFrontsButton.classList.remove("active");
    }
  });
}
if (tutorialCloseButton) {
  tutorialCloseButton.addEventListener("click", skipTutorial);
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
  if (
    event.key === "Escape" &&
    regenerateConfirmModal &&
    !regenerateConfirmModal.classList.contains("hidden")
  ) {
    settleRegenerateConfirmation(false);
    return;
  }
  if (event.key === "Escape" && moreFlashcardsModal && !moreFlashcardsModal.classList.contains("hidden")) {
    closeModalWithAnimation(moreFlashcardsModal);
    return;
  }
  if (event.key === "Escape" && webcamCaptureModal && !webcamCaptureModal.classList.contains("hidden")) {
    closeWebcamCaptureModal();
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
if (photoModeButton) {
  photoModeButton.addEventListener("click", () => setSummaryMode("photo"));
}
if (uploadPhotoButton && notesPhotoUploadInput) {
  uploadPhotoButton.addEventListener("click", () => notesPhotoUploadInput.click());
}
if (takePhotoButton && notesPhotoCameraInput) {
  takePhotoButton.addEventListener("click", handleTakePhotoClick);
}
if (notesPhotoUploadInput) {
  notesPhotoUploadInput.addEventListener("change", handleNotesPhotoSelected);
}
if (notesPhotoCameraInput) {
  notesPhotoCameraInput.addEventListener("change", handleNotesPhotoSelected);
}
if (clearPhotoButton) {
  clearPhotoButton.addEventListener("click", clearSelectedNotesPhoto);
}
if (authSignInTab) {
  authSignInTab.addEventListener("click", () => switchAuthView("sign-in"));
}
if (authSignUpTab) {
  authSignUpTab.addEventListener("click", () => switchAuthView("sign-up"));
}
if (authWelcomeSignIn) {
  authWelcomeSignIn.addEventListener("click", () => startAuthFlow("sign-in"));
}
if (authWelcomeSignUp) {
  authWelcomeSignUp.addEventListener("click", () => startAuthFlow("sign-up"));
}
if (authSkipButton) {
  authSkipButton.addEventListener("click", continueAsGuest);
}
if (authGate) {
  const blockAuthCopy = (event) => {
    event.preventDefault();
  };
  authGate.addEventListener("copy", blockAuthCopy);
  authGate.addEventListener("cut", blockAuthCopy);
  authGate.addEventListener("dragstart", blockAuthCopy);
  authGate.addEventListener("contextmenu", blockAuthCopy);
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
if (flashcardsCountSelect) {
  flashcardsCountSelect.addEventListener("change", () => {
    const count = getRequestedFlashcardsCount();
    statusText.textContent = `Flashcards count set to ${count} (max 5).`;
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
if (ENABLE_AUTH) {
  initializeAuthGate();
} else {
  if (authGate) {
    authGate.classList.add("hidden");
  }
  if (clerkUserButton) {
    clerkUserButton.classList.add("hidden");
  }
  isUserAuthenticated = true;
}

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
  if (!requireAuthenticatedForFeature("generate study packs")) {
    return;
  }

  const currentMode = getCurrentSummaryMode();
  if (currentMode === "photo") {
    await summarizeFromPhoto();
    return;
  }

  const rawNotes = notesInput.value.trim();

  if (!rawNotes) {
    statusText.textContent = "Please paste notes first.";
    return;
  }

  if (!(await maybeConfirmRegenerate())) {
    return;
  }

  triggerSummarizeClickAnimation(cleanButton);
  setLoadingState(true, "clean");
  statusText.textContent = "AI is typing";
  statusText.classList.add("is-streaming");

  try {
    const result = await generateStudyPack(rawNotes, getSelectedOutputs());
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
  if (!requireAuthenticatedForFeature("generate study packs")) {
    return;
  }

  const articleUrl = articleUrlInput.value.trim();

  if (!articleUrl) {
    statusText.textContent = "Paste an article link first.";
    return;
  }

  if (!isValidHttpUrl(articleUrl)) {
    statusText.textContent = "Please enter a valid http/https URL.";
    return;
  }

  if (!(await maybeConfirmRegenerate())) {
    return;
  }

  triggerSummarizeClickAnimation(summarizeLinkButton);
  setLoadingState(true, "article");
  statusText.textContent = "AI is typing";
  statusText.classList.add("is-streaming");

  try {
    const articleText = await fetchArticleTextFromUrl(articleUrl);
    const result = await generateStudyPack(
      `Article URL: ${articleUrl}\n\nArticle content:\n${articleText}`,
      getSelectedOutputs()
    );

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
  const base = await cleanNotesWithOpenRouter(text, (chunk, fullText) => {
    updateStreamingStatus(chunk, fullText);
  });
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

function extractJsonObject(text) {
  if (typeof text !== "string") {
    return null;
  }

  const fenced = text.match(/```json\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1] : text;

  try {
    return JSON.parse(candidate);
  } catch (_error) {
    const start = candidate.indexOf("{");
    const end = candidate.lastIndexOf("}");
    if (start === -1 || end === -1 || end <= start) {
      return null;
    }
    try {
      return JSON.parse(candidate.slice(start, end + 1));
    } catch (_parseError) {
      return null;
    }
  }
}

async function summarizeFromPhoto() {
  if (!uploadedNotesPhotoDataUrl) {
    statusText.textContent = "Add a notes photo first.";
    return;
  }

  if (!(await maybeConfirmRegenerate())) {
    return;
  }

  triggerSummarizeClickAnimation(cleanButton);
  setLoadingState(true, "clean");
  statusText.textContent = "AI is reading text from your photo";
  statusText.classList.add("is-streaming");

  try {
    const extractedText = await extractTextFromPhotoWithVision(uploadedNotesPhotoDataUrl);
    if (!extractedText) {
      throw new Error("Could not extract readable text from that photo.");
    }
    statusText.textContent = "Text extracted. Building your study pack...";
    const result = await generateStudyPack(extractedText, getSelectedOutputs());
    await renderResultsWithTyping(result);
    saveActiveFileResults(result);

    statusText.textContent = "Photo converted into your study pack.";
    handleTutorialGenerationCompleted();
  } catch (error) {
    statusText.textContent = error.message;
  } finally {
    setLoadingState(false);
  }
}

function updateStreamingStatus(_chunk, fullText) {
  const preview = String(fullText || "").replace(/\s+/g, " ").trim();
  statusText.classList.add("is-streaming");
  if (!preview) {
    statusText.textContent = "AI is typing";
    return;
  }
  statusText.textContent = `AI is typing: ${preview.slice(-90)}`;
}

async function cleanNotesWithOpenRouter(rawNotes, onChunk) {
  const workerUrl = "/api/chat";
  const authHeaders = await getApiAuthHeaders();

  const response = await fetch(workerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders
    },
    body: JSON.stringify({
      notes: rawNotes,
      stream: true
    })
  });

  if (!response.ok) {
    let errorPayload = null;
    try {
      errorPayload = await response.json();
    } catch (_error) {
      errorPayload = null;
    }

    if (response.status === 401) {
      if (ENABLE_AUTH) {
        isUserAuthenticated = false;
        continueAsGuest();
        promptAuthForFeature("generate study packs");
        if (authGateText) {
          authGateText.textContent =
            (errorPayload && errorPayload.error) ||
            "Your session is invalid or expired. Please sign in again.";
        }
      }
      throw new Error("Your session expired. Please sign in again.");
    }

    throw new Error((errorPayload && errorPayload.error) || "Failed to clean notes");
  }

  if (!response.body) {
    throw new Error("Streaming response unavailable. Try again.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let fullText = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    const chunk = decoder.decode(value, { stream: true });
    if (!chunk) {
      continue;
    }
    fullText += chunk;
    if (typeof onChunk === "function") {
      onChunk(chunk, fullText);
    }
  }

  statusText.classList.remove("is-streaming");
  const parsed = extractJsonObject(fullText);
  if (!parsed) {
    throw new Error("Model response was not valid JSON. Try again.");
  }

  return {
    cleanNotes: ensureStringArray(parsed.cleanNotes),
    studyTasks: ensureStringArray(parsed.studyTasks),
    studyOrder: ensureStringArray(parsed.studyOrder)
  };
}

async function extractTextFromPhotoWithVision(imageDataUrl) {
  const workerUrl = "/api/chat";
  const authHeaders = await getApiAuthHeaders();

  const response = await fetch(workerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders
    },
    body: JSON.stringify({
      mode: "ocr",
      imageDataUrl,
      stream: false
    })
  });

  if (!response.ok) {
    let errorPayload = null;
    try {
      errorPayload = await response.json();
    } catch (_error) {
      errorPayload = null;
    }

    throw new Error((errorPayload && errorPayload.error) || "Failed to read text from notes photo");
  }

  const payload = await response.json();
  statusText.classList.remove("is-streaming");
  return typeof payload?.text === "string" ? payload.text.trim() : "";
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
  if (ENABLE_AUTH && !isUserAuthenticated) {
    return;
  }

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
  if (!requireAuthenticatedForFeature("create study files")) {
    return;
  }

  openNewFileModal();
}

function exportActiveFile() {
  if (!requireAuthenticatedForFeature("save progress")) {
    return;
  }

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
  if (!requireAuthenticatedForFeature("rename study files")) {
    return;
  }

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
  if (!requireAuthenticatedForFeature("delete study files")) {
    return;
  }

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
  if (notesModeButton) {
    notesModeButton.disabled = isLoading;
  }
  if (articleModeButton) {
    articleModeButton.disabled = isLoading || isTutorialActive();
  }
  if (photoModeButton) {
    photoModeButton.disabled = isLoading;
  }
  if (articleUrlInput) {
    articleUrlInput.disabled = isLoading;
  }
  if (notesPhotoUploadInput) {
    notesPhotoUploadInput.disabled = isLoading;
  }
  if (notesPhotoCameraInput) {
    notesPhotoCameraInput.disabled = isLoading;
  }
  if (uploadPhotoButton) {
    uploadPhotoButton.disabled = isLoading;
  }
  if (takePhotoButton) {
    takePhotoButton.disabled = isLoading;
  }
  if (flashcardsCountSelect) {
    flashcardsCountSelect.disabled = isLoading;
  }
  if (clearPhotoButton) {
    clearPhotoButton.disabled = isLoading;
  }
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
  if (downloadFlashcardsButton) {
    downloadFlashcardsButton.disabled = isLoading;
  }
  cleanButton.textContent = isLoading && mode === "clean" ? "Generating Study Pack..." : "Generate Study Pack";
  if (summarizeLinkButton) {
    summarizeLinkButton.textContent = isLoading && mode === "article" ? "Generating Study Pack..." : "Generate Study Pack";
  }
  statusText.classList.toggle("is-processing", isLoading);
  if (!isLoading) {
    statusText.classList.remove("is-streaming");
  }

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
  renderFlashcardsVisuals(result.flashcards);
  setCopyButtonEnabledByContent(copyFlashcardsButton, flashcardsList);
  await renderListWithTyping(quizQuestionsList, result.quizQuestions);
  setCopyButtonEnabledByContent(copyQuizButton, quizQuestionsList);
}

function activeFileHasGeneratedContent() {
  const activeFile = getActiveFile();
  if (!activeFile) {
    return false;
  }

  return (
    activeFile.cleanNotes.length > 0 ||
    activeFile.studyTasks.length > 0 ||
    activeFile.studyOrder.length > 0 ||
    activeFile.flashcards.length > 0 ||
    activeFile.quizQuestions.length > 0
  );
}

function clearActiveFileGeneratedContent() {
  const activeFile = getActiveFile();
  if (!activeFile) {
    return;
  }

  activeFile.cleanNotes = [];
  activeFile.studyTasks = [];
  activeFile.studyOrder = [];
  activeFile.flashcards = [];
  activeFile.quizQuestions = [];
  persistFiles();
  renderFileResults(activeFile);
}

function askRegenerateConfirmation() {
  if (!regenerateConfirmModal) {
    return Promise.resolve(true);
  }

  regenerateConfirmModal.classList.remove("hidden");
  return new Promise((resolve) => {
    pendingRegenerateResolver = resolve;
  });
}

function settleRegenerateConfirmation(confirmed) {
  if (pendingRegenerateResolver) {
    pendingRegenerateResolver(Boolean(confirmed));
    pendingRegenerateResolver = null;
  }
  closeModalWithAnimation(regenerateConfirmModal);
}

async function maybeConfirmRegenerate() {
  if (!activeFileHasGeneratedContent()) {
    return true;
  }

  const confirmed = await askRegenerateConfirmation();
  if (!confirmed) {
    statusText.textContent = "Generation cancelled. Existing results were kept.";
    return false;
  }

  clearActiveFileGeneratedContent();
  statusText.textContent = "Old generated results cleared. Generating new study pack...";
  return true;
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
    renderFlashcardsVisuals([]);
    renderList(quizQuestionsList, []);
    updateOptionalOutputCards();
    refreshCopyButtonsFromContent();
    return;
  }

  renderList(studyTasksList, file.studyTasks);
  renderList(studyOrderList, file.studyOrder);
  renderList(cleanNotesList, file.cleanNotes);
  renderList(flashcardsList, file.flashcards);
  renderFlashcardsVisuals(file.flashcards);
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
  if (flashcardsCountWrap) {
    flashcardsCountWrap.classList.toggle("hidden", !Boolean(outputFlashcards?.checked));
  }
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
  const requestedCount = getRequestedFlashcardsCount();
  return ensureStringArray(sourceLines)
    .slice(0, requestedCount)
    .map((line, index) => {
      const normalized = String(line || "").replace(/\s+/g, " ").trim();
      const separatorIndex = normalized.indexOf(":");
      const front =
        separatorIndex > 0
          ? normalized.slice(0, separatorIndex).trim()
          : buildFlashcardFrontFromLine(normalized, index + 1);
      const back =
        separatorIndex > 0
          ? normalized.slice(separatorIndex + 1).trim()
          : normalized;
      return `Front: ${front} | Back: ${back || normalized}`;
    })
    .map((cardText, index) => {
      const { front, back } = parseFlashcardText(cardText, index + 1);
      return `${index + 1}. Front: ${front} | Back: ${back}`;
    });
}

function buildFlashcardFrontFromLine(line, index) {
  const normalized = String(line || "").replace(/\s+/g, " ").trim();
  if (!normalized) {
    return `Card ${index}`;
  }
  const words = normalized.split(" ").slice(0, 8).join(" ");
  return `What should you remember about ${words}${words.endsWith("?") ? "" : "?"}`;
}

function getRequestedFlashcardsCount() {
  const raw = Number(flashcardsCountSelect?.value || 5);
  if (!Number.isFinite(raw)) {
    return 5;
  }
  return Math.max(1, Math.min(5, Math.floor(raw)));
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
  if (savedMode === "article" || savedMode === "photo") {
    return savedMode;
  }
  return "notes";
}

function setSummaryMode(mode) {
  const normalizedMode = mode === "article" || mode === "photo" ? mode : "notes";
  if (normalizedMode !== "notes" && isTutorialActive()) {
    statusText.textContent = "This mode is disabled during the tutorial.";
    return;
  }
  localStorage.setItem(SUMMARY_MODE_STORAGE, normalizedMode);
  handleSummaryModeChange(normalizedMode);
}

function handleSummaryModeChange(mode) {
  const previousMode = getCurrentSummaryMode();
  const isArticle = mode === "article";
  const isPhoto = mode === "photo";

  [summarizeModeCard, articleInputWrap, inputCard, resultsSection].forEach((element) => {
    if (!element) {
      return;
    }
    element.classList.remove("file-open-in", "mode-pop-in", "mode-pop-out");
  });

  if (summarizeModeCard && previousMode !== mode) {
    summarizeModeCard.classList.remove("island-pop");
    void summarizeModeCard.offsetWidth;
    summarizeModeCard.classList.add("island-pop");
  }

  if (articleInputWrap) {
    articleInputWrap.classList.toggle("hidden", !isArticle);
  }
  if (photoInputWrap) {
    photoInputWrap.classList.toggle("hidden", !isPhoto);
  }
  if (notesInputWrap) {
    notesInputWrap.classList.toggle("hidden", isArticle || isPhoto);
  }
  if (inputCard) {
    const existingHideTimer = Number(inputCard.dataset.hideTimer || 0);
    if (existingHideTimer) {
      clearTimeout(existingHideTimer);
      inputCard.dataset.hideTimer = "";
    }
    inputCard.classList.remove("mode-pop-in", "mode-pop-out");
    inputCard.classList.remove("hidden");
    if (!isArticle && previousMode !== mode) {
      void inputCard.offsetWidth;
      inputCard.classList.add("mode-pop-in");
    }
  }
  notesInput.disabled = isArticle || isPhoto;
  if (summarizeLinkButton) {
    summarizeLinkButton.classList.toggle("hidden", !isArticle);
  }
  cleanButton.classList.toggle("hidden", isArticle);
  if (notesModeButton) {
    notesModeButton.classList.toggle("active", !isArticle && !isPhoto);
  }
  if (articleModeButton) {
    articleModeButton.classList.toggle("active", isArticle);
  }
  if (photoModeButton) {
    photoModeButton.classList.toggle("active", isPhoto);
  }
  summaryModeInputs.forEach((input) => {
    input.checked = input.value === (isArticle ? "article" : isPhoto ? "photo" : "notes");
  });

  if (isArticle) {
    statusText.textContent = "Article mode selected. Paste a link and generate your study pack.";
  } else if (isPhoto) {
    statusText.textContent = "Notes photo mode selected. Upload or take a photo, then generate your study pack.";
  } else {
    statusText.textContent = "Notes mode selected. Paste notes and generate your study pack.";
  }
}

function getCurrentSummaryMode() {
  if (articleModeButton && articleModeButton.classList.contains("active")) {
    return "article";
  }
  if (photoModeButton && photoModeButton.classList.contains("active")) {
    return "photo";
  }
  return "notes";
}

function handleNotesPhotoSelected(event) {
  const input = event.target;
  const file = input && input.files ? input.files[0] : null;
  if (!file) {
    clearSelectedNotesPhoto();
    return;
  }
  if (!file.type.startsWith("image/")) {
    statusText.textContent = "Please choose an image file.";
    clearSelectedNotesPhoto();
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    statusText.textContent = "Photo is too large. Use an image under 10MB.";
    clearSelectedNotesPhoto();
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    setSelectedNotesPhotoDataUrl(String(reader.result || ""));
  };
  reader.onerror = () => {
    statusText.textContent = "Could not read the selected photo.";
    clearSelectedNotesPhoto();
  };
  reader.readAsDataURL(file);
}

function clearSelectedNotesPhoto() {
  uploadedNotesPhotoDataUrl = "";
  if (notesPhotoUploadInput) {
    notesPhotoUploadInput.value = "";
  }
  if (notesPhotoCameraInput) {
    notesPhotoCameraInput.value = "";
  }
  if (notesPhotoPreview) {
    notesPhotoPreview.removeAttribute("src");
  }
  if (photoPreviewWrap) {
    photoPreviewWrap.classList.add("hidden");
  }
}

function setSelectedNotesPhotoDataUrl(dataUrl) {
  uploadedNotesPhotoDataUrl = String(dataUrl || "");
  if (notesPhotoPreview) {
    if (uploadedNotesPhotoDataUrl) {
      notesPhotoPreview.src = uploadedNotesPhotoDataUrl;
    } else {
      notesPhotoPreview.removeAttribute("src");
    }
  }
  if (photoPreviewWrap) {
    photoPreviewWrap.classList.toggle("hidden", !uploadedNotesPhotoDataUrl);
  }
  if (uploadedNotesPhotoDataUrl) {
    statusText.textContent = "Photo ready. Click Generate Study Pack.";
  }
}

function handleTakePhotoClick() {
  if (isLikelyMobileDevice()) {
    notesPhotoCameraInput.click();
    return;
  }
  openWebcamCaptureModal().catch((error) => {
    statusText.textContent = error?.message || "Could not open webcam.";
  });
}

function isLikelyMobileDevice() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.matchMedia("(pointer: coarse)").matches;
}

async function openWebcamCaptureModal() {
  if (!webcamCaptureModal || !webcamVideo || !navigator.mediaDevices?.getUserMedia) {
    throw new Error("Webcam capture is not supported here. Use Upload Photo instead.");
  }
  webcamCaptureModal.classList.remove("hidden");
  webcamStream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "environment" },
    audio: false
  });
  webcamVideo.srcObject = webcamStream;
  await webcamVideo.play();
}

function closeWebcamCaptureModal() {
  stopWebcamStream();
  closeModalWithAnimation(webcamCaptureModal);
}

function stopWebcamStream() {
  if (webcamStream) {
    webcamStream.getTracks().forEach((track) => track.stop());
    webcamStream = null;
  }
  if (webcamVideo) {
    webcamVideo.srcObject = null;
  }
}

function captureFromWebcam() {
  if (!webcamVideo || !webcamCanvas || !webcamVideo.videoWidth || !webcamVideo.videoHeight) {
    statusText.textContent = "Webcam is not ready yet.";
    return;
  }
  webcamCanvas.width = webcamVideo.videoWidth;
  webcamCanvas.height = webcamVideo.videoHeight;
  const ctx = webcamCanvas.getContext("2d");
  if (!ctx) {
    statusText.textContent = "Could not capture from webcam.";
    return;
  }
  ctx.drawImage(webcamVideo, 0, 0, webcamCanvas.width, webcamCanvas.height);
  const dataUrl = webcamCanvas.toDataURL("image/jpeg", 0.92);
  setSelectedNotesPhotoDataUrl(dataUrl);
  closeWebcamCaptureModal();
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
  bindDownloadFlashcardsButton();
  bindMoreFlashcardsButton();
}

function bindDownloadFlashcardsButton() {
  if (!downloadFlashcardsButton || !flashcardsList) {
    return;
  }

  downloadFlashcardsButton.addEventListener("click", () => {
    const activeFile = getActiveFile();
    const rawCards = getRawListItems(flashcardsList).slice(0, 5);

    if (rawCards.length === 0) {
      statusText.textContent = "No flashcards to download yet.";
      return;
    }

    if (!window.jspdf || !window.jspdf.jsPDF) {
      statusText.textContent = "PDF generator unavailable. Refresh and try again.";
      return;
    }

    const { frontsBlob, backsBlob } = buildCuttableFlashcardsPdfs(rawCards);
    showFlashcardsPdfPreview(frontsBlob, backsBlob);
    const safeNameBase = slugifyFileName(activeFile?.name || "study-notes");
    downloadBlob(frontsBlob, `${safeNameBase}-flashcards-fronts.pdf`);
    downloadBlob(backsBlob, `${safeNameBase}-flashcards-backs.pdf`);

    statusText.textContent = "Downloaded 2 cut-ready flashcard PDFs (fronts + backs).";
  });
}

function bindMoreFlashcardsButton() {
  if (!moreFlashcardsButton) {
    return;
  }

  moreFlashcardsButton.addEventListener("click", () => {
    if (moreFlashcardsModal) {
      moreFlashcardsModal.classList.remove("hidden");
      return;
    }
    statusText.textContent = "More flashcards is a paid feature coming soon.";
  });
}

function buildCuttableFlashcardsPdfs(rawCards) {
  const { jsPDF } = window.jspdf;
  const frontsDoc = new jsPDF({
    orientation: "portrait",
    unit: "in",
    format: "letter"
  });
  const backsDoc = new jsPDF({
    orientation: "portrait",
    unit: "in",
    format: "letter"
  });

  const pageWidth = 8.5;
  const pageHeight = 11;
  const cardWidth = 3.5;
  const cardHeight = 2.0;
  const colGap = 0.5;
  const rowGap = 0.35;
  const marginX = (pageWidth - (cardWidth * 2 + colGap)) / 2;
  const marginY = 0.6;
  const perPage = 8; // 2 cols x 4 rows

  rawCards.forEach((cardText, index) => {
    const pageIndex = Math.floor(index / perPage);
    const slot = index % perPage;
    const row = Math.floor(slot / 2);
    const col = slot % 2;
    const x = marginX + col * (cardWidth + colGap);
    const y = marginY + row * (cardHeight + rowGap);
    const { front, back } = parseFlashcardText(cardText, index + 1);

    if (index > 0 && slot === 0) {
      frontsDoc.addPage("letter", "portrait");
      backsDoc.addPage("letter", "portrait");
    }

    drawCutCard(frontsDoc, x, y, cardWidth, cardHeight, `Card ${index + 1} Front`, front);
    drawCutCard(backsDoc, x, y, cardWidth, cardHeight, `Card ${index + 1} Back`, back);

    // Light page labels for print workflow.
    if (slot === 0) {
      frontsDoc.setFont("helvetica", "bold");
      frontsDoc.setFontSize(9);
      frontsDoc.text(`Flashcards Fronts - Page ${pageIndex + 1}`, marginX, 0.35);
      backsDoc.setFont("helvetica", "bold");
      backsDoc.setFontSize(9);
      backsDoc.text(`Flashcards Backs - Page ${pageIndex + 1}`, marginX, 0.35);
    }
  });

  return {
    frontsBlob: frontsDoc.output("blob"),
    backsBlob: backsDoc.output("blob")
  };
}

function drawCutCard(doc, x, y, width, height, title, text) {
  doc.setDrawColor(120, 130, 170);
  doc.setLineWidth(0.015);
  doc.rect(x, y, width, height);

  // Dotted cut guides crossing the card center.
  doc.setLineWidth(0.01);
  doc.setLineDashPattern([0.04, 0.04], 0);
  doc.line(x + width / 2, y + 0.03, x + width / 2, y + height - 0.03);
  doc.line(x + 0.03, y + height / 2, x + width - 0.03, y + height / 2);
  doc.setLineDashPattern([], 0);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text(title, x + 0.12, y + 0.24);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const lines = doc.splitTextToSize(text, width - 0.24);
  doc.text(lines, x + 0.12, y + 0.48);
}

function downloadBlob(blob, fileName) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 0);
}

function showFlashcardsPdfPreview(frontsBlob, backsBlob) {
  if (!flashcardsPdfPreviewWrap || !flashcardsPdfPreview || !frontsBlob || !backsBlob) {
    return;
  }

  if (flashcardsFrontsPreviewUrl) {
    URL.revokeObjectURL(flashcardsFrontsPreviewUrl);
    flashcardsFrontsPreviewUrl = "";
  }
  if (flashcardsBacksPreviewUrl) {
    URL.revokeObjectURL(flashcardsBacksPreviewUrl);
    flashcardsBacksPreviewUrl = "";
  }

  flashcardsFrontsPreviewUrl = URL.createObjectURL(frontsBlob);
  flashcardsBacksPreviewUrl = URL.createObjectURL(backsBlob);
  flashcardsPdfPreview.src = flashcardsFrontsPreviewUrl;
  if (previewFrontsButton) {
    previewFrontsButton.classList.add("active");
  }
  if (previewBacksButton) {
    previewBacksButton.classList.remove("active");
  }

  flashcardsPdfPreviewWrap.classList.remove("hidden");
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
  const rawItems = getRawListItems(listElement);

  if (!ordered) {
    return rawItems.map((item) => `- ${item}`);
  }

  return rawItems.map((item, index) => `${index + 1}. ${item}`);
}

function getRawListItems(listElement) {
  return Array.from(listElement.querySelectorAll("li"))
    .map((li) => li.textContent.trim())
    .filter((text) => text.length > 0 && text !== "No items generated yet.");
}

function parseFlashcardText(text, fallbackIndex) {
  const normalized = String(text || "")
    .replace(/^\s*\d+\.\s*/, "")
    .replace(/\s+/g, " ")
    .trim();
  const match = normalized.match(/front:\s*([\s\S]*?)(?:\s*\|\s*|\s+)back:\s*([\s\S]*)/i);
  if (match) {
    const front = String(match[1] || "").trim();
    const back = String(match[2] || "").trim();
    return {
      front: front || `Card ${fallbackIndex}`,
      back: back || "Review your notes."
    };
  }
  const frontOnlyMatch = normalized.match(/front:\s*([\s\S]*)/i);
  if (frontOnlyMatch) {
    const front = String(frontOnlyMatch[1] || "").trim();
    return {
      front: front || `Card ${fallbackIndex}`,
      back: "Review your notes."
    };
  }
  return {
    front: buildFlashcardFrontFromLine(normalized, fallbackIndex),
    back: normalized || "Review your notes."
  };
}

function renderFlashcardsVisuals(cards) {
  if (!flashcardsVisualGrid) {
    return;
  }

  flashcardsVisualGrid.innerHTML = "";
  const items = ensureStringArray(cards);
  if (items.length === 0) {
    flashcardsVisualGrid.classList.add("hidden");
    if (flashcardsList) {
      flashcardsList.classList.remove("hidden");
    }
    return;
  }

  if (flashcardsList) {
    flashcardsList.classList.add("hidden");
  }

  items.forEach((cardText, index) => {
    const { front, back } = parseFlashcardText(cardText, index + 1);
    const wrapper = document.createElement("div");
    wrapper.className = "flashcard-visual";

    const frontTitle = document.createElement("p");
    frontTitle.className = "flashcard-visual-title";
    frontTitle.textContent = `Card ${index + 1} Front`;
    const frontText = document.createElement("p");
    frontText.className = "flashcard-visual-text";
    frontText.textContent = front;

    const backTitle = document.createElement("p");
    backTitle.className = "flashcard-visual-title";
    backTitle.style.marginTop = "0.6rem";
    backTitle.textContent = `Card ${index + 1} Back`;
    const backText = document.createElement("p");
    backText.className = "flashcard-visual-text";
    backText.textContent = back;

    wrapper.appendChild(frontTitle);
    wrapper.appendChild(frontText);
    wrapper.appendChild(backTitle);
    wrapper.appendChild(backText);
    flashcardsVisualGrid.appendChild(wrapper);
  });

  flashcardsVisualGrid.classList.remove("hidden");
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

function setDownloadFlashcardsEnabledByContent() {
  if (!downloadFlashcardsButton || !flashcardsList) {
    return;
  }
  downloadFlashcardsButton.disabled = !hasCopyableItems(flashcardsList);
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
  setDownloadFlashcardsEnabledByContent();
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
  if (typeof metaKey !== "string") {
    return "";
  }
  const cleaned = metaKey.trim().replace(/^['"]|['"]$/g, "");
  const exact = cleaned.match(/^(pk_(?:test|live)_[A-Za-z0-9_-]+)$/);
  return exact ? exact[1] : "";
}

function lockAppForAuth() {
  if (authGate) {
    authGate.classList.remove("hidden");
  }
  if (clerkUserButton) {
    clerkUserButton.classList.add("hidden");
  }
}

function unlockAppAfterAuth() {
  if (authGate) {
    authGate.classList.add("hidden");
  }
  if (accountLoginButton) {
    accountLoginButton.classList.add("hidden");
  }
  if (clerkUserButton) {
    clerkUserButton.classList.remove("hidden");
  }
}

function continueAsGuest() {
  if (authGate) {
    authGate.classList.add("hidden");
  }
  if (accountLoginButton) {
    accountLoginButton.classList.remove("hidden");
  }
  if (clerkUserButton) {
    clerkUserButton.classList.add("hidden");
  }
  if (authGateTitle) {
    authGateTitle.textContent = "Sign in to continue";
  }
  if (authGateText) {
    authGateText.textContent =
      "Sign in to save progress across devices, generate outputs, and access personalized tools.";
  }
  setAuthFlowStarted(false);
  updateAuthTabs("sign-in");
}

function promptAuthForFeature(featureLabel) {
  if (authGateTitle) {
    authGateTitle.textContent = `Sign in to ${featureLabel}`;
  }
  if (authGateText) {
    authGateText.textContent =
      "You can continue as a guest, but this feature requires an account.";
  }
  setAuthFlowStarted(false);
  updateAuthTabs("sign-in");
  if (authGate) {
    authGate.classList.remove("hidden");
  }
  if (statusText) {
    statusText.textContent = `Sign in required to ${featureLabel}.`;
  }

  if (ENABLE_AUTH && clerkLoaded && !authFormsMounted) {
    ensureAuthFormsMounted().catch((error) => {
      console.error("Could not pre-mount auth forms", error);
    });
  }
}

function requireAuthenticatedForFeature(featureLabel) {
  if (!ENABLE_AUTH) {
    return true;
  }

  if (isUserAuthenticated) {
    const firstName = window.Clerk?.user?.firstName?.trim?.() || "";
    const lastName = window.Clerk?.user?.lastName?.trim?.() || "";
    if (firstName && lastName) {
      return true;
    }

    statusText.textContent = "Please add your first and last name in your account profile to continue.";
    if (window.Clerk && typeof window.Clerk.openUserProfile === "function") {
      window.Clerk.openUserProfile();
    }
    return false;
  }

  promptAuthForFeature(featureLabel);
  return false;
}

async function openAccountLogin() {
  if (isUserAuthenticated && window.Clerk && typeof window.Clerk.openUserProfile === "function") {
    window.Clerk.openUserProfile();
    return;
  }

  promptAuthForFeature("access your account");
  if (!ENABLE_AUTH) {
    if (authGateText) {
      authGateText.textContent = "Login is currently disabled in this build.";
    }
    return;
  }

  if (!clerkLoaded) {
    if (authGateText) {
      authGateText.textContent =
        "Login is still loading. If this persists, disable blockers and refresh once.";
    }
    return;
  }

  await startAuthFlow("sign-in").catch((error) => {
    console.error("Failed to open account login", error);
    if (authGateText) {
      authGateText.textContent = "Could not open login right now. Please refresh and try again.";
    }
  });
}

function updateAuthTabs(view) {
  if (authSignInTab) {
    authSignInTab.classList.toggle("active", view === "sign-in");
  }
  if (authSignUpTab) {
    authSignUpTab.classList.toggle("active", view === "sign-up");
  }
  if (authWelcomeSignIn) {
    authWelcomeSignIn.classList.toggle("active", view === "sign-in");
  }
  if (authWelcomeSignUp) {
    authWelcomeSignUp.classList.toggle("active", view === "sign-up");
  }
}

function setAuthFlowStarted(started) {
  authFlowStarted = Boolean(started);
  if (authWelcomeIsland) {
    authWelcomeIsland.classList.toggle("hidden", authFlowStarted);
  }
  if (authFormShell) {
    authFormShell.classList.toggle("hidden", !authFlowStarted);
  }
}

async function startAuthFlow(view) {
  triggerAuthIslandSwitchAnimation(view === "sign-up" ? "forward" : "backward");
  if (!authFormsMounted) {
    await ensureAuthFormsMounted();
  }
  setAuthFlowStarted(true);
  await switchAuthView(view);
}

function triggerAuthIslandSwitchAnimation(direction) {
  if (!authGatePanel) {
    return;
  }

  authGatePanel.classList.remove("auth-island-animate-forward", "auth-island-animate-backward");
  void authGatePanel.offsetWidth;
  authGatePanel.classList.add(
    direction === "forward" ? "auth-island-animate-forward" : "auth-island-animate-backward"
  );
}

async function switchAuthView(nextView) {
  if (!clerkLoaded || !window.Clerk || !clerkSignInMount || !clerkSignUpMount) {
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
        ? "Create an account to use account-only features and sync your study work. First and last name are required."
        : "Sign in to use account-only features, or continue as a guest.";
  }

  const showSignUp = authView === "sign-up";
  triggerAuthIslandSwitchAnimation(showSignUp ? "forward" : "backward");
  if (clerkAuthStack) {
    clerkAuthStack.dataset.authDirection = showSignUp ? "forward" : "backward";
  }

  const enteringPane = showSignUp ? clerkSignUpMount : clerkSignInMount;
  const leavingPane = showSignUp ? clerkSignInMount : clerkSignUpMount;
  const enterAnimationClass = showSignUp ? "auth-pane-animate-forward" : "auth-pane-animate-backward";

  leavingPane.classList.remove("active");
  leavingPane.classList.add("hidden");
  leavingPane.setAttribute("aria-hidden", "true");

  enteringPane.classList.remove("hidden", "auth-pane-animate-forward", "auth-pane-animate-backward");
  enteringPane.classList.add("active");
  enteringPane.setAttribute("aria-hidden", "false");
  void enteringPane.offsetWidth;
  enteringPane.classList.add(enterAnimationClass);
}

async function mountAuthForms() {
  if (authFormsMounted || !clerkLoaded || !window.Clerk || !clerkSignInMount || !clerkSignUpMount) {
    return;
  }

  try {
    clerkSignInMount.innerHTML = "";
    clerkSignUpMount.innerHTML = "";
    await window.Clerk.mountSignIn(clerkSignInMount, { appearance: authClerkAppearance });
    await window.Clerk.mountSignUp(clerkSignUpMount, { appearance: authClerkAppearance });
    authFormsMounted = true;
  } catch (error) {
    try {
      const fallbackAppearance = getFallbackAuthAppearance();
      clerkSignInMount.innerHTML = "";
      clerkSignUpMount.innerHTML = "";
      await window.Clerk.mountSignIn(clerkSignInMount, { appearance: fallbackAppearance });
      await window.Clerk.mountSignUp(clerkSignUpMount, { appearance: fallbackAppearance });
      authFormsMounted = true;
    } catch (fallbackError) {
      console.error("Auth forms mount failed", { error, fallbackError });
      if (authGateText) {
        authGateText.textContent = "Could not render login form. Please refresh and try again.";
      }
    }
  }
}

async function ensureAuthFormsMounted() {
  await mountAuthForms();

  if (authFormsMounted) {
    return;
  }

  // Some environments load Clerk internals late; retry once shortly after first attempt.
  await new Promise((resolve) => setTimeout(resolve, 260));
  await mountAuthForms();
}

function handleAuthSignedIn() {
  isUserAuthenticated = true;
  unlockAppAfterAuth();
}

async function handleAuthSignedOut() {
  isUserAuthenticated = false;
  if (clerkUserButton) {
    clerkUserButton.classList.add("hidden");
  }
  continueAsGuest();
  setAuthFlowStarted(false);
  if (!authFormsMounted) {
    await ensureAuthFormsMounted();
  }
  await switchAuthView("sign-in");
}

async function initializeAuthGate() {
  const clerkPublishableKey = getClerkPublishableKey();
  continueAsGuest();

  if (!clerkPublishableKey) {
    console.warn("Missing Clerk key. Auth-required actions cannot complete sign-in.");
    return;
  }

  if (!window.Clerk) {
    console.warn("Could not load Clerk script. Auth-required actions may be unavailable.");
    return;
  }

  try {
    await window.Clerk.load();
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
      setAuthFlowStarted(false);
      await ensureAuthFormsMounted().catch((error) => {
        console.error("Auth forms preload failed", error);
      });
    }

    window.Clerk.addListener(({ user }) => {
      if (user) {
        handleAuthSignedIn();
      } else {
        handleAuthSignedOut().catch((error) => {
          console.error("Auth sign-out handler failed", error);
        });
      }
    });
  } catch (error) {
    console.error("Could not initialize auth", error);
  }
}

function openTutorialFromTopBar() {
  closeModalWithAnimation(tutorialSkipConfirmModal);
  tutorialStepIndex = 0;
  tutorialDynamicStep = null;
  tutorialPendingAction = "";
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
  if (articleModeButton) {
    articleModeButton.disabled = true;
  }
  if (photoModeButton) {
    photoModeButton.disabled = true;
  }
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
  if (tutorialCoach) {
    tutorialCoach.classList.add("hidden");
  }
  if (articleModeButton) {
    articleModeButton.disabled = isGenerating;
  }
  if (photoModeButton) {
    photoModeButton.disabled = isGenerating;
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

async function getApiAuthHeaders() {
  if (!ENABLE_AUTH || !window.Clerk || !window.Clerk.session) {
    return {};
  }

  try {
    const token = await window.Clerk.session.getToken({ skipCache: true });
    if (!token) {
      return {};
    }
    return { Authorization: `Bearer ${token}` };
  } catch (_error) {
    try {
      const fallbackToken = await window.Clerk.session.getToken();
      if (!fallbackToken) {
        return {};
      }
      return { Authorization: `Bearer ${fallbackToken}` };
    } catch (_fallbackError) {
      return {};
    }
  }
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

window.addEventListener("beforeunload", () => {
  stopWebcamStream();
  if (flashcardsFrontsPreviewUrl) {
    URL.revokeObjectURL(flashcardsFrontsPreviewUrl);
    flashcardsFrontsPreviewUrl = "";
  }
  if (flashcardsBacksPreviewUrl) {
    URL.revokeObjectURL(flashcardsBacksPreviewUrl);
    flashcardsBacksPreviewUrl = "";
  }
});

