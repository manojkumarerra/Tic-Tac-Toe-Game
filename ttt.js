
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");
let msgContainer = document.querySelector(".msg-container");

let turnX = true //playerO and playerX

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
    trueX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
    
        if  (turnX) {
            //playerX
            box.innerText = "X";
            turnX = false;
        } else {
            //playerO
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
        
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratutation, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
}



const checkWinner = () => {
    for(let pattern of winPatterns) {
        //console.log(pattern[0], pattern[1], pattern[2]);
        //console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
     let posVal1 = boxes[pattern[0]].innerText;
     let posVal2 = boxes[pattern[1]].innerText;
     let posVal3 = boxes[pattern[2]].innerText;

     if(posVal1 != "" && posVal2 != "" && posVal3 !="") {
     if (posVal1 == posVal2 && posVal2 == posVal3){
       
        showWinner(posVal1);
     
     }
    }
 }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
