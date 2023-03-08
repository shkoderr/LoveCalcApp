function calculateLove() {
  const girlfriendName = document.getElementById('girlfriendName').value
  const yourName = document.getElementById('yourName').value
  const resultDiv = document.createElement('div');
  const form = document.getElementById('calculator')
  resultDiv.id = 'result-div';
  if (girlfriendName === 'Ksusha' && yourName === 'Timur') {
    const lovePercentage = Math.floor(Math.random() * 101 + 100)
    resultDiv.innerHTML = `Your love percentage is can't be calculated because it's too big!
    I love you:)`; // set div's innerHTML to the result
    form.style.display = 'none'; // hide the form
  } else {
    resultDiv.innerHTML = "Sorry, it's only for Ksusha and Timur"; // set div's innerHTML to the error message
  }
  
  document.body.appendChild(resultDiv); 
  resultDiv.addEventListener('click', () => {
    resultDiv.style.display = 'none'
  })
}


$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  cssEase: 'linear',
  pauseOnFocus: false,
  pauseOnHover: false
});


//Show a calculator
const calcLove = document.getElementById('calculator');

window.addEventListener('click', (event) => {
  // Check if the calcLove element or its child elements are the target of the click event
  if (calcLove.contains(event.target)) {
    // Do not hide the calcLove element
    return;
  }
  
  // Hide the calcLove element if it is visible
  if (calcLove.style.display === 'block') {
    calcLove.style.display = 'none';
  } else {
    calcLove.style.display = 'block';
  }
});




