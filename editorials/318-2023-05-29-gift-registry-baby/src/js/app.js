// const modalButtons = document.querySelectorAll(".hbc-modal__button");
// const closeButtons = document.querySelectorAll(".hbc-modal__close-button");
// const modalContainers = document.querySelectorAll(".hbc-modal__container");

// modalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = document.querySelector(`#${button.dataset.modal}`);
//     modal.style.display = "flex";
//   });
// });

// closeButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = button.closest(".hbc-modal__container");
//     const video = modal.querySelector("video");
//     video.pause();
//     modal.style.display = "none";
//   });
// });

// modalContainers.forEach((modal) => {
//   modal.addEventListener("click", (event) => {
//     if (event.target === modal) {
//       const video = modal.querySelector("video");
//       video.pause();
//       modal.style.display = "none";
//     }
//   });
// });

// REGULAR CAROUSEL SCRIPTS
// const slidesContainer = document.querySelector('.hbc-carousel__slides');
// const prevButton = document.querySelector('.hbc-carousel__btn--prev');
// const nextButton = document.querySelector('.hbc-carousel__btn--next');

// let slideIndex = 0;
// const slidesPerViewport = {
//   320: 1,
//   480: 2,
//   768: 3,
//   1024: 4,
//   1200: 5
// };

// function showSlides() {
//   const screenWidth = window.innerWidth;
//   let slidesToShow = 1;

//   for (const width in slidesPerViewport) {
//     if (screenWidth < Number(width)) {
//       slidesToShow = Math.min(slidesPerViewport[width], document.querySelectorAll('.hbc-carousel__slide').length);
//       break;
//     }
//   }

//   const slideWidth = 100 / slidesToShow;
//   slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}%)`;
//   slidesContainer.style.width = `${slidesToShow * 100}%`;
// }

// function slideNext() {
//   const screenWidth = window.innerWidth;
//   let slidesToShow = 1;

//   for (const width in slidesPerViewport) {
//     if (screenWidth < Number(width)) {
//       slidesToShow = Math.min(slidesPerViewport[width], document.querySelectorAll('.hbc-carousel__slide').length);
//       break;
//     }
//   }

//   const totalSlides = document.querySelectorAll('.hbc-carousel__slide').length;
//   const slidesPerPage = slidesToShow;
//   const totalPages = Math.ceil(totalSlides / slidesPerPage);

//   slideIndex = (slideIndex + 1) % totalPages;
//   showSlides();
// }

// function slidePrev() {
//   const screenWidth = window.innerWidth;
//   let slidesToShow = 1;

//   for (const width in slidesPerViewport) {
//     if (screenWidth < Number(width)) {
//       slidesToShow = Math.min(slidesPerViewport[width], document.querySelectorAll('.hbc-carousel__slide').length);
//       break;
//     }
//   }

//   const totalSlides = document.querySelectorAll('.hbc-carousel__slide').length;
//   const slidesPerPage = slidesToShow;
//   const totalPages = Math.ceil(totalSlides / slidesPerPage);

//   slideIndex = (slideIndex - 1 + totalPages) % totalPages;
//   showSlides();
// }

// prevButton.addEventListener('click', slidePrev);
// nextButton.addEventListener('click', slideNext);

// window.addEventListener('resize', showSlides);

// showSlides();

// const carousel = document.querySelector(".hbc-carousel__slides"),
//   firstImg = carousel.querySelectorAll(".hbc-carousel__image")[0];
// arrowIcons = document.querySelectorAll(".hbc-carousel__btn");

// // by default isDragging is false and is only true when mouse button is clicked.
// let isDragStart = false,
//   isDragging = false,
//   prevPageX,
//   prevScrollLeft,
//   positionDiff;

// const showHideIcons = () => {
//   // showing and hiding prev/next icon according to carousel scroll left value.
//   let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width.
//   arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//   arrowIcons[1].style.display =
//     carousel.scrollLeft == scrollWidth ? "none" : "block";
// };

// arrowIcons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     let firstImgWidth = firstImg.clientWidth; // add in + whatever margin is on the left or right of images.
//     // console.log(icon);
//     // if clicked icon is left, reduce width value from carousel scroll left else  add to it.
//     carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//     setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms.
//   });
// });

// const autoSlide = () => {
//   // if there is no img left to scroll then return from here.
//   if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth)
//     return;

//   positionDiff = Math.abs(positionDiff); // making positionDiff value positive.
//   let firstImgWidth = firstImg.clientWidth;
//   // getting difference value that needs to add or reduce from carousel left to take middle img center.
//   let valDifference = firstImgWidth - positionDiff;

//   if (carousel.scrollLeft > prevScrollLeft) {
//     // if user is scrolling to the right.
//     return (carousel.scrollLeft +=
//       positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
//   }
//   // if user is scrolling to the left.
//   carousel.scrollLeft -=
//     positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// };

// const dragStart = (e) => {
//   // updating global variables value on mouse down event.
//   isDragStart = true;
//   prevPageX = e.pageX || e.touches[0].pageX;
//   // scrollLeft gives the number of px of element content that is scrolled horizontally.
//   prevScrollLeft = carousel.scrollLeft;
// };

// const dragging = (e) => {
//   // scrolling images/carousel to left according to mouse pointer.
//   if (!isDragStart) return;
//   // prevent default behavior so image won't be dragged.
//   e.preventDefault();
//   isDragging = true;
//   positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//   carousel.classList.add("dragging");
//   // pageX returns horizontal coordinate of mouse pointer.
//   // console.log(e.pageX);
//   carousel.scrollLeft = prevScrollLeft - positionDiff;
//   showHideIcons();
// };

// const dragStop = () => {
//   isDragStart = false;
//   carousel.classList.remove("dragging");

//   if (!isDragging) return;
//   isDragging = false;
//   autoSlide();
// };

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);

// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);

// carousel.addEventListener("mouseup", dragStop);
// carousel.addEventListener("mouseleave", dragStop);
// carousel.addEventListener("touchend", dragStop);
