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

const navLinks = document.querySelectorAll('.ed-nav__sidebar-link');
const sections = document.querySelectorAll('article[id]');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Adjust for offset
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('data-target') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('data-target').substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Update active styles
    navLinks.forEach((navLink) => navLink.classList.remove('active'));
    link.classList.add('active');
  });
});
