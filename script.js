// script.js

document.getElementById('sign-in-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  if (email) {
    alert('Email submitted: ' + email);
  } else {
    alert('Please enter a valid email.');
  }
});
