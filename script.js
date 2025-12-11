// Navbar and Footer Components
function createNavbar() {
    return `
    <nav class="navbar">
        <div class="container">
            <div class="nav-brand">
                <a href="/" class="logo">GPHMT</a>
            </div>
            <button class="menu-toggle" id="menuToggle">☰</button>
            <ul class="nav-menu" id="navMenu">
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
        
        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
            });
        }
        
        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
    }
    
    // Registration form checkbox handler
    const agreeRulesCheckbox = document.getElementById('agreeRules');
    const registrationLink = document.getElementById('registrationLink');
    const rulesWarning = document.getElementById('rulesWarning');
    
    if (agreeRulesCheckbox && registrationLink && rulesWarning) {
        agreeRulesCheckbox.addEventListener('change', function() {
            if (this.checked) {
                registrationLink.style.display = 'inline-block';
                rulesWarning.style.display = 'none';
            } else {
                registrationLink.style.display = 'none';
                rulesWarning.style.display = 'block';
            }
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
