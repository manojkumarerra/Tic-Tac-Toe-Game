let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnX = true; // playerX starts

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

const resetGame = () => {
    turnX = true;           // Fix typo here (was trueX)
    enableBoxes();
    msgContainer.classList.add("hide");
    msg.innerText = "";
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkDraw = () => {
    // Check if all boxes are filled and no winner shown
    let isDraw = Array.from(boxes).every(box => box.innerText !== "");
    if(isDraw){
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let posVal1 = boxes[a].innerText;
        let posVal2 = boxes[b].innerText;
        let posVal3 = boxes[c].innerText;

        if (posVal1 !== "" && posVal1 === posVal2 && posVal2 === posVal3) {
            showWinner(posVal1);
            return; // Stop checking after winner found
        }
    }
    // If no winner, check for draw
    checkDraw();
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
