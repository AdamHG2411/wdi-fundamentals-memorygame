var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var gamesPlayed = 0;
var gamesWon = 0;

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		gamesPlayed++;
		gamesWon++;
		var winPercent = Math.trunc(gamesWon/gamesPlayed * 100);
		alert("You found a match! You have won " + gamesWon + " of " + gamesPlayed + " games (" + winPercent + "%).");
	} else {
		gamesPlayed++;
		var winPercent = Math.trunc(gamesWon/gamesPlayed * 100);
		alert("Sorry, try again. You have won " + gamesWon + " of " + gamesPlayed + " games (" + winPercent + "%).");
	}	
};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	
	if (cardsInPlay.length === 2) {
		setTimeout(checkForMatch, 300);
	}
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};



var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('class', 'cardimg');
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

var resetBoard = function() {
	while (cardsInPlay.length > 0) {
		cardsInPlay.pop();
	}
	createBoard();
};

createBoard();
var resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetBoard);