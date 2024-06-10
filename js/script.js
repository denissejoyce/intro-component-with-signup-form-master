'use strict';

const btnTry = document.querySelector('.btn--try');
const btnSubmit = document.querySelector('.btn--submit');
const formQ1 = document.querySelector('.form__input');
const alerts = document.querySelectorAll('.form__alert');
let active;

const getCurrent = function () {
  active = document.activeElement.id;
};

const checkInput = function () {
  //   const userFname = document.getElementById('userFname').value;
  //   const userLname = document.getElementById('userLname').value;
  let userEmail = document.getElementById('userEmail').value;
  let ctr = 0;
  let inputElem = [];
  //   const userPword = document.getElementById('userPword').value;

  const verifyEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  userEmail = verifyEmail.test(userEmail) ? userEmail : '';
  //   const userInfo = [userFname, userLname, userEmail, userPword];

  const userInfo = {
    userFname: document.getElementById('userFname').value,
    userLname: document.getElementById('userLname').value,
    userEmail: userEmail,
    userPword: document.getElementById('userPword').value,
  };

  // EMPTY FORM
  for (const info in userInfo) {
    if (userInfo[info] != '') ctr += 1;
  }
  if (!ctr) {
    for (const user in userInfo) {
      document.getElementById(user).classList.add('form__error');
    }
    for (let i = 0; i < alerts.length; i++) {
      alerts[i].classList.remove('invisible');
    }
  } else {
  }
};

// TRY
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

btnSubmit.addEventListener('click', function () {
  checkInput();
  //   formQ1.classList.add('form__error');
});
