// Simple form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const volunteerForm = document.getElementById('volunteerForm');
    
    // Registration form validation
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const fullname = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const school = document.getElementById('school').value.trim();
            const grade = document.getElementById('grade').value;
            const terms = document.getElementById('terms').checked;
            
            // Validate required fields
            if (!fullname || !email || !school || !grade || !terms) {
                alert('Please fill out all required fields and agree to the terms.');
                return;
            }
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message
            alert('Thank you for registering! We will send confirmation details to ' + email);
            
            // In a real application, you would send this data to a server
            // Example: sendFormData(formData);
            
            // Reset the form
            registrationForm.reset();
        });
    }
    
    // Volunteer form validation
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const fullname = document.getElementById('volunteer-fullname').value.trim();
            const email = document.getElementById('volunteer-email').value.trim();
            const expertise = document.getElementById('volunteer-expertise').value;
            
            // Validate required fields
            if (!fullname || !email || !expertise) {
                alert('Please fill out all required fields (name, email, and area of expertise).');
                return;
            }
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message
            alert('Thank you for volunteering! We will contact you at ' + email + ' soon with more details.');
            
            // In a real application, you would send this data to a server
            // Example: sendFormData(formData);
            
            // Reset the form
            volunteerForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links (polyfill for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Keyboard accessibility for form
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, select, textarea, button');
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                // Allow default tab behavior
                return;
            }
        });
    });
});
