const countdownDate = new Date("September 28, 2024 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown-container h1").innerText = "Event Started";
        document.querySelector(".countdown-timer").style.display = "none";
    }
}, 1000);

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const blurbg = document.querySelector('main');
const openMenu = document.querySelector('.material-symbols--menu');
const showmenu = document.querySelector('.nav-links-mobile');
const registerbtn = document.getElementById('register-btn');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  menu.classList.toggle('sticky');
  blurbg.classList.toggle('hero-filter');
  openMenu.classList.toggle('material-symbols--close');
  showmenu.classList.toggle('nav-links-mobile');
  registerbtn.classList.toggle('hide');
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    registerbtn.classList.remove('hide');
  } else {
    registerbtn.classList.add('hide');
  }
});

menu.addEventListener('click', () => {
  blurbg.classList.toggle('hero-filter');
  showmenu.classList.toggle('nav-links-mobile');
  openMenu.classList.toggle('material-symbols--close');
});
