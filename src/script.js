// Parallax effect on scroll
window.addEventListener('scroll', function () {
    const hero = document.getElementById('hero');
    const scrolled = window.scrollY;
    hero.style.backgroundPositionY = -scrolled * 0.3 + 'px';
});

// Function to handle button hover effect
function handleButtonHover() {
    const button = document.getElementById('button');
    button.classList.toggle('bg-blue-400');
}

// Add event listeners to button
const button = document.getElementById('button');
button.addEventListener('mouseenter', handleButtonHover);
button.addEventListener('mouseleave', handleButtonHover);
