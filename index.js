let player = {
    name: "John",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " $" + player.chips

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
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    }
    
    else if (sum === 21) {
        message = "You've got Blackjack!" 
        hasBlackjack = true 
    }
    
    else {
        message = "You're out of the game!" 
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard() {

    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        // console.log(cards)
        renderGame()
    }
}