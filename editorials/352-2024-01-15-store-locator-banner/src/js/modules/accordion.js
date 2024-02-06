/**
 * Adds click and keydown event listeners to all accordion buttons to toggle
 * the active state and expand/collapse the corresponding panels.
 */

const acc = document.getElementsByClassName("hbc-ed-accordion__button");
// let i;

acc.forEach((accItem) => {
  accItem.addEventListener("click", (event) => {
    event.stopPropagation();
    this.classList.toggle("hbc-ed-accordion__button--active");
    const panel = this.nextElementSibling;
    const expanded = this.getAttribute("aria-expanded") === "true";

    this.setAttribute("aria-expanded", !expanded);
    panel.setAttribute("aria-hidden", expanded);

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      // panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });

  accItem.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.click();
    }
  });
});

// for (const i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("hbc-ed-accordion__button--active");
//     const panel = this.nextElementSibling;
//     const expanded = this.getAttribute("aria-expanded") === "true";

//     this.setAttribute("aria-expanded", !expanded);
//     panel.setAttribute("aria-hidden", expanded);

//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });

//   acc[i].addEventListener("keydown", function (event) {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();
//       this.click();
//     }
//   });
// }
