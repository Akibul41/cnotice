import { auth, createUserWithEmailAndPassword } from './app.js';

document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert('User created! You can now log in.');
    window.location.href = 'login.html';
  } catch (error) {
    alert("Sign Up Failed: " + error.message);
  }
});