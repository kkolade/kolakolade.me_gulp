const about = document.querySelector('#about');
const tabLinks = document.querySelectorAll('.about__tab-link');
const tabContents = document.querySelectorAll('.about__tab-content');
const aboutOverlay = document.querySelector('.about__overlay');
const popup = document.querySelector('.about__popup');
const popupClose = document.querySelector('.about__popup__close');
// Footer Date
const now = new Date().getFullYear();
const year = document.getElementById('year');
// Mobile menu
const showMenu = document.getElementById('show-menu');
const closeMenu = document.getElementById('close-menu');
const sideMenu = document.getElementById('side-menu');
// Form Submission
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');
const scriptURL = 'https://script.google.com/macros/s/AKfycbxarRxRt0nxiF9Clf54o-f7loCk3atlmArcaXPLbBpnrS0ETje3COwhDX69eaz_A96xwA/exec';

// Typewriter text
const typewriter = document.getElementById('typewriter');

// Typewriter text
const typed = new Typed(typewriter, {
  strings: ['Full Stack Web Developer', 'Mobile App Developer', 'Wordpress Developer', 'Tech Enthusiast'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// About Overlay & Popup
about.addEventListener('click', (e) => {
  if (e.target.classList.contains('about__tab-link')) {
    tabLinks.forEach((tab) => {
      tab.classList.remove('active');
    });
    e.target.classList.add('active');

    tabContents.forEach((content) => {
      content.classList.remove('active');
      if (e.target.textContent.toLowerCase() === content.id) {
        content.classList.add('active');
      }
    });
  }
});

about.addEventListener('click', (e) => {
  if (e.target.classList.contains('about__more')) {
    aboutOverlay.classList.remove('hidden');
  }
});

aboutOverlay.addEventListener('click', (e) => {
  if (e.target === popupClose || e.target !== popup) {
    aboutOverlay.classList.add('hidden');
  }
});

// Footer Date
year.innerText = now;

// Mobile menu
showMenu.addEventListener('click', () => {
  sideMenu.style.right = '0';
});

closeMenu.addEventListener('click', () => {
  sideMenu.style.right = '-24rem';
});

// Form Submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      msg.innerText = 'Message sent successfully';
      setTimeout(() => {
        msg.innerText = '';
      }, 3000);
      form.reset();
    })
    .catch((error) => {
      msg.innerText = 'Something went wrong';
      msg.style.color = 'red';
      setTimeout(() => {
        msg.innerText = '';
      }, 3000);
      form.reset();
    });
});
