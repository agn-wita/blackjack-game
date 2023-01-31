let firstCard = 12
let secondCard = 1
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + cards[0] + ' + ' + cards[1] 

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
}

function newCard() {
    let card = 5
    sum += card
    renderGame()
}







