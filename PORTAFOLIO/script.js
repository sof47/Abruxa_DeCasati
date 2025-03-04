// script.js
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
}
// Toggle the menu when the hamburger is clicked
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); // This will open or close the menu
}
// Toggle the menu when the hamburger is clicked
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); // This will open or close the menu
}

// Close the menu when clicking outside of the menu
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    
    // Check if the click is outside of the nav and hamburger
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove('active'); // Close the menu
    }
});
