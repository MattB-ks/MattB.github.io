const submitEl = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const plus1Input = document.querySelector('#plus1');
const submissionResponseEl = document.querySelector('#response');
const regArray = [];

function validateEmail(emailInput) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailInput);
}

function showResponse(event) {
  
  event.preventDefault();
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || plus1Input.value.trim()  === '') {
    alert('All fields are required.'); 
    return
  }
  const response =
    'Thank you for registering your party of ' +
    plus1Input.value +
    ', ' +
    nameInput.value +
    '! We will reach out to you at ' +
    emailInput.value +
    '.';

    if (!validateEmail(emailInput.value)) {
      alert("Invalid email");
      return;
  }

  submissionResponseEl.textContent = response;

  const attendee = {
    name: nameInput.value,
    email: emailInput.value,
    plus1: plus1Input.value
  };

  regArray.push(attendee);

  localStorage.setItem('regArray', JSON.stringify(regArray));

}

function clearFields() {
  
  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("plus1").value = '';
  
}


submitEl.addEventListener('click', showResponse);

submitEl.addEventListener('click', clearFields);