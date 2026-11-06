const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', function () {
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
  });
});
const toTop = document.getElementById('toTop');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});
toTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
