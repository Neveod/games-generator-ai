function displayGame(response) {
  console.log("game generated");
  new Typewriter("#game", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateGame(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "b5b6fea0f8dfd4f557b6o7066130170t";
  let context =
    "You love games and love to find the most interesting games to play without internet with not too many instructions. your mission is to generate simple instructions up to 5 lines in basic HTML and a <strong></strong> title and seperated with a <div></div> the welcome line from the mission line. Make sure to follow the user instructions below and display them in a <ol></ol> format";
  let prompt = `User instructions: generate a game about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let gameElement = document.querySelector("#game");
  gameElement.classList.remove("hidden");
  gameElement.innerHTML = `<div class="blink">Generating game about ${instructionsInput.value}</div>`;

  console.log("Generating Game");
  console.log(`Prompt: ${prompt}`);
  console.log(`Contex: ${context}`);
  axios.get(apiUrl).then(displayGame);
}

let gameFormElement = document.querySelector("#game-generator-form");
gameFormElement.addEventListener("submit", generateGame);
