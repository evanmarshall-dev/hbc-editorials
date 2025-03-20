// This code selects all elements that have a data-target attribute and assigns them to the modalLinks constant using the querySelectorAll() method. This code is used to select all the links that open modal dialog boxes so that a click event listener can be added to each of them to open the corresponding modal dialog box when clicked.
const modalLinks = document.querySelectorAll('[data-target]');

// This code selects all elements with the class "hbc-ed-modal__close" and assigns them to the closeModal constant using the querySelectorAll() method. This code is used to select all the close buttons in the modal dialog boxes so that a click event listener can be added to each of them to close the modal dialog box when clicked.
const closeModal = document.querySelectorAll('.ed-modal__content-close');

// This code adds a click event listener to each element in the modalLinks array. When a link is clicked, the code finds the element with the ID specified in the data-target attribute of the clicked link using the querySelector() method and assigns it to the modal variable. Then, the showModal() method is called on the modal element to display the modal dialog box. This code is used to open a modal dialog box when the user clicks on a link with the modalLinks class.
modalLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const modal = document.querySelector(link.dataset.target);
    modal.style.display = 'block';
  });
});

// This code adds a click event listener to each element in the closeModal array. When a button is clicked, the code finds the closest ancestor element that is a "dialog" element using the closest() method and assigns it to the modal variable. Then, the close() method is called on the modal element to close the modal dialog box. This code is used to close a modal dialog box when the user clicks on a button with the closeModal class.
closeModal.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.ed-modal'); // Ensure the closest modal is targeted
    if (modal) {
      modal.style.display = 'none'; // Correctly hide the modal
    }
  });
});

// This code adds a click event listener to the document object. When a click event occurs, the code checks if the clicked element or any of its ancestors is a "dialog" element using the closest() method. If a "dialog" element is found, it is closed using the close() method. This code is used to close any open modal dialog boxes when the user clicks outside of them.
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('ed-modal')) {
    const modal = event.target;
    modal.style.display = 'none'; // Close the modal if the background is clicked
  }
});
