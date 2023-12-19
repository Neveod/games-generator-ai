function generateGame(event) {
  event.preventDefault();
  new Typewriter("#game", {
    strings: "Hello World",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let gameFormElement = document.querySelector("#game-generator-form");
gameFormElement.addEventListener("submit", generateGame);
