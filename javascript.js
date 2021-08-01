function computerPlay() {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    switch (rndInt) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
};

function userPlay() {
    const userInput = prompt("Choose between: 'rock', 'paper' or 'scissors' ");
};

function playRound(userInput, computerInput) {
    if (userInput === 'rock') {
        if (computerInput === 'rock') {
            return 'Nobody wins, rock is equal to rock.';
        }
        else if (computerInput === 'paper') {
            ++computerScore;
            return 'You lost, rock loses to paper.';
        }
        else {
            ++userScore;
            return 'You won, rock beats scissors.';
        }
    }

    if (userInput === 'paper') {
        if (computerInput === 'rock') {
            ++userScore;
            return 'You won, paper beats rock.';
        }
        else if (computerInput === 'paper') {
            return 'Nobody won, paper is equal to paper.';
        }
        else {
            ++computerScore;
            return 'You lost, scissors beats paper.';
        }
    }

    if (userInput === 'scissors') {
        if (computerInput === 'rock') {
            ++computerScore;
            return 'You lost, scissors loses to rock.';
        }
        else if (computerInput === 'paper') {
            ++userScore;
            return 'You won, scissors beats paper.';
        }
        else {
            return 'Nobody wins, scissors is equal to scissors.';
        }
    }
}

function playGame() {
    let userInput;
    let computerInput;

    let userScore = 0;
    let computerScore = 0;
    let gameFlag = true;

    while (gameFlag) {
        computerInput = computerPlay();
        userInput = userPlay();

        if (typeof userInput === 'string' && userInput.toLowerCase().includes("rock", "paper", "scissors")) {
            userInput.toLowerCase();

            console.log(playRound(userInput, computerInput));

            console.log(`Current user score is: ${userScore}.`)
            console.log(`Current computer score is: ${computerScore}. `)

            if (computerScore == 5 || userScore == 5) {
                gameFlag == false;
            }

        }

    }
}

playGame();