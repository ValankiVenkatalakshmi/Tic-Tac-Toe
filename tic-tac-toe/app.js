let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector('#reset');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let newBtn=document.querySelector('#new-btn');
let turnO=true;
 const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log('box was clicked');
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;
        checkPattern();
    });
 })
const showWinner=(winner) =>{
    msg.innerText=`Congratulations Winner ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

 let checkPattern=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                showWinner(pos1Val);
            }
        }
    }
 }


 newBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        msgContainer.classList.add('hide');
    }
)
})
 resetBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        turnO=true;
    }
)
})

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);