/* Portfolio cover — small helper script. Currently: injects the mobile topbar
   hamburger and wires its toggle. Loaded by every page that has the .topbar. */
(function () {
  function init() {
    var bar = document.querySelector(".topbar");
    var inner = bar && bar.querySelector(".topbar-inner");
    var nav = inner && inner.querySelector("nav");
    if (!bar || !inner || !nav) return;
    if (!nav.id) nav.id = "topbar-nav";

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "hamburger";
    btn.setAttribute("aria-label", "Menu");
    btn.setAttribute("aria-controls", nav.id);
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" ' +
      'stroke-width="2.2" stroke-linecap="round" aria-hidden="true">' +
      '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>';
    inner.appendChild(btn);

    function setOpen(open) {
      bar.classList.toggle("menu-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(!bar.classList.contains("menu-open"));
    });
    nav.addEventListener("click", function (e) {
      if (e.target && e.target.tagName === "A") setOpen(false);
    });
    document.addEventListener("click", function (e) {
      if (bar.classList.contains("menu-open") && !inner.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" || e.keyCode === 27) setOpen(false);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
