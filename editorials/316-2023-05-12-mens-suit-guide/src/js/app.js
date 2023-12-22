const modalButtons = document.querySelectorAll(".hbc-modal__button");
const closeButtons = document.querySelectorAll(".hbc-modal__close-button");
const modalContainers = document.querySelectorAll(".hbc-modal__container");

modalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(`#${button.dataset.modal}`);
    modal.style.display = "flex";
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".hbc-modal__container");
    const video = modal.querySelector("video");
    video.pause();
    modal.style.display = "none";
  });
});

modalContainers.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      const video = modal.querySelector("video");
      video.pause();
      modal.style.display = "none";
    }
  });
});
