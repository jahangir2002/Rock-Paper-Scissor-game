

let myScore = document.getElementById("myScore").innerHTML;
let comp = document.getElementById("comp").innerHTML;

function myFunc1(){
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b);
    let rocks =  document.getElementById("userImg").src="img/rock.png"

    if(c == 0){
    let rock =  document.getElementById("compImg").src="img/rock.png"
        if(rocks && rock){
            document.getElementById("result").innerHTML = "Match Draw"
        }
    }
    if(c == 1){
    let paper =  document.getElementById("compImg").src="img/hand-paper.png"
        if(rocks && paper){
            document.getElementById("result").innerHTML = "User Loss"
            comp++;
            document.getElementById("comp").innerHTML = comp;
        }
    }
    if(c == 2){
    let scissor =  document.getElementById("compImg").src="img/scissor.png"
        if(rocks && scissor){
            document.getElementById("result").innerHTML = "User Winner"
            myScore++;
            document.getElementById("myScore").innerHTML = myScore;
        }
    }
}
function myFunc2(){
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b);
    let papers =  document.getElementById("userImg").src="img/hand-paper.png"

    if(c == 0){
    let rock =  document.getElementById("compImg").src="img/rock.png"
        if(papers && rock){
            document.getElementById("result").innerHTML = "User Winner"
            myScore++;
            document.getElementById("myScore").innerHTML = myScore;
        }
    }
    if(c == 1){
    let paper =  document.getElementById("compImg").src="img/hand-paper.png"
        if(papers && paper){
            document.getElementById("result").innerHTML = "Match Draw"
        }
    }
    if(c == 2){
    let scissor =  document.getElementById("compImg").src="img/scissor.png"
        if(papers && scissor){
            document.getElementById("result").innerHTML = "User Loss"
            comp++;
            document.getElementById("comp").innerHTML = comp;
        }
    }
}
function myFunc3(){
    let a = Math.random();
    let b = a * 3;
    let c = Math.floor(b);
    let scissors =  document.getElementById("userImg").src="img/scissor.png"

    if(c == 0){
    let rock =  document.getElementById("compImg").src="img/rock.png"
        if(scissors && rock){
            document.getElementById("result").innerHTML = "User Loss"
            comp++;
            document.getElementById("comp").innerHTML = comp;
        }
    }
    if(c == 1){
    let paper =  document.getElementById("compImg").src="img/hand-paper.png"
        if(scissors && paper){
            document.getElementById("result").innerHTML = "User Winner"
            myScore++;
            document.getElementById("myScore").innerHTML = myScore;
        }
    }
    if(c == 2){
    let scissor =  document.getElementById("compImg").src="img/scissor.png"
        if(scissors && scissor){
            document.getElementById("result").innerHTML = "Match Draw"
        }
    }
}