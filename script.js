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

  const setValue = (index, value) => gameArray[index] = value;
  const getValue = (index) => { return gameArray[index]; }
  const setPlayerName = (index, value) => playerNames[index] = value;
  const getPlayerName = (index) => { return playerNames[index]; }
  const newGame = () => {
    gameArray.length = 0;
    playerNames.length = 0;
  };
  const checkForWin = () => {
    for (let i = 0; i < winConditions.length; i++) {
      const value1 = gameArray[winConditions[i][0]];
      const value2 = gameArray[winConditions[i][1]];
      const value3 = gameArray[winConditions[i][2]];
      if (value1 !== undefined && value2 !== undefined && value3 !== undefined) {
        if (value1 === value2 && value1 === value3) {
          console.log("helloworld");
          console.log(winConditions[i]);
          break;
        }
      }
    }
  }

  return {
    setValue,
    getValue,
    setPlayerName,
    getPlayerName,
    newGame,
    checkForWin,
  };
})();
