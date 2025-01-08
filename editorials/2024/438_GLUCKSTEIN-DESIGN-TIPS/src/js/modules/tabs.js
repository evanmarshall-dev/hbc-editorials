// document.addEventListener('DOMContentLoaded', () => {
//   const tabLinks = document.querySelectorAll('.ed-button--tab');
//   const tabContents = document.querySelectorAll('.TEST_VISUAL-NAV_GLUCKSTEIN');

//   tabLinks.forEach((link) => {
//     link.addEventListener('click', function (event) {
//       event.preventDefault();

//       const tabId = this.getAttribute('href').substring(1);

//       // Hide all tab contents
//       tabContents.forEach((content) => {
//         content.setAttribute('hidden', 'true');
//       });

//       // Reset aria-selected attribute for all tabs
//       tabLinks.forEach((tabLink) => {
//         tabLink.setAttribute('aria-selected', 'false');
//       });

//       // Show the selected tab content
//       document.getElementById(tabId).removeAttribute('hidden');
//       this.setAttribute('aria-selected', 'true');
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const tabLinks = document.querySelectorAll('.ed-button--tab');

//   tabLinks.forEach((link) => {
//     link.addEventListener('click', function (event) {
//       event.preventDefault();

//       const contentClasses = this.getAttribute('data-contents').split(' ');

//       // Hide all tab contents
//       document
//         .querySelectorAll(
//           '.TEST_VISUAL-NAV_GLUCKSTEIN, .multi-image-container, .shop-beauty-banner, .new-prodict-slot, .evergreen-promo',
//         )
//         .forEach((content) => {
//           content.setAttribute('hidden', 'true');
//         });

//       // Reset aria-selected attribute for all tabs
//       tabLinks.forEach((tabLink) => {
//         tabLink.setAttribute('aria-selected', 'false');
//       });

//       // Show the selected tab contents
//       contentClasses.forEach((className) => {
//         document.querySelectorAll(`.${className}`).forEach((content) => {
//           content.removeAttribute('hidden');
//         });
//       });

//       this.setAttribute('aria-selected', 'true');
//     });
//   });

//   // Simulate click on the first button to load default tab content
//   if (tabLinks.length > 0) {
//     tabLinks[0].click();
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const currentUrl = window.location.href;
  const navItems = document.querySelectorAll('.ed-nav--tabs a');

  navItems.forEach((item) => {
    if (currentUrl.includes(item.getAttribute('href'))) {
      item.classList.add('ed-active');
    }
  });
});
