document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const tabId = this.getAttribute("href").substring(1);

      // Hide all tab contents
      tabContents.forEach((content) => {
        content.setAttribute("hidden", "true");
      });

      // Reset aria-selected attribute for all tabs
      tabLinks.forEach((tabLink) => {
        tabLink.setAttribute("aria-selected", "false");
      });

      // Show the selected tab content
      document.getElementById(tabId).removeAttribute("hidden");
      this.setAttribute("aria-selected", "true");
    });
  });
});
