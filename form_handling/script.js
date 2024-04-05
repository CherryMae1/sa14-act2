
const userForm = document.getElementById('userForm')

const username = document.getElementById('username')
const usernameError = document.getElementById('usernameError')

const email = document.getElementById('email')
const emailError = document.getElementById('emailError')

const password = document.getElementById('password')
const passwordError = document.getElementById('passwordError')


userForm.addEventListener('submit', function(event) {
  event.preventDefault();
  Validation()
});

function Validation() {
  let check = true;


  if (username.value.length < 6) {
    usernameError.textContent = 'Username has to be at least 6 characters long';
    check = false;
  }
    else {
      usernameError.textContent = '';
    }

  
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailFormat.test(email.value)) {
    emailError.textContent = 'Not a valid email, please try again';
    check = false;
  }
    else {
      emailError.textContent = '';
    }

    const passwordFormat = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordFormat.test(password.value)) {
      passwordError.textContent = 'Password must include a capital letter, number, and at least 8 digits';
      check = false;
    }
      else {
        passwordError.textContent = '';
      }
    
    if (check) {
      alert('You are now registered');
      userForm.reset();
    }
}


