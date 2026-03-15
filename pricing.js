const pricingBackLink = document.getElementById("pricingBackLink");
const pricingSignInButton = document.getElementById("pricingSignInButton");
const pricingUserButton = document.getElementById("pricingUserButton");
const pricingStatusChip = document.getElementById("pricingStatusChip");
const pricingStatusText = document.getElementById("pricingStatusText");
const pricingPrimaryButton = document.getElementById("pricingPrimaryButton");
const pricingPrimaryHint = document.getElementById("pricingPrimaryHint");
const pricingInlineStatus = document.getElementById("pricingInlineStatus");
const pricingTableWrap = document.getElementById("pricingTableWrap");
const pricingTableMount = document.getElementById("pricingTableMount");
const pricingFallback = document.getElementById("pricingFallback");
const pricingAuthNotice = document.getElementById("pricingAuthNotice");
const pricingPlanName = document.getElementById("pricingPlanName");
const pricingPlanPrice = document.getElementById("pricingPlanPrice");
const pricingMonthlyPrice = document.getElementById("pricingMonthlyPrice");
const pricingYearlyPrice = document.getElementById("pricingYearlyPrice");
const pricingTrialDays = document.getElementById("pricingTrialDays");
const pricingPlanSlug = document.getElementById("pricingPlanSlug");
const pricingPlanPriceInline = document.getElementById("pricingPlanPriceInline");
const pricingPlanSlugDisplay = document.getElementById("pricingPlanSlugDisplay");
const ultimatePlanName = document.getElementById("ultimatePlanName");
const ultimatePlanPrice = document.getElementById("ultimatePlanPrice");

const DEFAULT_RETURN_TO = "index.html";
const DEFAULT_PRO_PLAN_NAME = "Pro";
const DEFAULT_PRO_PLAN_SLUG = "pro";
const DEFAULT_PRO_PLAN_PRICE = "$1.50 / month";
const DEFAULT_PRO_PLAN_YEARLY_PRICE = "$12.00 / year";
const DEFAULT_PRO_TRIAL_DAYS = "14 days";
const DEFAULT_ULTIMATE_PLAN_NAME = "Ultimate";
const DEFAULT_ULTIMATE_PLAN_PRICE = "$4.99 / month planned";
const THEME_KEY = "ai-study-planner-theme";

let clerkReady = false;
let pricingTableMounted = false;
let userButtonMounted = false;

const searchParams = new URLSearchParams(window.location.search);
const returnTo = normalizeReturnTo(searchParams.get("returnTo"));

if (pricingBackLink) {
  pricingBackLink.setAttribute("href", returnTo);
}

applyPricingTheme();
applyStaticPlanContent();

if (pricingSignInButton) {
  pricingSignInButton.addEventListener("click", handlePricingSignInClick);
}

if (pricingPrimaryButton) {
  pricingPrimaryButton.addEventListener("click", handlePricingPrimaryClick);
}

initializePricingPage().catch((error) => {
  console.error("Failed to initialize pricing page", error);
  setPricingState({
    chip: "Setup needed",
    status: "Could not load Clerk billing right now. You can still connect Stripe later and refresh this page.",
    primaryLabel: "Back to app",
    primaryHint: "This page is ready for Clerk billing once your auth and billing setup are live.",
    inlineStatus: "Unavailable",
    showAuthNotice: false,
    showPricingTable: false,
    showFallback: true
  });
});

function getPricingPlanName() {
  return DEFAULT_PRO_PLAN_NAME;
}

function getPricingPlanSlug() {
  const configured = window.APP_CONFIG?.PRO_PLAN_SLUG;
  if (typeof configured === "string" && configured.trim()) {
    return configured.trim();
  }
  return DEFAULT_PRO_PLAN_SLUG;
}

function getPricingPlanPriceLabel() {
  const configured = window.APP_CONFIG?.PRO_PLAN_PRICE;
  if (typeof configured === "string" && configured.trim()) {
    return configured.trim();
  }
  return DEFAULT_PRO_PLAN_PRICE;
}

function getPricingPlanYearlyPriceLabel() {
  const configured = window.APP_CONFIG?.PRO_PLAN_YEARLY_PRICE;
  if (typeof configured === "string" && configured.trim()) {
    return configured.trim();
  }
  return DEFAULT_PRO_PLAN_YEARLY_PRICE;
}

function getPricingTrialDaysLabel() {
  const configured = window.APP_CONFIG?.PRO_PLAN_TRIAL_DAYS;
  if (typeof configured === "string" && configured.trim()) {
    return configured.trim();
  }
  return DEFAULT_PRO_TRIAL_DAYS;
}

function getUltimatePlanName() {
  const configured = window.APP_CONFIG?.ULTIMATE_PLAN_NAME;
  if (typeof configured === "string" && configured.trim()) {
    return configured.trim();
  }
  return DEFAULT_ULTIMATE_PLAN_NAME;
}

function getUltimatePlanPriceLabel() {
  const configured = window.APP_CONFIG?.ULTIMATE_PLAN_PRICE;
  if (typeof configured === "string" && configured.trim()) {
    return configured.trim();
  }
  return DEFAULT_ULTIMATE_PLAN_PRICE;
}

function applyPricingTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_KEY);
    document.body.classList.toggle("dark", savedTheme === "dark");
  } catch (_error) {
    document.body.classList.remove("dark");
  }
}

function normalizeReturnTo(value) {
  if (typeof value !== "string") {
    return DEFAULT_RETURN_TO;
  }
  const trimmed = value.trim();
  if (!trimmed || /^https?:/i.test(trimmed) || trimmed.startsWith("//") || trimmed.startsWith("javascript:")) {
    return DEFAULT_RETURN_TO;
  }
  return trimmed;
}

function splitPriceLabel(label) {
  const value = String(label || DEFAULT_PRO_PLAN_PRICE).trim();
  const parts = value.split("/");
  if (parts.length < 2) {
    return { primary: value, cycle: "/ month" };
  }
  return {
    primary: parts[0].trim(),
    cycle: `/ ${parts.slice(1).join("/").trim()}`
  };
}

function applyStaticPlanContent() {
  const monthlyPriceLabel = getPricingPlanPriceLabel();
  const yearlyPriceLabel = getPricingPlanYearlyPriceLabel();
  const trialDaysLabel = getPricingTrialDaysLabel();
  const priceParts = splitPriceLabel(monthlyPriceLabel);
  const planSlug = getPricingPlanSlug();
  const planName = getPricingPlanName();
  const ultimateName = getUltimatePlanName();
  const ultimatePriceLabel = getUltimatePlanPriceLabel();
  const ultimatePriceParts = splitPriceLabel(ultimatePriceLabel);

  if (pricingPlanName) {
    pricingPlanName.textContent = planName;
  }
  if (pricingPlanPrice) {
    pricingPlanPrice.textContent = priceParts.primary;
  }
  const priceCycle = document.querySelector(".pricing-plan-cycle");
  if (priceCycle) {
    priceCycle.textContent = priceParts.cycle;
  }
  if (pricingPlanSlug) {
    pricingPlanSlug.textContent = planSlug;
  }
  if (pricingPlanSlugDisplay) {
    pricingPlanSlugDisplay.textContent = planSlug;
  }
  if (pricingMonthlyPrice) {
    pricingMonthlyPrice.textContent = monthlyPriceLabel;
  }
  if (pricingYearlyPrice) {
    pricingYearlyPrice.textContent = yearlyPriceLabel;
  }
  if (pricingTrialDays) {
    pricingTrialDays.textContent = trialDaysLabel;
  }
  if (pricingPlanPriceInline) {
    pricingPlanPriceInline.textContent = `${monthlyPriceLabel} and ${yearlyPriceLabel}`;
  }
  if (ultimatePlanName) {
    ultimatePlanName.textContent = ultimateName;
  }
  if (ultimatePlanPrice) {
    ultimatePlanPrice.textContent = ultimatePriceParts.primary;
    const ultimateCycle = ultimatePlanPrice.parentElement?.querySelector(".pricing-plan-cycle");
    if (ultimateCycle) {
      ultimateCycle.textContent = ultimatePriceParts.cycle;
    }
  }
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

function loadScript(src, publishableKey = "") {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (publishableKey) {
        existing.setAttribute("data-clerk-publishable-key", publishableKey);
        existing.setAttribute("data-clerk-publishableKey", publishableKey);
      }
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
    script.crossOrigin = "anonymous";
    script.type = "text/javascript";
    script.dataset.loaded = "false";
    if (publishableKey) {
      script.setAttribute("data-clerk-publishable-key", publishableKey);
      script.setAttribute("data-clerk-publishableKey", publishableKey);
      window.__clerk_publishable_key = publishableKey;
      window.__clerk_publishable_key__ = publishableKey;
      window.__CLERK_PUBLISHABLE_KEY__ = publishableKey;
      window.__clerkPublishableKey = publishableKey;
    }
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

async function ensureClerkLoaded(publishableKey) {
  if (window.Clerk) {
    return true;
  }

  const candidates = getClerkScriptCandidates(publishableKey);
  for (const src of candidates) {
    try {
      await loadScript(src, publishableKey);
      if (window.Clerk) {
        return true;
      }
    } catch (_error) {
      // Try the next candidate.
    }
  }

  return Boolean(window.Clerk);
}

async function initializePricingPage() {
  const clerkPublishableKey = getClerkPublishableKey();
  if (!clerkPublishableKey) {
    setPricingState({
      chip: "Setup needed",
      status: "Add your Clerk publishable key to load secure billing on this page.",
      primaryLabel: "Back to app",
      primaryHint: "Once Clerk is configured here, this page can load sign-in and billing automatically.",
      inlineStatus: "Missing Clerk key",
      showAuthNotice: false,
      showPricingTable: false,
      showFallback: true
    });
    return;
  }

  const hasClerk = await ensureClerkLoaded(clerkPublishableKey);
  if (!hasClerk || !window.Clerk) {
    setPricingState({
      chip: "Setup needed",
      status: "Clerk could not load from the CDN. Disable blockers or refresh once your network allows it.",
      primaryLabel: "Back to app",
      primaryHint: "The page still keeps your Pro plan slug and pricing config ready for later.",
      inlineStatus: "Clerk unavailable",
      showAuthNotice: false,
      showPricingTable: false,
      showFallback: true
    });
    return;
  }

  await window.Clerk.load({ publishableKey: clerkPublishableKey });
  clerkReady = true;
  await updatePricingView();

  window.Clerk.addListener(async ({ user }) => {
    if (!user) {
      clearPricingUserButton();
    }
    await updatePricingView();
  });
}

function isSignedIn() {
  return Boolean(clerkReady && window.Clerk?.user);
}

function hasProAccess() {
  const session = window.Clerk?.session;
  const planSlug = getPricingPlanSlug();
  if (session && typeof session.checkAuthorization === "function" && planSlug) {
    try {
      if (session.checkAuthorization({ plan: planSlug })) {
        return true;
      }
    } catch (_error) {
      // Fall through to metadata fallback.
    }
  }

  const unsafeMetadata = window.Clerk?.user?.unsafeMetadata;
  return Boolean(unsafeMetadata && typeof unsafeMetadata === "object" && unsafeMetadata.proUnlocked);
}

async function mountPricingUserButton() {
  if (!pricingUserButton || !window.Clerk?.user || typeof window.Clerk.mountUserButton !== "function") {
    return;
  }
  if (userButtonMounted) {
    return;
  }

  pricingUserButton.innerHTML = "";
  await window.Clerk.mountUserButton(pricingUserButton, {
    appearance: {
      variables: {
        colorPrimary: "#3557ff",
        fontFamily: "Outfit, sans-serif"
      }
    }
  });
  userButtonMounted = true;
}

function clearPricingUserButton() {
  if (!pricingUserButton) {
    return;
  }
  pricingUserButton.innerHTML = "";
  userButtonMounted = false;
}

function clearPricingTable() {
  if (!pricingTableMount) {
    return;
  }
  if (window.Clerk && typeof window.Clerk.unmountPricingTable === "function") {
    try {
      window.Clerk.unmountPricingTable(pricingTableMount);
    } catch (_error) {
      // Fall back to clearing the container directly.
    }
  }
  pricingTableMount.innerHTML = "";
  pricingTableMounted = false;
}

async function mountPricingTableIfAvailable() {
  if (!pricingTableMount || !isSignedIn()) {
    return false;
  }
  if (pricingTableMounted) {
    return true;
  }
  if (!window.Clerk || typeof window.Clerk.mountPricingTable !== "function") {
    return false;
  }

  pricingTableMount.innerHTML = "";
  try {
    await window.Clerk.mountPricingTable(pricingTableMount, {
      for: "user",
      newSubscriptionRedirectUrl: new URL(returnTo, window.location.href).toString(),
      appearance: {
        variables: {
          colorPrimary: "#3557ff",
          fontFamily: "Outfit, sans-serif"
        }
      },
      checkoutProps: {
        appearance: {
          variables: {
            colorPrimary: "#3557ff",
            fontFamily: "Outfit, sans-serif"
          }
        },
      }
    });
    pricingTableMounted = true;
    return true;
  } catch (error) {
    console.warn("Could not mount Clerk pricing table", error);
    pricingTableMounted = false;
    pricingTableMount.innerHTML = "";
    return false;
  }
}

async function updatePricingView() {
  const signedIn = isSignedIn();

  if (pricingSignInButton) {
    const signInLabel = pricingSignInButton.querySelector(".btn-label");
    if (signInLabel) {
      signInLabel.textContent = signedIn ? "Account" : "Sign In";
    }
    pricingSignInButton.setAttribute("aria-label", signedIn ? "Open account settings" : "Sign in to billing");
  }
  if (pricingUserButton) {
    pricingUserButton.classList.toggle("hidden", !signedIn);
  }
  if (!signedIn) {
    clearPricingUserButton();
    clearPricingTable();
    setPricingState({
      chip: "Free",
      status: "Sign in to load secure checkout and attach Pro to your account.",
      primaryLabel: "Create account to continue",
      primaryHint: "Clerk billing needs a signed-in user before it can open checkout.",
      inlineStatus: "Account required",
      showAuthNotice: true,
      showPricingTable: false,
      showFallback: true
    });
    return;
  }

  await mountPricingUserButton().catch((error) => {
    console.warn("Could not mount Clerk user button on pricing page", error);
  });

  const activePro = hasProAccess();
  if (activePro) {
    clearPricingTable();
    setPricingState({
      chip: "Pro active",
      status: "This account already has Pro access. You can head back to the app whenever you're ready.",
      primaryLabel: "Back to app",
      primaryHint: "Your Pro limits should unlock automatically when you return to Lumi.",
      inlineStatus: "Subscribed",
      showAuthNotice: false,
      showPricingTable: false,
      showFallback: false
    });
    return;
  }

  const tableReady = await mountPricingTableIfAvailable();
  setPricingState({
    chip: "Upgrade ready",
    status: tableReady
      ? `Clerk checkout is live below with monthly, yearly, and trial options for ${getPricingPlanName()}.`
      : `This page is ready, but Clerk billing still needs a live "${getPricingPlanSlug()}" plan with monthly and yearly pricing.`,
    primaryLabel: tableReady ? "Go to secure checkout" : "Refresh billing setup",
    primaryHint: tableReady
      ? "The embedded Clerk pricing table below handles the real Pro subscription checkout."
      : "Once Stripe and the Pro plan are configured in Clerk, secure checkout will appear here automatically.",
    inlineStatus: tableReady ? "Checkout ready" : "Waiting on Stripe",
    showAuthNotice: false,
    showPricingTable: tableReady,
    showFallback: !tableReady
  });
}

function setPricingState(state) {
  if (pricingStatusChip) {
    pricingStatusChip.textContent = state.chip;
  }
  if (pricingStatusText) {
    pricingStatusText.textContent = state.status;
  }
  if (pricingPrimaryButton) {
    pricingPrimaryButton.textContent = state.primaryLabel;
  }
  if (pricingPrimaryHint) {
    pricingPrimaryHint.textContent = state.primaryHint;
  }
  if (pricingInlineStatus) {
    pricingInlineStatus.textContent = state.inlineStatus;
  }
  if (pricingAuthNotice) {
    pricingAuthNotice.classList.toggle("hidden", !state.showAuthNotice);
  }
  if (pricingTableWrap) {
    pricingTableWrap.classList.toggle("hidden", !state.showPricingTable);
  }
  if (pricingFallback) {
    pricingFallback.classList.toggle("hidden", !state.showFallback);
  }
}

async function handlePricingSignInClick() {
  if (isSignedIn()) {
    if (window.Clerk && typeof window.Clerk.openUserProfile === "function") {
      window.Clerk.openUserProfile();
      return;
    }
    window.location.href = returnTo;
    return;
  }

  if (!clerkReady || !window.Clerk) {
    await initializePricingPage();
    if (!clerkReady || !window.Clerk) {
      return;
    }
  }

  if (typeof window.Clerk.openSignIn === "function") {
    window.Clerk.openSignIn({
      afterSignInUrl: window.location.href,
      afterSignUpUrl: window.location.href
    });
    return;
  }

  if (typeof window.Clerk.redirectToSignIn === "function") {
    window.Clerk.redirectToSignIn({
      returnBackUrl: window.location.href
    });
  }
}

async function handlePricingPrimaryClick() {
  if (!isSignedIn()) {
    await handlePricingSignInClick();
    return;
  }

  if (hasProAccess()) {
    window.location.href = returnTo;
    return;
  }

  const tableReady = await mountPricingTableIfAvailable();
  if (tableReady && pricingTableWrap) {
    pricingTableWrap.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  setPricingState({
    chip: "Upgrade ready",
    status: `Finish the Clerk setup by creating a "${getPricingPlanSlug()}" plan with monthly and yearly pricing, then refresh this page.`,
    primaryLabel: "Refresh billing setup",
    primaryHint: "This page is already wired to Clerk. It only needs the live billing plan.",
    inlineStatus: "Waiting on Stripe",
    showAuthNotice: false,
    showPricingTable: false,
    showFallback: true
  });
}
