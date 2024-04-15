document.addEventListener('DOMContentLoaded', () => {
  const scrollLeft = document.querySelector('.scroll-left');
  const scrollRight = document.querySelector('.scroll-right');
  const container = document.querySelector('.ed-cards__outer');
  const cardWidth = container.firstElementChild.offsetWidth; // Get width of each card

  scrollLeft.addEventListener('click', () => {
    container.scrollBy({
      left: -cardWidth,
      behavior: 'smooth',
    });
  });

  scrollRight.addEventListener('click', () => {
    const maxScrollLeft = container.scrollWidth - container.offsetWidth;
    const nextScrollLeft = container.scrollLeft + cardWidth;
    if (nextScrollLeft > maxScrollLeft) {
      // If clicking next would go beyond last slide, reset to first slide
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      container.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    }
  });

  // Keyboard accessibility
  scrollLeft.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      container.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    }
  });

  scrollRight.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const maxScrollLeft = container.scrollWidth - container.offsetWidth;
      const nextScrollLeft = container.scrollLeft + cardWidth;
      if (nextScrollLeft > maxScrollLeft) {
        // If clicking next would go beyond last slide, reset to first slide
        container.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        container.scrollBy({
          left: cardWidth,
          behavior: 'smooth',
        });
      }
    }
  });
});
