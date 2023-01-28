let firstCard = 1
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")

if (sum < 21) {
    message = "Do you want to draw a new card?"
    isAlive = true
}

else if (sum === 21) {
    message = "You've got Blackjack!" 
    hasBlackjack = true 
}

else {
    message = "You're out of the game!" 
}

messageEl.textContent = message






