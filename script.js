const header = document.getElementById("header");
const heroLogo = document.querySelector(".hero__heading");
const heroContent = document.querySelector(".hero__content");

// CARREGAR NAVBAR

fetch("/components/header.html")
  .then((response) => response.text())
  .then((data) => {
    header.innerHTML = data;

    function adjustContentPos() {
      const headerHeight = header.offsetHeight;
      const style = getComputedStyle(header);
      const headerPaddingTop = parseFloat(style.paddingTop);
      heroContent.style.paddingTop = `${headerHeight + headerPaddingTop}px`;
    }

    adjustContentPos();
  })
  .catch((error) => {
    console.error("Erro ao carregar a navbar:", error);
  });

// AJUSTAR TAMANHO DA LOGO NA HERO SECTION

function adjustLogoSize() {
  const contentWidth = heroContent.offsetWidth;
  heroLogo.style.height = contentWidth / 2 + "px";
}

adjustLogoSize();

window.addEventListener("resize", adjustLogoSize);
