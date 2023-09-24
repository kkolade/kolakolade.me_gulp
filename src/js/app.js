const about = document.querySelector('#about');
const tabLinks = document.querySelectorAll('.about__tab-link');
const tabContents = document.querySelectorAll('.about__tab-content');
const aboutOverlay = document.querySelector('.about__overlay');
const popup = document.querySelector('.about__popup');
const popupClose = document.querySelector('.about__popup__close');

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
const now = new Date().getFullYear();
const year = document.getElementById('year');
year.innerText = now;
