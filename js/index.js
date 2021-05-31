'use strict';

const firstPopUpBtn = document.querySelector('#popup-button-1');
const secondPopUpBtn = document.querySelector('#popup-button-2');
const thirdPopUpBtn = document.querySelectorAll('#popup-button-3');
const firstPopUpWindow = document.querySelector('.popup-window-1');
const secondPopUpWindow = document.querySelector('.popup-window-2');
const thirdPopUpWindow = document.querySelectorAll('.popup-window-3');
const overlay = document.querySelector('.overlay');
const firstCloseBtn = document.querySelector('.close-window-1');
const secondCloseBtn = document.querySelector('.close-window-2');
const thirdCloseBtn = document.querySelectorAll('.close-window-3');

const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('nav');

firstPopUpBtn.addEventListener('click', function () {
  firstPopUpWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

secondPopUpBtn.addEventListener('click', function () {
  secondPopUpWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

for (let i = 0; i < thirdPopUpBtn.length; i++) {
  thirdPopUpBtn[i].addEventListener('click', function () {
    thirdPopUpWindow[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

for (let i = 0; i < thirdCloseBtn.length; i++) {
  thirdCloseBtn[i].addEventListener('click', function () {
    thirdPopUpWindow[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });
}

firstCloseBtn.addEventListener('click', function () {
  firstPopUpWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});

secondCloseBtn.addEventListener('click', function () {
  secondPopUpWindow.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  firstPopUpWindow.classList.add('hidden');
  secondPopUpWindow.classList.add('hidden');
  thirdPopUpWindow[0].classList.add('hidden');
  thirdPopUpWindow[1].classList.add('hidden');
  overlay.classList.add('hidden');
});

navBtn.addEventListener('click', function () {
  nav.classList.toggle('hidden');
});
