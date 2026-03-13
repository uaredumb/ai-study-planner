const notesInput = document.getElementById("notesInput");
const notesInputWrap = document.getElementById("notesInputWrap");
const inputCard = document.querySelector(".input-card");
const cleanButton = document.getElementById("cleanButton");
const cancelGenerationButton = document.getElementById("cancelGenerationButton");
const statusText = document.getElementById("statusText");
const liveStreamWrap = document.getElementById("liveStreamWrap");
const liveStreamText = document.getElementById("liveStreamText");
const liveStreamFullText = document.getElementById("liveStreamFullText");
const toggleLiveStreamButton = document.getElementById("toggleLiveStreamButton");
const resultsSection = document.getElementById("resultsSection");
const cleanNotesList = document.getElementById("cleanNotesList");
const studyTasksList = document.getElementById("studyTasksList");
const studyOrderList = document.getElementById("studyOrderList");
const copyStudyTasksButton = document.getElementById("copyStudyTasksButton");
const copyStudyPlanButton = document.getElementById("copyStudyPlanButton");
const copyCleanNotesButton = document.getElementById("copyCleanNotesButton");
const copyFlashcardsButton = document.getElementById("copyFlashcardsButton");
const downloadFlashcardsButton = document.getElementById("downloadFlashcardsButton");
const printFlashcardsButton = document.getElementById("printFlashcardsButton");
const downloadStudyTasksButton = document.getElementById("downloadStudyTasksButton");
const downloadStudyPlanButton = document.getElementById("downloadStudyPlanButton");
const downloadCleanNotesButton = document.getElementById("downloadCleanNotesButton");
const moreFlashcardsButton = document.getElementById("moreFlashcardsButton");
const beginFlashcardsButton = document.getElementById("beginFlashcardsButton");
const flashcardsExportHint = document.getElementById("flashcardsExportHint");
const flashcardsPdfPreviewWrap = document.getElementById("flashcardsPdfPreviewWrap");
const flashcardsPdfPreview = document.getElementById("flashcardsPdfPreview");
const previewFrontsButton = document.getElementById("previewFrontsButton");
const previewBacksButton = document.getElementById("previewBacksButton");
const moreFlashcardsModal = document.getElementById("moreFlashcardsModal");
const moreFlashcardsCloseButton = document.getElementById("moreFlashcardsCloseButton");
const proModeModal = document.getElementById("proModeModal");
const proModeMessage = document.getElementById("proModeMessage");
const proModeBenefits = document.getElementById("proModeBenefits");
const proModeIntroActions = document.getElementById("proModeIntroActions");
const proModeHaveCodeButton = document.getElementById("proModeHaveCodeButton");
const proModeCloseIntroButton = document.getElementById("proModeCloseIntroButton");
const proModeCloseXButton = document.getElementById("proModeCloseXButton");
const proModeForm = document.getElementById("proModeForm");
const proCodeInput = document.getElementById("proCodeInput");
const proCodeError = document.getElementById("proCodeError");
const proModeBackButton = document.getElementById("proModeBackButton");
const webcamCaptureModal = document.getElementById("webcamCaptureModal");
const webcamVideo = document.getElementById("webcamVideo");
const webcamCanvas = document.getElementById("webcamCanvas");
const webcamCancelButton = document.getElementById("webcamCancelButton");
const webcamCaptureButton = document.getElementById("webcamCaptureButton");
const copyQuizButton = document.getElementById("copyQuizButton");
const downloadQuizButton = document.getElementById("downloadQuizButton");
const studyTasksCard = document.getElementById("studyTasksCard");
const studyPlanCard = document.getElementById("studyPlanCard");
const flashcardsList = document.getElementById("flashcardsList");
const flashcardsVisualGrid = document.getElementById("flashcardsVisualGrid");
const quizQuestionsList = document.getElementById("quizQuestionsList");
const beginQuizButton = document.getElementById("beginQuizButton");
const quizStudyPanel = document.getElementById("quizStudyPanel");
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
const flashcardsLimitHint = document.getElementById("flashcardsLimitHint");
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
  { button: copyQuizButton, list: quizQuestionsList }
];
const downloadTargets = [
  { button: downloadStudyTasksButton, list: studyTasksList },
  { button: downloadStudyPlanButton, list: studyOrderList },
  { button: downloadCleanNotesButton, list: cleanNotesList },
  { button: downloadQuizButton, list: quizQuestionsList }
];
const themeToggle = document.getElementById("themeToggle");
const proModeButton = document.getElementById("proModeButton");
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
const moreNotesCharsButton = document.getElementById("moreNotesCharsButton");
const summarizeModeCard = document.querySelector(".summarize-mode-card");
const topActions = document.querySelector(".top-actions");
const outputOptionsWrap = document.querySelector(".output-options-wrap");
const articleGenerateRow = document.querySelector(".article-generate-row");
const notesLimitHint = document.getElementById("notesLimitHint");
const tutorialLaunchButton = document.getElementById("tutorialLaunchButton");
const accountLoginButton = document.getElementById("accountLoginButton");
const notesModeButton = document.getElementById("notesModeButton");
const articleModeButton = document.getElementById("articleModeButton");
const photoModeButton = document.getElementById("photoModeButton");
const summaryModeInputs = document.querySelectorAll('input[name="summaryMode"]');
const authGate = document.getElementById("authGate");
const authGatePanel = document.querySelector(".auth-gate-panel");
const authGateCloseButton = document.getElementById("authGateCloseButton");
const authGateTitle = document.getElementById("authGateTitle");
const authGateText = document.getElementById("authGateText");
const authWelcomeIsland = document.getElementById("authWelcomeIsland");
const authWelcomeSignIn = document.getElementById("authWelcomeSignIn");
const authWelcomeSignUp = document.getElementById("authWelcomeSignUp");
const authSkipButton = document.getElementById("authSkipButton");
const authFormShell = document.getElementById("authFormShell");
const authLoadingState = document.getElementById("authLoadingState");
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
const FREE_NOTES_CHAR_LIMIT = 3000;
const PRO_NOTES_CHAR_LIMIT = 8000;
const GOD_MODE_NOTES_CHAR_LIMIT = 50000;
const PRO_MODE_STORAGE = "pro_mode_unlocked_v1";
const GOD_MODE_STORAGE = "god_mode_unlocked_v1";
const USED_PRO_CODE_HASHES_STORAGE = "used_pro_code_hashes_v1";
const FREE_FILE_LIMIT = 2;
const PRO_FILE_LIMIT = 5;
const GOD_MODE_FILE_LIMIT = 100;
const FREE_FLASHCARDS_LIMIT = 5;
const PRO_FLASHCARDS_LIMIT = 10;
const GOD_MODE_FLASHCARDS_LIMIT = 50;
const DEFAULT_PRICING_PAGE_PATH = "pricing.html";
const DEFAULT_PRO_PLAN_SLUG = "pro";
const DEFAULT_PRO_PLAN_PRICE = "$1.50 / month";
const PRO_CODE_HASHES = [
  "ea978dc49d8765817c29a92ea3e8512299ebd8c2606053505740a10311bfcdae",
  "b0d40f314074c7e22b0feda853c5cae72ef87916d353939a1c0ec6005f6007f1",
  "fd833754f31e65d3512ee3c871f40309c22c7e6c48beb03623491b81abb74df6",
  "b271b453005e2ccd95e29abfa0c236ed907ea49d53788f9f993425d2ae1a9f55",
  "cdf68a59a4191dcabd4f1c1de75a2635d90018ecec0bb82aab37e8afd19b5ba6",
  "55ef3a07198bea753d0f78fcdd231e51822708d1c60ed160513f4a8366e8df3d",
  "8acf9dfb2c36cd048e4240f0f3820d5c2f1359291376787e7fe9de8e164d0944",
  "61d8ade8642a4799972136efdaffaa8f65d6620ded7fc3e1fa6d76baa9acf29b",
  "1904c62185d5aaa14ecd4151732e9e4d1292da16375be7a3ef0a9562a40aabe3",
  "cfb9febb2e8203d431b7c11b3518166223377abf5e0cfdd640c324e483beb13b",
  "c93103bd95a5c6f11a58fafbb47e1a4c187a4903044bce22db5ca5fa551f3dcb",
  "e914e834999c91d9fdb8c50341074d226ebfa2aaf1e97d75db7a5c46fb0f39cc",
  "9ecdf25d0252c93077886c44dff7a41f1f8b4a065e5f83edf0f65a97da14dc2c",
  "2cf43d0cb6301253b1760186355430549a8ffa992acdf4238f4c10f468ac14a0",
  "de64ae7c62fe25bb0b95767e4bab4805244909eec38ce1cf23ed64a21036f120",
  "b1023958e822625cfa19f3cc3f000a44cc15e574e415a502e51330cdb0a4cafd",
  "ce2a7b19b67dfc2f22ea57f8e933e0dd8bb551e671647e4aa47a1b65af62df9f",
  "168a331b752ab122adaa734f5462a73fb199ba4bacd74c2294e87d41a75948d4",
  "c0ab67b8a8fa9511e3056c61e7a596a357f97be8b88384f20040f2483bb72929",
  "1c55bdd9b3a2d38f17c23d9ba19ae94db66ba2c388a3079ed311d038045f9023",
  "473c487a4139834542f2d71f57e3ea376e5760fcf3addd854fcf631b8ab6bece",
  "9ed73988aaf6fd978cfb2182803f4168e8209ac44753cf971a9702a14b4792c3",
  "79df72ec8f22ed871d11dd687df45ec733bd454c4b62bfcd454c51ec9de447c0",
  "f76b83cea9f9a9fd6244722d35a61f222b54f6e3af74301c4f22904419cf2a02",
  "ceab09beda29b3e7cf28de00b0c0ce456661f35b35a5a8e04d21c95550ca1ab6",
  "ac10e4ac583a3458c623b25e374636b1f41f2e90313940dcf264e89c7b033e4c",
  "975dd98d7fa5aeeba33209ab09162a04cb7253a909245a5c163124d9311cfdb1",
  "1b2f0f3bb4bcc59c6e3bca6330987c6b162af44941aa75c29d8a460841c3dd52",
  "491d52f03896238e96b10fdae8e8788f89e74028c69b2651012ae14f05b93073"
];
const GOD_MODE_HASHES = [
  "6759ef91165e45070b43130b3bf70ba732ee1b43aa7d39c700509dc72acc59ec"
];
const NON_NOTES_MESSAGE =
  "I can only generate from real study notes or learning material. Please add notes, class content, or an educational article.";
const NOT_ENOUGH_TEXT_MESSAGE =
  "There is not enough readable study text to generate a study pack yet. Add more notes or a longer source.";

let isUserAuthenticated = false;
let isGuestMode = false;
let authView = "sign-in";
let clerkLoaded = false;
let authFormsMounted = false;
let authFlowStarted = false;
let authFlowLoading = false;
let ENABLE_AUTH = Boolean(getClerkPublishableKey());
let studyFiles = loadStudyFiles();
let activeFileId = loadActiveFileId(studyFiles);
let isProMode = loadProModeState();
let isGodMode = false;
let isGenerating = false;
let createdFileIdForAnimation = "";
let tutorialStepIndex = 0;
let allowNativeCopyOnce = false;
let isPerformanceToggleBusy = false;
let tutorialPendingAction = "";
let tutorialDynamicStep = null;
let tutorialScrollAdjustTimer = 0;
let pendingRegenerateResolver = null;
let uploadedNotesPhotoDataUrl = "";
let flashcardsFrontsPreviewUrl = "";
let flashcardsBacksPreviewUrl = "";
let studyQueueUi = null;
let isStudyCardFlipped = false;
let isStudyCardAnimating = false;
let flashcardStudyStateByFileId = new Map();
let quizSessionStateByFileId = new Map();
let studyQueueKeyboardBound = false;
let webcamStream = null;
let statusToastStack = null;
let statusRouterSuppress = false;
let fileOpenAnimationFrameA = 0;
let fileOpenAnimationFrameB = 0;
let slowGenerationToastTimer = 0;
let guestGenerationCount = 0;
let pdfJsModulePromise = null;
let latestLiveStreamFullText = "";
let isLiveStreamExpanded = false;
let generationAbortController = null;
let quizPanelAnimationTimer = 0;
let flashcardActionAnimationTimer = 0;

enforceFileLimitForCurrentMode();

function applyIosAnimationProfile() {
  const ua = navigator.userAgent || "";
  const platform = navigator.platform || "";
  const isTouchMac = platform === "MacIntel" && navigator.maxTouchPoints > 1;
  const isIosDevice = /iPhone|iPad|iPod/i.test(ua) || isTouchMac;
  if (isIosDevice) {
    document.body.classList.add("ios-optimized");
  }
}

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
      colorTextSecondary: "#afbbe8",
      colorInputBackground: "#f2f4ff",
      colorInputText: "#18213f",
      borderRadius: "14px",
      fontFamily: "Outfit, sans-serif"
    },
    layout: {
      socialButtonsVariant: "blockButton"
    },
    elements: {
      socialButtonsBlockButton: {
        background: "rgba(21, 31, 84, 0.95)",
        border: "1px solid rgba(75, 101, 198, 0.5)",
        color: "#e6eeff"
      },
      socialButtonsBlockButtonText: {
        color: "#e6eeff"
      }
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
      "You can switch between Summarize Notes, Summrize Notes Photo, and Summarize Article anytime."
  },
  {
    title: "Outputs + Buttons",
    target: "outputs",
    text: "Pick outputs you want in your study pack: study plan, clean notes, flashcards, and quiz questions.",
    waitForAction: "select-output",
    exampleLabel: "Try",
    example:
      "Try these outputs: Study Plan + Flashcards + Quiz Questions."
  },
  {
    title: "Try Generate",
    target: "generate",
    text: "Click Generate Study Pack once. Continue after generation fully completes.",
    waitForAction: "generate",
    hideExample: true,
    fillNotesText:
      "Biology Notes: Ecosystems, Energy Flow, and Biodiversity\n\nAn ecosystem is a community of living organisms interacting with each other and with the nonliving parts of their environment. The living parts are called biotic factors and include plants, animals, fungi, and microorganisms. The nonliving parts are abiotic factors and include sunlight, temperature, water, soil, air, and minerals. Ecosystems can be small, like a tide pool, or very large, like a rainforest.\n\nEnergy enters most ecosystems from the sun. Producers, also called autotrophs, capture sunlight through photosynthesis and convert it into chemical energy stored in glucose. Plants, algae, and some bacteria are producers. Consumers, also called heterotrophs, cannot make their own food, so they get energy by eating other organisms. Primary consumers eat producers. Secondary consumers eat primary consumers. Tertiary consumers eat other consumers. Decomposers, such as fungi and bacteria, break down dead organisms and waste, returning nutrients to the soil and water.\n\nA food chain shows one possible path of energy flow through an ecosystem, but most ecosystems are more complex than a single chain. A food web shows many feeding relationships at once. Because energy is lost as heat during life processes, only a small amount passes from one trophic level to the next. This is why ecosystems usually have more producers than top predators.\n\nThe water cycle, carbon cycle, and nitrogen cycle are important because matter is recycled even though energy is not. In the water cycle, water evaporates, condenses into clouds, and falls as precipitation. In the carbon cycle, carbon moves through the atmosphere, living things, soil, and oceans. In the nitrogen cycle, bacteria help convert nitrogen into forms plants can use.\n\nBiodiversity means the variety of life in an area. High biodiversity usually makes ecosystems more stable because there are more species performing different roles. If one species disappears, others may help keep the system functioning. Human activities can reduce biodiversity. Deforestation destroys habitats, pollution harms organisms, climate change shifts temperature and weather patterns, and invasive species can outcompete native species.\n\nEcologists study how populations change over time. Limiting factors such as food, water, shelter, disease, and predation affect population size. Carrying capacity is the largest population an environment can support over time without being damaged. When a population grows too quickly, it may use resources faster than they can be replaced.\n\nConservation efforts try to protect ecosystems and biodiversity. National parks, habitat restoration, pollution control, sustainable farming, and endangered species laws can all help. Protecting ecosystems matters because humans depend on them for clean air, fresh water, food, medicine, and climate regulation."
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

applyIosAnimationProfile();
loadTheme();
applyProModeUi();
initStudyQueueUiIfNeeded();
loadPerformanceMode();
renderFiles();
loadActiveFileIntoEditor();
initStatusNotificationRouter();
window.setTimeout(() => {
  document.body.classList.add("app-booted");
}, 700);

cleanButton.addEventListener("click", handleCleanNotes);
if (cancelGenerationButton) {
  cancelGenerationButton.addEventListener("click", () => {
    cancelCurrentGeneration("Generation cancelled. Existing results were kept.");
  });
}
if (toggleLiveStreamButton) {
  toggleLiveStreamButton.addEventListener("click", toggleLiveStreamExpanded);
}
themeToggle.addEventListener("click", toggleTheme);
if (proModeButton) {
  proModeButton.addEventListener("click", () => openPricingPage("top-bar"));
}
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
if (proModeForm) {
  proModeForm.addEventListener("submit", submitProCode);
}
if (proCodeInput) {
  proCodeInput.addEventListener("input", clearProCodeError);
}
if (proModeHaveCodeButton) {
  proModeHaveCodeButton.addEventListener("click", showProCodeForm);
}
if (proModeCloseIntroButton) {
  proModeCloseIntroButton.addEventListener("click", closeProModeModal);
}
if (proModeCloseXButton) {
  proModeCloseXButton.addEventListener("click", closeProModeModal);
}
if (proModeBackButton) {
  proModeBackButton.addEventListener("click", showProIntroScreen);
}
if (proModeModal) {
  proModeModal.addEventListener("click", (event) => {
    if (event.target === proModeModal) {
      closeProModeModal();
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
  tutorialCloseButton.addEventListener("click", openTutorialSkipConfirm);
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
  if (event.key === "Escape" && authGate && !authGate.classList.contains("hidden")) {
    dismissAuthGate();
    return;
  }
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
  if (event.key === "Escape" && proModeModal && !proModeModal.classList.contains("hidden")) {
    closeProModeModal();
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
window.addEventListener("resize", () => {
  if (!isTutorialActive()) {
    return;
  }
  updateTutorialCoachMetrics();
});
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
notesInput.addEventListener("input", () => {
  const limit = getNotesCharLimit();
  if (notesInput.value.length > limit) {
    notesInput.value = notesInput.value.slice(0, limit);
  }
  updateNotesLimitHint();
  saveCurrentFileText();
});
if (notesModeButton) {
  notesModeButton.addEventListener("click", () => setSummaryMode("notes"));
}
if (articleModeButton) {
  articleModeButton.addEventListener("click", () => setSummaryMode("article"));
}
if (photoModeButton) {
  photoModeButton.addEventListener("click", () => setSummaryMode("photo"));
}
if (moreNotesCharsButton) {
  moreNotesCharsButton.addEventListener("click", () => {
    if (!isProMode) {
      openProModeModal("notes");
      statusText.textContent = "Unlock Pro Mode to use up to 8000 characters.";
      return;
    }
    statusText.textContent = "Pro Mode unlocked: up to 8000 characters available.";
  });
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
  authSkipButton.addEventListener("click", () => continueAsGuest(true));
}
if (authGateCloseButton) {
  authGateCloseButton.addEventListener("click", dismissAuthGate);
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
    saveCurrentFileOutputSelection();
    updateOptionalOutputCards();
    syncTutorialStepActionState();
  });
}
if (outputStudyTasks) {
  outputStudyTasks.addEventListener("change", () => {
    triggerCheckboxAnimation(outputStudyTasks);
    saveCurrentFileOutputSelection();
    updateOptionalOutputCards();
    syncTutorialStepActionState();
  });
}
if (outputStudyPlan) {
  outputStudyPlan.addEventListener("change", () => {
    triggerCheckboxAnimation(outputStudyPlan);
    saveCurrentFileOutputSelection();
    updateOptionalOutputCards();
    syncTutorialStepActionState();
  });
}
if (outputFlashcards) {
  outputFlashcards.addEventListener("change", () => {
    triggerCheckboxAnimation(outputFlashcards);
    saveCurrentFileOutputSelection();
    updateOptionalOutputCards();
    syncTutorialStepActionState();
  });
}
if (flashcardsCountSelect) {
  flashcardsCountSelect.addEventListener("change", () => {
    const count = getRequestedFlashcardsCount();
    statusText.textContent = `Flashcards count set to ${count}.`;
  });
}
if (outputQuizQuestions) {
  outputQuizQuestions.addEventListener("change", () => {
    triggerCheckboxAnimation(outputQuizQuestions);
    saveCurrentFileOutputSelection();
    updateOptionalOutputCards();
    syncTutorialStepActionState();
  });
}
setSummaryMode(loadSummaryMode());
updateOptionalOutputCards();
bindCopyButtons();
bootstrapAuthGate();
applyAccountGatesUi();

if (appLogo) {
  const logoCandidates = [
    appLogo.getAttribute("src"),
    "LumiStudy logo with glowing orb (1).png",
    "UpdatedLogo.png",
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
  if (!hasSelectedOutputs()) {
    statusText.textContent = "Choose at least one output first.";
    updateGenerateActionState();
    return;
  }
  if (!canGenerateStudyPack()) {
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

  const limit = getNotesCharLimit();
  if (rawNotes.length > limit) {
    statusText.textContent = `Please keep notes under ${limit} characters.`;
    return;
  }

  const notesIssue = getStudyMaterialIssue(rawNotes);
  if (notesIssue) {
    statusText.textContent = notesIssue;
    return;
  }

  if (!(await maybeConfirmRegenerate())) {
    return;
  }

  triggerSummarizeClickAnimation(cleanButton);
  const signal = beginGenerationSession();
  setLoadingState(true, "clean");
  scheduleSlowGenerationToast();
  statusText.textContent = "AI is streaming";
  statusText.classList.add("is-streaming");

  try {
    const result = await generateStudyPack(rawNotes, getSelectedOutputs(), signal);
    saveActiveFileResults(result);
    await renderResultsWithTyping(result);

    statusText.textContent = "Done. Your study pack is ready.";
    recordGenerationSuccess();
    handleTutorialGenerationCompleted();
  } catch (error) {
    if (error?.name !== "AbortError") {
      statusText.textContent = error.message;
    }
  } finally {
    clearGenerationSession();
    cancelSlowGenerationToast();
    setLoadingState(false);
  }
}

async function summarizeArticleFromLink() {
  if (!hasSelectedOutputs()) {
    statusText.textContent = "Choose at least one output first.";
    updateGenerateActionState();
    return;
  }
  if (!requireAccount("use Summarize Article")) {
    return;
  }
  if (!canGenerateStudyPack()) {
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
  const signal = beginGenerationSession();
  setLoadingState(true, "article");
  scheduleSlowGenerationToast();
  statusText.textContent = "AI is streaming";
  statusText.classList.add("is-streaming");

  try {
    const articleText = await fetchArticleTextFromUrl(articleUrl, signal);
    const articleIssue = getStudyMaterialIssue(articleText);
    if (articleIssue) {
      throw new Error(articleIssue);
    }
    const result = await generateStudyPack(
      `Article URL: ${articleUrl}\n\nArticle content:\n${articleText}`,
      getSelectedOutputs(),
      signal
    );

    saveActiveFileResults(result);
    await renderResultsWithTyping(result);

    statusText.textContent = "Article converted into your study pack.";
    recordGenerationSuccess();
    handleTutorialGenerationCompleted();
  } catch (error) {
    if (error?.name !== "AbortError") {
      statusText.textContent = error.message;
    }
  } finally {
    clearGenerationSession();
    cancelSlowGenerationToast();
    setLoadingState(false);
  }
}

function getSelectedOutputs() {
  return {
    studyTasks: false,
    studyPlan: Boolean(outputStudyPlan?.checked),
    cleanNotes: Boolean(outputCleanNotes?.checked),
    flashcards: Boolean(outputFlashcards?.checked),
    quizQuestions: Boolean(outputQuizQuestions?.checked)
  };
}

function hasSelectedOutputs(selectedOutputs = getSelectedOutputs()) {
  const normalized = normalizeSelectedOutputs(selectedOutputs);
  return Boolean(
    normalized.studyPlan ||
      normalized.cleanNotes ||
      normalized.flashcards ||
      normalized.quizQuestions
  );
}

function normalizeSelectedOutputs(selectedOutputs) {
  return {
    studyTasks: false,
    studyPlan: Boolean(selectedOutputs?.studyPlan),
    cleanNotes: Boolean(selectedOutputs?.cleanNotes),
    flashcards: Boolean(selectedOutputs?.flashcards),
    quizQuestions: Boolean(selectedOutputs?.quizQuestions)
  };
}

function applySelectedOutputs(selectedOutputs) {
  const normalized = normalizeSelectedOutputs(selectedOutputs);
  if (outputStudyTasks) {
    outputStudyTasks.checked = false;
  }
  if (outputStudyPlan) {
    outputStudyPlan.checked = normalized.studyPlan;
  }
  if (outputCleanNotes) {
    outputCleanNotes.checked = normalized.cleanNotes;
  }
  if (outputFlashcards) {
    outputFlashcards.checked = normalized.flashcards;
  }
  if (outputQuizQuestions) {
    outputQuizQuestions.checked = normalized.quizQuestions;
  }
  updateGenerateActionState();
}

async function generateStudyPack(text, selectedOutputs, signal) {
  const base = await cleanNotesWithOpenRouter(text, (chunk, fullText) => {
    updateStreamingStatus(chunk, fullText);
  }, signal);
  ensureUsableStudyPackBase(base);
  const studyPlan = buildEnhancedStudyPlan(base.studyOrder, base.studyTasks, base.cleanNotes);
  const sourceLines =
    base.cleanNotes.length > 0
      ? base.cleanNotes
      : studyPlan.length > 0
        ? studyPlan
        : base.studyTasks;

  return {
    cleanNotes: selectedOutputs.cleanNotes ? base.cleanNotes : [],
    studyTasks: [],
    studyOrder: selectedOutputs.studyPlan ? studyPlan : [],
    flashcards: selectedOutputs.flashcards ? generateFlashcards(sourceLines) : [],
    quizQuestions: selectedOutputs.quizQuestions ? generateQuizQuestions(sourceLines) : [],
    selectedOutputs
  };
}

function buildEnhancedStudyPlan(studyOrder, studyTasks, cleanNotes) {
  const merged = [];
  const seen = new Set();

  const pushLine = (value, transform) => {
    const raw = decodeHtmlEntities(String(value || "")).replace(/\s+/g, " ").trim();
    if (!raw) {
      return;
    }
    const nextLine = typeof transform === "function" ? transform(raw) : raw;
    const normalized = decodeHtmlEntities(String(nextLine || "")).replace(/\s+/g, " ").trim();
    if (!normalized) {
      return;
    }
    const key = normalized.toLowerCase();
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    merged.push(normalized);
  };

  ensureStringArray(studyOrder).forEach((line) => pushLine(line));
  ensureStringArray(studyTasks).forEach((line, index) => {
    pushLine(line, (raw) => {
      if (/:/.test(raw)) {
        return raw;
      }
      return `Step ${Math.min(index + 1, 9)}: ${raw}`;
    });
  });

  if (merged.length < 3) {
    ensureStringArray(cleanNotes)
      .slice(0, 4)
      .forEach((line, index) => {
        pushLine(line, (raw) => `Review ${index + 1}: ${raw}`);
      });
  }

  return merged.slice(0, 8);
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
  if (!requireAccount("use Summarize Notes Photo")) {
    return;
  }
  if (!hasSelectedOutputs()) {
    statusText.textContent = "Choose at least one output first.";
    updateGenerateActionState();
    return;
  }
  if (!canGenerateStudyPack()) {
    return;
  }
  if (!uploadedNotesPhotoDataUrl) {
    statusText.textContent = "Add a notes photo first.";
    return;
  }

  if (!(await maybeConfirmRegenerate())) {
    return;
  }

  triggerSummarizeClickAnimation(cleanButton);
  const signal = beginGenerationSession();
  setLoadingState(true, "clean");
  scheduleSlowGenerationToast();
  statusText.textContent = "AI is reading text from your photo";
  statusText.classList.add("is-streaming");

  try {
    const extractedText = await extractTextFromPhotoWithVision(uploadedNotesPhotoDataUrl, signal);
    if (!extractedText) {
      throw new Error("Could not extract readable text from that photo.");
    }
    const extractedIssue = getStudyMaterialIssue(extractedText);
    if (extractedIssue) {
      throw new Error(extractedIssue);
    }
    statusText.textContent = "Text extracted. Building your study pack...";
    const result = await generateStudyPack(extractedText, getSelectedOutputs(), signal);
    saveActiveFileResults(result);
    await renderResultsWithTyping(result);

    statusText.textContent = "Photo converted into your study pack.";
    recordGenerationSuccess();
    handleTutorialGenerationCompleted();
  } catch (error) {
    if (error?.name !== "AbortError") {
      statusText.textContent = error.message;
    }
  } finally {
    clearGenerationSession();
    cancelSlowGenerationToast();
    setLoadingState(false);
  }
}

function scheduleSlowGenerationToast() {
  cancelSlowGenerationToast();
  slowGenerationToastTimer = window.setTimeout(() => {
    slowGenerationToastTimer = 0;
    showCornerToast("Still generating your study pack. This can take a little longer for large notes.");
  }, 9000);
}

function cancelSlowGenerationToast() {
  if (!slowGenerationToastTimer) {
    return;
  }
  clearTimeout(slowGenerationToastTimer);
  slowGenerationToastTimer = 0;
}

function updateStreamingStatus(_chunk, fullText) {
  const preview = String(fullText || "").replace(/\s+/g, " ").trim();
  statusText.classList.add("is-streaming");
  updateLiveStreamPreview(fullText);
  if (!preview) {
    statusText.textContent = "AI is streaming";
    return;
  }
  statusText.textContent = `AI is streaming: ${preview.slice(-90)}`;
}

function refreshLiveStreamUi() {
  if (!liveStreamWrap || !liveStreamText || !liveStreamFullText || !toggleLiveStreamButton) {
    return;
  }

  const raw = latestLiveStreamFullText;
  const latestLine = raw
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .pop();
  const preview = latestLine || raw.replace(/\s+/g, " ").trim();
  const hasFullContent = raw.length > 120 || /\r?\n/.test(raw);

  liveStreamWrap.classList.remove("hidden");
  liveStreamText.textContent = preview || "Waiting for model response...";
  toggleLiveStreamButton.classList.toggle("hidden", !hasFullContent);
  toggleLiveStreamButton.textContent = isLiveStreamExpanded ? "Hide Full Stream" : "Show Full Stream";
  liveStreamFullText.textContent = raw || "Waiting for model response...";
  liveStreamFullText.classList.toggle("hidden", !isLiveStreamExpanded);
}

function toggleLiveStreamExpanded() {
  isLiveStreamExpanded = !isLiveStreamExpanded;
  refreshLiveStreamUi();
}

function showLiveStreamPreview(initialText = "") {
  if (!liveStreamWrap || !liveStreamText) {
    return;
  }
  latestLiveStreamFullText = String(initialText || "");
  isLiveStreamExpanded = false;
  refreshLiveStreamUi();
}

function hideLiveStreamPreview() {
  if (!liveStreamWrap || !liveStreamText || !liveStreamFullText || !toggleLiveStreamButton) {
    return;
  }
  latestLiveStreamFullText = "";
  isLiveStreamExpanded = false;
  liveStreamWrap.classList.add("hidden");
  liveStreamText.textContent = "";
  liveStreamFullText.textContent = "";
  liveStreamFullText.classList.add("hidden");
  toggleLiveStreamButton.classList.add("hidden");
  toggleLiveStreamButton.textContent = "Show Full Stream";
}

function updateLiveStreamPreview(fullText) {
  if (!liveStreamWrap || !liveStreamText) {
    return;
  }
  latestLiveStreamFullText = String(fullText || "");
  refreshLiveStreamUi();
}

function initStatusNotificationRouter() {
  if (!statusText) {
    return;
  }
  statusText.textContent = "";
  const observer = new MutationObserver(() => {
    routeStatusToToastIfNeeded();
  });
  observer.observe(statusText, { childList: true, characterData: true, subtree: true });
}

function routeStatusToToastIfNeeded() {
  if (!statusText || statusRouterSuppress) {
    return;
  }
  const message = String(statusText.textContent || "").trim();
  if (!message) {
    return;
  }
  if (statusText.classList.contains("is-streaming") || message.startsWith("AI is typing") || message.startsWith("AI is streaming")) {
    return;
  }
  if (message === "Ready") {
    statusRouterSuppress = true;
    statusText.textContent = "";
    statusRouterSuppress = false;
    return;
  }
  showCornerToast(message);
  statusRouterSuppress = true;
  statusText.textContent = "";
  statusRouterSuppress = false;
}

function getStatusToastStack() {
  if (statusToastStack) {
    return statusToastStack;
  }
  const stack = document.createElement("div");
  stack.className = "status-toast-stack";
  stack.setAttribute("aria-live", "polite");
  document.body.appendChild(stack);
  statusToastStack = stack;
  return statusToastStack;
}

function showCornerToast(message) {
  const stack = getStatusToastStack();
  const existing = Array.from(stack.children).find(
    (child) => child instanceof HTMLElement && child.dataset.toastMessage === message
  );
  if (existing instanceof HTMLElement) {
    existing.classList.remove("is-hiding");
    scheduleToastRemoval(existing, stack);
    return;
  }

  const toast = document.createElement("div");
  toast.className = "status-toast";
  toast.textContent = message;
  toast.dataset.toastMessage = message;
  stack.appendChild(toast);

  while (stack.children.length > 4) {
    stack.removeChild(stack.firstElementChild);
  }

  scheduleToastRemoval(toast, stack);
}

function scheduleToastRemoval(toast, stack) {
  const existingTimer = Number(toast.dataset.toastTimer || 0);
  if (existingTimer) {
    clearTimeout(existingTimer);
    toast.dataset.toastTimer = "";
  }
  const timerId = window.setTimeout(() => {
    toast.classList.add("is-hiding");
    window.setTimeout(() => {
      if (toast.parentNode === stack) {
        stack.removeChild(toast);
      }
    }, 220);
  }, 2600);
  toast.dataset.toastTimer = String(timerId);
}

function isLikelyStudyMaterial(text) {
  return !getStudyMaterialIssue(text);
}

function getStudyMaterialIssue(text) {
  const normalized = String(text || "").trim().toLowerCase();
  if (normalized.length < 28) {
    return NOT_ENOUGH_TEXT_MESSAGE;
  }

  const studyKeywords = [
    "chapter", "lesson", "quiz", "exam", "test", "review", "study", "homework",
    "assignment", "class", "lecture", "teacher", "professor", "unit", "topic",
    "formula", "definition", "theorem", "vocab", "flashcard", "notes", "summary",
    "biology", "chemistry", "physics", "math", "history", "english", "science",
    "geography", "economics", "algebra", "calculus"
  ];
  const keywordHits = studyKeywords.reduce((count, keyword) => {
    return count + (normalized.includes(keyword) ? 1 : 0);
  }, 0);

  const hasStructure = /(^|\n)\s*(?:[-*•]|\d+[.)])\s+\S+/.test(normalized) || normalized.includes(":");
  const hasAcademicPattern = /\b(ch\s*\d+|chapter\s+\d+|week\s+\d+|unit\s+\d+|lesson\s+\d+)\b/.test(normalized);
  const sentenceLikeCount = normalized.split(/[.!?]\s+/).filter((s) => s.trim().length > 18).length;
  const wordCount = normalized.split(/\s+/).filter(Boolean).length;

  let score = 0;
  if (keywordHits >= 1) score += 2;
  if (keywordHits >= 3) score += 1;
  if (hasStructure) score += 1;
  if (hasAcademicPattern) score += 1;
  if (wordCount >= 35) score += 1;
  if (sentenceLikeCount >= 2) score += 1;

  if (wordCount < 10 || sentenceLikeCount === 0 && !hasStructure) {
    return NOT_ENOUGH_TEXT_MESSAGE;
  }

  if (score < 2) {
    return NON_NOTES_MESSAGE;
  }

  return "";
}

function ensureUsableStudyPackBase(base) {
  const cleanNotesCount = ensureStringArray(base?.cleanNotes).length;
  const studyOrderCount = ensureStringArray(base?.studyOrder).length;
  const studyTasksCount = ensureStringArray(base?.studyTasks).length;
  const totalCount = cleanNotesCount + studyOrderCount + studyTasksCount;

  if (cleanNotesCount >= 2 || totalCount >= 3) {
    return;
  }

  throw new Error(
    "I could not turn that into a solid study pack. Try adding clearer notes, more readable text, or a longer source."
  );
}

async function cleanNotesWithOpenRouter(rawNotes, onChunk, signal) {
  const workerUrl = "/api/chat";
  const authHeaders = await getApiAuthHeaders();

  const response = await fetch(workerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders
    },
    signal,
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
    throw new Error("The AI response did not stream correctly. Please try again.");
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
    throw new Error("The AI returned an invalid response, so Lumi could not build your study pack. Please try again.");
  }

  return {
    cleanNotes: ensureStringArray(parsed.cleanNotes),
    studyTasks: ensureStringArray(parsed.studyTasks),
    studyOrder: ensureStringArray(parsed.studyOrder)
  };
}

async function extractTextFromPhotoWithVision(imageDataUrl, signal) {
  const workerUrl = "/api/chat";
  const authHeaders = await getApiAuthHeaders();

  const response = await fetch(workerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders
    },
    signal,
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

function loadStudyFilesFromStorage() {
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
        quizQuestions: ensureStringArray(file.quizQuestions),
        studyQueue: ensureStudyQueue(file.studyQueue),
        studyQueueIndex: Number.isFinite(file.studyQueueIndex) ? file.studyQueueIndex : 0,
        knownStudyItemIds: ensureStringArray(file.knownStudyItemIds),
        selectedOutputs: normalizeSelectedOutputs(file.selectedOutputs)
      }));

    if (sanitized.length === 0) {
      return [createStudyFile("My First Notes")];
    }

    return sanitized;
  } catch (_error) {
    return [createStudyFile("My First Notes")];
  }
}

function loadStudyFiles() {
  if (!canPersistStudyData()) {
    return [createStudyFile("My First Notes")];
  }
  return loadStudyFilesFromStorage();
}

function loadActiveFileId(files, useStorage = canPersistStudyData()) {
  if (!useStorage) {
    return files[0].id;
  }
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
    quizQuestions: [],
    studyQueue: [],
    studyQueueIndex: 0,
    knownStudyItemIds: [],
    selectedOutputs: normalizeSelectedOutputs(null)
  };
}

function enforceFileLimitForCurrentMode() {
  const maxFiles = getMaxFilesAllowed();
  if (!Array.isArray(studyFiles) || studyFiles.length <= maxFiles) {
    return;
  }

  // Keep the most recently created files and drop older overflow.
  studyFiles = studyFiles.slice(-maxFiles);
  if (!studyFiles.some((file) => file.id === activeFileId)) {
    activeFileId = studyFiles[studyFiles.length - 1]?.id || "";
  }
  persistFiles();
}

function persistFiles() {
  if (!canPersistStudyData()) {
    return;
  }

  localStorage.setItem(STUDY_FILES_STORAGE, JSON.stringify(studyFiles));
  localStorage.setItem(ACTIVE_FILE_ID_STORAGE, activeFileId);
}

function clearPersistedStudyData() {
  localStorage.removeItem(STUDY_FILES_STORAGE);
  localStorage.removeItem(ACTIVE_FILE_ID_STORAGE);
  localStorage.removeItem(PRO_MODE_STORAGE);
  localStorage.removeItem(GOD_MODE_STORAGE);
  localStorage.removeItem(USED_PRO_CODE_HASHES_STORAGE);
  localStorage.removeItem(THEME_KEY);
  localStorage.removeItem(PERFORMANCE_MODE_KEY);
  localStorage.removeItem(SUMMARY_MODE_STORAGE);
  localStorage.removeItem(TUTORIAL_SEEN_KEY);
}

function resetGuestStudySession() {
  studyFiles = [createStudyFile("My First Notes")];
  activeFileId = studyFiles[0].id;
  guestGenerationCount = 0;
  renderFiles();
  loadActiveFileIntoEditor();
  updateOptionalOutputCards();
  refreshCopyButtonsFromContent();
}

function applyAccountGatesUi() {
  const accountEnabled = hasAccount();
  const lockedTitle = accountEnabled ? "" : "Sign in required";
  [newFileButton, saveFileButton, renameFileButton, deleteFileButton].forEach((button) => {
    if (!button) {
      return;
    }
    button.disabled = false;
    button.title = lockedTitle;
  });
  updateProModeButtonVisibility();
}

function renderFiles() {
  if (isGenerating && !statusText.classList.contains("is-processing")) {
    isGenerating = false;
  }
  filesList.innerHTML = "";

  studyFiles.forEach((file) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = `file-chip${file.id === activeFileId ? " active" : ""}`;
    button.textContent = file.name;
    button.disabled = isGenerating;
    button.addEventListener("click", () => {
      if (isGenerating && !statusText.classList.contains("is-processing")) {
        isGenerating = false;
        renderFiles();
      }
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
    updateNotesLimitHint();
    applySelectedOutputs(null);
    updateOptionalOutputCards();
    renderFileResults(null);
    return;
  }

  activeFile.selectedOutputs = normalizeSelectedOutputs(activeFile.selectedOutputs);
  notesInput.value = activeFile.content || "";
  const limit = getNotesCharLimit();
  if (notesInput.value.length > limit) {
    notesInput.value = notesInput.value.slice(0, limit);
    activeFile.content = notesInput.value;
    persistFiles();
  }
  updateNotesLimitHint();
  applySelectedOutputs(activeFile.selectedOutputs);
  updateOptionalOutputCards();
  renderFileResults(activeFile);
}

function updateNotesLimitHint() {
  if (!notesLimitHint || !notesInput) {
    return;
  }
  notesLimitHint.textContent = `${notesInput.value.length} / ${getNotesCharLimit()} characters`;
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
  activeFile.selectedOutputs = normalizeSelectedOutputs(result.selectedOutputs || getSelectedOutputs());
  flashcardStudyStateByFileId.delete(activeFile.id);
  quizSessionStateByFileId.delete(activeFile.id);
  appendStudyItemsToQueue(activeFile, result);
  persistFiles();
}

function saveCurrentFileOutputSelection() {
  const activeFile = getActiveFile();
  if (!activeFile) {
    return;
  }
  activeFile.selectedOutputs = normalizeSelectedOutputs(getSelectedOutputs());
  persistFiles();
}

function getPricingPagePath() {
  const configured = window.APP_CONFIG?.PRICING_PAGE_PATH;
  if (typeof configured === "string" && configured.trim()) {
    return configured.trim();
  }
  return DEFAULT_PRICING_PAGE_PATH;
}

function getProPlanSlug() {
  const configured = window.APP_CONFIG?.PRO_PLAN_SLUG;
  if (typeof configured === "string" && configured.trim()) {
    return configured.trim();
  }
  return DEFAULT_PRO_PLAN_SLUG;
}

function getProPlanPriceLabel() {
  const configured = window.APP_CONFIG?.PRO_PLAN_PRICE;
  if (typeof configured === "string" && configured.trim()) {
    return configured.trim();
  }
  return DEFAULT_PRO_PLAN_PRICE;
}

function openPricingPage(source = "general") {
  if (!maybeCancelGenerationBeforeNavigation("open the Pro page")) {
    return;
  }
  const target = new URL(getPricingPagePath(), window.location.href);
  target.searchParams.set("source", source);
  target.searchParams.set("returnTo", "index.html");
  window.location.href = target.toString();
}

function loadProModeState() {
  if (!hasAccount()) {
    return false;
  }
  return localStorage.getItem(PRO_MODE_STORAGE) === "on";
}

function loadUsedProCodeHashes() {
  if (hasAccount()) {
    return getAccountUsedProCodeHashes();
  }
  return [];
}

function markProCodeHashAsUsed(codeHash) {
  if (!codeHash) {
    return;
  }
  if (canPersistStudyData()) {
    const used = loadUsedProCodeHashes();
    if (!used.includes(codeHash)) {
      used.push(codeHash);
      localStorage.setItem(USED_PRO_CODE_HASHES_STORAGE, JSON.stringify(used));
    }
  }
  persistProCodeUsage(codeHash).catch(() => {});
}

function getAccountUnsafeMetadata() {
  const metadata = window.Clerk?.user?.unsafeMetadata;
  return metadata && typeof metadata === "object" ? metadata : {};
}

function getAccountUsedProCodeHashes() {
  const metadata = getAccountUnsafeMetadata();
  const hashes = metadata.usedProCodeHashes;
  if (!Array.isArray(hashes)) {
    return [];
  }
  return hashes.filter((item) => typeof item === "string");
}

function hasGodModeAccess() {
  const metadata = getAccountUnsafeMetadata();
  return Boolean(
    metadata.godMode ||
      metadata.isAdmin ||
      (hasAccount() && localStorage.getItem(GOD_MODE_STORAGE) === "on")
  );
}

async function persistProCodeUsage(codeHash) {
  if (!hasAccount() || !window.Clerk?.user || typeof window.Clerk.user.update !== "function") {
    return;
  }
  const metadata = getAccountUnsafeMetadata();
  const existing = new Set(getAccountUsedProCodeHashes());
  existing.add(codeHash);
  const unsafeMetadata = {
    ...metadata,
    usedProCodeHashes: Array.from(existing),
    proUnlocked: true,
    proUnlockedAt: new Date().toISOString()
  };
  await window.Clerk.user.update({ unsafeMetadata });
}

async function persistGodModeUsage(codeHash) {
  if (!hasAccount() || !window.Clerk?.user || typeof window.Clerk.user.update !== "function") {
    return;
  }
  const metadata = getAccountUnsafeMetadata();
  const existing = new Set(getAccountUsedProCodeHashes());
  existing.add(codeHash);
  const unsafeMetadata = {
    ...metadata,
    usedProCodeHashes: Array.from(existing),
    proUnlocked: true,
    proUnlockedAt: new Date().toISOString(),
    godMode: true,
    godModeUnlockedAt: new Date().toISOString()
  };
  await window.Clerk.user.update({ unsafeMetadata });
}

function hasActiveClerkProPlan() {
  const session = window.Clerk?.session;
  const planSlug = getProPlanSlug();
  if (!session || typeof session.checkAuthorization !== "function" || !planSlug) {
    return false;
  }

  try {
    return Boolean(session.checkAuthorization({ plan: planSlug }));
  } catch (_error) {
    return false;
  }
}

function syncProModeFromAccount() {
  if (!hasAccount()) {
    isProMode = false;
    isGodMode = false;
    updateProModeButtonVisibility();
    return;
  }
  const metadata = getAccountUnsafeMetadata();
  isGodMode = hasGodModeAccess();
  if (isGodMode || metadata.proUnlocked || hasActiveClerkProPlan()) {
    isProMode = true;
  } else if (localStorage.getItem(PRO_MODE_STORAGE) === "on") {
    isProMode = true;
    persistProCodeUsage("migrated-from-local").catch(() => {});
  } else {
    isProMode = false;
  }
  if (isGodMode && canPersistStudyData()) {
    localStorage.setItem(GOD_MODE_STORAGE, "on");
  }
  if (isProMode && canPersistStudyData()) {
    localStorage.setItem(PRO_MODE_STORAGE, "on");
  }
  applyProModeUi();
}

function getMaxFilesAllowed() {
  if (!hasAccount()) {
    return 1;
  }
  if (isGodMode) {
    return GOD_MODE_FILE_LIMIT;
  }
  return isProMode ? PRO_FILE_LIMIT : FREE_FILE_LIMIT;
}

function getMaxFlashcardsAllowed() {
  if (isGodMode) {
    return GOD_MODE_FLASHCARDS_LIMIT;
  }
  return isProMode ? PRO_FLASHCARDS_LIMIT : FREE_FLASHCARDS_LIMIT;
}

function getNotesCharLimit() {
  if (isGodMode) {
    return GOD_MODE_NOTES_CHAR_LIMIT;
  }
  return isProMode ? PRO_NOTES_CHAR_LIMIT : FREE_NOTES_CHAR_LIMIT;
}

function updateProModeButtonLabel() {
  if (!proModeButton) {
    return;
  }
  proModeButton.innerHTML = isProMode
    ? `<span class="btn-glyph pro-badge-icon" aria-hidden="true">&#9670;</span><span class="btn-label">${isGodMode ? "God Mode" : "Pro Active"}</span><span class="beta-pill">Beta</span>`
    : '<span class="btn-glyph pro-badge-icon" aria-hidden="true">&#9670;</span><span class="btn-label">Upgrade</span><span class="beta-pill">Beta</span>';
  proModeButton.classList.toggle("hidden", !hasAccount());
}

function updateFlashcardsLimitUi() {
  if (!flashcardsCountSelect) {
    return;
  }
  const max = getMaxFlashcardsAllowed();
  const previousValue = Number(flashcardsCountSelect.value || 1);
  flashcardsCountSelect.innerHTML = "";
  for (let i = 1; i <= max; i += 1) {
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = String(i);
    flashcardsCountSelect.appendChild(option);
  }
  flashcardsCountSelect.value = String(Math.max(1, Math.min(max, previousValue)));
  if (flashcardsLimitHint) {
    flashcardsLimitHint.textContent = isGodMode
      ? "Maximum: 50 cards (God Mode)"
      : isProMode
        ? "Maximum: 10 cards (Pro)"
        : "Maximum: 5 cards (free)";
  }
  if (moreFlashcardsButton) {
    moreFlashcardsButton.classList.toggle("hidden", isProMode);
  }
}

function applyProModeButtonState() {
  updateProModeButtonLabel();
}

function updateProModeButtonVisibility() {
  applyProModeButtonState();
}

function applyProModeUi() {
  updateProModeButtonLabel();
  updateFlashcardsLimitUi();
  if (moreNotesCharsButton) {
    moreNotesCharsButton.classList.toggle("hidden", isProMode);
  }
  const limit = getNotesCharLimit();
  if (notesInput && notesInput.value.length > limit) {
    notesInput.value = notesInput.value.slice(0, limit);
    saveCurrentFileText();
  }
  updateNotesLimitHint();
}

function openProModeModal(source = "general") {
  if (!hasAccount()) {
    promptAuthForFeature(`unlock ${getProPlanPriceLabel()} Pro`, { mustLogin: true });
    return;
  }
  if (isProMode) {
    statusText.textContent = isGodMode ? "God Mode is already active on your account." : "Pro is already active on your account.";
    return;
  }
  if (!proModeModal) {
    return;
  }
  proModeModal.dataset.source = source;
  if (proModeMessage) {
    proModeMessage.textContent =
      source === "flashcards"
        ? `Pro increases your flashcard limit, and a God Mode code unlocks the highest limits instantly.`
        : source === "notes"
          ? `Pro gives you much more note space, and a God Mode code unlocks the highest limits instantly.`
          : `Unlock Pro with a plan or code, or use a God Mode code for the highest limits.`;
  }
  showProIntroScreen();
  proModeModal.classList.remove("hidden");
  clearProCodeError();
}

function closeProModeModal() {
  closeModalWithAnimation(proModeModal);
}

function showProIntroScreen() {
  if (proModeForm) {
    proModeForm.classList.add("hidden");
  }
  if (proModeBenefits) {
    proModeBenefits.classList.remove("hidden");
  }
  if (proModeIntroActions) {
    proModeIntroActions.classList.remove("hidden");
  }
  if (proCodeInput) {
    proCodeInput.value = "";
    proCodeInput.classList.remove("input-error");
  }
  clearProCodeError();
}

function showProCodeForm() {
  if (!requireAccount("unlock Pro Mode")) {
    return;
  }
  if (proModeForm) {
    proModeForm.classList.remove("hidden");
  }
  if (proModeBenefits) {
    proModeBenefits.classList.add("hidden");
  }
  if (proModeIntroActions) {
    proModeIntroActions.classList.add("hidden");
  }
  if (proCodeInput) {
    proCodeInput.value = "";
    proCodeInput.classList.remove("input-error");
    setTimeout(() => proCodeInput.focus(), 0);
  }
  clearProCodeError();
}

function showProCodeError(message) {
  if (proCodeError) {
    proCodeError.textContent = message;
    proCodeError.classList.remove("hidden");
  }
  if (proCodeInput) {
    proCodeInput.classList.add("input-error");
  }
}

function clearProCodeError() {
  if (proCodeError) {
    proCodeError.textContent = "";
    proCodeError.classList.add("hidden");
  }
  if (proCodeInput) {
    proCodeInput.classList.remove("input-error");
  }
}

async function hashTextSha256(text) {
  if (!window.crypto || !window.crypto.subtle) {
    throw new Error("Secure crypto not available in this browser context.");
  }
  const encoded = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function submitProCode(event) {
  event.preventDefault();
  if (!requireAccount("redeem a Pro code")) {
    return;
  }
  clearProCodeError();
  const inputCode = proCodeInput?.value?.trim() || "";
  if (!inputCode) {
    showProCodeError("Enter a Pro code first.");
    return;
  }
  let codeHash = "";
  try {
    codeHash = await hashTextSha256(inputCode);
  } catch (_error) {
    showProCodeError("Pro unlock is unavailable in this context. Use the hosted app.");
    return;
  }
  const isGodModeCode = GOD_MODE_HASHES.includes(codeHash);
  const isProCode = PRO_CODE_HASHES.includes(codeHash);
  if (!isGodModeCode && !isProCode) {
    showProCodeError("Invalid Pro code.");
    return;
  }
  if (loadUsedProCodeHashes().includes(codeHash)) {
    showProCodeError("This Pro code was already used. Enter a new code.");
    return;
  }
  markProCodeHashAsUsed(codeHash);
  isProMode = true;
  if (isGodModeCode) {
    isGodMode = true;
    if (canPersistStudyData()) {
      localStorage.setItem(GOD_MODE_STORAGE, "on");
    }
    await persistGodModeUsage(codeHash).catch(() => {});
  }
  if (canPersistStudyData()) {
    localStorage.setItem(PRO_MODE_STORAGE, "on");
  }
  applyProModeUi();
  closeProModeModal();
  statusText.textContent = isGodModeCode ? "God Mode unlocked." : "Pro Mode unlocked.";
}

function createFile() {
  if (!requireAccount("create study files")) {
    return;
  }

  if (studyFiles.length >= getMaxFilesAllowed()) {
    if (isProMode) {
      statusText.textContent = "You reached the Pro limit of 5 files.";
      return;
    }
    statusText.textContent = "Free mode limit reached (2 files). Creating a new file will replace your oldest file.";
  }

  openNewFileModal();
}

function exportActiveFile() {
  if (!requireAccount("save progress")) {
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
  if (!requireAccount("rename study files")) {
    return;
  }

  const activeFile = getActiveFile();

  if (!activeFile) {
    return;
  }

  openRenameModal(activeFile.name);
}

function openRenameModal(currentName) {
  if (!requireAccount("rename study files")) {
    return;
  }
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
  if (!requireAccount("rename study files")) {
    closeRenameModal();
    return;
  }

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

function closeNewFileModal(forceImmediate = false) {
  if (!newFileModal) {
    return;
  }
  if (forceImmediate) {
    newFileModal.classList.add("hidden");
    newFileModal.classList.remove("modal-closing");
    return;
  }
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

  if (studyFiles.length >= getMaxFilesAllowed()) {
    if (isProMode) {
      statusText.textContent = "You reached the Pro limit of 5 files.";
      closeNewFileModal();
      return;
    }

    const removedFile = studyFiles.shift();
    const replacementFile = createStudyFile(name);
    studyFiles.push(replacementFile);
    activeFileId = replacementFile.id;
    createdFileIdForAnimation = replacementFile.id;

    persistFiles();
    renderFiles();
    loadActiveFileIntoEditor();
    triggerFileOpenAnimation();
    closeNewFileModal(true);
    statusText.textContent = removedFile
      ? `Free limit is 2 files. Replaced "${removedFile.name}" with "${replacementFile.name}".`
      : `Created file: ${replacementFile.name}`;
    handleTutorialCreateFileCompleted();
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
  closeNewFileModal(true);
  statusText.textContent = `Created file: ${newFile.name}`;
  handleTutorialCreateFileCompleted();
}

function deleteActiveFile() {
  if (!requireAccount("delete study files")) {
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
  if (!requireAccount("delete study files")) {
    closeDeleteFileModal();
    return;
  }
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
    setAllDownloadButtonsEnabled(false);
  } else {
    refreshCopyButtonsFromContent();
  }
  updateGenerateActionState();
  cleanButton.classList.toggle("is-loading", isLoading && mode === "clean");
  if (cancelGenerationButton) {
    cancelGenerationButton.classList.toggle("hidden", !isLoading);
    cancelGenerationButton.disabled = !isLoading;
  }
  if (summarizeLinkButton) {
    summarizeLinkButton.classList.toggle("is-loading", isLoading && mode === "article");
  }
  cleanButton.textContent = isLoading && mode === "clean" ? "Generating Study Pack..." : "Generate Study Pack";
  if (summarizeLinkButton) {
    summarizeLinkButton.textContent = isLoading && mode === "article" ? "Generating Study Pack..." : "Generate Study Pack";
  }
  statusText.classList.toggle("is-processing", isLoading);
  if (!isLoading) {
    statusText.classList.remove("is-streaming");
    hideLiveStreamPreview();
  } else {
    showLiveStreamPreview("Waiting for model response...");
  }

  if (isLoading) {
    statusText.textContent = "AI is organizing your notes...";
  }
}

function beginGenerationSession() {
  generationAbortController = new AbortController();
  return generationAbortController.signal;
}

function clearGenerationSession() {
  generationAbortController = null;
}

function cancelCurrentGeneration(message = "Generation cancelled. Existing results were kept.") {
  if (!generationAbortController) {
    return false;
  }

  generationAbortController.abort();
  clearGenerationSession();
  cancelSlowGenerationToast();
  setLoadingState(false);

  if (statusText) {
    statusText.textContent = message;
    statusText.classList.remove("is-streaming");
  }

  return true;
}

function maybeCancelGenerationBeforeNavigation(destinationLabel) {
  if (!isGenerating) {
    return true;
  }

  const shouldCancel = window.confirm(
    `Lumi is still generating your study pack. Cancel generation before you ${destinationLabel}?`
  );

  if (!shouldCancel) {
    if (statusText) {
      statusText.textContent = "Still generating. Wait until it finishes or cancel generation to do something else.";
    }
    return false;
  }

  cancelCurrentGeneration("Generation cancelled so you can keep browsing.");
  return true;
}

function triggerSummarizeClickAnimation(button) {
  if (!button) {
    return;
  }

  button.classList.remove("click-burst");
  void button.offsetWidth;
  button.classList.add("click-burst");
}

function animateStudyPanelReveal(panel) {
  if (!panel) {
    return;
  }
  panel.classList.remove("study-panel-reveal");
  void panel.offsetWidth;
  panel.classList.add("study-panel-reveal");
}

function scrollStudyPanelIntoView(panel, desktopBlock = "center") {
  if (!panel || typeof panel.scrollIntoView !== "function") {
    return;
  }
  const useMobileLayout = window.innerWidth <= 600 || isLikelyMobileDevice();
  window.setTimeout(() => {
    panel.scrollIntoView({
      behavior: "smooth",
      block: useMobileLayout ? "end" : desktopBlock,
      inline: "nearest"
    });
  }, 90);
}

function renderList(listElement, items) {
  if (!listElement) {
    return;
  }
  listElement.innerHTML = "";

  if (!Array.isArray(items) || items.length === 0) {
    const fallbackItem = document.createElement("li");
    fallbackItem.textContent = "No items generated yet.";
    listElement.appendChild(fallbackItem);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = decodeHtmlEntities(String(item || ""));
    listElement.appendChild(li);
  });
}

async function renderResultsWithTyping(result) {
  setAllCopyButtonsEnabled(false);
  setAllDownloadButtonsEnabled(false);
  setCardVisibility(studyTasksCard, false);
  setCardVisibility(studyPlanCard, result.selectedOutputs?.studyPlan);
  setCardVisibility(cleanNotesCard, result.selectedOutputs?.cleanNotes);
  const showSessionCard = Boolean(result.selectedOutputs?.flashcards);
  setCardVisibility(flashcardsCard, showSessionCard);
  setCardVisibility(quizQuestionsCard, result.selectedOutputs?.quizQuestions);

  renderListWithTyping(studyTasksList, []);
  renderListWithTyping(studyOrderList, result.studyOrder);
  renderListWithTyping(cleanNotesList, result.cleanNotes);
  ensureUnifiedStudyQueue(getActiveFile());
  isStudyCardFlipped = false;
  renderFlashcardsWithTyping(result.flashcards);
  renderQuizQuestionsList(result.quizQuestions);
  renderQuizStudyPanel();
  refreshCopyButtonsFromContent();
}

function renderFlashcardsWithTyping(cards) {
  renderList(flashcardsList, cards, false);
  renderFlashcardsVisualsWithTyping(cards);
  refreshFlashcardsPdfPreview();
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
    activeFile.quizQuestions.length > 0 ||
    (Array.isArray(activeFile.studyQueue) && activeFile.studyQueue.length > 0) ||
    (Array.isArray(activeFile.knownStudyItemIds) && activeFile.knownStudyItemIds.length > 0)
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
  activeFile.studyQueue = [];
  activeFile.studyQueueIndex = 0;
  activeFile.knownStudyItemIds = [];
  flashcardStudyStateByFileId.delete(activeFile.id);
  quizSessionStateByFileId.delete(activeFile.id);
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

function renderListWithTyping(listElement, items) {
  renderList(listElement, items);
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
    renderList(flashcardsList, [], false);
    if (flashcardsVisualGrid) {
      flashcardsVisualGrid.classList.add("hidden");
    }
    hideFlashcardsPdfPreview();
    renderQuizQuestionsList([]);
    renderQuizStudyPanel();
    updateFlashcardStudyActions(null);
    updateQuizStudyActions(null);
    updateOptionalOutputCards();
    refreshCopyButtonsFromContent();
    return;
  }

  renderList(studyTasksList, []);
  renderList(studyOrderList, file.studyOrder);
  renderList(cleanNotesList, file.cleanNotes);
  renderList(flashcardsList, file.flashcards, false);
  ensureUnifiedStudyQueue(file);
  isStudyCardFlipped = false;
  renderFlashcardsVisuals(file.flashcards);
  if (getStudyQueueFlashcardStrings().length === 0) {
    hideFlashcardsPdfPreview();
  } else {
    refreshFlashcardsPdfPreview();
  }
  renderQuizQuestionsList(file.quizQuestions);
  renderQuizStudyPanel();

  setCardVisibility(cleanNotesCard, file.cleanNotes.length > 0 || Boolean(outputCleanNotes?.checked));
  setCardVisibility(studyTasksCard, false);
  setCardVisibility(studyPlanCard, file.studyOrder.length > 0 || Boolean(outputStudyPlan?.checked));
  setCardVisibility(flashcardsCard, hasStudyQueueItems(file) || Boolean(outputFlashcards?.checked));
  setCardVisibility(quizQuestionsCard, file.quizQuestions.length > 0 || Boolean(outputQuizQuestions?.checked));
  refreshCopyButtonsFromContent();
}

function updateOptionalOutputCards() {
  setCardVisibility(studyTasksCard, false);
  setCardVisibility(studyPlanCard, Boolean(outputStudyPlan?.checked));
  setCardVisibility(cleanNotesCard, Boolean(outputCleanNotes?.checked));
  const file = getActiveFile();
  const showSessionCard = Boolean(outputFlashcards?.checked) || hasStudyQueueItems(file);
  setCardVisibility(flashcardsCard, showSessionCard);
  setCardVisibility(quizQuestionsCard, Boolean(outputQuizQuestions?.checked));
  if (flashcardsCountWrap) {
    flashcardsCountWrap.classList.toggle("hidden", !Boolean(outputFlashcards?.checked));
  }
  updateGenerateActionState();
}

function updateGenerateActionState() {
  const hasOutputs = hasSelectedOutputs();
  const shouldDisable = isGenerating || !hasOutputs;
  if (cleanButton) {
    cleanButton.disabled = shouldDisable;
    cleanButton.title = hasOutputs ? "" : "Choose at least one output first.";
    cleanButton.setAttribute("aria-disabled", shouldDisable ? "true" : "false");
  }
  if (summarizeLinkButton) {
    summarizeLinkButton.disabled = shouldDisable;
    summarizeLinkButton.title = hasOutputs ? "" : "Choose at least one output first.";
    summarizeLinkButton.setAttribute("aria-disabled", shouldDisable ? "true" : "false");
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
  const facts = buildStudyFacts(sourceLines);
  const cards = [];

  if (facts.length === 0) {
    return Array.from({ length: requestedCount }, (_value, index) =>
      `${index + 1}. Front: Review this concept. | Back: Review your notes.`
    );
  }

  for (let index = 0; index < requestedCount; index += 1) {
    const fact = facts[index % facts.length];
    const front = buildFlashcardFrontFromFact(fact, index);
    const back = fact.answer || fact.line || "Review your notes.";
    cards.push(`${index + 1}. Front: ${front} | Back: ${back}`);
  }

  return cards;
}

function buildStudyFacts(sourceLines) {
  const base = ensureStringArray(sourceLines)
    .map((line) =>
      decodeHtmlEntities(String(line || ""))
        .replace(/^\s*(?:[-*]|\u2022|\d+\.)\s*/, "")
        .replace(/\s+/g, " ")
        .trim()
    )
    .filter(Boolean);
  const facts = [];
  const seen = new Set();

  const pushFact = (fact) => {
    if (!fact) {
      return;
    }
    const subject = formatStudySubject(fact.subject || buildStudySubjectFallback(fact.line));
    const answer = formatStudyAnswer(fact.answer || fact.line);
    const line = decodeHtmlEntities(String(fact.line || answer || subject)).replace(/\s+/g, " ").trim();
    if (!subject || !answer || !line) {
      return;
    }
    const key = normalizeComparisonText(`${subject}|${answer}`);
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    facts.push({
      subject,
      answer,
      kind: fact.kind || "fact",
      line
    });
  };

  base.forEach((line) => {
    pushFact(parseStudyFactLine(line));
    line
      .split(/[;\u2022]/)
      .map((part) => part.trim())
      .filter((part) => part.length >= 18)
      .forEach((part) => pushFact(parseStudyFactLine(part)));
  });

  if (facts.length === 0) {
    base.forEach((line) => {
      pushFact({
        subject: buildStudySubjectFallback(line),
        answer: line,
        kind: "fact",
        line
      });
    });
  }

  if (facts.length === 0) {
    facts.push({
      subject: "Main idea",
      answer: "Review your notes.",
      kind: "fact",
      line: "Review your notes."
    });
  }

  return facts;
}

function parseStudyFactLine(line) {
  const normalized = decodeHtmlEntities(String(line || ""))
    .replace(/^\s*(?:[-*]|\u2022|\d+\.)\s*/, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!normalized) {
    return null;
  }

  const colonMatch = normalized.match(/^([^:]{2,80}):\s*(.+)$/);
  if (colonMatch) {
    return {
      subject: colonMatch[1],
      answer: colonMatch[2],
      kind: "definition",
      line: normalized
    };
  }

  const patterns = [
    {
      regex: /^(.{2,80}?)\s+(?:is defined as|can be defined as|is known as|refers to|means)\s+(.+)$/i,
      kind: "definition",
      answer: (_subject, _verb, detail) => detail
    },
    {
      regex: /^(.{2,80}?)\s+(is|are|was|were)\s+(.+)$/i,
      kind: "definition",
      answer: (_subject, _verb, detail) => detail
    },
    {
      regex: /^(.{2,80}?)\s+(includes|include|contains|contain)\s+(.+)$/i,
      kind: "examples",
      answer: (subject, verb, detail) => `${subject} ${verb.toLowerCase()} ${detail}`
    },
    {
      regex:
        /^(.{2,80}?)\s+(helps|help|allows|allow|causes|cause|creates|create|prevents|prevent|supports|support|produces|produce|uses|use|moves|move|breaks down|break down|converts|convert|returns|return|captures|capture|affects|affect|destroys|destroy|harms|harm|shifts|shift|outcompetes|outcompete|depends on|depend on|enters|enter|flows through|flow through|comes from|come from)\s+(.+)$/i,
      kind: "action",
      answer: (subject, verb, detail) => `${subject} ${verb.toLowerCase()} ${detail}`
    }
  ];

  for (const pattern of patterns) {
    const match = normalized.match(pattern.regex);
    if (!match) {
      continue;
    }
    const subject = match[1];
    const verb = match[2] || "";
    const detail = match[3] || match[2] || "";
    return {
      subject,
      answer: pattern.answer(subject, verb, detail),
      kind: pattern.kind,
      line: normalized
    };
  }

  return {
    subject: buildStudySubjectFallback(normalized),
    answer: normalized,
    kind: "fact",
    line: normalized
  };
}

function formatStudySubject(value) {
  const cleaned = decodeHtmlEntities(String(value || ""))
    .replace(/^[,.;:!?-]+|[,.;:!?-]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) {
    return "";
  }
  const words = cleaned.split(" ");
  const shortened = words.length > 10 ? words.slice(0, 10).join(" ") : cleaned;
  return shortened.charAt(0).toUpperCase() + shortened.slice(1);
}

function formatStudyAnswer(value) {
  const cleaned = decodeHtmlEntities(String(value || ""))
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) {
    return "";
  }
  const sentence = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  return /[.!?]$/.test(sentence) ? sentence : `${sentence}.`;
}

function buildStudySubjectFallback(line) {
  const cleaned = decodeHtmlEntities(String(line || ""))
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) {
    return "This concept";
  }
  const words = cleaned.split(" ");
  const slice = words.slice(0, Math.min(words.length, 6)).join(" ");
  return slice || "This concept";
}

function buildFlashcardFrontFromFact(fact, index) {
  const subject = formatStudySubject(fact?.subject || `Concept ${index + 1}`);
  const templateSets = {
    definition: [
      `What is ${subject}?`,
      `Define ${subject}.`,
      `What does ${subject} mean?`
    ],
    action: [
      `What does ${subject} do?`,
      `What is the role of ${subject}?`,
      `How does ${subject} work?`
    ],
    examples: [
      `What does ${subject} include?`,
      `What are examples of ${subject}?`,
      `Which details belong to ${subject}?`
    ],
    fact: [
      `What is true about ${subject}?`,
      `Explain ${subject}.`,
      `What is the key idea of ${subject}?`
    ]
  };
  const templates = templateSets[fact?.kind] || templateSets.fact;
  return templates[index % templates.length];
}

function buildFlashcardFrontFromLine(line, index) {
  const fact = parseStudyFactLine(line);
  if (!fact) {
    return `Card ${index}`;
  }
  return buildFlashcardFrontFromFact(fact, index - 1);
}

function getRequestedFlashcardsCount() {
  const raw = Number(flashcardsCountSelect?.value || 1);
  if (!Number.isFinite(raw)) {
    return 1;
  }
  const max = getMaxFlashcardsAllowed();
  if (raw > max && !isProMode) {
    openProModeModal("flashcards");
    statusText.textContent = "Unlock Pro Mode to use up to 10 flashcards.";
  }
  return Math.max(1, Math.min(max, Math.floor(raw)));
}

function generateQuizQuestions(sourceLines) {
  const maxQuestions = 8;
  const facts = buildStudyFacts(sourceLines);
  const questions = [];

  if (facts.length === 0) {
    return [];
  }

  for (let index = 0; index < maxQuestions; index += 1) {
    const fact = facts[index % facts.length];
    const nextQuestion = buildQuizQuestionString(fact, index + 1);
    if (nextQuestion) {
      questions.push(nextQuestion);
    }
  }

  return questions;
}

function buildQuizQuestionString(fact, index) {
  if (!fact) {
    return "";
  }

  const answerMode = index % 2 === 0 ? "short-answer" : "multiple-choice";
  const subject = formatStudySubject(fact.subject || `Concept ${index}`);
  const questionTemplates =
    answerMode === "multiple-choice"
      ? {
          definition: [
            `Which statement about ${subject} is most accurate?`,
            `Which choice best matches the meaning of ${subject}?`,
            `Which description fits ${subject} best?`
          ],
          action: [
            `Which choice best explains the role of ${subject}?`,
            `Which statement shows how ${subject} affects the system?`,
            `Which option best describes what ${subject} does?`
          ],
          examples: [
            `Which option belongs under ${subject}?`,
            `Which choice is an example of ${subject}?`,
            `Which detail correctly fits ${subject}?`
          ],
          fact: [
            `Which statement is supported by the notes about ${subject}?`,
            `Which choice best matches the idea of ${subject}?`,
            `Which option is correct about ${subject}?`
          ]
        }
      : {
          definition: [
            `In your own words, what does ${subject} mean?`,
            `How would you explain ${subject} to a classmate?`,
            `Why does ${subject} matter in these notes?`
          ],
          action: [
            `What role does ${subject} play?`,
            `Why is ${subject} important in this process?`,
            `How does ${subject} change or affect the system?`
          ],
          examples: [
            `What belongs under ${subject}?`,
            `Name one key detail that fits ${subject}.`,
            `How would you describe the main parts of ${subject}?`
          ],
          fact: [
            `What is one important thing the notes say about ${subject}?`,
            `How would you summarize ${subject} in one or two sentences?`,
            `What should someone understand about ${subject} after reading these notes?`
          ]
        };
  const templates = questionTemplates[fact.kind] || questionTemplates.fact;
  const prompt = templates[(index - 1) % templates.length];
  return `Type: ${answerMode} || Question: ${prompt} || Answer: ${fact.answer || fact.line}`;
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  if (canPersistStudyData()) {
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  }
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
  const isCurrentlyEnabled = document.body.classList.contains("performance-mode");
  const isEnabling = !isCurrentlyEnabled;
  showPerformanceLoader(isEnabling);
  await delay(320);
  clearTransientAnimationClasses();

  const enabled = document.body.classList.toggle("performance-mode");
  if (canPersistStudyData()) {
    localStorage.setItem(PERFORMANCE_MODE_KEY, enabled ? "on" : "off");
  }
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
  if (normalizedMode === "article" && !requireAccount("use Summarize Article")) {
    handleSummaryModeChange("notes");
    return;
  }
  if (normalizedMode === "photo" && !requireAccount("use Summarize Notes Photo")) {
    handleSummaryModeChange("notes");
    return;
  }
  if (canPersistStudyData()) {
    localStorage.setItem(SUMMARY_MODE_STORAGE, normalizedMode);
  }
  handleSummaryModeChange(normalizedMode);
}

function handleSummaryModeChange(mode) {
  const isArticle = mode === "article";
  const isPhoto = mode === "photo";

  [summarizeModeCard, articleInputWrap, inputCard, resultsSection].forEach((element) => {
    if (!element) {
      return;
    }
    element.classList.remove("file-open-in", "mode-pop-in", "mode-pop-out");
  });

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
    inputCard.classList.toggle("hidden", isArticle);
  }
  notesInput.disabled = isArticle || isPhoto;
  if (summarizeLinkButton) {
    summarizeLinkButton.classList.toggle("hidden", !isArticle);
  }
  if (articleGenerateRow) {
    articleGenerateRow.classList.toggle("hidden", !isArticle);
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
    statusText.textContent = "Notes photo mode selected. Upload an image or PDF, or take a photo, then generate your study pack.";
  } else {
    statusText.textContent = "Notes mode selected. Paste notes and generate your study pack.";
  }

  if (!document.body.classList.contains("performance-mode")) {
    if (summarizeModeCard && !summarizeModeCard.classList.contains("hidden")) {
      playTransientAnimation(summarizeModeCard, "mode-island-pop");
    }
    if (inputCard && !inputCard.classList.contains("hidden")) {
      playTransientAnimation(inputCard, "mode-island-pop");
    }
    if (notesInputWrap && !notesInputWrap.classList.contains("hidden")) {
      playTransientAnimation(notesInputWrap, "mode-content-pop");
    }
    if (photoInputWrap && !photoInputWrap.classList.contains("hidden")) {
      playTransientAnimation(photoInputWrap, "mode-content-pop");
    }
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
  const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name || "");
  const maxSize = isPdf ? 15 * 1024 * 1024 : 10 * 1024 * 1024;
  if (!isPdf && !file.type.startsWith("image/")) {
    statusText.textContent = "Please choose an image or PDF file.";
    clearSelectedNotesPhoto();
    return;
  }
  if (file.size > maxSize) {
    statusText.textContent = isPdf ? "PDF is too large. Use a PDF under 15MB." : "Photo is too large. Use an image under 10MB.";
    clearSelectedNotesPhoto();
    return;
  }

  if (isPdf) {
    statusText.textContent = "Rendering PDF pages for notes summary...";
    renderPdfUploadAsImage(file)
      .then((dataUrl) => {
        setSelectedNotesPhotoDataUrl(dataUrl, {
          readyMessage: "PDF ready. Click Generate Study Pack."
        });
      })
      .catch((error) => {
        console.error("Could not render PDF upload", error);
        statusText.textContent = error?.message || "Could not read the selected PDF.";
        clearSelectedNotesPhoto();
      });
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    setSelectedNotesPhotoDataUrl(String(reader.result || ""), {
      readyMessage: "Photo ready. Click Generate Study Pack."
    });
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

function setSelectedNotesPhotoDataUrl(dataUrl, options = {}) {
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
    statusText.textContent = options.readyMessage || "File ready. Click Generate Study Pack.";
  }
}

async function loadPdfJsModule() {
  if (!pdfJsModulePromise) {
    pdfJsModulePromise = import("https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.394/build/pdf.min.mjs")
      .then((module) => {
        if (module?.GlobalWorkerOptions) {
          module.GlobalWorkerOptions.workerSrc =
            "https://cdn.jsdelivr.net/npm/pdfjs-dist@5.4.394/build/pdf.worker.min.mjs";
        }
        return module;
      });
  }
  return pdfJsModulePromise;
}

async function renderPdfUploadAsImage(file) {
  const pdfjs = await loadPdfJsModule();
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjs.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  const pageLimit = Math.min(pdf.numPages, 4);
  const pageCanvases = [];
  const gap = 18;
  const sidePadding = 16;
  const scale = 1.2;

  for (let pageNumber = 1; pageNumber <= pageLimit; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    if (!context) {
      throw new Error("Could not prepare PDF canvas.");
    }
    await page.render({ canvasContext: context, viewport }).promise;
    pageCanvases.push(canvas);
  }

  if (pageCanvases.length === 0) {
    throw new Error("Could not render any pages from that PDF.");
  }

  const totalWidth = Math.max(...pageCanvases.map((canvas) => canvas.width)) + sidePadding * 2;
  const totalHeight =
    pageCanvases.reduce((sum, canvas) => sum + canvas.height, 0) +
    gap * (pageCanvases.length - 1) +
    sidePadding * 2;

  const combinedCanvas = document.createElement("canvas");
  combinedCanvas.width = totalWidth;
  combinedCanvas.height = totalHeight;
  const combinedContext = combinedCanvas.getContext("2d");
  if (!combinedContext) {
    throw new Error("Could not build a preview image from that PDF.");
  }

  combinedContext.fillStyle = "#ffffff";
  combinedContext.fillRect(0, 0, totalWidth, totalHeight);

  let y = sidePadding;
  pageCanvases.forEach((canvas) => {
    const x = Math.round((totalWidth - canvas.width) / 2);
    combinedContext.drawImage(canvas, x, y);
    y += canvas.height + gap;
  });

  const dataUrl = combinedCanvas.toDataURL("image/png");
  if (dataUrl.length > 11_500_000) {
    throw new Error("That PDF renders too large right now. Please use a smaller PDF or fewer pages.");
  }
  return dataUrl;
}

function handleTakePhotoClick() {
  if (isLikelyMobileDevice()) {
    if (notesPhotoCameraInput) {
      notesPhotoCameraInput.click();
      return;
    }
    statusText.textContent = "Camera capture is unavailable on this device.";
    return;
  }
  openWebcamCaptureModal().catch((error) => {
    closeWebcamCaptureModal();
    const message = error?.message || "Could not open webcam.";
    statusText.textContent = message;
    const shouldFallback =
      error?.name === "NotAllowedError" ||
      error?.name === "NotFoundError" ||
      /denied|permission|blocked/i.test(message);
    if (shouldFallback && notesPhotoUploadInput) {
      statusText.textContent = "Camera unavailable. Please upload a photo instead.";
      notesPhotoUploadInput.click();
    }
  });
}

function isLikelyMobileDevice() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.matchMedia("(pointer: coarse)").matches;
}

async function openWebcamCaptureModal() {
  if (!webcamCaptureModal || !webcamVideo || !navigator.mediaDevices?.getUserMedia) {
    throw new Error("Webcam capture is not supported here. Use Upload Photo instead.");
  }
  stopWebcamStream();
  webcamStream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "environment" },
    audio: false
  });
  webcamVideo.srcObject = webcamStream;
  await webcamVideo.play();
  webcamCaptureModal.classList.remove("hidden");
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

async function fetchArticleTextFromUrl(articleUrl, signal) {
  const normalized = articleUrl.replace(/^https?:\/\//i, "");
  const readerUrl = `https://r.jina.ai/http://${normalized}`;
  const response = await fetch(readerUrl, { signal });
  const text = (await response.text()).trim();

  if (!response.ok) {
    throw new Error(describeArticleFetchFailure(articleUrl, text, response.status));
  }

  const articleFailure = detectArticleContentFailure(articleUrl, text);
  if (articleFailure) {
    throw new Error(articleFailure);
  }

  if (text.length < 180) {
    throw new Error("The article did not provide enough readable text to summarize.");
  }

  return text.slice(0, 14000);
}

function describeArticleFetchFailure(articleUrl, responseText, status) {
  const lower = String(responseText || "").toLowerCase();
  const host = getReadableHostname(articleUrl);

  if (status === 401 || status === 403 || lower.includes("permission") || lower.includes("access denied")) {
    return `${host} blocked access to that page. If it is a private or locked document, make it public or paste the text instead.`;
  }
  if (status === 404 || lower.includes("not found")) {
    return `That link could not be found on ${host}. Check the URL and try again.`;
  }

  return `Lumi could not read that page from ${host} (error ${status}). Try a public article link or paste the text directly.`;
}

function detectArticleContentFailure(articleUrl, text) {
  const lower = String(text || "").toLowerCase();
  const host = getReadableHostname(articleUrl);

  if (!lower) {
    return `Lumi could not read any text from ${host}. Try a public article or paste the text directly.`;
  }

  if (
    lower.includes("you need permission") ||
    lower.includes("request access") ||
    lower.includes("sign in to continue") ||
    lower.includes("sign in with google") ||
    lower.includes("access denied") ||
    lower.includes("private document") ||
    lower.includes("this document is not publicly accessible")
  ) {
    return `${host} looks locked or private, so Lumi could not read it. Make the doc public or paste the text instead.`;
  }

  if (
    lower.includes("enable javascript") ||
    lower.includes("please turn javascript on") ||
    lower.includes("captcha") ||
    lower.includes("verify you are human")
  ) {
    return `${host} blocked automated reading for that page. Try a different public source or paste the text instead.`;
  }

  return "";
}

function getReadableHostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./i, "");
  } catch (_error) {
    return "that site";
  }
}

function bindCopyButtons() {
  bindCopyButton(copyStudyTasksButton, "Study Tasks", studyTasksList, false);
  bindCopyButton(copyStudyPlanButton, "Study Plan", studyOrderList, true);
  bindCopyButton(copyCleanNotesButton, "Clean Notes", cleanNotesList, false);
  bindFlashcardCopyButton();
  bindCopyButton(copyQuizButton, "Quiz Questions", quizQuestionsList, true);
  bindDownloadListPdfButton(downloadStudyTasksButton, "Study Tasks", studyTasksList, false, "study-tasks");
  bindDownloadListPdfButton(downloadStudyPlanButton, "Study Plan", studyOrderList, true, "study-plan");
  bindDownloadListPdfButton(downloadCleanNotesButton, "Clean Notes", cleanNotesList, false, "clean-notes");
  bindDownloadQuizButton();
  bindDownloadFlashcardsButton();
  bindFlashcardStudyButton();
  bindPrintFlashcardsButton();
  bindQuizStudyButton();
  bindMoreFlashcardsButton();
}

function bindFlashcardStudyButton() {
  if (!beginFlashcardsButton) {
    return;
  }
  beginFlashcardsButton.addEventListener("click", toggleFlashcardStudy);
}

function bindDownloadFlashcardsButton() {
  if (!downloadFlashcardsButton) {
    return;
  }

  downloadFlashcardsButton.addEventListener("click", () => {
    const activeFile = getActiveFile();
    const rawCards = getStudyQueueFlashcardStrings().slice(0, getMaxFlashcardsAllowed());

    if (rawCards.length === 0) {
      statusText.textContent = "No flashcards to download yet.";
      return;
    }

    if (!window.jspdf || !window.jspdf.jsPDF) {
      statusText.textContent = "PDF generator unavailable. Refresh and try again.";
      return;
    }

    const { frontsBlob, backsBlob, combinedBlob } = buildCuttableFlashcardsPdfs(rawCards);
    showFlashcardsPdfPreview(frontsBlob, backsBlob);
    const safeNameBase = slugifyFileName(activeFile?.name || "study-notes");
    downloadBlob(combinedBlob, `${safeNameBase}-flashcards-fronts-and-backs.pdf`);
    setTimeout(() => {
      downloadBlob(frontsBlob, `${safeNameBase}-flashcards-fronts.pdf`);
      downloadBlob(backsBlob, `${safeNameBase}-flashcards-backs.pdf`);
    }, 120);

    statusText.textContent = `Downloaded the full flashcard set: ${rawCards.length} cards with fronts, backs, and a combined print file.`;
  });
}

function bindPrintFlashcardsButton() {
  if (!printFlashcardsButton) {
    return;
  }

  printFlashcardsButton.addEventListener("click", () => {
    const activeFile = getActiveFile();
    const rawCards = getStudyQueueFlashcardStrings().slice(0, getMaxFlashcardsAllowed());
    if (rawCards.length === 0) {
      statusText.textContent = "No flashcards to print yet.";
      return;
    }
    if (!window.jspdf || !window.jspdf.jsPDF) {
      statusText.textContent = "PDF generator unavailable. Refresh and try again.";
      return;
    }

    const { frontsBlob, backsBlob, combinedBlob } = buildCuttableFlashcardsPdfs(rawCards);
    showFlashcardsPdfPreview(frontsBlob, backsBlob);
    printPdfBlob(combinedBlob);
    statusText.textContent = `Printing flashcards for ${activeFile?.name || "your study notes"}.`;
  });
}

function bindQuizStudyButton() {
  if (!beginQuizButton) {
    return;
  }
  beginQuizButton.addEventListener("click", toggleQuizStudy);
}


function bindDownloadListPdfButton(button, title, listElement, ordered, fileSuffix) {
  if (!button || !listElement) {
    return;
  }

  button.addEventListener("click", () => {
    const rawItems = getRawListItems(listElement);
    if (rawItems.length === 0) {
      statusText.textContent = `No ${title.toLowerCase()} to download yet.`;
      return;
    }
    if (!window.jspdf || !window.jspdf.jsPDF) {
      statusText.textContent = "PDF generator unavailable. Refresh and try again.";
      return;
    }

    const activeFile = getActiveFile();
    const pdfBlob = buildSimpleListPdfBlob(title, rawItems, ordered);
    const safeNameBase = slugifyFileName(activeFile?.name || "study-notes");
    downloadBlob(pdfBlob, `${safeNameBase}-${fileSuffix}.pdf`);
    statusText.textContent = `Downloaded ${title.toLowerCase()} PDF.`;
  });
}

function buildSimpleListPdfBlob(title, rawItems, ordered) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "letter"
  });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 48;
  const marginTop = 56;
  const marginBottom = 56;
  const maxTextWidth = pageWidth - marginX * 2;
  const lineHeight = 16;
  let y = marginTop;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(title, marginX, y);
  y += 28;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  rawItems.forEach((item, index) => {
    const prefix = ordered ? `${index + 1}. ` : "- ";
    const cleanItem = decodeHtmlEntities(String(item || ""));
    const wrapped = doc.splitTextToSize(`${prefix}${cleanItem}`, maxTextWidth);
    if (y + wrapped.length * lineHeight > pageHeight - marginBottom) {
      doc.addPage("letter", "portrait");
      y = marginTop;
    }
    doc.text(wrapped, marginX, y);
    y += wrapped.length * lineHeight + 6;
  });

  return doc.output("blob");
}

function bindDownloadQuizButton() {
  if (!downloadQuizButton) {
    return;
  }

  downloadQuizButton.addEventListener("click", () => {
    const activeFile = getActiveFile();
    const quizItems = getQuizItemsForFile(activeFile);
    if (quizItems.length === 0) {
      statusText.textContent = "No quiz questions to download yet.";
      return;
    }
    if (!window.jspdf || !window.jspdf.jsPDF) {
      statusText.textContent = "PDF generator unavailable. Refresh and try again.";
      return;
    }

    const pdfBlob = buildQuizPdfBlob(quizItems);
    const safeNameBase = slugifyFileName(activeFile?.name || "study-notes");
    downloadBlob(pdfBlob, `${safeNameBase}-quiz-with-answer-sheet.pdf`);
    statusText.textContent = "Downloaded quiz PDF with answer sheet.";
  });
}

function buildQuizPdfBlob(quizItems) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "letter"
  });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 48;
  const marginTop = 56;
  const marginBottom = 56;
  const maxTextWidth = pageWidth - marginX * 2;
  const lineHeight = 16;

  const writePageHeader = (title) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(title, marginX, marginTop);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    return marginTop + 28;
  };

  let y = writePageHeader("Quiz Questions");
  quizItems.forEach((item, index) => {
    const wrappedQuestion = doc.splitTextToSize(`${index + 1}. ${item.prompt}`, maxTextWidth);
    const wrappedOptions = item.options.length > 1
      ? item.options.map((option, optionIndex) => ({
          label: `${String.fromCharCode(65 + optionIndex)}. ${option}`,
          lines: doc.splitTextToSize(`${String.fromCharCode(65 + optionIndex)}. ${option}`, maxTextWidth - 18)
        }))
      : [];
    const requiredHeight =
      wrappedQuestion.length * lineHeight +
      wrappedOptions.reduce((total, option) => total + option.lines.length * lineHeight + 2, 0) +
      (wrappedOptions.length > 0 ? 10 : 26);

    if (y + requiredHeight > pageHeight - marginBottom) {
      doc.addPage("letter", "portrait");
      y = writePageHeader("Quiz Questions (Continued)");
    }

    doc.text(wrappedQuestion, marginX, y);
    y += wrappedQuestion.length * lineHeight + 4;

    if (wrappedOptions.length > 0) {
      wrappedOptions.forEach((option) => {
        doc.text(option.lines, marginX + 18, y);
        y += option.lines.length * lineHeight + 2;
      });
      y += 8;
    } else {
      doc.line(marginX, y + 6, pageWidth - marginX, y + 6);
      y += 24;
    }
  });

  doc.addPage("letter", "portrait");
  y = writePageHeader("Answer Sheet");

  quizItems.forEach((item, index) => {
    const wrappedAnswer = doc.splitTextToSize(`${index + 1}. ${item.answer}`, maxTextWidth);
    if (y + wrappedAnswer.length * lineHeight > pageHeight - marginBottom) {
      doc.addPage("letter", "portrait");
      y = writePageHeader("Answer Sheet (Continued)");
    }
    doc.text(wrappedAnswer, marginX, y);
    y += wrappedAnswer.length * lineHeight + 6;
  });

  return doc.output("blob");
}

function bindMoreFlashcardsButton() {
  if (!moreFlashcardsButton) {
    return;
  }

  moreFlashcardsButton.addEventListener("click", () => {
    if (!isProMode) {
      openProModeModal("flashcards");
      statusText.textContent = "Unlock Pro Mode to use up to 10 flashcards.";
      return;
    }
    if (moreFlashcardsModal) {
      moreFlashcardsModal.classList.remove("hidden");
      return;
    }
    statusText.textContent = "Pro Mode unlocked: up to 10 flashcards available.";
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
  const totalCards = rawCards.length;

  const getPageCardRangeLabel = (pageIndex) => {
    const startCard = pageIndex * perPage + 1;
    const endCard = Math.min((pageIndex + 1) * perPage, totalCards);
    return `Cards ${startCard}-${endCard} of ${totalCards}`;
  };

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

    drawCutCard(frontsDoc, x, y, cardWidth, cardHeight, `Flashcard ${index + 1} Front`, front);
    drawCutCard(backsDoc, x, y, cardWidth, cardHeight, `Flashcard ${index + 1} Back`, back);

    if (slot === 0) {
      frontsDoc.setFont("helvetica", "bold");
      frontsDoc.setFontSize(10);
      frontsDoc.text(`Full Flashcard Set - Fronts - Page ${pageIndex + 1}`, marginX, 0.3);
      frontsDoc.setFont("helvetica", "normal");
      frontsDoc.setFontSize(8.5);
      frontsDoc.text(getPageCardRangeLabel(pageIndex), marginX, 0.46);
      backsDoc.setFont("helvetica", "bold");
      backsDoc.setFontSize(10);
      backsDoc.text(`Full Flashcard Set - Backs - Page ${pageIndex + 1}`, marginX, 0.3);
      backsDoc.setFont("helvetica", "normal");
      backsDoc.setFontSize(8.5);
      backsDoc.text(getPageCardRangeLabel(pageIndex), marginX, 0.46);
    }
  });

  return {
    frontsBlob: frontsDoc.output("blob"),
    backsBlob: backsDoc.output("blob"),
    combinedBlob: buildCombinedFlashcardsPdf(rawCards)
  };
}

function drawCutCard(doc, x, y, width, height, title, text) {
  doc.setDrawColor(120, 130, 170);
  doc.setLineWidth(0.015);
  doc.rect(x, y, width, height);

  // Dotted trim guide on the card border.
  doc.setLineWidth(0.01);
  doc.setLineDashPattern([0.04, 0.04], 0);
  doc.rect(x + 0.02, y + 0.02, width - 0.04, height - 0.04);
  doc.setLineDashPattern([], 0);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.text(title, x + 0.12, y + 0.24);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const lines = doc.splitTextToSize(text, width - 0.24);
  doc.text(lines, x + 0.12, y + 0.48);
}

function buildCombinedFlashcardsPdf(rawCards) {
  const { jsPDF } = window.jspdf;
  const combined = new jsPDF({
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
  const perPage = 8;
  const totalPages = Math.ceil(rawCards.length / perPage);
  const totalCards = rawCards.length;

  const getPageCardRangeLabel = (pageIndex) => {
    const startCard = pageIndex * perPage + 1;
    const endCard = Math.min((pageIndex + 1) * perPage, totalCards);
    return `Cards ${startCard}-${endCard} of ${totalCards}`;
  };

  for (let pageIndex = 0; pageIndex < totalPages; pageIndex += 1) {
    const start = pageIndex * perPage;
    const end = Math.min(start + perPage, rawCards.length);

    if (pageIndex > 0) {
      combined.addPage("letter", "portrait");
    }
    combined.setFont("helvetica", "bold");
    combined.setFontSize(10);
    combined.text(`Full Flashcard Set - Fronts - Page ${pageIndex + 1}`, marginX, 0.3);
    combined.setFont("helvetica", "normal");
    combined.setFontSize(8.5);
    combined.text(getPageCardRangeLabel(pageIndex), marginX, 0.46);

    for (let index = start; index < end; index += 1) {
      const slot = index - start;
      const row = Math.floor(slot / 2);
      const col = slot % 2;
      const x = marginX + col * (cardWidth + colGap);
      const y = marginY + row * (cardHeight + rowGap);
      const { front } = parseFlashcardText(rawCards[index], index + 1);
      drawCutCard(combined, x, y, cardWidth, cardHeight, `Flashcard ${index + 1} Front`, front);
    }

    combined.addPage("letter", "portrait");
    combined.setFont("helvetica", "bold");
    combined.setFontSize(10);
    combined.text(`Full Flashcard Set - Backs - Page ${pageIndex + 1}`, marginX, 0.3);
    combined.setFont("helvetica", "normal");
    combined.setFontSize(8.5);
    combined.text(getPageCardRangeLabel(pageIndex), marginX, 0.46);

    for (let index = start; index < end; index += 1) {
      const slot = index - start;
      const row = Math.floor(slot / 2);
      const col = slot % 2;
      const x = marginX + col * (cardWidth + colGap);
      const y = marginY + row * (cardHeight + rowGap);
      const { back } = parseFlashcardText(rawCards[index], index + 1);
      drawCutCard(combined, x, y, cardWidth, cardHeight, `Flashcard ${index + 1} Back`, back);
    }
  }

  return combined.output("blob");
}

function refreshFlashcardsPdfPreview(rawCards) {
  hideFlashcardsPdfPreview();
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

function printPdfBlob(blob) {
  const blobUrl = URL.createObjectURL(blob);
  const printWindow = window.open(blobUrl, "_blank");
  if (!printWindow) {
    statusText.textContent = "Popup blocked. Please allow popups to print the PDF.";
    setTimeout(() => URL.revokeObjectURL(blobUrl), 0);
    return;
  }

  const cleanup = () => {
    setTimeout(() => URL.revokeObjectURL(blobUrl), 30000);
  };

  setTimeout(() => {
    try {
      printWindow.focus();
      printWindow.print();
    } catch (_error) {
      statusText.textContent = "The PDF opened, but print did not start automatically.";
    }
    cleanup();
  }, 500);
}

function showFlashcardsPdfPreview(frontsBlob, backsBlob) {
  hideFlashcardsPdfPreview();
}

function hideFlashcardsPdfPreview() {
  if (flashcardsPdfPreviewWrap) {
    flashcardsPdfPreviewWrap.classList.add("hidden");
  }
  if (flashcardsPdfPreview) {
    flashcardsPdfPreview.removeAttribute("src");
  }
  if (previewFrontsButton) {
    previewFrontsButton.classList.add("active");
  }
  if (previewBacksButton) {
    previewBacksButton.classList.remove("active");
  }
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
  if (!listElement) {
    return [];
  }
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
    const front = decodeHtmlEntities(String(match[1] || "").trim());
    const back = decodeHtmlEntities(String(match[2] || "").trim());
    return {
      front: front || `Card ${fallbackIndex}`,
      back: back || "Review your notes."
    };
  }
  const frontOnlyMatch = normalized.match(/front:\s*([\s\S]*)/i);
  if (frontOnlyMatch) {
    const front = decodeHtmlEntities(String(frontOnlyMatch[1] || "").trim());
    return {
      front: front || `Card ${fallbackIndex}`,
      back: "Review your notes."
    };
  }
  return {
    front: buildFlashcardFrontFromLine(decodeHtmlEntities(normalized), fallbackIndex),
    back: decodeHtmlEntities(normalized) || "Review your notes."
  };
}

function renderFlashcardsVisuals(cards) {
  const file = getActiveFile();
  updateFlashcardStudyActions(file);
  if (!flashcardsVisualGrid) {
    return;
  }
  if (!file || !isFlashcardStudyStarted(file)) {
    flashcardsVisualGrid.classList.add("hidden");
    return;
  }

  initStudyQueueUiIfNeeded();
  renderStudyQueueViewer();
}

function renderFlashcardsVisualsWithTyping(cards) {
  renderFlashcardsVisuals(cards);
}

function isFlashcardStudyStarted(file = getActiveFile()) {
  if (!file) {
    return false;
  }
  return Boolean(flashcardStudyStateByFileId.get(file.id));
}

function setFlashcardStudyStarted(started, file = getActiveFile()) {
  if (!file) {
    return;
  }
  flashcardStudyStateByFileId.set(file.id, Boolean(started));
}

function updateFlashcardStudyActions(file = getActiveFile()) {
  const hasItems = getStudyQueueItemsCount(file) > 0;
  if (beginFlashcardsButton) {
    beginFlashcardsButton.disabled = !hasItems;
    beginFlashcardsButton.textContent = isFlashcardStudyStarted(file) ? "Hide Flashcard Study" : "Begin Flashcard Study";
  }
  if (flashcardsExportHint) {
    const count = getStudyQueueItemsCount(file);
    flashcardsExportHint.textContent = count > 0
      ? `Downloads and prints the full set of ${count} flashcard${count === 1 ? "" : "s"}, not just the card on screen.`
      : "Generate flashcards to download printable flashcard sheets for the full set.";
  }
  if (printFlashcardsButton) {
    printFlashcardsButton.disabled = !hasItems;
  }
}

function toggleFlashcardStudy() {
  triggerSummarizeClickAnimation(beginFlashcardsButton);
  const file = getActiveFile();
  if (!file) {
    return;
  }
  ensureUnifiedStudyQueue(file);
  if (!hasStudyQueueItems(file)) {
    statusText.textContent = "No flashcards are ready yet. Generate a study pack first.";
    updateFlashcardStudyActions(file);
    return;
  }
  const nextState = !isFlashcardStudyStarted(file);
  setFlashcardStudyStarted(nextState, file);
  renderFlashcardsVisuals(file.flashcards);
  refreshCopyButtonsFromContent();
  if (nextState) {
    animateStudyPanelReveal(flashcardsVisualGrid);
    scrollStudyPanelIntoView(flashcardsVisualGrid, "center");
    statusText.textContent = "Flashcard study started. Click a card to flip it.";
  }
}

function getStudyQueueItemsCount(file = getActiveFile()) {
  if (!file) {
    return 0;
  }
  ensureUnifiedStudyQueue(file);
  return Array.isArray(file.studyQueue) ? file.studyQueue.length : 0;
}

function getQuizSessionState(file = getActiveFile()) {
  if (!file) {
    return null;
  }
  if (!quizSessionStateByFileId.has(file.id)) {
    quizSessionStateByFileId.set(file.id, {
      started: false,
      currentIndex: 0,
      responses: {},
      completed: false,
      view: "question"
    });
  }
  const state = quizSessionStateByFileId.get(file.id);
  if (state.view !== "results") {
    state.view = "question";
  }
  return state;
}

function resetQuizSessionState(file = getActiveFile()) {
  if (!file) {
    return null;
  }
  const nextState = {
    started: true,
    currentIndex: 0,
    responses: {},
    completed: false,
    view: "question"
  };
  quizSessionStateByFileId.set(file.id, nextState);
  return nextState;
}

function getQuizItemsForFile(file = getActiveFile()) {
  return buildQuizSessionItems(file?.quizQuestions || []);
}

function updateQuizStudyActions(file = getActiveFile()) {
  const items = getQuizItemsForFile(file);
  const state = getQuizSessionState(file);
  if (beginQuizButton) {
    beginQuizButton.disabled = items.length === 0;
    beginQuizButton.textContent = state?.started ? "Hide Quiz" : "Begin Quiz";
  }
}

function toggleQuizStudy() {
  triggerSummarizeClickAnimation(beginQuizButton);
  const file = getActiveFile();
  if (!file) {
    return;
  }
  const items = getQuizItemsForFile(file);
  if (items.length === 0) {
    statusText.textContent = "No quiz questions are ready yet. Generate a study pack first.";
    updateQuizStudyActions(file);
    return;
  }

  const state = getQuizSessionState(file);
  if (!state || !state.started) {
    resetQuizSessionState(file);
    renderQuizStudyPanel();
    animateStudyPanelReveal(quizStudyPanel);
    scrollStudyPanelIntoView(quizStudyPanel, "end");
    statusText.textContent = "Quiz started. Answer the question and check your work.";
    return;
  }

  state.started = false;
  state.completed = false;
  state.view = "question";
  renderQuizStudyPanel();
}

function ensureQuizResponseEntry(state, itemId) {
  if (!state.responses[itemId]) {
    state.responses[itemId] = {
      selectedChoice: "",
      typedAnswer: "",
      submitted: false,
      userAnswer: "",
      correct: false,
      feedback: null
    };
  }
  return state.responses[itemId];
}

function getQuizScoreSummary(state, items) {
  const responses = Object.values(state?.responses || {});
  const submittedCount = responses.filter((entry) => entry && entry.submitted).length;
  const correctCount = responses.filter((entry) => entry && entry.submitted && entry.correct).length;
  const accuracy = submittedCount > 0 ? Math.round((correctCount / submittedCount) * 100) : 0;

  return {
    submittedCount,
    correctCount,
    accuracy,
    total: Array.isArray(items) ? items.length : 0
  };
}

function formatQuizAnswerModeLabel(answerMode) {
  return answerMode === "multiple-choice" ? "Multiple Choice" : "Short Answer";
}

function getQuizMissingKeywords(userAnswer, correctAnswer) {
  const correctTokens = [...new Set(tokenizeComparisonText(correctAnswer))];
  const userTokens = new Set(tokenizeComparisonText(userAnswer));
  return correctTokens.filter((token) => !userTokens.has(token)).slice(0, 4);
}

function formatQuizKeywordList(tokens) {
  if (!Array.isArray(tokens) || tokens.length === 0) {
    return "";
  }
  if (tokens.length === 1) {
    return tokens[0];
  }
  if (tokens.length === 2) {
    return `${tokens[0]} and ${tokens[1]}`;
  }
  return `${tokens.slice(0, -1).join(", ")}, and ${tokens[tokens.length - 1]}`;
}

function buildQuizAnswerFeedback(userAnswer, item, isCorrect) {
  const safeUserAnswer = decodeHtmlEntities(String(userAnswer || "")).trim() || "No answer provided.";
  const safeCorrectAnswer = decodeHtmlEntities(String(item?.answer || "")).trim() || "No answer available.";
  const missingKeywords = getQuizMissingKeywords(userAnswer, safeCorrectAnswer);
  const keywordText = formatQuizKeywordList(missingKeywords);
  const userAnswerLabel = item?.answerMode === "multiple-choice" ? "You chose" : "Your answer";

  if (isCorrect) {
    return {
      title: "Correct",
      userLine:
        item?.answerMode === "multiple-choice"
          ? "Nice work. You picked the right answer."
          : "Nice work. Your answer matches the main idea.",
      answerLine: "",
      fixLine: ""
    };
  }

  return {
    title: "Needs Fixing",
    userLine: `${userAnswerLabel}: ${safeUserAnswer}`,
    answerLine: `Correct answer: ${safeCorrectAnswer}`,
    fixLine: keywordText
      ? `How to fix it: mention ${keywordText}.`
      : `How to fix it: tie your answer more directly to ${safeCorrectAnswer}.`
  };
}

function findFirstIncorrectQuizIndex(items, state) {
  return items.findIndex((item) => {
    const response = ensureQuizResponseEntry(state, item.id);
    return response.submitted && !response.correct;
  });
}

function buildQuizSummaryElement(items, state) {
  const score = getQuizScoreSummary(state, items);
  const summary = document.createElement("div");
  summary.className = "quiz-study-summary";
  summary.innerHTML = `
    <p class="quiz-study-progress">${
      state.view === "results" ? "Results" : `Question ${state.currentIndex + 1} of ${items.length}`
    }</p>
    <p class="quiz-study-score">Score: ${score.correctCount} / ${score.submittedCount}</p>
    <p class="quiz-study-accuracy">Accuracy: ${score.accuracy}%</p>
  `;

  if (state.completed) {
    const doneBadge = document.createElement("p");
    doneBadge.className = "quiz-study-complete";
    doneBadge.textContent = `Final score: ${score.correctCount} / ${score.total}`;
    summary.appendChild(doneBadge);
  }

  return summary;
}

function buildQuizResultsView(items, state, file) {
  const score = getQuizScoreSummary(state, items);
  const resultsCard = document.createElement("section");
  resultsCard.className = "quiz-results-card";

  const title = document.createElement("h3");
  title.className = "quiz-study-question";
  title.textContent = score.correctCount === score.total ? "Nice work. You got everything right." : "Quiz results";
  resultsCard.appendChild(title);

  const intro = document.createElement("p");
  intro.className = "quiz-study-helper";
  intro.textContent =
    score.correctCount === score.total
      ? "You finished with a perfect score. Restart anytime for another round."
      : "Review the questions you missed below, then reopen the quiz to try again.";
  resultsCard.appendChild(intro);

  const incorrectItems = items
    .map((item, index) => ({ item, index, response: ensureQuizResponseEntry(state, item.id) }))
    .filter((entry) => entry.response.submitted && !entry.response.correct);

  if (incorrectItems.length === 0) {
    const perfectState = document.createElement("div");
    perfectState.className = "quiz-study-feedback is-correct";
    perfectState.textContent = `Perfect score for ${file?.name || "this study set"}.`;
    resultsCard.appendChild(perfectState);
    return resultsCard;
  }

  const reviewList = document.createElement("div");
  reviewList.className = "quiz-results-list";

  incorrectItems.forEach(({ item, index, response }) => {
    const feedback = response.feedback || buildQuizAnswerFeedback(response.userAnswer, item, response.correct);
    const row = document.createElement("article");
    row.className = "quiz-result-item";

    const heading = document.createElement("div");
    heading.className = "quiz-result-head";

    const questionNumber = document.createElement("p");
    questionNumber.className = "quiz-result-number";
    questionNumber.textContent = `Question ${index + 1}`;

    const status = document.createElement("span");
    status.className = "quiz-result-status";
    status.textContent = "Review this one";

    heading.appendChild(questionNumber);
    heading.appendChild(status);

    const prompt = document.createElement("p");
    prompt.className = "quiz-result-prompt";
    prompt.textContent = item.prompt;

    const userLine = document.createElement("p");
    userLine.className = "quiz-result-line";
    userLine.textContent = feedback.userLine;

    const answerLine = document.createElement("p");
    answerLine.className = "quiz-result-line";
    answerLine.textContent = feedback.answerLine;

    const fixLine = document.createElement("p");
    fixLine.className = "quiz-result-fix";
    fixLine.textContent = feedback.fixLine;

    row.appendChild(heading);
    row.appendChild(prompt);
    if (feedback.userLine) {
      row.appendChild(userLine);
    }
    if (feedback.answerLine) {
      row.appendChild(answerLine);
    }
    if (feedback.fixLine) {
      row.appendChild(fixLine);
    }
    reviewList.appendChild(row);
  });

  resultsCard.appendChild(reviewList);
  return resultsCard;
}

function renderQuizStudyPanel() {
  updateQuizStudyActions();
  if (!quizStudyPanel) {
    return;
  }

  const file = getActiveFile();
  const items = getQuizItemsForFile(file);
  const state = getQuizSessionState(file);
  quizStudyPanel.innerHTML = "";

  if (!file || !state?.started || items.length === 0) {
    quizStudyPanel.classList.add("hidden");
    return;
  }

  quizStudyPanel.classList.remove("hidden");
  state.currentIndex = Math.min(Math.max(state.currentIndex || 0, 0), items.length - 1);
  quizStudyPanel.appendChild(buildQuizSummaryElement(items, state));

  if (state.completed && state.view === "results") {
    const controls = document.createElement("div");
    controls.className = "result-card-actions quiz-study-controls";

    const reviewButton = createStudyQueueButton("Review Questions", () => {
      const firstIncorrectIndex = findFirstIncorrectQuizIndex(items, state);
      state.currentIndex = firstIncorrectIndex >= 0 ? firstIncorrectIndex : 0;
      state.view = "question";
      animateQuizPanelTransition("is-question-advancing");
      renderQuizStudyPanel();
    });

    const restartButton = createStudyQueueButton("Restart Quiz", () => {
      resetQuizSessionState(file);
      animateQuizPanelTransition("is-quiz-restarting");
      renderQuizStudyPanel();
    });

    controls.appendChild(reviewButton);
    controls.appendChild(restartButton);
    quizStudyPanel.appendChild(buildQuizResultsView(items, state, file));
    quizStudyPanel.appendChild(controls);
    return;
  }

  const item = items[state.currentIndex];
  const response = ensureQuizResponseEntry(state, item.id);

  const card = document.createElement("section");
  card.className = "quiz-study-card";

  const modeBadge = document.createElement("p");
  modeBadge.className = "quiz-study-mode";
  modeBadge.textContent = formatQuizAnswerModeLabel(item.answerMode);
  card.appendChild(modeBadge);

  const prompt = document.createElement("h3");
  prompt.className = "quiz-study-question";
  prompt.textContent = item.prompt;
  card.appendChild(prompt);

  const helper = document.createElement("p");
  helper.className = "quiz-study-helper";
  helper.textContent =
    item.answerMode === "multiple-choice"
      ? "Choose the best answer, then check your work."
      : "Write a short answer in your own words, then check it when you're ready.";
  card.appendChild(helper);

  if (item.answerMode === "multiple-choice" && item.options.length > 1) {
    const optionsWrap = document.createElement("div");
    optionsWrap.className = "quiz-study-options";

    item.options.forEach((option) => {
      const optionButton = document.createElement("button");
      optionButton.type = "button";
      optionButton.className = "quiz-study-option";
      optionButton.textContent = option;
      if (response.selectedChoice === option) {
        optionButton.classList.add("is-selected");
      }
      if (response.submitted && areAnswersEquivalent(option, item.answer)) {
        optionButton.classList.add("is-correct");
      } else if (response.submitted && response.selectedChoice === option && !response.correct) {
        optionButton.classList.add("is-incorrect");
      }
      optionButton.disabled = response.submitted;
      optionButton.addEventListener("click", () => {
        response.selectedChoice = option;
        response.typedAnswer = "";
        renderQuizStudyPanel();
      });
      optionsWrap.appendChild(optionButton);
    });

    card.appendChild(optionsWrap);
  }

  if (item.answerMode !== "multiple-choice") {
    const typedAnswerWrap = document.createElement("label");
    typedAnswerWrap.className = "quiz-study-input-wrap";
    typedAnswerWrap.innerHTML = '<span class="tutorial-label">Your answer</span>';

    const typedAnswerInput = document.createElement("textarea");
    typedAnswerInput.className = "quiz-study-input";
    typedAnswerInput.rows = 4;
    typedAnswerInput.placeholder = "Write a short answer here...";
    typedAnswerInput.value = response.typedAnswer || "";
    typedAnswerInput.disabled = response.submitted;
    typedAnswerInput.addEventListener("input", () => {
      response.typedAnswer = typedAnswerInput.value;
    });
    typedAnswerWrap.appendChild(typedAnswerInput);
    card.appendChild(typedAnswerWrap);
  }

  if (response.submitted) {
    const feedback = document.createElement("div");
    feedback.className = `quiz-study-feedback ${response.correct ? "is-correct" : "is-incorrect"}`;
    const nextFeedback = response.feedback || buildQuizAnswerFeedback(response.userAnswer, item, response.correct);
    response.feedback = nextFeedback;

    const titleLine = document.createElement("p");
    titleLine.className = "quiz-feedback-title";
    titleLine.textContent = nextFeedback.title;

    const userLine = document.createElement("p");
    userLine.className = "quiz-feedback-line";
    userLine.textContent = nextFeedback.userLine;

    const answerLine = document.createElement("p");
    answerLine.className = "quiz-feedback-line";
    answerLine.textContent = nextFeedback.answerLine;

    const fixLine = document.createElement("p");
    fixLine.className = "quiz-feedback-line";
    fixLine.textContent = nextFeedback.fixLine;

    feedback.appendChild(titleLine);
    if (nextFeedback.userLine) {
      feedback.appendChild(userLine);
    }
    if (nextFeedback.answerLine) {
      feedback.appendChild(answerLine);
    }
    if (nextFeedback.fixLine) {
      feedback.appendChild(fixLine);
    }
    card.appendChild(feedback);
  }

  const controls = document.createElement("div");
  controls.className = "result-card-actions quiz-study-controls";
  const isLastQuestion = state.currentIndex >= items.length - 1;

  const prevButton = createStudyQueueButton("Previous", () => {
    state.currentIndex = Math.max(0, state.currentIndex - 1);
    animateQuizPanelTransition("is-question-advancing");
    renderQuizStudyPanel();
  });
  prevButton.disabled = state.currentIndex === 0;

  const checkButton = createStudyQueueButton(
    response.submitted ? "Checked" : "Check Answer",
    () => submitCurrentQuizAnswer(items, state)
  );
  checkButton.disabled = response.submitted;

  const nextButton = createStudyQueueButton(
    isLastQuestion ? "Show Results" : "Next Question",
    () => advanceQuizQuestion(items, state)
  );
  nextButton.disabled = !response.submitted;

  const restartButton = createStudyQueueButton("Restart Quiz", () => {
    resetQuizSessionState(file);
    animateQuizPanelTransition("is-quiz-restarting");
    renderQuizStudyPanel();
  });

  controls.appendChild(prevButton);
  controls.appendChild(checkButton);
  controls.appendChild(nextButton);
  controls.appendChild(restartButton);

  quizStudyPanel.appendChild(card);
  quizStudyPanel.appendChild(controls);
}

function submitCurrentQuizAnswer(items, state) {
  const item = items[state.currentIndex];
  if (!item) {
    return;
  }
  const response = ensureQuizResponseEntry(state, item.id);
  const typedAnswer = String(response.typedAnswer || "").trim();
  const chosenAnswer = String(response.selectedChoice || "").trim();
  const userAnswer = item.answerMode === "multiple-choice" ? chosenAnswer : typedAnswer;

  if (!userAnswer) {
    statusText.textContent =
      item.answerMode === "multiple-choice"
        ? "Choose one answer before checking."
        : "Type your answer before checking.";
    return;
  }

  response.userAnswer = userAnswer;
  response.correct = evaluateQuizResponse(userAnswer, item);
  response.submitted = true;
  response.feedback = buildQuizAnswerFeedback(userAnswer, item, response.correct);

  if (state.currentIndex >= items.length - 1) {
    state.completed = true;
  }

  animateQuizPanelTransition("is-answer-checking");
  renderQuizStudyPanel();
  statusText.textContent = response.correct
    ? "Nice work. That answer checks out."
    : "Checked. Review what you missed, then keep going.";
}

function advanceQuizQuestion(items, state) {
  if (state.currentIndex >= items.length - 1) {
    state.completed = true;
    state.view = "results";
    animateQuizPanelTransition("is-results-revealing");
    renderQuizStudyPanel();
    const score = getQuizScoreSummary(state, items);
    statusText.textContent = `Quiz complete. Score: ${score.correctCount} / ${score.total}.`;
    return;
  }
  state.currentIndex += 1;
  state.view = "question";
  animateQuizPanelTransition("is-question-advancing");
  renderQuizStudyPanel();
}

function evaluateQuizResponse(userAnswer, item) {
  if (areAnswersEquivalent(userAnswer, item.answer)) {
    return true;
  }

  const answerTokens = tokenizeComparisonText(item.answer);
  const userTokens = tokenizeComparisonText(userAnswer);
  if (answerTokens.length === 0 || userTokens.length === 0) {
    return false;
  }

  const uniqueAnswerTokens = [...new Set(answerTokens)];
  const overlapCount = uniqueAnswerTokens.filter((token) => userTokens.includes(token)).length;
  const requiredMatches =
    uniqueAnswerTokens.length <= 2
      ? uniqueAnswerTokens.length
      : Math.max(2, Math.ceil(uniqueAnswerTokens.length * 0.6));
  return overlapCount >= Math.min(requiredMatches, uniqueAnswerTokens.length);
}

function areAnswersEquivalent(a, b) {
  return normalizeComparisonText(a) === normalizeComparisonText(b);
}

function normalizeComparisonText(value) {
  return decodeHtmlEntities(String(value || ""))
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeComparisonText(value) {
  return normalizeComparisonText(value)
    .split(" ")
    .filter((token) => token.length >= 3);
}

function ensureStudyQueue(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.map((item) => normalizeStudyItem(item)).filter(Boolean);
}

function normalizeStudyItem(item) {
  if (!item || typeof item !== "object") {
    return null;
  }
  const metadata = item.metadata && typeof item.metadata === "object" ? item.metadata : {};
  const kind = item.kind === "flashcard" || item.kind === "task" || item.kind === "plan" ? item.kind : "flashcard";
  const front = typeof item.front === "string" ? item.front : "";
  const back = typeof item.back === "string" ? item.back : "";
  return {
    id: typeof item.id === "string" ? item.id : buildStudyItemId(kind, front, back),
    kind,
    front,
    back,
    metadata: {
      createdAt: typeof metadata.createdAt === "string" ? metadata.createdAt : new Date().toISOString(),
      dueDate: typeof metadata.dueDate === "string" ? metadata.dueDate : undefined,
      priority: Number.isFinite(metadata.priority) ? metadata.priority : undefined,
      known: Boolean(metadata.known)
    },
    skippedCount: Number.isFinite(item.skippedCount) ? item.skippedCount : 0
  };
}

function ensureStudyQueueFields(file) {
  if (!file) {
    return;
  }
  if (!Array.isArray(file.studyQueue)) {
    file.studyQueue = [];
  }
  if (!Number.isFinite(file.studyQueueIndex)) {
    file.studyQueueIndex = 0;
  }
  if (!Array.isArray(file.knownStudyItemIds)) {
    file.knownStudyItemIds = [];
  }
}

function hasStudyQueueItems(file) {
  if (!file) {
    return false;
  }
  ensureUnifiedStudyQueue(file);
  return Array.isArray(file.studyQueue) && file.studyQueue.length > 0;
}

function initStudyQueueUiIfNeeded() {
  if (studyQueueUi || !flashcardsVisualGrid) {
    return;
  }

  flashcardsVisualGrid.innerHTML = "";

  const card = document.createElement("div");
  card.className = "flashcard-visual";
  card.setAttribute("role", "button");
  card.setAttribute("aria-roledescription", "flashcard");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-pressed", "false");
  card.setAttribute("aria-label", "Flashcard front. Click to reveal the answer.");
  card.classList.add("flashcard-virtual");
  card.dataset.face = "front";
  card.dataset.kind = "flashcard";
  card.dataset.overlay = "";

  const cardInner = document.createElement("div");
  cardInner.className = "flashcard-visual-inner";

  const frontFaceUi = createStudyQueueFace("flashcard-visual-front", "Click to reveal answer");
  const backFaceUi = createStudyQueueFace("flashcard-visual-back", "Click to flip back");

  cardInner.appendChild(frontFaceUi.face);
  cardInner.appendChild(backFaceUi.face);
  card.appendChild(cardInner);

  const meta = document.createElement("div");
  meta.className = "flashcard-session-meta";

  const progress = document.createElement("p");
  progress.className = "flashcard-session-progress";

  const helper = document.createElement("p");
  helper.className = "flashcard-session-hint";
  helper.textContent = "Tap the card to flip.";

  meta.appendChild(progress);
  meta.appendChild(helper);

  const controls = document.createElement("div");
  controls.className = "result-card-actions flashcard-session-controls";

  const prevButton = createStudyQueueButton("Previous", () => moveStudyQueueIndex(-1));
  const nextButton = createStudyQueueButton("Next", () => moveStudyQueueIndex(1));
  const shuffleButton = createStudyQueueButton("Shuffle", shuffleStudyQueue);
  const skipButton = createStudyQueueButton("Skip", skipCurrentStudyItem);
  const knownButton = createStudyQueueButton("Know It", markCurrentStudyItemKnown);

  controls.appendChild(prevButton);
  controls.appendChild(nextButton);
  controls.appendChild(shuffleButton);
  controls.appendChild(skipButton);
  controls.appendChild(knownButton);

  card.addEventListener("click", flipStudyQueueCard);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flipStudyQueueCard();
    }
  });

  flashcardsVisualGrid.appendChild(card);
  flashcardsVisualGrid.appendChild(meta);
  flashcardsVisualGrid.appendChild(controls);

  studyQueueUi = {
    container: flashcardsVisualGrid,
    card,
    inner: cardInner,
    frontKicker: frontFaceUi.kicker,
    frontTitle: frontFaceUi.title,
    frontText: frontFaceUi.text,
    backKicker: backFaceUi.kicker,
    backTitle: backFaceUi.title,
    backText: backFaceUi.text,
    progress,
    helper,
    buttons: {
      prev: prevButton,
      next: nextButton,
      shuffle: shuffleButton,
      skip: skipButton,
      known: knownButton
    },
    currentItemId: ""
  };

  bindStudyQueueKeyboardShortcuts();
}

function createStudyQueueFace(faceClassName, hintText) {
  const face = document.createElement("div");
  face.className = `flashcard-visual-face ${faceClassName}`;

  const head = document.createElement("div");
  head.className = "flashcard-visual-head";

  const kicker = document.createElement("span");
  kicker.className = "flashcard-visual-kicker";

  const inlineHint = document.createElement("span");
  inlineHint.className = "flashcard-visual-inline-hint";
  inlineHint.textContent = hintText;

  const title = document.createElement("p");
  title.className = "flashcard-visual-title";

  const text = document.createElement("p");
  text.className = "flashcard-visual-text";

  head.appendChild(kicker);
  if (hintText) {
    head.appendChild(inlineHint);
  }
  face.appendChild(head);
  face.appendChild(title);
  face.appendChild(text);

  return { face, kicker, title, text };
}

function createStudyQueueButton(label, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "secondary-btn";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function bindStudyQueueKeyboardShortcuts() {
  if (studyQueueKeyboardBound) {
    return;
  }
  studyQueueKeyboardBound = true;
  document.addEventListener("keydown", handleStudyQueueKeydown);
}

function handleStudyQueueKeydown(event) {
  if (!flashcardsCard || flashcardsCard.classList.contains("hidden")) {
    return;
  }
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) {
    return;
  }
  const target = event.target;
  if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveStudyQueueIndex(-1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    moveStudyQueueIndex(1);
  } else if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    flipStudyQueueCard();
  } else if (event.key === "s" || event.key === "S") {
    event.preventDefault();
    skipCurrentStudyItem();
  } else if (event.key === "k" || event.key === "K") {
    event.preventDefault();
    markCurrentStudyItemKnown();
  }
}

function ensureUnifiedStudyQueue(file) {
  if (!file) {
    return;
  }
  ensureStudyQueueFields(file);
  file.studyQueue = file.studyQueue.filter((item) => item && item.kind === "flashcard");
  file.studyQueueIndex = Math.min(file.studyQueueIndex || 0, Math.max(file.studyQueue.length - 1, 0));
  if (file.studyQueue.length > 0) {
    return;
  }

  const knownIds = new Set(file.knownStudyItemIds || []);
  const items = buildStudyItemsFromData(
    {
      flashcards: file.flashcards
    },
    knownIds
  );
  file.studyQueue = sortStudyItems(items.filter((item) => !knownIds.has(item.id)));
  file.studyQueueIndex = Math.min(file.studyQueueIndex || 0, Math.max(file.studyQueue.length - 1, 0));
  console.info("[StudyQueue] Initialized queue", file.studyQueue.length);
}

function appendStudyItemsToQueue(file, sourceData) {
  if (!file || !sourceData) {
    return;
  }
  ensureStudyQueueFields(file);
  const knownIds = new Set(file.knownStudyItemIds || []);
  const items = buildStudyItemsFromData(sourceData, knownIds);
  const existingIds = new Set(file.studyQueue.map((item) => item.id));
  const filtered = items.filter((item) => !knownIds.has(item.id) && !existingIds.has(item.id));
  if (filtered.length === 0) {
    return;
  }
  const ordered = sortStudyItems(filtered);
  if (file.studyQueue.length === 0) {
    file.studyQueue = ordered;
    file.studyQueueIndex = 0;
  } else {
    file.studyQueue = file.studyQueue.concat(ordered);
  }
  console.info("[StudyQueue] Appended items", ordered.length);
}

function buildStudyItemsFromData(sourceData, knownIds) {
  const items = [];
  const createdAt = new Date().toISOString();
  const knownSet = knownIds instanceof Set ? knownIds : new Set(knownIds || []);

  ensureStringArray(sourceData?.flashcards).forEach((card, index) => {
    const parsed = parseFlashcardText(card, index + 1);
    const item = createStudyItem("flashcard", parsed.front, parsed.back, {
      createdAt,
      known: knownSet.has(buildStudyItemId("flashcard", parsed.front, parsed.back))
    });
    items.push(item);
  });

  return items;
}

function createStudyItem(kind, front, back, metadata, skippedCount = 0) {
  const safeFront = decodeHtmlEntities(String(front || "")).trim();
  const safeBack = decodeHtmlEntities(String(back || "")).trim() || "Review your notes.";
  const meta = metadata && typeof metadata === "object" ? metadata : {};
  return {
    id: buildStudyItemId(kind, safeFront, safeBack),
    kind,
    front: safeFront,
    back: safeBack,
    metadata: {
      createdAt: typeof meta.createdAt === "string" ? meta.createdAt : new Date().toISOString(),
      dueDate: typeof meta.dueDate === "string" ? meta.dueDate : undefined,
      priority: Number.isFinite(meta.priority) ? meta.priority : undefined,
      known: Boolean(meta.known)
    },
    skippedCount: Number.isFinite(skippedCount) ? skippedCount : 0
  };
}

function buildStudyItemId(kind, front, back) {
  return `study_${hashStudyKey(`${kind}|${front}|${back}`)}`;
}

function hashStudyKey(text) {
  const value = String(text || "");
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function splitStudyLineForItem(line) {
  const cleaned = String(line || "").replace(/\s+/g, " ").trim();
  if (!cleaned) {
    return { front: "", back: "" };
  }
  const separatorIndex = cleaned.indexOf(":");
  if (separatorIndex > 0 && separatorIndex < cleaned.length - 1) {
    return {
      front: cleaned.slice(0, separatorIndex).trim(),
      back: cleaned.slice(separatorIndex + 1).trim()
    };
  }
  return { front: cleaned, back: cleaned };
}

function extractStudyMetadata(text) {
  const metadata = {};
  const normalized = String(text || "");
  const dueMatch = normalized.match(/\b(?:due|by)\s*[:\-]?\s*(\d{4}-\d{2}-\d{2})/i);
  if (dueMatch) {
    metadata.dueDate = dueMatch[1];
  } else {
    const altDateMatch = normalized.match(/\b(\d{1,2})[\/-](\d{1,2})(?:[\/-](\d{2,4}))?\b/);
    if (altDateMatch) {
      const year = altDateMatch[3] ? Number(altDateMatch[3]) : new Date().getFullYear();
      const month = String(altDateMatch[1]).padStart(2, "0");
      const day = String(altDateMatch[2]).padStart(2, "0");
      metadata.dueDate = `${year}-${month}-${day}`;
    }
  }

  const priorityMatch = normalized.match(/\bpriority\s*[:\-]?\s*(high|medium|low|[1-5])\b/i);
  if (priorityMatch) {
    const value = priorityMatch[1].toLowerCase();
    if (value === "high") {
      metadata.priority = 3;
    } else if (value === "medium") {
      metadata.priority = 2;
    } else if (value === "low") {
      metadata.priority = 1;
    } else {
      metadata.priority = Number(value);
    }
  }

  return metadata;
}

function sortStudyItems(items) {
  const kindOrder = { task: 0, plan: 1, flashcard: 2 };
  return items
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const dueA = a.item.metadata?.dueDate ? Date.parse(a.item.metadata.dueDate) : Number.POSITIVE_INFINITY;
      const dueB = b.item.metadata?.dueDate ? Date.parse(b.item.metadata.dueDate) : Number.POSITIVE_INFINITY;
      if (dueA !== dueB) {
        return dueA - dueB;
      }
      const priorityA = Number.isFinite(a.item.metadata?.priority) ? a.item.metadata.priority : 0;
      const priorityB = Number.isFinite(b.item.metadata?.priority) ? b.item.metadata.priority : 0;
      if (priorityA !== priorityB) {
        return priorityB - priorityA;
      }
      const kindA = kindOrder[a.item.kind] ?? 3;
      const kindB = kindOrder[b.item.kind] ?? 3;
      if (kindA !== kindB) {
        return kindA - kindB;
      }
      return a.index - b.index;
    })
    .map(({ item }) => item);
}

function getActiveStudyQueue() {
  const file = getActiveFile();
  if (!file) {
    return [];
  }
  ensureUnifiedStudyQueue(file);
  return file.studyQueue;
}

function renderStudyQueueViewer() {
  if (!flashcardsVisualGrid) {
    return;
  }
  const file = getActiveFile();
  if (!file) {
    return;
  }

  ensureUnifiedStudyQueue(file);
  initStudyQueueUiIfNeeded();
  if (!studyQueueUi) {
    return;
  }

  const queue = getActiveStudyQueue();
  if (queue.length === 0) {
    flashcardsVisualGrid.classList.add("hidden");
    studyQueueUi.currentItemId = "";
    studyQueueUi.progress.textContent = "Card 0 of 0";
    studyQueueUi.helper.textContent = "Generate a study pack to start your flashcard session.";
    statusText.textContent = "Generate a study pack to start your session.";
    updateFlashcardStudyActions(file);
    refreshCopyButtonsFromContent();
    return;
  }

  flashcardsVisualGrid.classList.remove("hidden");

  const index = Math.min(Math.max(file.studyQueueIndex || 0, 0), queue.length - 1);
  file.studyQueueIndex = index;
  const item = queue[index];
  const kindLabel = "Flashcard";
  const faceLabel = isStudyCardFlipped ? "Back" : "Front";
  const faceTitles = getStudyQueueFaceTitles(item.kind);
  const isNewCard = studyQueueUi.currentItemId !== item.id;

  studyQueueUi.frontKicker.textContent = kindLabel;
  studyQueueUi.frontTitle.textContent = faceTitles.front;
  studyQueueUi.frontText.textContent = item.front;
  studyQueueUi.backKicker.textContent = kindLabel;
  studyQueueUi.backTitle.textContent = faceTitles.back;
  studyQueueUi.backText.textContent = item.back;
  studyQueueUi.card.dataset.kind = item.kind;
  studyQueueUi.card.dataset.face = faceLabel.toLowerCase();
  studyQueueUi.card.classList.toggle("is-flipped", isStudyCardFlipped);
  studyQueueUi.card.setAttribute("aria-pressed", isStudyCardFlipped ? "true" : "false");
  studyQueueUi.card.setAttribute(
    "aria-label",
    isStudyCardFlipped
      ? `${kindLabel} back. Click to flip back.`
      : `${kindLabel} front. Click to reveal the answer.`
  );
  studyQueueUi.helper.textContent = isStudyCardFlipped ? "Tap the card to flip back." : "Tap the card to reveal the answer.";
  if (isNewCard) {
    animateStudyQueueCardEntry(studyQueueUi.card);
  }
  studyQueueUi.currentItemId = item.id;
  updateStudyQueueProgress(queue, index);
  updateStudyQueueControls(queue, index);

  refreshCopyButtonsFromContent();
}

function getStudyQueueFaceTitles(kind) {
  if (kind === "task") {
    return {
      front: "Task Prompt",
      back: "What To Do"
    };
  }
  if (kind === "plan") {
    return {
      front: "Study Step",
      back: "Key Detail"
    };
  }
  return {
    front: "Question",
    back: "Answer"
  };
}

function animateStudyQueueCardEntry(card) {
  if (!card) {
    return;
  }
  card.classList.remove("is-card-entering");
  void card.offsetWidth;
  card.classList.add("is-card-entering");
}

function animateStudyQueueCardAction(actionName) {
  if (!studyQueueUi?.card) {
    return;
  }

  if (flashcardActionAnimationTimer) {
    clearTimeout(flashcardActionAnimationTimer);
    flashcardActionAnimationTimer = 0;
  }

  studyQueueUi.card.classList.remove(
    "is-moving-next",
    "is-moving-prev",
    "is-skipping",
    "is-shuffling",
    "is-marking-known"
  );
  studyQueueUi.card.dataset.overlay = actionName === "is-marking-known" ? "✓ Known" : "";
  void studyQueueUi.card.offsetWidth;
  studyQueueUi.card.classList.add(actionName);

  flashcardActionAnimationTimer = window.setTimeout(() => {
    if (studyQueueUi?.card) {
      studyQueueUi.card.classList.remove(
        "is-moving-next",
        "is-moving-prev",
        "is-skipping",
        "is-shuffling",
        "is-marking-known"
      );
      studyQueueUi.card.dataset.overlay = "";
    }
    flashcardActionAnimationTimer = 0;
  }, 520);
}

function animateQuizPanelTransition(animationName) {
  if (!quizStudyPanel) {
    return;
  }

  if (quizPanelAnimationTimer) {
    clearTimeout(quizPanelAnimationTimer);
    quizPanelAnimationTimer = 0;
  }

  quizStudyPanel.classList.remove(
    "is-question-advancing",
    "is-answer-checking",
    "is-quiz-restarting",
    "is-results-revealing"
  );
  void quizStudyPanel.offsetWidth;
  quizStudyPanel.classList.add(animationName);

  quizPanelAnimationTimer = window.setTimeout(() => {
    if (quizStudyPanel) {
      quizStudyPanel.classList.remove(
        "is-question-advancing",
        "is-answer-checking",
        "is-quiz-restarting",
        "is-results-revealing"
      );
    }
    quizPanelAnimationTimer = 0;
  }, 520);
}

function updateStudyQueueProgress(queue, index) {
  if (!studyQueueUi) {
    return;
  }
  const total = queue.length;
  studyQueueUi.progress.textContent = `Card ${index + 1} of ${total}`;
}

function updateStudyQueueControls(queue, index) {
  if (!studyQueueUi) {
    return;
  }
  const hasItems = queue.length > 0;
  studyQueueUi.buttons.prev.disabled = !hasItems || index <= 0;
  studyQueueUi.buttons.next.disabled = !hasItems || index >= queue.length - 1;
  studyQueueUi.buttons.shuffle.disabled = !hasItems;
  studyQueueUi.buttons.skip.disabled = !hasItems;
  studyQueueUi.buttons.known.disabled = !hasItems;
}

function getStudyQueueFlashcardStrings() {
  const queue = getActiveStudyQueue();
  return queue.map((item) => formatStudyItemAsFlashcardString(item));
}

function formatStudyItemAsFlashcardString(item) {
  const front = decodeHtmlEntities(String(item?.front || ""));
  const back = decodeHtmlEntities(String(item?.back || ""));
  return `Front: ${front} | Back: ${back || "Review your notes."}`;
}

function flipStudyQueueCard() {
  if (!studyQueueUi || isStudyCardAnimating) {
    return;
  }
  const queue = getActiveStudyQueue();
  if (queue.length === 0) {
    return;
  }
  isStudyCardAnimating = true;
  isStudyCardFlipped = !isStudyCardFlipped;
  studyQueueUi.card.classList.add("is-flipping");
  requestAnimationFrame(() => {
    renderStudyQueueViewer();
  });
  setTimeout(() => {
    if (studyQueueUi) {
      studyQueueUi.card.classList.remove("is-flipping");
    }
    isStudyCardAnimating = false;
  }, 420);
}

function moveStudyQueueIndex(delta) {
  const file = getActiveFile();
  if (!file) {
    return;
  }
  const queue = getActiveStudyQueue();
  if (queue.length === 0) {
    return;
  }
  const nextIndex = Math.min(Math.max((file.studyQueueIndex || 0) + delta, 0), queue.length - 1);
  if (nextIndex === file.studyQueueIndex) {
    return;
  }
  animateStudyQueueCardAction(delta > 0 ? "is-moving-next" : "is-moving-prev");
  file.studyQueueIndex = nextIndex;
  isStudyCardFlipped = false;
  persistFiles();
  renderStudyQueueViewer();
}

function skipCurrentStudyItem() {
  const file = getActiveFile();
  if (!file) {
    return;
  }
  const queue = getActiveStudyQueue();
  if (queue.length === 0) {
    return;
  }
  const index = Math.min(Math.max(file.studyQueueIndex || 0, 0), queue.length - 1);
  animateStudyQueueCardAction("is-skipping");
  const [item] = queue.splice(index, 1);
  if (!item) {
    return;
  }
  item.skippedCount = Number.isFinite(item.skippedCount) ? item.skippedCount + 1 : 1;
  queue.push(item);
  file.studyQueue = queue;
  file.studyQueueIndex = Math.min(index, queue.length - 1);
  isStudyCardFlipped = false;
  persistFiles();
  renderStudyQueueViewer();
  refreshFlashcardsPdfPreview();
}

function markCurrentStudyItemKnown() {
  if (!requireAccount("save progress")) {
    return;
  }
  const file = getActiveFile();
  if (!file) {
    return;
  }
  const queue = getActiveStudyQueue();
  if (queue.length === 0) {
    return;
  }
  const index = Math.min(Math.max(file.studyQueueIndex || 0, 0), queue.length - 1);
  animateStudyQueueCardAction("is-marking-known");
  const [item] = queue.splice(index, 1);
  if (!item) {
    return;
  }
  ensureStudyQueueFields(file);
  if (!file.knownStudyItemIds.includes(item.id)) {
    file.knownStudyItemIds.push(item.id);
  }
  file.studyQueue = queue;
  file.studyQueueIndex = Math.min(index, Math.max(queue.length - 1, 0));
  isStudyCardFlipped = false;
  // TODO: Replace with authenticated API call to persist known items server-side.
  persistKnownStudyItem(item).catch(() => {});
  persistFiles();
  console.info("[StudyQueue] Marked known", item.id);
  renderStudyQueueViewer();
  refreshFlashcardsPdfPreview();
}

async function persistKnownStudyItem(item) {
  if (!ENABLE_AUTH || !isUserAuthenticated) {
    return;
  }
  // TODO: Swap in the site's auth token / user id when enabling persistence.
  await fetch("/api/study/mark-known", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: item.id, known: true })
  });
}

function shuffleStudyQueue() {
  const file = getActiveFile();
  if (!file) {
    return;
  }
  const queue = getActiveStudyQueue();
  if (queue.length <= 1) {
    return;
  }
  animateStudyQueueCardAction("is-shuffling");
  for (let i = queue.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [queue[i], queue[j]] = [queue[j], queue[i]];
  }
  file.studyQueue = queue;
  file.studyQueueIndex = 0;
  isStudyCardFlipped = false;
  persistFiles();
  renderStudyQueueViewer();
  refreshFlashcardsPdfPreview();
}

function bindFlashcardCopyButton() {
  if (!copyFlashcardsButton) {
    return;
  }
  copyFlashcardsButton.addEventListener("click", async () => {
    const lines = getStudyQueueFlashcardStrings();
    if (lines.length === 0) {
      statusText.textContent = "No flashcards to copy yet.";
      return;
    }
    const text = `Flashcards\n${lines.join("\n")}`;
    const copied = await copyTextToClipboard(text);
    statusText.textContent = copied ? "Flashcards copied." : "Could not copy automatically. Please try again.";
  });
}

function decodeHtmlEntities(input) {
  const raw = String(input || "");
  if (!raw || !raw.includes("&")) {
    return raw;
  }

  const parser = document.createElement("textarea");
  parser.innerHTML = raw;
  return parser.value;
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

function setDownloadButtonEnabledByContent(button, listElement) {
  if (!button || !listElement) {
    return;
  }
  button.disabled = !hasCopyableItems(listElement);
}

function setAllDownloadButtonsEnabled(enabled) {
  downloadTargets.forEach(({ button }) => {
    if (!button) {
      return;
    }
    button.disabled = !enabled;
  });
  if (downloadFlashcardsButton) {
    downloadFlashcardsButton.disabled = !enabled;
  }
  if (printFlashcardsButton) {
    printFlashcardsButton.disabled = !enabled;
  }
}

function setAllCopyButtonsEnabled(enabled) {
  copyTargets.forEach(({ button }) => {
    if (!button) {
      return;
    }
    button.disabled = !enabled;
  });
  if (copyFlashcardsButton) {
    copyFlashcardsButton.disabled = !enabled;
  }
}

function refreshCopyButtonsFromContent() {
  copyTargets.forEach(({ button, list }) => {
    setCopyButtonEnabledByContent(button, list);
  });
  if (copyFlashcardsButton) {
    setCopyButtonEnabled(copyFlashcardsButton, getActiveStudyQueue().length > 0);
  }
  downloadTargets.forEach(({ button, list }) => {
    setDownloadButtonEnabledByContent(button, list);
  });
  if (downloadFlashcardsButton) {
    downloadFlashcardsButton.disabled = getStudyQueueFlashcardStrings().length === 0;
  }
  if (printFlashcardsButton) {
    printFlashcardsButton.disabled = getStudyQueueFlashcardStrings().length === 0;
  }
  updateFlashcardStudyActions();
  updateQuizStudyActions();
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
  if (document.body.classList.contains("performance-mode")) {
    return;
  }

  if (fileOpenAnimationFrameA) {
    cancelAnimationFrame(fileOpenAnimationFrameA);
    fileOpenAnimationFrameA = 0;
  }
  if (fileOpenAnimationFrameB) {
    cancelAnimationFrame(fileOpenAnimationFrameB);
    fileOpenAnimationFrameB = 0;
  }

  fileOpenAnimationFrameA = requestAnimationFrame(() => {
    fileOpenAnimationFrameA = 0;
    fileOpenAnimationFrameB = requestAnimationFrame(() => {
      fileOpenAnimationFrameB = 0;
      const activeChip = filesList.querySelector(".file-chip.active");
      if (activeChip) {
        playTransientAnimation(activeChip, "file-open-in");
      }

      if (summarizeModeCard && !summarizeModeCard.classList.contains("hidden")) {
        playTransientAnimation(summarizeModeCard, "island-pop");
      }
      if (inputCard && !inputCard.classList.contains("hidden")) {
        playTransientAnimation(inputCard, "section-switch-in");
      }
    });
  });
}

function playTransientAnimation(element, className) {
  if (!element || !className) {
    return;
  }

  const safeClassToken = className.replace(/[^a-zA-Z0-9]+(.)/g, (_match, chr) => String(chr || "").toUpperCase());
  const timerKey = `${safeClassToken}Timer`;
  const runKey = `${safeClassToken}Run`;
  const nextRun = String((Number(element.dataset[runKey] || 0) + 1) % Number.MAX_SAFE_INTEGER || 1);
  element.dataset[runKey] = nextRun;
  const existingTimer = Number(element.dataset[timerKey] || 0);
  if (existingTimer) {
    clearTimeout(existingTimer);
    element.dataset[timerKey] = "";
  }

  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);

  const clearClass = () => {
    if (element.dataset[runKey] !== nextRun) {
      return;
    }
    element.classList.remove(className);
    const timerId = Number(element.dataset[timerKey] || 0);
    if (timerId) {
      clearTimeout(timerId);
      element.dataset[timerKey] = "";
    }
  };

  element.addEventListener(
    "animationend",
    () => {
      clearClass();
    },
    { once: true }
  );

  // Fallback for iOS/Safari cases where animationend may be missed.
  const fallbackTimer = window.setTimeout(clearClass, 420);
  element.dataset[timerKey] = String(fallbackTimer);
}

function getClerkPublishableKey() {
  const metaKey =
    document.querySelector('meta[name="clerk-publishable-key"]')?.getAttribute("content") || "";
  const scriptKey =
    document
      .querySelector("script[data-clerk-publishable-key]")?.getAttribute("data-clerk-publishable-key") ||
    document
      .querySelector("script[data-clerk-publishableKey]")?.getAttribute("data-clerk-publishableKey") ||
    "";
  const globalKey =
    window.__clerk_publishable_key ||
    window.__clerk_publishable_key__ ||
    window.__CLERK_PUBLISHABLE_KEY__ ||
    window.__clerkPublishableKey ||
    window.Clerk?.publishableKey ||
    "";
  const configKey =
    window.APP_CONFIG?.CLERK_PUBLISHABLE_KEY ||
    window.CLERK_PUBLISHABLE_KEY ||
    metaKey ||
    scriptKey ||
    globalKey ||
    "";
  if (typeof configKey !== "string") {
    return "";
  }
  const cleaned = configKey.trim().replace(/^['"]|['"]$/g, "");
  if (cleaned.startsWith("pk_test_") || cleaned.startsWith("pk_live_")) {
    return cleaned;
  }
  return "";
}

function decodeFrontendApiFromPublishableKey(key) {
  if (!key || typeof key !== "string") {
    return "";
  }

  const parts = key.split("_");
  if (parts.length < 3) {
    return "";
  }

  try {
    const payload = parts.slice(2).join("_");
    const padded = payload.padEnd(Math.ceil(payload.length / 4) * 4, "=");
    const decoded = atob(padded);
    return decoded.endsWith("$") ? decoded.slice(0, -1) : decoded;
  } catch (_error) {
    return "";
  }
}

function getClerkScriptCandidates(publishableKey) {
  const candidates = [];
  const frontendApi = decodeFrontendApiFromPublishableKey(publishableKey);

  if (frontendApi) {
    candidates.push(`https://${frontendApi}/npm/@clerk/clerk-js@latest/dist/clerk.browser.js`);
  }

  candidates.push(
    "https://cdn.jsdelivr.net/npm/@clerk/clerk-js@latest/dist/clerk.browser.js",
    "https://unpkg.com/@clerk/clerk-js@latest/dist/clerk.browser.js"
  );

  return candidates;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.loaded = "false";
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

function renderQuizQuestionsList(rawQuestions) {
  if (!quizQuestionsList) {
    return;
  }

  quizQuestionsList.innerHTML = "";
  const items = buildQuizSessionItems(rawQuestions);

  if (items.length === 0) {
    const fallbackItem = document.createElement("li");
    fallbackItem.textContent = "No items generated yet.";
    quizQuestionsList.appendChild(fallbackItem);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    const typeBadge = document.createElement("span");
    typeBadge.className = "quiz-question-badge";
    typeBadge.textContent = formatQuizAnswerModeLabel(item.answerMode);

    const text = document.createElement("span");
    text.textContent = item.prompt;

    li.appendChild(typeBadge);
    li.appendChild(text);
    quizQuestionsList.appendChild(li);
  });
}

function buildQuizSessionItems(rawQuestions) {
  const parsed = ensureStringArray(rawQuestions)
    .map((question, index) => parseQuizQuestionItem(question, index + 1))
    .filter(Boolean);
  const answerPool = [...new Set(parsed.map((item) => item.answer).filter(Boolean))];

  return parsed.map((item, index) => {
    const options = buildQuizQuestionOptions(item, answerPool, index);
    const answerMode = item.answerMode === "multiple-choice" && options.length > 1 ? "multiple-choice" : "short-answer";
    return {
      ...item,
      answerMode,
      options: answerMode === "multiple-choice" ? options : []
    };
  });
}

function parseQuizQuestionItem(rawText, fallbackIndex) {
  const decoded = decodeHtmlEntities(String(rawText || "")).replace(/\s+/g, " ").trim();
  if (!decoded) {
    return null;
  }

  const parts = decoded.split("||").map((part) => part.trim()).filter(Boolean);
  const metadata = {};
  let basePrompt = decoded;

  parts.forEach((part, index) => {
    if (/^type\s*:/i.test(part)) {
      metadata.type = part.replace(/^type\s*:/i, "").trim().toLowerCase();
      return;
    }
    if (/^question\s*:/i.test(part)) {
      metadata.question = part.replace(/^question\s*:/i, "").trim();
      return;
    }
    if (/^answer\s*:/i.test(part)) {
      metadata.answer = part.replace(/^answer\s*:/i, "").trim();
      return;
    }
    if (index === 0) {
      basePrompt = part;
    }
  });

  const prompt = decodeHtmlEntities(String(metadata.question || basePrompt).replace(/^Question\s*\d+\s*:\s*/i, "").trim());
  let answer = decodeHtmlEntities(String(metadata.answer || "").trim());

  if (!answer) {
    const quotedMatches = [...prompt.matchAll(/"([^"]+)"/g)].map((match) => match[1].trim()).filter(Boolean);
    if (quotedMatches.length > 0) {
      answer = quotedMatches[quotedMatches.length - 1];
    }
  }

  if (!answer) {
    answer = prompt;
  }

  return {
    id: `quiz_${hashStudyKey(`${fallbackIndex}|${decoded}`)}`,
    prompt,
    answer,
    raw: decoded,
    answerMode: metadata.type === "multiple-choice" ? "multiple-choice" : "short-answer"
  };
}

function buildQuizQuestionOptions(item, answerPool, index) {
  if (item.answerMode !== "multiple-choice") {
    return [];
  }
  const normalizedAnswer = normalizeComparisonText(item.answer);
  const distractorPool = answerPool.filter((answer) => normalizeComparisonText(answer) !== normalizedAnswer);
  const selected = [];

  for (let offset = 0; offset < distractorPool.length && selected.length < 3; offset += 1) {
    const candidate = distractorPool[(index + offset) % distractorPool.length];
    if (candidate && !selected.includes(candidate)) {
      selected.push(candidate);
    }
  }

  if (selected.length === 0) {
    return [];
  }

  const options = selected.slice(0, 3);
  const insertIndex = Math.min(options.length, index % (options.length + 1));
  options.splice(insertIndex, 0, item.answer);
  return options.filter(Boolean);
}

async function ensureClerkLoaded(publishableKey) {
  if (window.Clerk) {
    return true;
  }

  const candidates = getClerkScriptCandidates(publishableKey);

  for (const src of candidates) {
    try {
      await loadScript(src);
      if (window.Clerk) {
        return true;
      }
    } catch (_error) {
      // Try next CDN source.
    }
  }

  return Boolean(window.Clerk);
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

function continueAsGuest(explicit = false) {
  if (explicit) {
    isGuestMode = true;
    clearPersistedStudyData();
  }
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
  setAuthFlowLoading(false);
  updateAuthTabs("sign-in");
  resetAuthGateGuestButton();
  applyAccountGatesUi();
}

function dismissAuthGate() {
  if (hasAccount()) {
    unlockAppAfterAuth();
    return;
  }
  if (authGate) {
    authGate.classList.add("hidden");
  }
  setAuthFlowStarted(false);
  setAuthFlowLoading(false);
}

function promptAuthForFeature(featureLabel, options = {}) {
  const mustLogin = Boolean(options.mustLogin);
  if (authGateTitle) {
    authGateTitle.textContent = `Sign in to ${featureLabel}`;
  }
  if (authGateText) {
    authGateText.textContent = mustLogin
      ? "An account is required for this feature. Guest access is disabled."
      : "You can continue as a guest, but this feature requires an account.";
  }
  if (authSkipButton) {
    authSkipButton.disabled = mustLogin;
    authSkipButton.textContent = mustLogin ? "Account required" : "Continue as guest";
  }
  setAuthFlowStarted(false);
  setAuthFlowLoading(false);
  updateAuthTabs("sign-in");
  if (authGate) {
    authGate.classList.remove("hidden");
  }
  if (statusText) {
    statusText.textContent = mustLogin
      ? `Account required to ${featureLabel}.`
      : `Sign in required to ${featureLabel}.`;
  }

  if (ENABLE_AUTH && clerkLoaded && !authFormsMounted) {
    ensureAuthFormsMounted().catch((error) => {
      console.error("Could not pre-mount auth forms", error);
    });
  }
}

function requireAuthenticatedForFeature(featureLabel) {
  if (!ENABLE_AUTH || isGuestMode) {
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
    const recoveredKey = getClerkPublishableKey();
    if (recoveredKey) {
      ENABLE_AUTH = true;
      await initializeAuthGate({ preserveAuthGate: true });
    }
  }
  if (!ENABLE_AUTH) {
    if (authGateText) {
      authGateText.textContent = "Login is currently disabled in this build.";
    }
    return;
  }

  if (!clerkLoaded) {
    await initializeAuthGate({ preserveAuthGate: true });
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

function hasAccount() {
  return Boolean(ENABLE_AUTH && isUserAuthenticated && !isGuestMode);
}

function canPersistStudyData() {
  return hasAccount();
}

function requireAccount(featureLabel) {
  if (hasAccount()) {
    return true;
  }
  if (!ENABLE_AUTH) {
    if (statusText) {
      statusText.textContent = `Account required to ${featureLabel}. Login is unavailable.`;
    }
    return false;
  }
  promptAuthForFeature(featureLabel, { mustLogin: true });
  return false;
}

function resetAuthGateGuestButton() {
  if (authSkipButton) {
    authSkipButton.disabled = false;
    authSkipButton.textContent = "Continue as guest";
  }
}

function canGenerateStudyPack() {
  if (hasAccount()) {
    return true;
  }
  if (guestGenerationCount >= 1) {
    if (statusText) {
      statusText.textContent = "Account required to generate more than one study pack.";
    }
    promptAuthForFeature("generate more than one study pack", { mustLogin: true });
    return false;
  }
  return true;
}

function recordGenerationSuccess() {
  if (!hasAccount()) {
    guestGenerationCount += 1;
  }
}

function bootstrapAuthGate() {
  const initialKey = getClerkPublishableKey();
  if (initialKey) {
    ENABLE_AUTH = true;
    initializeAuthGate().catch((error) => {
      console.error("Initial auth bootstrap failed", error);
    });
    return;
  }

  if (authGate) {
    authGate.classList.add("hidden");
  }
  if (clerkUserButton) {
    clerkUserButton.classList.add("hidden");
  }

  window.setTimeout(() => {
    const lateKey = getClerkPublishableKey();
    if (!lateKey) {
      return;
    }
    ENABLE_AUTH = true;
    initializeAuthGate({ preserveAuthGate: true }).catch((error) => {
      console.error("Delayed auth bootstrap failed", error);
    });
  }, 420);
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

function setAuthFlowLoading(loading) {
  authFlowLoading = Boolean(loading);
  if (authFormShell) {
    authFormShell.classList.toggle("auth-form-shell-loading", authFlowLoading);
  }
  if (authLoadingState) {
    authLoadingState.classList.toggle("hidden", !authFlowLoading);
  }
  if (clerkAuthStack) {
    clerkAuthStack.classList.toggle("hidden", authFlowLoading);
  }
  if (authSignInTab) {
    authSignInTab.disabled = authFlowLoading;
  }
  if (authSignUpTab) {
    authSignUpTab.disabled = authFlowLoading;
  }
}

async function startAuthFlow(view) {
  triggerAuthIslandSwitchAnimation(view === "sign-up" ? "forward" : "backward");
  setAuthFlowStarted(true);
  setAuthFlowLoading(true);
  try {
    if (!authFormsMounted) {
      await ensureAuthFormsMounted();
    }
    await switchAuthView(view);
  } finally {
    setAuthFlowLoading(false);
  }
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
  isGuestMode = false;
  guestGenerationCount = 0;
  resetAuthGateGuestButton();
  syncProModeFromAccount();
  studyFiles = loadStudyFilesFromStorage();
  activeFileId = loadActiveFileId(studyFiles, true);
  enforceFileLimitForCurrentMode();
  renderFiles();
  loadActiveFileIntoEditor();
  updateOptionalOutputCards();
  applyAccountGatesUi();
  unlockAppAfterAuth();
}

async function handleAuthSignedOut() {
  isUserAuthenticated = false;
  if (clerkUserButton) {
    clerkUserButton.classList.add("hidden");
  }
  continueAsGuest(true);
  resetAuthGateGuestButton();
  isProMode = false;
  isGodMode = false;
  clearPersistedStudyData();
  resetGuestStudySession();
  applyProModeUi();
  applyAccountGatesUi();
  setAuthFlowStarted(false);
  setAuthFlowLoading(false);
  if (!authFormsMounted) {
    await ensureAuthFormsMounted();
  }
  await switchAuthView("sign-in");
}

async function initializeAuthGate(options = {}) {
  const { preserveAuthGate = false } = options;
  const clerkPublishableKey = getClerkPublishableKey();
  if (!preserveAuthGate) {
    continueAsGuest();
  }

  if (!clerkPublishableKey) {
    if (authGateTitle) {
      authGateTitle.textContent = "Missing Clerk key";
    }
    if (authGateText) {
      authGateText.textContent =
        "Set a Clerk publishable key in config.js, the clerk-publishable-key meta tag, or your Clerk JS snippet.";
    }
    console.warn("Missing Clerk key. Auth-required actions cannot complete sign-in.");
    return;
  }

  const hasClerk = await ensureClerkLoaded(clerkPublishableKey);
  if (!hasClerk || !window.Clerk) {
    if (authGateTitle) {
      authGateTitle.textContent = "Login script failed to load";
    }
    if (authGateText) {
      authGateText.textContent =
        "Could not load Clerk from the CDN. Disable strict blockers or try another network.";
    }
    console.warn("Could not load Clerk script. Auth-required actions may be unavailable.");
    return;
  }

  try {
    await window.Clerk.load({ publishableKey: clerkPublishableKey });
    clerkLoaded = true;
    ENABLE_AUTH = true;

    if (window.Clerk.user) {
      setAuthFlowLoading(false);
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
      setAuthFlowLoading(false);
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
  setSummaryMode("notes");
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
  document.body.classList.add("tutorial-lock");
  tutorialCoach.classList.remove("hidden");
  updateTutorialCoachMetrics();
  renderTutorialStep();
  if (articleModeButton) {
    articleModeButton.disabled = true;
  }
  if (photoModeButton) {
    photoModeButton.disabled = true;
  }
}

function updateTutorialCoachMetrics() {
  const coachHeight =
    tutorialCoach && !tutorialCoach.classList.contains("hidden")
      ? Math.ceil(tutorialCoach.getBoundingClientRect().height)
      : 0;
  document.documentElement.style.setProperty("--tutorial-coach-height", `${coachHeight}px`);
}

function scrollTutorialTargetIntoView(target) {
  if (!target || typeof target.scrollIntoView !== "function") {
    return;
  }

  updateTutorialCoachMetrics();
  const useMobileLayout = window.innerWidth <= 600 || isLikelyMobileDevice();
  target.scrollIntoView({
    behavior: "smooth",
    block: useMobileLayout ? "start" : "center",
    inline: "nearest"
  });

  if (tutorialScrollAdjustTimer) {
    clearTimeout(tutorialScrollAdjustTimer);
    tutorialScrollAdjustTimer = 0;
  }

  if (!useMobileLayout || !tutorialCoach || tutorialCoach.classList.contains("hidden")) {
    return;
  }

  tutorialScrollAdjustTimer = window.setTimeout(() => {
    tutorialScrollAdjustTimer = 0;
    if (!tutorialCoach || tutorialCoach.classList.contains("hidden")) {
      return;
    }

    const coachRect = tutorialCoach.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const coachIsTopSheet = coachRect.top <= window.innerHeight * 0.35;
    const safeGap = 14;

    if (coachIsTopSheet) {
      const minVisibleTop = coachRect.bottom + safeGap;
      if (targetRect.top < minVisibleTop) {
        window.scrollBy({
          top: targetRect.top - minVisibleTop,
          behavior: "smooth"
        });
      }
      return;
    }

    const maxVisibleBottom = coachRect.top - safeGap;
    if (targetRect.bottom > maxVisibleBottom) {
      window.scrollBy({
        top: targetRect.bottom - maxVisibleBottom,
        behavior: "smooth"
      });
    }
  }, 260);
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
    scrollTutorialTargetIntoView(target);
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
  if (canPersistStudyData()) {
    localStorage.setItem(TUTORIAL_SEEN_KEY, "yes");
  }
  clearTutorialHighlights();
  document.body.classList.remove("tutorial-lock");
  if (tutorialScrollAdjustTimer) {
    clearTimeout(tutorialScrollAdjustTimer);
    tutorialScrollAdjustTimer = 0;
  }
  document.documentElement.style.setProperty("--tutorial-coach-height", "0px");
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
    title: "Study Plan Section",
    target: "plan",
    exampleLabel: "Assignment",
    text: "This section gives you a stronger step-by-step study flow.",
    hideExample: true,
    example: "Follow the plan from top to bottom for a cleaner session."
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
    { key: "studyPlan", input: outputStudyPlan },
    { key: "cleanNotes", input: outputCleanNotes },
    { key: "flashcards", input: outputFlashcards },
    { key: "quizQuestions", input: outputQuizQuestions }
  ];

  const first = outputMap.find((entry) => entry.input && entry.input.checked);
  return first ? first.key : "studyPlan";
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

function showPerformanceLoader(isEnabling = true) {
  if (!performanceLoader) {
    return;
  }

  performanceLoader.classList.remove("is-enabling", "is-disabling");
  performanceLoader.classList.add(isEnabling ? "is-enabling" : "is-disabling");
  if (performanceLoaderText) {
    performanceLoaderText.textContent = isEnabling
      ? "Turning Performance Mode On..."
      : "Turning Performance Mode Off...";
  }
  performanceLoader.classList.remove("hidden");
}

function hidePerformanceLoader() {
  if (!performanceLoader) {
    return;
  }

  performanceLoader.classList.remove("is-enabling", "is-disabling");
  performanceLoader.classList.add("hidden");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function clearTransientAnimationClasses() {
  if (fileOpenAnimationFrameA) {
    cancelAnimationFrame(fileOpenAnimationFrameA);
    fileOpenAnimationFrameA = 0;
  }
  if (fileOpenAnimationFrameB) {
    cancelAnimationFrame(fileOpenAnimationFrameB);
    fileOpenAnimationFrameB = 0;
  }

  document.querySelectorAll(
    ".file-open-in, .file-create-in, .section-switch-in, .mode-island-pop, .mode-content-pop, .mode-pop-in, .mode-pop-out, .island-pop, .pop-in, .pop-out, .check-pop, .click-burst, .modal-closing"
  ).forEach((element) => {
    element.classList.remove(
      "file-open-in",
      "file-create-in",
      "section-switch-in",
      "mode-island-pop",
      "mode-content-pop",
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
