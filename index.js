let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newGame = document.querySelector(".new-btn");
let msgC = document.querySelector(".msg-c");
let winMsg = document.querySelector("#win-msg");

let turnO = true;

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("click");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgC.classList.add("hide");
}



const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}


const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    winMsg.innerText = `Congratulations , Winner is ${winner}`;
    msgC.classList.remove("hide");
    disableBoxes();
}



const checkWinner = () => {
    for(pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
            //  alert(`Player ${pos1Val} wins!`); 
            console.log("winner", pos1Val);
            showWinner(pos1Val);
          }
        }
    }
}


newGame.addEventListener("click" , resetGame);
reset.addEventListener("click", resetGame);