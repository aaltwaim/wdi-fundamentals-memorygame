// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";
// console.log("User flipped " + cardOne);
// alert('Hello, friends.');
var cards = ["queen", "queen", "king", "king"];
var cardInPlay = [];
function checkForMatch(){
    if (cardInPlay[0] === cardInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }

}
function flipCard(cardId) {
    if (cardInPlay.length === 2) {
        if (cardInPlay[0] === cardInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }
    
    }
     
    console.log("User flipped " + cards[cardId])
    cardInPlay.push(cards[cardId]);
    // checkForMatch();
    
    

}
flipCard(0);
flipCard(2);
 checkForMatch();

