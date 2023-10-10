document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();  // prevent the default form submission

        const isConfirmed = confirm("Added. Do you want to proceed?");
        if (isConfirmed) {
            // AJAX submission
            const formData = new FormData(productForm);

            fetch('form_ok.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    window.location.href = 'index.html';
                } else {
                    alert('Error submitting product. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('Error submitting product. Please try again.');
            });
        }
    });
});
