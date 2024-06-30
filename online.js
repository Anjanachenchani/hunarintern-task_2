// script.js
const form = document.getElementById('register-form');
const responseDiv = document.getElementById('register-response');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;

    // TO DO: Implement form validation and submission logic here
    // For now, just display a success message
    responseDiv.innerHTML = `Thank you for registering, ${name}!`;
});