const emptyString = '  ';
const boardData = Array(9).fill(emptyString);
const players = {
  1: 'x',
  2: 'o',
};
let currentPlayer = players[1];

function drawBoard(positions) {
  console.log(`
    ${positions[0]} | ${positions[1]} | ${positions[2]}
    -----------
    ${positions[3]} | ${positions[4]} | ${positions[5]}
    -----------
    ${positions[6]} | ${positions[7]} | ${positions[8]}
  `);
}

function showTutorial() {
  console.log(`
  ### Escolha a posiçao que deseja jogar baseado no tabuleiro abaixo ###

     0 | 1 | 2
    -----------
     3 | 4 | 5
    -----------
     6 | 7 | 8

  ######################################################################
  `);
}

function isEmpty(position) {
  return boardData[position] === emptyString;
}

function boardState(){
  let full = true
  boardData.forEach(element => {
    if (element === emptyString){
      full = false
      return full
    }
  })
  return full
}
function winner(){

  const auxPlayer = currentPlayer
  //let won = false
  const boardFull = boardState()

  //ganhou nas linhas
  if ((boardData[0] === auxPlayer && boardData[1] === auxPlayer && boardData[2] === auxPlayer)
  || (boardData[3] === auxPlayer && boardData[4] === auxPlayer && boardData[5] === auxPlayer)
  || (boardData[6] === auxPlayer && boardData[7] === auxPlayer && boardData[8] === auxPlayer)){
    //won = true
    return console.log(`Jogador ${currentPlayer} venceu! if1`)
  }
  
  //ganhou na diagonal
  if ((boardData[0] === auxPlayer && boardData[4] === auxPlayer && boardData[8] === auxPlayer)
  || (boardData[2] === auxPlayer && boardData[4] === auxPlayer && boardData[6] === auxPlayer)){

    //won = true
    return console.log(`Jogador ${currentPlayer} venceu! if2`)
  }
  
  //ganhou nas colunas
  if ((boardData[0] === auxPlayer && boardData[3] === auxPlayer && boardData[6] === auxPlayer)
  || (boardData[1] === auxPlayer && boardData[4] === auxPlayer && boardData[7] === auxPlayer)
  || (boardData[2] === auxPlayer && boardData[5] === auxPlayer && boardData[8] === auxPlayer)){
    //won = true
    return console.log(`Jogador '${currentPlayer}' venceu! if3`)
  }

  //empate
  else if(/*(!won)&&*/(boardFull)){
    return console.log("Deu Velha!")
  }
}


function changePlayer() {
  if (currentPlayer === players[1]) {
    currentPlayer = players[2]
  } else {
    currentPlayer = players[1]
  }
}

function setPlayerMovement(position) {
  if (isEmpty(position)) {
    boardData[position] = currentPlayer
    winner()
    changePlayer()
  } else {
    console.log(`A posição ${position} já foi usada`)
  }
}

showTutorial()
setPlayerMovement(0)
setPlayerMovement(8)
setPlayerMovement(2)
setPlayerMovement(4)
setPlayerMovement(1)
/*
setPlayerMovement(2)
setPlayerMovement(6)
setPlayerMovement(3)
setPlayerMovement(5)*/


drawBoard(boardData)
