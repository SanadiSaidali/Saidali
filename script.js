// Add your JavaScript functionality here
document.addEventListener('DOMContentLoaded', function() {
    // Form Validation for Contact Section
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        var emailInput = document.getElementById('email').value;
        if (!isValidEmail(emailInput)) {
            alert('Please enter a valid email address');
            event.preventDefault(); // Prevent form submission
        }
    });

    function isValidEmail(email) {
        // Basic email validation for demonstration
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Dynamic Filtering for Projects Section
    document.getElementById('filterProjects').addEventListener('change', function() {
        var selectedCategory = this.value;
        filterProjects(selectedCategory);
    });

    function filterProjects(category) {
        // Implement logic to filter projects based on the selected category
        // Update the display of projects accordingly
        console.log('Filtering projects by category:', category);
    }

    // Interactive Chart or Visualization (Not fully implemented, placeholder function)
    function createChart() {
        // Implement chart creation logic using a library like Chart.js or D3.js
        console.log('Chart created!');
    }

    // Client-Side Form Validation on the Contact Section (Additional validation can be added)
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        var nameInput = document.getElementById('name').value;
        var messageInput = document.getElementById('message').value;

        if (nameInput.trim() === '' || messageInput.trim() === '') {
            alert('Name and Message are required fields');
            event.preventDefault(); // Prevent form submission
        }
    });

    // Custom Animations or Transitions (Not fully implemented, placeholder function)
    function applyCustomAnimation() {
        // Implement custom animation logic using CSS transitions or JavaScript libraries
        console.log('Custom animation applied!');
    }

    // Incorporate Third-Party API (Not fully implemented, placeholder function)
    function integrateThirdPartyAPI() {
        // Implement logic to interact with a third-party API
        console.log('Third-party API integrated!');
    }

    // Call functions as needed
    createChart(); // Example chart creation
    applyCustomAnimation(); // Example custom animation
    integrateThirdPartyAPI(); // Example third-party API integration
});