export const onRequest = ({ env }) => {
  const canonicalHost = typeof env?.CANONICAL_HOST === "string" ? env.CANONICAL_HOST : "";
  const clerkPublishableKey =
    typeof env?.CLERK_PUBLISHABLE_KEY === "string"
      ? env.CLERK_PUBLISHABLE_KEY
      : typeof env?.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY === "string"
        ? env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
        : "";

  const config = {};
  if (canonicalHost) {
    config.CANONICAL_HOST = canonicalHost;
  }
  if (clerkPublishableKey) {
    config.CLERK_PUBLISHABLE_KEY = clerkPublishableKey;
  }

  const payload = `window.APP_CONFIG = Object.assign({}, window.APP_CONFIG || {}, ${JSON.stringify(config)});`;

  return new Response(payload, {
    headers: {
      "content-type": "application/javascript; charset=utf-8",
      "cache-control": "no-store"
    }
  });
};
