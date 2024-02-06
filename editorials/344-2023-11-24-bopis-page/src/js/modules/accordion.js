const acc = document.getElementsByClassName("hbc-ed-accordion__button");
let i;

for (i = 0; i < acc.length; i += 1) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("hbc-ed-accordion__button--active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
}
