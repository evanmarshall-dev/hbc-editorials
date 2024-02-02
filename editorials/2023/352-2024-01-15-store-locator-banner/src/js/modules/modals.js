/**
 * Adds click event listeners to modal trigger links to open modals
 * Adds click event listeners to close buttons to close modals
 * Adds global click listener to close open modals if clicked outside
 */

const modalLinks = document.querySelectorAll("[data-target]");

const closeModal = document.querySelectorAll(".hbc-ed-modal__close");

modalLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const modal = document.querySelector(link.dataset.target);
    modal.showModal();
  });
});

closeModal.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest("dialog");
    modal.close();
  });
});

document.addEventListener("click", (event) => {
  const modal = event.target.closest("dialog");
  if (modal) {
    modal.close();
  }
});
