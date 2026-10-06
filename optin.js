document.getElementById("name").textContent = CONFIG.name;
document.getElementById("tagline").textContent = CONFIG.tagline;
track("page_view");

document.getElementById("skip").addEventListener("click", function () {
  track("no_thanks");
});

document.getElementById("f").addEventListener("submit", function (e) {
  track("email_submit");
  if (CONFIG.formAction) {
    this.action = CONFIG.formAction;
    this.method = "POST";
    return;
  }
  e.preventDefault();
  document.getElementById("msg").textContent = "Demo only: nothing was saved. Redirecting...";
  setTimeout(function () { location.href = "links.html"; }, 1200);
});
