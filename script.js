const game = (() => {
  let gameArray = ["", "", "", "", "", "", "", "", ""];
  let playerNames = ["", ""];

  const addValue = (index, value) => gameArray[index] = value;
  const getValue = (index) => gameArray[index];
  const addPlayerName = (index, value) => playerNames[index] = value;
  const getPlayerName = (index) => playerNames[index];

  return {
    gameArray,
    playerNames,
    addValue,
    getValue,
    addPlayerName,
    getPlayerName,
  };
})();

const newGameButton = document.getElementById("newGameButton");
newGameButton.addEventListener("click", () => {
  game.addValue(0, "x");
  console.log(game.getValue(0));
  console.log(game.gameArray);

  game.addPlayerName(0, "Bob");
  game.addPlayerName(1, "Tod");
  console.log(game.getPlayerName(0));
  console.log(game.getPlayerName(1));
  console.log(game.playerNames);
});
