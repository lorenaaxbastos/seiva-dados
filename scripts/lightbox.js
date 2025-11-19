const photos = document.querySelectorAll(".photo img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = photo.src;

    document.body.style.overflow = "hidden";
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxImg.src = "";

  document.body.style.overflow = "";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }
});
