/*
 * Lumi Study newsletter signup → Mailchimp standard form POST.
 * Shared across all pages. Looks for a #newsletterForm; no-op if absent.
 */
(function () {
  var MC_ACTION = "https://us8.list-manage.com/subscribe/post?u=f977eb32eb487d8c218893089&id=4c5b969a69";

  var form = document.getElementById("newsletterForm");
  if (!form) return;
  var input = document.getElementById("newsletterEmail");
  var btn = document.getElementById("newsletterBtn");
  var msg = document.getElementById("newsletterMsg");

  var u = (MC_ACTION.match(/[?&]u=([^&]+)/) || [])[1];
  var id = (MC_ACTION.match(/[?&]id=([^&]+)/) || [])[1];

  function showMsg(text, ok) {
    msg.textContent = text;
    msg.classList.remove("hidden");
    msg.classList.toggle("text-emerald-600", ok);
    msg.classList.toggle("dark:text-emerald-400", ok);
    msg.classList.toggle("text-rose-600", !ok);
    msg.classList.toggle("dark:text-rose-400", !ok);
  }

  if (!u || !id) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      showMsg("Newsletter signup isn't configured yet.", false);
    });
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var email = (input.value || "").trim();
    if (!email) return;

    var mcForm = document.createElement("form");
    mcForm.method = "POST";
    mcForm.action = MC_ACTION;
    mcForm.target = "_blank";
    mcForm.style.display = "none";

    var emailField = document.createElement("input");
    emailField.name = "EMAIL";
    emailField.value = email;
    mcForm.appendChild(emailField);

    var honeypot = document.createElement("input");
    honeypot.name = "b_" + u + "_" + id;
    honeypot.value = "";
    mcForm.appendChild(honeypot);

    document.body.appendChild(mcForm);
    mcForm.submit();
    document.body.removeChild(mcForm);

    form.reset();
    showMsg("Redirecting to confirm your subscription…", true);
  });
})();
