window.APP_CONFIG = window.APP_CONFIG || {};
// Set your production domain to auto-redirect *.pages.dev/*.workers.dev to it.
// Example: "lumistudy.com"
window.APP_CONFIG.CANONICAL_HOST = window.APP_CONFIG.CANONICAL_HOST || "";
// Optional: Clerk publishable key for in-page auth.
window.APP_CONFIG.CLERK_PUBLISHABLE_KEY = window.APP_CONFIG.CLERK_PUBLISHABLE_KEY || "";
// Billing page used for Pro upgrades.
window.APP_CONFIG.PRICING_PAGE_PATH = window.APP_CONFIG.PRICING_PAGE_PATH || "pricing.html";
// Clerk plan slug for Lumi Pro.
window.APP_CONFIG.PRO_PLAN_SLUG = window.APP_CONFIG.PRO_PLAN_SLUG || "pro";
// Display label for the current Pro price.
window.APP_CONFIG.PRO_PLAN_PRICE = window.APP_CONFIG.PRO_PLAN_PRICE || "$1.50 / month";
