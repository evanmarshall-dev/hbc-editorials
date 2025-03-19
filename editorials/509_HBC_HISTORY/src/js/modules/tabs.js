// document.addEventListener('DOMContentLoaded', () => {
//   const tabLinks = document.querySelectorAll('.ed-button--tab');
//   const tabContents = document.querySelectorAll('.ed-container--tab');

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
