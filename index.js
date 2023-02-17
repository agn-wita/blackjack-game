let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
let randomCard = Math.floor ( Math.random() * 13 ) + 1

if (randomCard > 10) {
    return 10
}

else if (randomCard === 1) {
    return 11
}

else {
    return randomCard
}

}

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    // console.log(cards)
    renderGame()
}







