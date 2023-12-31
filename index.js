//fetching data needed
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelectorAll("#reset");
let newGameBtn=document.querySelector('#new-game');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector("#msg");  

let turnO=true //playerX,playerO

//array to store all winning patterns using index number
const winningPat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
//logic for alternate turn of X and O
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        console.log("Box was clicked");
        if (turnO)
        {   
            box.innerHTML="O";
            turnO=false; //Making next turn X
        }
        else
        {
            box.innerHTML="X";
            turnO=true; //Making next turn O
        }
        box.disabled=true; //once clicked, cant put value again

        checkWinner(); //identify winner pattern
    });
});
 
const disableBoxes=()=>
{
    for(let box of boxes){
        box.disabled=true;
    }

}
const showWinner=(winner)=>{ //message print func
    msg.innerHTML=`Congratulations! \n Winnner is ${winner}`;
    msgContainer.classList.remove("hide"); 
    disableBoxes();
}
//arrow function to identify winning pattern
const checkWinner=()=>{
    for(let pattern of winningPat)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
         
        if(pos1Val!= "" && pos2Val!= "" && pos3Val!= "")
        { if(pos1Val === pos2Val && pos2Val=== pos3Val)
            {
                console.log("Winner");
                showWinner(pos1Val);
            }
        }
    }
}

