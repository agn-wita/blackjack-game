let firstCard = 11
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = false

if (sum < 21) {
    console.log("Do you want to draw a new card?")
    isAlive = true
}

else if (sum === 21) {
    console.log("You've got Blackjack!") 
    hasBlackjack = true 
}

else {
    console.log("You're out of the game!") 
}






