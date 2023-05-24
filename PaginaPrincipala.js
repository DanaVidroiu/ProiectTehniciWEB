// Selectăm formularul
var form = document.getElementById('my-form');
var emailInput = document.getElementById('email');

// Adăugăm un event listener pentru evenimentul de submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previne trimiterea formularului

  // Validare formular
  if (!validateForm()) {
    return;
  }

  // Salvăm adresa de email în LocalStorage
  saveEmail();

  // Trimite formularul sau efectuează operațiile dorite
  submitForm();
});

// Funcție pentru validarea formularului
function validateForm() {
  // Implementați validarea formularului așa cum ați făcut-o anterior
  // ...

  // Formularul este valid
  return true;
}

// Funcție pentru salvarea adresei de email în LocalStorage


  // Funcție pentru validarea formularului
  function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var date = document.getElementById('date').value;
    var genres = document.querySelectorAll('input[name="gen"]:checked');
    var terms = document.getElementById('terms').checked;

// Validare nume
const nameRegex = /^[a-zA-Z\s]+$/;

if (!nameRegex.test(name.trim())) {
  document.getElementById('name-error').textContent = 'Introduceți un nume valid';
  return false;
}

// Validare email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  document.getElementById('email-error').textContent = 'Introduceți un email valid';
  return false;
}

// Validare parolă
if (password.length < 6) {
  document.getElementById('password-error').textContent = 'Parola trebuie să aibă cel puțin 6 caractere';
  return false;
}

// Validare data
if (date === '') {
  document.getElementById('date-error').textContent = 'Introduceți o dată';
  return false;
}

// Validare genuri
if (genres.length === 0) {
  document.getElementById('gen-error').textContent = 'Selectați cel puțin un gen';
  return false;
}

// Validare termeni și condiții
if (!terms) {
  document.getElementById('terms-error').textContent = 'Trebuie să fiți de acord cu termenii';
  return false;
}

    // Formularul este valid
    return true;
  }


  // Funcție pentru trimiterea formularului sau efectuarea altor operații
  function submitForm() {
    // Aici puteți implementa logica de trimitere a formularului la server sau de efectuare a altor operații cu datele formularului
    console.log('Formularul a fost trimis!');
  }

