// Navbar and Footer Components
function createNavbar() {
    return `
    <nav class="navbar">
        <div class="container">
            <div class="nav-brand">
                <a href="/" class="logo">GPHMT</a>
            </div>
            <ul class="nav-menu">
                <li><a href="/about.html">About</a></li>
                <li><a href="/rules.html">Rules</a></li>
                <li><a href="/archive.html">Archive</a></li>
                <li><a href="/organizers.html">Organizers</a></li>
                <li><a href="/help-us.html">Help Us</a></li>
                <li><a href="/register.html" class="nav-register">Register</a></li>
            </ul>
        </div>
    </nav>
    `;
}

function createFooter() {
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h4>GPHMT</h4>
                    <p>Greater Pacific Highlands Math Tournament</p>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about.html">About</a></li>
                        <li><a href="/rules.html">Rules</a></li>
                        <li><a href="/archive.html">Archive</a></li>
                        <li><a href="/organizers.html">Organizers</a></li>
                        <li><a href="/help-us.html">Help Us</a></li>
                        <li><a href="/register.html">Register</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact</h4>
                    <p><a href="mailto:organizers@gphmt.org">organizers@gphmt.org</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025-2026 GPHMT. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
}

// Inject navbar and footer components
document.addEventListener('DOMContentLoaded', function() {
    const navbarContainer = document.getElementById('navbar-container');
    const footerContainer = document.getElementById('footer-container');
    
    if (navbarContainer) {
        navbarContainer.innerHTML = createNavbar();
    }
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
    }
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
