let player = {
  name: "Jack",
  chips: 300,
};

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
  return Math.floor(Math.random() * 13) + 1;
}

// ===== VARIABLES =====
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let cards = [firstCard, secondCard];
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

// ===== DOM ELEMENTS =====
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// ===== FUNCTIONS =====
function startGame() {
  renderGame();
}

function newCard() {
  let newCard = getRandomCard();
  sum = sum + newCard;
  cards.push(newCard);
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack

  if (isAlive === true && sum != 21) renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    isAlive = false;
    message = "You're out of the game! 😭";
  }

  messageEl.textContent = message;
  sumEl.textContent = "Sum:" + sum;
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}
