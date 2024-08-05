
// game logic
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let newGameBtn = document.querySelector(".newBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");
let playerO = true;
let count = 0;

// winning patterns
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


// reset game
const resetGame = () => {
  playerO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
}

// displaying the inputs

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO) {
      box.innerHTML = "O";
      playerO = false;
    } else {
      box.innerHTML = "X";
      playerO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});
// draw game
const gameDraw = () => {
  msg.innerHTML = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// disabling the boxes

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
}

// displaying the winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}

// checking the winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerHTML;
    let pos2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        return true;
      }
    }
  }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// for dark mode
let body = document.querySelector("body");
let navbar = document.querySelector(".navbar");
let modeBtn = document.querySelector(".modeBtn");

modeBtn.addEventListener("click", () => {
  navbar.classList.toggle("navbar-dark");
  body.classList.toggle("body-dark");
  boxes.classList.toggle("box-dark");
  if (modeBtn.innerHTML === "Light") {
    modeBtn.innerHTML = "Dark";
  } else {
    modeBtn.innerHTML = "Light";
  }

})
