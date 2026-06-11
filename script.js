const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const backToTop = document.getElementById('backToTop');
const previewImage = document.getElementById('previewImage');
const thumbButtons = document.querySelectorAll('.thumb');

menuToggle?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 420) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

thumbButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const src = button.getAttribute('data-src');
    if (!src) return;
    previewImage.src = src;
    thumbButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});

const uploadInput = document.getElementById('uploadImageInput');
uploadInput?.addEventListener('change', (event) => {
  const target = event.target;
  const file = target.files?.[0];
  if (!file || !file.type.startsWith('image/')) return;
  previewImage.src = URL.createObjectURL(file);
  thumbButtons.forEach((item) => item.classList.remove('active'));
});

const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      event.preventDefault();
      const offset = 80;
      const top = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
