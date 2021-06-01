'use strict';

const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.active');

navBtn.addEventListener('click', function () {
  nav.classList.toggle('active');
});
