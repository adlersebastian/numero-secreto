const guessElement = document.getElementById("guess");

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  const guess = e.results[0][0].transcript;
  showsGuessOnScreen(guess);
  checksIfGuessIsValid(guess);
}

function showsGuessOnScreen(guess) {
  guessElement.innerHTML = `
        <div>Você disse:<div>
        <span class="box">${guess}<span>
    `;
}

recognition.addEventListener("end", () => recognition.start());
