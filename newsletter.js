/*
 * Lumi Study newsletter signup → Mailchimp embedded form (JSONP, no backend).
 * Shared across all pages. Looks for a #newsletterForm; no-op if absent.
 */
(function () {
  // ── CONFIG: paste your audience's embedded-form action URL here ──────────────
  // Mailchimp → Audience → Sign up forms → Embedded forms → copy the <form action="…"> URL.
  // It looks like: https://ACCOUNT.us21.list-manage.com/subscribe/post?u=XXXX&id=YYYY
  var MC_ACTION = "PASTE_MAILCHIMP_EMBEDDED_FORM_ACTION_URL_HERE";
  // ─────────────────────────────────────────────────────────────────────────────

  var form = document.getElementById("newsletterForm");
  if (!form) return;
  var input = document.getElementById("newsletterEmail");
  var btn = document.getElementById("newsletterBtn");
  var msg = document.getElementById("newsletterMsg");

  function showMsg(text, ok) {
    msg.textContent = text;
    msg.classList.remove("hidden");
    msg.classList.toggle("text-emerald-600", ok);
    msg.classList.toggle("dark:text-emerald-400", ok);
    msg.classList.toggle("text-rose-600", !ok);
    msg.classList.toggle("dark:text-rose-400", !ok);
  }

  // Mailchimp's post-json endpoint supports a JSONP callback, so we can submit
  // cross-origin and get an inline result without any server of our own.
  function submitToMailchimp(email) {
    return new Promise(function (resolve, reject) {
      var u = (MC_ACTION.match(/[?&]u=([^&]+)/) || [])[1];
      var id = (MC_ACTION.match(/[?&]id=([^&]+)/) || [])[1];
      if (!u || !id) { reject(new Error("not-configured")); return; }

      var base = MC_ACTION.split("?")[0].replace("/post", "/post-json");
      var cb = "mcCb_" + Date.now() + "_" + Math.floor(Math.random() * 1e6);
      var script = document.createElement("script");
      var timer = setTimeout(function () { cleanup(); reject(new Error("timeout")); }, 10000);

      function cleanup() {
        clearTimeout(timer);
        try { delete window[cb]; } catch (_e) { window[cb] = undefined; }
        if (script.parentNode) script.parentNode.removeChild(script);
      }
      window[cb] = function (data) { cleanup(); resolve(data || {}); };

      script.src = base +
        "?u=" + encodeURIComponent(u) +
        "&id=" + encodeURIComponent(id) +
        "&EMAIL=" + encodeURIComponent(email) +
        "&b_" + u + "_" + id + "=" +
        "&c=" + cb;
      script.onerror = function () { cleanup(); reject(new Error("network")); };
      document.body.appendChild(script);
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var email = (input.value || "").trim();
    var original = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Subscribing…";

    submitToMailchimp(email)
      .then(function (data) {
        if (data.result === "success") {
          form.reset();
          showMsg("You're in! Thanks for subscribing.", true);
        } else {
          var m = (data.msg || "").toString();
          if (/already subscribed/i.test(m)) {
            form.reset();
            showMsg("You're already on the list — thanks!", true);
          } else {
            // Strip Mailchimp's leading "0 - " error code if present.
            showMsg(m.replace(/^\d+\s*-\s*/, "") || "Something went wrong. Please try again.", false);
          }
        }
      })
      .catch(function (err) {
        if (err && err.message === "not-configured") {
          showMsg("Newsletter signup isn't configured yet.", false);
        } else {
          showMsg("Network error. Please try again.", false);
        }
      })
      .finally(function () { btn.disabled = false; btn.textContent = original; });
  });
})();
