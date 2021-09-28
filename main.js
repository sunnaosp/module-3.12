// We use strict mode
"use strict";

// filling out the forms
function validateForm(form) {
  resetErrors();

  let x = form.fname.value;
  if (x.length === 0) {
    const fnameError = document.getElementById("fname-error");
    fnameError.innerHTML = "Name must not be empty";
    return false;
  }

  x = form.femail.value;
  if (!validateEmail(x)) {
    const fnameError = document.getElementById("femail-error");
    fnameError.innerHTML = "Email must be valid";
    return false;
  }

  x = form.fcourse.value;
  if (x === "") {
    const fnameError = document.getElementById("fcourse-error");
    fnameError.innerHTML = "Cource must not be empty";
    return false;
  }

  x = form.fmessage.value;
  if (x.length < 10) {
    const fnameError = document.getElementById("fmessage-error");
    fnameError.innerHTML = "Message must be minimum 10 letters";
    return false;
  }

  x = form.fmath.value;
  if (x !== "4") {
    const fnameError = document.getElementById("fmath-error");
    fnameError.innerHTML = "wrong number";
    return false;
  }

  const successOverlay = document.getElementById("success-overlay");
  successOverlay.classList.remove("hidden");

  setTimeout(() => {
    successOverlay.classList.add("hidden");
    resetForm(form);
  }, 4000);
}

// email validation copied from internet: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function resetErrors() {
  var errors = document.getElementsByClassName("error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].innerHTML = "";
  }
}

function resetForm(form) {
  form.fname.value = "";
  form.femail.value = "";
  form.fcourse.value = "";
  form.fmessage.value = "";
  form.fmath.value = "";
}
