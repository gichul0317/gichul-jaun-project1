'use strict';

const form = document.querySelector('form');
const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.active');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const userName = document.querySelector('#user-name');
  const userMail = document.querySelector('#user-email');
  const userComment = document.querySelector('#message');
  if (userName.value && userMail.value && userComment.value) {
    userName.value = '';
    userMail.value = '';
    userComment.value = '';
    alert('Thank You. We will get back to you soon 😉😂');
  }
});

navBtn.addEventListener('click', function () {
  nav.classList.toggle('active');
});
