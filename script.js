let count = 0

const dotOne = document.querySelector('.dot-1')
const dotTwo = document.querySelector('.dot-2')
const dotThree = document.querySelector('.dot-3')
dotOne.style.backgroundColor = '#5BC8AF'

const clientOne = document.querySelector('.client-1')
const clientTwo = document.querySelector('.client-2')
const clientThree = document.querySelector('.client-3')
clientOne.style.display = 'block'
clientTwo.style.display = 'none'
clientThree.style.display = 'none'

const abbie = document.querySelector('.abbie')
const jack = document.querySelector('.jack')
const karen = document.querySelector('.karen')
abbie.style.display = 'block'
jack.style.display = 'none'
karen.style.display = 'none'

const abbieTest = document.querySelector('.abbie-test')
const jackTest = document.querySelector('.jack-test')
const karenTest = document.querySelector('.karen-test')
abbieTest.style.display = 'block'
jackTest.style.display = 'none'
karenTest.style.display = 'none'

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const businessEmail = document.getElementById("business-email");
const company = document.getElementById("company");

const prevButton = document.getElementById("arrow-left");
prevButton.addEventListener("click", () => {
  if (count < 1) {
    count = 2
    dotColorChange(count)
    console.log(count);
    return;
  }
  count--
  dotColorChange(count)
  console.log(count);
})

const nextButton = document.getElementById("arrow-right");
nextButton.addEventListener("click", () => {
  if (count > 1) {
    count = 0
    dotColorChange(count)
    console.log(count);
    return;
  }
  count++
  dotColorChange(count)
  console.log(count);
})

function dotColorChange(count){
  if (count === 0) {
    dotOne.style.backgroundColor = '#5BC8AF';    
    dotTwo.style.backgroundColor = '#EAEAEA';
    dotThree.style.backgroundColor = '#EAEAEA';

    clientOne.style.display = 'block';    
    clientTwo.style.display = 'none';
    clientThree.style.display = 'none';

    abbie.style.display = 'block'
    jack.style.display = 'none'
    karen.style.display = 'none'

    abbieTest.style.display = 'block'
    jackTest.style.display = 'none'
    karenTest.style.display = 'none'
  }
  if (count === 1) {
    dotOne.style.backgroundColor = '#EAEAEA';    
    dotTwo.style.backgroundColor = '#5BC8AF';
    dotThree.style.backgroundColor = '#EAEAEA';

    clientOne.style.display = 'none';    
    clientTwo.style.display = 'block';
    clientThree.style.display = 'none';

    abbie.style.display = 'none';    
    jack.style.display = 'block';
    karen.style.display = 'none';

    abbieTest.style.display = 'none';    
    jackTest.style.display = 'block';
    karenTest.style.display = 'none';
  }
  if (count === 2) {
    dotOne.style.backgroundColor = '#EAEAEA';    
    dotTwo.style.backgroundColor = '#EAEAEA';
    dotThree.style.backgroundColor = '#5BC8AF';

    clientOne.style.display = 'none';    
    clientTwo.style.display = 'none';
    clientThree.style.display = 'block';

    abbie.style.display = 'none';    
    jack.style.display = 'none';
    karen.style.display = 'block';

    abbieTest.style.display = 'none';    
    jackTest.style.display = 'none';
    karenTest.style.display = 'block';
  }
}

dotOne.addEventListener('click', () => {
  dotOne.style.backgroundColor = '#5BC8AF';    
    dotTwo.style.backgroundColor = '#EAEAEA';
    dotThree.style.backgroundColor = '#EAEAEA';

    clientOne.style.display = 'block';    
    clientTwo.style.display = 'none';
    clientThree.style.display = 'none';

    abbie.style.display = 'block'
    jack.style.display = 'none'
    karen.style.display = 'none'

    abbieTest.style.display = 'block'
    jackTest.style.display = 'none'
    karenTest.style.display = 'none'
})
dotTwo.addEventListener('click', () => {
  dotOne.style.backgroundColor = '#EAEAEA';    
  dotTwo.style.backgroundColor = '#5BC8AF';
  dotThree.style.backgroundColor = '#EAEAEA';

  clientOne.style.display = 'none';    
  clientTwo.style.display = 'block';
  clientThree.style.display = 'none';

  abbie.style.display = 'none';    
  jack.style.display = 'block';
  karen.style.display = 'none';

  abbieTest.style.display = 'none';    
  jackTest.style.display = 'block';
  karenTest.style.display = 'none';
})
dotThree.addEventListener('click', () => {
  dotOne.style.backgroundColor = '#EAEAEA';    
  dotTwo.style.backgroundColor = '#EAEAEA';
  dotThree.style.backgroundColor = '#5BC8AF';

  clientOne.style.display = 'none';    
  clientTwo.style.display = 'none';
  clientThree.style.display = 'block';

  abbie.style.display = 'none';    
  jack.style.display = 'none';
  karen.style.display = 'block';

  abbieTest.style.display = 'none';    
  jackTest.style.display = 'none';
  karenTest.style.display = 'block';
})

const burgerIcon = document.querySelector('.burger');
const drawerMenu = document.getElementById('drawerMenu');

burgerIcon.addEventListener('click', (event) => {
  drawerMenu.style.top = drawerMenu.style.top === '0px' ? '-200px' : '0px';
  event.stopPropagation(); // Prevent click from propagating to the document
});

// Close the drawer when clicking outside
document.addEventListener('click', (event) => {
  if (drawerMenu.style.top === '0px' && !drawerMenu.contains(event.target)) {
    drawerMenu.style.top = '-200px';
  }
});


const getCountries = async () => {
  try {
    // Fetch countries data
    const allCountries = await fetch("https://restcountries.com/v3.1/all");
    const response = await allCountries.json();

    // Extract the country names
    const countries = response.map(x => x.name.common);

    // Get the select element
    const select = document.getElementById("countries-select");

    // Add each country as an option
    countries.forEach(country => {
      const option = document.createElement("option");
      option.value = country; // Set the value of the option
      option.textContent = country; // Set the display text of the option
      option.style.color = 'black';
      select.appendChild(option); // Append the option to the select element
    });
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

// Call the function to populate the dropdown
getCountries();
// countries[0].map(x => console.log(x.name))

function hideError(classID) {
  const errorElement = document.querySelector(`.${classID}`);
  errorElement.style.display = "none";
}

firstName.addEventListener('click', () => {
  let isValid = true
  if (firstName.value.trim()){
    hideError("error-message-fname")
  }
  if (lastName.value.trim()){
    hideError("error-message-lname")
  }
  if (businessEmail.value.trim()){
    hideError("error-message-email")
  }
  if (company.value.trim()){
    hideError("error-message-comp")
  }
})

lastName.addEventListener('click', () => {
  let isValid = true
  if (firstName.value.trim()){
    hideError("error-message-fname")
  }
  if (lastName.value.trim()){
    hideError("error-message-lname")
  }
  if (businessEmail.value.trim()){
    hideError("error-message-email")
  }
  if (company.value.trim()){
    hideError("error-message-comp")
  }
})

businessEmail.addEventListener('click', () => {
  let isValid = true
  if (firstName.value.trim()){
    hideError("error-message-fname")
  }
  if (lastName.value.trim()){
    hideError("error-message-lname")
  }
  if (businessEmail.value.trim()){
    hideError("error-message-email")
  }
  if (company.value.trim()){
    hideError("error-message-comp")
  }
})

company.addEventListener('click', () => {
  let isValid = true
  if (firstName.value.trim()){
    hideError("error-message-fname")
  }
  if (lastName.value.trim()){
    hideError("error-message-lname")
  }
  if (businessEmail.value.trim()){
    hideError("error-message-email")
  }
  if (company.value.trim()){
    hideError("error-message-comp")
  }
})

const video = document.getElementById('my-video');
const playButton = document.querySelector('.play-button');
const thumbnail = document.getElementById('thumbnail')
playButton.addEventListener('click', () => {
  console.log('hi');
  thumbnail.style.display = 'none'
  video.style.display = 'block'
  if (video.paused) {
    video.play();
  } else{
    video.pause()
  }
  video.addEventListener('ended', () => {
    video.currentTime = 0; // Reset to the beginning
    video.play(); // Start playing again
  });
});

document.querySelector(".sbmt-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent any default behavior, like form submission.
  
  // const country = document.getElementById("countries-select");

  let isValid = true;

    // Validate each field
    if (!firstName.value.trim()) {
      showError("error-message-fname")
      isValid = false;
    } else{
      hideError("error-message-fname")
    }
    if (!lastName.value.trim()) {
      showError("error-message-lname")
      isValid = false;
    } else{
      hideError("error-message-lname")
    }
    if (!businessEmail.value.trim()) {
      showError("error-message-email")
      isValid = false;
    } else{
      hideError("error-message-email")
    }
    if (!company.value.trim()) {
      showError("error-message-comp")
      isValid = false;
    } else{
      hideError("error-message-comp")
    }
    function showError(classID) {
      const errorElement = document.querySelector(`.${classID}`);
      errorElement.style.display = "block";
    }
    function hideError(classID) {
      const errorElement = document.querySelector(`.${classID}`);
      errorElement.style.display = "none";
    }
  // Redirect to a new page or dynamically display a success message
  
  if (isValid) {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Submission</title>
  <style>
    body {
      font-family: 'Roboto', Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #f3f4f6, #e8eaf6);
      color: #333;
    }
    .container {
      text-align: center;
      background: #fff;
      border-radius: 10px;
      padding: 30px 50px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .container h1 {
      font-size: 2rem;
      color: #4CAF50;
      margin-bottom: 10px;
      animation: fadeIn 1.5s ease-in-out;
    }
    .container p {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 20px;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 1rem;
      font-weight: bold;
      color: #fff;
      background-color: #4CAF50;
      border: none;
      border-radius: 5px;
      text-decoration: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .button:hover {
      background-color: #45a049;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Success!</h1>
    <p>Your form has been submitted successfully. Thank you!</p>
    <a href="/" class="button">Go Back</a>
  </div>
</body>
</html>
    `);
  }
});


