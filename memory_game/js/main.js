// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";
// console.log("User flipped " + cardOne);
// alert('Hello, friends.');
var cards = ["queen","queen","king","king"];
var cardInPlay = [];
var cardOne = cards[0];
cardInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
if(cardInPlay.length === 2){
    if(cardInPlay[0]===cardInPlay[1]){
        alert("You found a match!");
    } else{
        alert("Sorry, try again."); 
    }

}