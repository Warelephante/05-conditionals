const weatherForm = document.getElementById('weatherForm');
const weatherInput = document.getElementById('weather');
const temperatureInput = document.getElementById('temperature');
const suggestionBox = document.getElementById('suggestion');
const suggestionText = suggestionBox.querySelector('p');

weatherForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const weather = weatherInput.value;
  const temperature = Number(temperatureInput.value);

  let suggestion = '';

  if (weather === 'sunny') {
    suggestion = 'It\'s sunny! Grab your sunglasses 😎 and sunscreen ☀️.';
  } else if (weather === 'cloudy' || weather === 'rainy') {
    suggestion = `It's ${weather}! A light jacket might be a good idea.`;

    if (temperature < 50) {
      suggestion += ' Wear a warm jacket 🧥.';
    }
  } else if (weather === 'snowy') {
    suggestion = 'It\'s snowy! Bring a heavy coat 🧥, gloves 🧤, and boots ❄️.';
  } else if (weather === 'windy') {
    suggestion = 'It\'s windy! A light jacket or hoodie 🧥 and a hat 👒 would be useful.';
  } else {
    suggestion = 'Please choose a weather condition to get your suggestion.';
  }

  suggestionText.textContent = suggestion;
});
