score =0;
function updateScore(){
Score= score + 1;
document.getElementById("score").innerHTML="score:" + score;

}

function saveScore(){
localStorage.setItem("Score",score);

}
