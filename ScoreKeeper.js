const resetButton = document.querySelector('#reset')
const paragraphText = document.querySelector('p');
const winningScoreSelect = document.querySelector('#select');

const p1Button = document.querySelector('#p1');
const p2Button = document.querySelector('#p2');
const p1Score = document.querySelector('#player1score');
const p2Score = document.querySelector('#player2score')

let maxScore = 5;
let isGameOver = false;

let score1 = 0;
function p1ScoreKeeper() {
    p1Button.addEventListener('click', function () {
        if (!isGameOver) {
            if (score1 === maxScore - 1) {
                p1Score.innerText = maxScore;
                score1 = maxScore;
                console.log(`Player 1 score: ${score1}`);
                paragraphText.innerText = 'Player 1 wins!';
                isGameOver = true;
                return score1;
            }
            else {
                score1++;
                p1Score.innerText = score1;
                console.log(`Player 1 score: ${score1}`);
                return score1;
            }
        }
    })
}

let score2 = 0;
function p2ScoreKeeper() {
    p2Button.addEventListener('click', function () {
        if (!isGameOver) {
            if (score2 === maxScore - 1) {
                p2Score.innerText = maxScore;
                score2 = maxScore;
                console.log(`Player 2 score: ${score2}`);
                paragraphText.innerText = 'Player 2 wins!';
                p2Score.classList.add('winner');
                p1Score.classList.add('loser');
                isGameOver = true;
                return score2;
            }
            else {
                score2++;
                p2Score.innerText = score2;
                console.log(`Player 2 score: ${score2}`);
                return score2;
            }
        }
    })
}

function bigReset() {
    function reset(playerScore) {
        resetButton.addEventListener('click', function () {
            playerScore.innerText = 0;
            paragraphText.innerText = 'Use the buttons below to keep score.';
            return playerScore;
        })
    }

    reset(p1Score);
    reset(p2Score);

    function trueReset1() {
        resetButton.addEventListener('click', function () {
            isGameOver = false;
            score1 = 0;
            console.log('Scores reset!');
            return score1;
        })
    }

    trueReset1();

    function trueReset2() {
        resetButton.addEventListener('click', function () {
            score2 = 0;
            return score2;
        })
    }

    trueReset2();
}

bigReset();

winningScoreSelect.addEventListener('change', function () {
    maxScore = parseInt(this.value);
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    score1 = 0;
    score2 = 0;
    console.log('Scores reset!');
    paragraphText.innerText = 'Use the buttons below to keep score.';
    isGameOver = false;

})

p1ScoreKeeper();
p2ScoreKeeper();

