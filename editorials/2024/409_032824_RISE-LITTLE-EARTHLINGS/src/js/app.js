const modalButtons = document.querySelectorAll('.hbc-modal__button');
const closeButtons = document.querySelectorAll('.hbc-modal__close-button');
const modalContainers = document.querySelectorAll('.hbc-modal__container');

modalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedModal = document.querySelector(`#${button.dataset.modal}`);
    selectedModal.style.display = 'flex';
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.hbc-modal__container');
    const video = modal.querySelector('video');
    video.pause();
    modal.style.display = 'none';
  });
});

modalContainers.forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      const clickedModal = event.target;
      const video = clickedModal.querySelector('video');
      video.pause();
      clickedModal.style.display = 'none';
    }
  });
});
