document.querySelectorAll("[data-carousel]").forEach((c) => {
  const track = c.querySelector(".track");
  const step = () => (track.querySelector("li")?.getBoundingClientRect().width || 235) + 40;
  c.querySelector(".prev").addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  c.querySelector(".next").addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
});
