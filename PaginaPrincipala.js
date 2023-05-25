var form = document.getElementById('formular');
var emailInput = document.getElementById('email');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 


  if (!validateForm()) {
    return;
  }

  saveEmail();

  submitForm();
});


function validateForm() {

  return true;
}


  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var date = document.getElementById('date').value;
    var genres = document.querySelectorAll('input[name="gen"]:checked');
    var terms = document.getElementById('terms').checked;


const nameRegex = /^[a-zA-Z\s]+$/;

if (!nameRegex.test(name.trim())) {
  document.getElementById('name-error').textContent = 'Introduceți un nume valid';
  return false;
}


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  document.getElementById('email-error').textContent = 'Introduceți un email valid';
  return false;
}


if (password.length < 6) {
  document.getElementById('password-error').textContent = 'Parola trebuie să aibă cel puțin 6 caractere';
  return false;
}


if (date === '') {
  document.getElementById('date-error').textContent = 'Introduceți o dată';
  return false;
}


if (genres.length === 0) {
  document.getElementById('gen-error').textContent = 'Selectați cel puțin un gen';
  return false;
}

if (!terms) {
  document.getElementById('terms-error').textContent = 'Trebuie să fiți de acord cu termenii';
  return false;
}

    return true;
  }



  function submitForm() {
    
    console.log('Formularul a fost trimis!');
  }

