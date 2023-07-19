const lowestValue = 1;
const highestValue = 1000;
const secretNumber = generateRandomNumber();

function generateRandomNumber() {
  return parseInt(Math.random() * highestValue + 1);
}

console.log(secretNumber);

const lowestValueElement = document.getElementById("lowest-value");
const highestValueElement = document.getElementById("highest-value");

lowestValueElement.innerHTML = lowestValue;
highestValueElement.innerHTML = highestValue;
