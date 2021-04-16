const art = document.getElementById("arts");
art.style.backgroundImage = `url('https://picsum.photos/${screen.width}/${screen.height}?random=2')`;
window.addEventListener("DOMContentLoaded", () => {
  art.classList.add("appear");
});
