// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the form element
    const productForm = document.getElementById("productForm");
  
    // Add a submit event listener to the form
    productForm.addEventListener("submit", function (e) {
      // Prevent the default form submission behavior
      e.preventDefault();
  
      // Show an alert message
      alert("Product information added!");
  
      // You can also optionally reset the form after submission
      productForm.reset();
    });
  });
  