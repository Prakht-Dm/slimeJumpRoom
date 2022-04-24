const slimeInfo = {
    positionX: 5,
    positionY: 420,
    curentSpeed: 0,   
    movement: "",
    
    MOVEMENTS: {
        WALK: false,
        FLY: false,
        STAY: true,
        SIT: false,
    },

    DIRECTIONS: {
        RIGHT: false,
        LEFT: false,
        CENTER: true,
    },

 
}

const slimeForm = {
    RIGHT: ()=>{
        eyeLine.style.marginLeft = "25px";
    },
    LEFT: ()=>{
        eyeLine.style.marginLeft = "10px";  
    }, 
    STAY: ()=>{
        eyeLine.style.marginLeft = "18px";

    },
}

let jump;
let iter = 0;
function slimeJump(){ 
    console.log(slimeInfo.MOVEMENTS.FLY);
    slimeInfo.MOVEMENTS.FLY = true;
    slimeBody.style.marginTop = (slimeInfo.positionY -= 5) + "px"; iter+=1;
    if (iter>=20) {
        iter = 0;        
        clearInterval(jump);
    }
}

function slimeMovement(pressedButton){
 
    if (pressedButton.code == "Space" && slimeInfo.MOVEMENTS.FLY == false) jump = setInterval(slimeJump, 10);
        
    
    if (pressedButton.code == "KeyA"){
        clearInterval(slimeInfo.movement);
        slimeInfo.DIRECTIONS.LEFT = true;        
        slimeForm.LEFT();
            }    
    if (pressedButton.code == "KeyD"){
        slimeInfo.DIRECTIONS.RIGHT = true;
        clearInterval(slimeInfo.movement);
        slimeForm.RIGHT();
            } 

}

function slimeStand (unPressedButton){
    if (unPressedButton.code === "KeyA") slimeInfo.DIRECTIONS.LEFT = false;
    if (unPressedButton.code === "KeyD") slimeInfo.DIRECTIONS.RIGHT = false;

    if (unPressedButton.code === "KeyA" || unPressedButton.code === "KeyD") clearInterval(slimeInfo.movement);
}

document.addEventListener("keydown", slimeMovement);
document.addEventListener("keyup", slimeStand);

setInterval(()=>{
    if (slimeInfo.positionY>425) slimeInfo.MOVEMENTS.FLY = false;
    if(slimeInfo.positionY<435) slimeBody.style.marginTop = (slimeInfo.positionY += 2) + "px";
    if (slimeInfo.positionX < 575 && slimeInfo.DIRECTIONS.RIGHT == true) slimeBody.style.marginLeft = (slimeInfo.positionX+=2)+"px";
    if (slimeInfo.positionX > 4 && slimeInfo.DIRECTIONS.LEFT == true) slimeBody.style.marginLeft = (slimeInfo.positionX-=2)+"px";

},10);














// let row1 = document.querySelector('tr:first-child');
// let row3 = document.querySelector('rout_coub>tr:last-child');
// let topMargin=420;
// let LeftMargin=0;
// function changeColor(pressedButton){
 
//     if (pressedButton.code=="KeyW"){
// routCoub.style.marginTop= (topMargin-=200)+"px";
//     }
//     if (pressedButton.code=="KeyA"){
//         routCoub.style.marginLeft= (LeftMargin-=50)+"px";
//             }    
//             if (pressedButton.code=="KeyD"){
//                 routCoub.style.marginLeft= (LeftMargin+=50)+"px";
//                     } 

// }

// setTimeout(()=>{
// setInterval(()=>{if(topMargin<420) routCoub.style.marginTop = (topMargin += 2) + "px";},10)},
// 1000);


// document.addEventListener("keydown", changeColor);
