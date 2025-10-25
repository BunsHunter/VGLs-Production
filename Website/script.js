// Navbar shrink saat scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Slider otomatis
let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

setInterval(() => {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 4000);

// Animasi muncul saat discroll
const fadeEls = document.querySelectorAll('.fade-in, .card');

const onScroll = () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', onScroll);
onScroll();
