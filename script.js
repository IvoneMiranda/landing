window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
});