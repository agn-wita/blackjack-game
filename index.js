let firstCard = 11
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = false
let message = ""

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






