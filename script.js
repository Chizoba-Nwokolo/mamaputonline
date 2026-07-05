/* ============================================
   MAMAPUTONLINE - EXTERNAL JAVASCRIPT
   Mobile Menu & Cart Functionality
   ============================================ */

/**
 * Toggle mobile navigation menu
 * Shows/hides the dropdown menu when hamburger is clicked
 */
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

/**
 * Close menu when clicking on a link (mobile only)
 * Improves user experience on mobile devices
 */
document.querySelectorAll('.nav-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        if (window.innerWidth < 768) {
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

/**
 * Add to cart functionality
 * Provides visual feedback when user clicks add to cart
 */
document.querySelectorAll('.add-to-cart').forEach(function(button) {
    button.addEventListener('click', function() {
        const productName = this.closest('.product-card').querySelector('.product-name').textContent;

        // Show confirmation to user
        alert(productName + ' has been added to your cart!');

        // Optional: Change button text temporarily
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Added!';
        this.style.background = '#27ae60';

        // Revert button after 2 seconds
        setTimeout(function(btn, text) {
            btn.innerHTML = text;
            btn.style.background = '';
        }, 2000, this, originalText);
    });
});

/**
 * Smooth scroll for anchor links
 * Enhances navigation experience
 */
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});