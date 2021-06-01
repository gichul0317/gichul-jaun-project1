'use strict';

const form = document.querySelector('form');
const userName = document.querySelector('#user-name');
const userMail = document.querySelector('#user-email');
const userComment = document.querySelector('#comment');
const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.active');

navBtn.addEventListener('click', function () {
  nav.classList.toggle('active');
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (userName.value && userMail.value && userComment.value) {
    const target = document.querySelector('.comment-2');
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.appendChild(document.createTextNode(userName.value));
    target.appendChild(div);
  }
});
