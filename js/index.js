const ball = document.querySelector(".ball");
const ceckIt = document.getElementById('checkIt');

ball.addEventListener("click", clickedBox, false);

let result = 0;
function clickedBox(evt) {
    result += 1;
    console.log(result)
    if(result == 1){
        ball.className = 'active'
        checkIt.style.backgroundColor = 'green';
        ball.style.transition = '0.5s'
    }else if(result == 2){
        ball.className = 'ball';
        checkIt.style.backgroundColor = 'grey';
        ball.style.transition = '0.5s'
        return result = 0;
    }
}
