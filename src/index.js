window.bootstrap = require('../node_modules/bootstrap/dist/js/bootstrap.bundle.js');
import "bootstrap/scss/bootstrap.scss"
import "@fortawesome/fontawesome-free/js/all.min"
import './sass/index.scss';

// for displaying date in footer
document.getElementById('fullyear').innerText = new Date().getFullYear()

// for toggling password visibility
let showPass = document.getElementById("showPass");
function myFunction() {
  var p = document.getElementById("Password");
  let v = document.getElementById("verifyPassword");;

  if (p.type === "password") {
    p.type = "text";
    if (v != null) {
      v.type = 'text'
    }
  } else {
    p.type = "password";
    if (v != null) {
      v.type = 'password'
    }
  }
}
if (showPass != null) {
  showPass.addEventListener("click", myFunction);
}

// for making sure that password fields are the same 
var confpass = document.getElementById("verifyPassword")
let submitBtn = document.getElementById("submitBtn")
function confirmPassword(evt) {
  let passValue = document.getElementById("Password").value
  let confpassValue = document.getElementById("verifyPassword").value
  if (passValue !== confpassValue) {
    document.querySelector('.notEqualPassword').style.opacity = '1'
    evt.preventDefault()
  }
  else {
    document.querySelector('.notEqualPassword').style.opacity = '0'
    return true
  }
}
if (confpass != null) {
  submitBtn.addEventListener("click", confirmPassword);
}