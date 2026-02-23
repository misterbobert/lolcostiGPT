// highlight link for current page
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();

// gallery filter (optional; works only on gallery.html)
(function(){
  const input = document.querySelector("[data-gallery-search]");
  if(!input) return;

  const cards = Array.from(document.querySelectorAll("[data-gallery-item]"));
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    cards.forEach(c => {
      const text = (c.getAttribute("data-tags") || "").toLowerCase();
      c.style.display = text.includes(q) ? "" : "none";
    });
  });
})();