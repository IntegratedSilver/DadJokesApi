// API endpoint
let apiUrl = 'https://icanhazdadjoke.com/';

//  random joke
function fetchJoke() {
  return fetch(apiUrl, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    return response.json();
  })
  .then(jokeData => {
    return jokeData.joke;
  })
}

// Function to update the display
function updateJokeDisplay(joke) {
  let jokeDisplay = document.getElementById('jokeDisplay');
  if (jokeDisplay) {
    jokeDisplay.textContent = joke;
  }
}

//  event listener
let getJokeButton = document.getElementById('getJokeButton');
if (getJokeButton) {
  getJokeButton.addEventListener('click', function() {
    fetchJoke().then(joke => {
      if (joke) {
        updateJokeDisplay(joke);
      } else {
        updateJokeDisplay('Failed to fetch joke.');
      }
    });
  });
}
