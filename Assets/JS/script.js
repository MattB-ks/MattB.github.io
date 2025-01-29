//this is the start of code for the signup button
const signupBtn = document.querySelector('.btn');
const signupArray = [];


//this is a function to check if the email is valid pulled from google
function validateEmail(signupEmail) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(signupEmail);
}


//This is the event listener for the signupBtn
signupBtn.addEventListener('click', function () {
  let signupName = prompt('Please enter your full name to sign up for our newsletter', 'Name');
  let signupEmail = prompt('Please enter your email address to sign up for our newsletter', 'Email Address');


  if (!validateEmail(signupEmail)) {
    alert("Invalid email");
    return;
  }

  const user = {
    name: signupName,
    email: signupEmail
  }

  signupArray.push(user);

  localStorage.setItem('signupArray', JSON.stringify(signupArray));

  alert("Thank you for signing up for our newsletter");


});
//this is the end of the code for the signup button

//This is the start of the code for the carousel

const images = [
  "Assets/Images/islandResort.jpg",
  "Assets/Images/islandMountain.jpg",
  "Assets/Images/resortPool.jpg",
  "Assets/Images/Family meal.jpg",
];

const imageContainer = document.querySelector(".carousel-inner .active img");
const prevButton = document.querySelector(".carousel-control-prev");
const nextButton = document.querySelector(".carousel-control-next");

let currentIndex = 0;

const updateImage = () => {
  imageContainer.src = images[currentIndex];
};

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image if needed
  updateImage();
});
//This is the end of the code for the carousel