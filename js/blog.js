'use strict';

const app = {};

app.form = document.querySelector('form');
app.userName = document.querySelector('#user-name');
app.userMail = document.querySelector('#user-email');
app.userComment = document.querySelector('#comment');
app.navBtn = document.querySelector('.nav-btn');
app.nav = document.querySelector('.active');
app.target = document.querySelector('.comments');

app.navigation = function () {
  app.navBtn.addEventListener('click', function () {
    app.nav.classList.toggle('active');
  });
};

app.createComment = function () {
  const userCommentDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const textDiv = document.createElement('div');
  const pOne = document.createElement('p');
  const pTwo = document.createElement('p');
  const image = document.createElement('img');
  userCommentDiv.setAttribute('class', 'user-comments');
  imgDiv.setAttribute('class', 'user-image');
  textDiv.setAttribute('class', 'user-text-box');
  app.target.appendChild(userCommentDiv);
  userCommentDiv.appendChild(imgDiv);
  userCommentDiv.appendChild(textDiv);
  pOne.innerHTML = `Wednesday June 2nd, 2021 by ${app.userName.value}`;
  pTwo.innerHTML = `${app.userComment.value}`;
  image.src = 'http://placekitten.com/94/92';
  image.alt = 'user profile picture';
  imgDiv.appendChild(image);
  textDiv.appendChild(pOne);
  textDiv.appendChild(pTwo);
};

app.postComment = function () {
  app.form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (app.userName.value && app.userMail.value && app.userComment.value) {
      app.createComment();
      app.reset();
    }
  });
};

app.reset = function () {
  app.userName.value = '';
  app.userMail.value = '';
  app.userComment.value = '';
};

app.init = function () {
  app.navigation();
  app.postComment();
};

app.init();
