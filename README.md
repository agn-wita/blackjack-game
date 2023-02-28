# blackjack-game
 
The user draw 2 cards by clicking START GAME. Depending on sum of two cards the user can: draw new card if the sum is less than 21, finish the game if the sum is equal to 21 (winner, Blackjack) or be lost if the sum is more than 21. The new card can be drawn by clicking button NEW CARD. As a player I can see what number of cards, sum of those cards and info what next can I do (I'm out of the game, I can draw a new card, I have Blackjack). The card number is randomly selected

## JavaScript
- 2 onclick functions linked to HTML buttons (START GAME and NEW CARD)
- randomly selected cards stored in JS array (Cards paragraph on website). Used Math.random and Math.floor
- rolling sum of the cards. Used += operator
- the sum of cards is veryfied with the use of conditional statement (if, else, else if)
- message instruction on website depending on the sum (Message paragraph): Do you want to draw a new card?, You're out of the game!, You've got Blackjack!
- NEW CARD button is blocked when You're out of the game!. Used booleans
- function as a variable
- pushing new cards to array with the use of array.push()
