'use strict';

const btnTry = document.querySelector('.btn--try');
const btnSubmit = document.querySelector('.btn--submit');
const formQ1 = document.querySelector('.form__input');
const alerts = document.querySelectorAll('.form__alert');
let active,
  ctr = 0,
  isValid = true;

const getCurrent = function () {
  active = document.activeElement.id;
};

const checkInput = function () {
  const verifyEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const userInfo = {
    userFname: document.getElementById('userFname').value,
    userLname: document.getElementById('userLname').value,
    userEmail: document.getElementById('userEmail').value,
    userPword: document.getElementById('userPword').value,
  };

  const info = Object.keys(userInfo);

  for (const info in userInfo) {
    if (userInfo[info] == '') {
      document.getElementById(info).classList.add('form__error');
    } else {
      if (info == 'userEmail') {
        isValid = verifyEmail.test(userInfo[info]);
        if (!isValid) {
          document.getElementById(info).classList.add('form__error');
        } else {
          document.getElementById(info).classList.remove('form__error');
        }
      } else {
        document.getElementById(info).classList.remove('form__error');
      }
    }
  }
  for (let i = 0; i < alerts.length; i++) {
    if (document.getElementById(info[i]).classList.contains('form__error')) {
      alerts[i].classList.remove('invisible');
      ctr += 1;
    } else {
      alerts[i].classList.add('invisible');
      ctr -= 1;
    }
    console.log(`ctr: ${ctr}`);
  }
  if (ctr <= 0) {
    document.querySelector('.btn--submit').textContent = `Free trial claimed!`;
    document
      .querySelector('.btn--submit')
      .classList.add('btn--submit--success');
  }
};

btnTry.addEventListener('click', function () {
  if (!active) {
    formQ1.focus();
  } else {
    document.getElementById(active).classList.add('focus');
    setTimeout(() => {
      document.getElementById(active).classList.remove('focus');
    }, 1000);
    document.getElementById(active).focus();
  }
});
