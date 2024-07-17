document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links-mobile');
    navLinks.classList.toggle('show');
    const menuIcon = document.querySelector('.material-symbols--menu');
    const closeIcon = document.querySelector('.material-symbols--close');
    if (navLinks.classList.contains('show')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});
