document.addEventListener('DOMContentLoaded', () => {
    // Define 16 unique cards, each duplicated once
    const cardArray = [];
    for (let i = 1; i <= 16; i++) {
        cardArray.push({ name: `card${i}`, img: `img/card${i}.png` });
        cardArray.push({ name: `card${i}`, img: `img/card${i}.png` });
    }

    // Shuffle cards
    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('#game-board');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    var clickable = true; // to control card selection

    // Players and Scores
    const players = ['adam', 'lauren', 'karina', 'bree', 'lana'];
    var currentPlayerIndex = 0;
    var scores = { adam: 0, lauren: 0, karina: 0, bree: 0, lana: 0 };

    // Letter Display Setup
    var letterIndex = 0;
    const letters = 'la-eafosslfsklwn';

    // Create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'img/blank.png'); // Back of the card
            card.setAttribute('data-id', i);
            card.classList.add('card'); // add the 'card' class 
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // Flip card
    function flipCard() {
        if (!clickable) return;
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    // Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('#game-board img');
        const [optionOneId, optionTwoId] = cardsChosenId;

        if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/blank.png');
        } else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
         //   updateScore(players[currentPlayerIndex]);
            updateLetterBox();
        } else {
            clickable = false; // Disable further clicks
            setTimeout(() => {
                cards[optionOneId].setAttribute('src', 'img/blank.png');
                cards[optionTwoId].setAttribute('src', 'img/blank.png');
                currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
                clickable = true; // Re-enable clicks
            }, 1000); // 1-second delay
        }

        cardsChosen = [];
        cardsChosenId = [];
    }

    // Update Letter Box
    function updateLetterBox() {
        if (letterIndex < letters.length) {
            const letterBoxes = document.querySelectorAll('.letter-box');
            letterBoxes[letterIndex].textContent = letters[letterIndex];
            letterIndex++;
        }
    }

    // Update Score
    function updateScore(player) {
        scores[player]++;
        document.getElementById(`score-${player}`).innerText = scores[player];
    }

    createBoard();
});
