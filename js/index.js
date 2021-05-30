const firstSection = document.querySelector('.brief-intro');
const secondSection = document.querySelector('.news');
const thirdSection = document.querySelector('.monthly-event');
const firstPopUpBtn = document.querySelectorAll('#popup-button-1');
const secondPopUpBtn = document.querySelectorAll('#popup-button-2');

const firstPopUpWindow = document.createElement('div');
firstPopUpWindow.innerHTML = `<h3>Lorem Ipsum</h3> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
nisi incidunt pariatur earum eveniet, hic, fugiat beatae molestiae
quaerat explicabo est ad tenetur aliquam. Aspernatur dolores
recusandae doloribus fugiat saepe!</p>`;
firstPopUpWindow.classList.add('popup-window');

for (let i = 0; i < firstPopUpBtn.length; i++) {
  firstPopUpBtn[i].addEventListener('click', function () {
    // console.log('clicked');
    firstSection.appendChild(firstPopUpWindow);
  });
}
