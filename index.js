var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var url = 'https://passwordinator.onrender.com/';
let finalurl = "";


const slider1 = document.getElementById('myRange');
slider1.addEventListener('input', function () {
  const sliderValue = this.value;
  console.log('Slider value:', sliderValue);
});

const upperCase = document.getElementById("uppercase__input");
upperCase.addEventListener('click', updateUrl);
const number = document.getElementById("number__input");
number.addEventListener('click', updateUrl);
const characters = document.getElementById("input__characters");
characters.addEventListener('click', updateUrl);

function updateUrl() {
    const uppercaseChecked = upperCase.checked;
    const numberChecked = number.checked;
    const charactersChecked = characters.checked;
  
    // Reset the updatedUrl to the original URL
    let updatedUrl = url;
  
    if (uppercaseChecked) {
      updatedUrl += '?caps=true';
    }
  
    if (numberChecked) {
      updatedUrl += '&num=true';
    }
  
    if (charactersChecked) {
      updatedUrl += '&char=true';
    }
  
    // Add len parameter at the end
    const sliderValue = document.getElementById("myRange").value;
    updatedUrl += `&len=${sliderValue}`;
  
    // Update URL in the console
    console.log('Updated URL:', updatedUrl);
    finalurl = updatedUrl;
  }
  

var buttonSubmit = document.getElementById("button__submit");
buttonSubmit.addEventListener("click", function () {
   console.log(finalurl);
  fetch(finalurl)
    .then(response => {
      console.log('Fetch response:', response);
      return response.json();
    })
    .then(data => {
      console.log('Fetched data:', data.data); // Debugging output
      // Update the HTML element with the correct data
    var heading =  document.getElementById("heading");
    heading.innerHTML = data.data;
    heading.style.color = "white";
    heading.style.fontSize = "30px"
})
    .catch(error => {
      console.error('Fetch error:', error);
    });
});

