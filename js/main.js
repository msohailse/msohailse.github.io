document.getElementById('year').textContent = new Date().getFullYear();

var navToggle = document.getElementById('navToggle');
var mobileNav = document.getElementById('mobileNav');

navToggle.addEventListener('click', function () {
  var open = mobileNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

mobileNav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
