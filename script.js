const game = (() => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let playerNames = [];
  let gameArray = [];
  let secondPlayerTurn = false;

  const setValue = (index, value) => gameArray[index] = value;
  const getValue = (index) => { return gameArray[index]; }
  const setPlayerName = (index, value) => playerNames[index] = value;
  const getPlayerName = (index) => { return playerNames[index]; }
  const newGame = () => {
    gameArray.length = 0;
    playerNames.length = 0;
    secondPlayerTurn = false;
  };
  const checkForWin = () => {
    for (let i = 0; i < winConditions.length; i++) {
      const value1 = gameArray[winConditions[i][0]];
      const value2 = gameArray[winConditions[i][1]];
      const value3 = gameArray[winConditions[i][2]];
      if (value1 !== undefined && value2 !== undefined && value3 !== undefined) {
        if (value1 === value2 && value1 === value3) {
          if (secondPlayerTurn) {
            console.log(playerNames[1] + " wins!");
            gameBoard.removeEventListener("click", (e));
            break;
          } else {
            console.log(playerNames[0] + " wins!");
            gameBoard.removeEventListener("click", (e));
            break;
          }
        }
      }
    }
  }
  const checkWhoseTurn = () => {
    if (secondPlayerTurn) {
      secondPlayerTurn = false;
    } else {
      secondPlayerTurn = true;
    }
  }

  return {
    setValue,
    getValue,
    setPlayerName,
    getPlayerName,
    newGame,
    checkForWin,
    checkWhoseTurn
  };
})();

const newGameButton = document.getElementById("newGameButton");
newGameButton.addEventListener("click", (e) => {
  game.newGame();
});

const setNameButton = document.getElementById("setNameButton");
const nameFormContainer = document.getElementById("nameFormContainer");
setNameButton.addEventListener("click", (e) => {
  if (nameFormContainer.style.visibility === "visible") {
    nameFormContainer.style.visibility = "hidden";
  } else {
    nameFormContainer.style.visibility = "visible";
  }
});

const gameBoard = document.getElementById("gameBoard");
gameBoard.addEventListener("click", (e) => {
  if (e.target.classList.contains("boardSquare")) {
    const squareIndex = parseInt(e.target.getAttribute("data-array-index"));
    switch (squareIndex) {
      case 0:
        console.log("helloworld");
        break;
      case 1:
        console.log(game.getValue(0));
        break;
      case 2:
        console.log(game.getValue(1));
        break;
      case 3:
        console.log(game.getPlayerName(0));
        break;
    }
  }
});
