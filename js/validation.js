function checksIfGuessIsValid(guess) {
  const number = +guess;

  if (guessIsInvalid(number)) {
    guessElement.innerHTML += `<div>Valor inválido.</div>`;
    return;
  }

  if (numberIsTooHighOrTooLow(number)) {
    guessElement.innerHTML += `<div>Valor inválido. Diga um número entre ${lowestValue} e ${highestValue}</div>`;
    return;
  }

  if (number === secretNumber) {
    document.body.innerHTML = `
    <h1>Parabéns!</h1>
    <h2>Você acertou. O número era ${secretNumber}</h2>
    <btn id="play-again" class="btn-play">Jogar novamente</btn>`;
  } else if (number > secretNumber) {
    guessElement.innerHTML += `<div>O número é menor <i class="fa-solid fa-circle-arrow-down"></i></div>`;
  } else {
    guessElement.innerHTML += `<div>O número é maior <i class="fa-solid fa-circle-arrow-up"></i></div>`;
  }
}

function guessIsInvalid(number) {
  return Number.isNaN(number);
}

function numberIsTooHighOrTooLow(number) {
  return number > highestValue || number < lowestValue;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id === "play-again") {
    window.location.reload();
  }
});
