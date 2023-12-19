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
    "You love games and love to find the most interesting games to play offline with not too many instructions. your mission is to generate simple instructions up to 5 lines in basic HTML and a <strong> title and seperate the welcome line from the mission line. Make sure to follow the user instructions below and display them in a list format";
  let prompt = `User instructions: generate a game about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Game");
  console.log(`Prompt: ${prompt}`);
  console.log(`Contex: ${context}`);
  axios.get(apiUrl).then(displayGame);
}

let gameFormElement = document.querySelector("#game-generator-form");
gameFormElement.addEventListener("submit", generateGame);
