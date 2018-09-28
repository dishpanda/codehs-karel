function start(){
    putEndBalls();
    moveToMidpoint();
    goToCenter();
    moveToCenterEven();
}

function putEndBalls() {
    putBall();
    while(frontIsClear()){
        move();
    }
    putBall();
    turnAround();
    if(frontIsClear()){
        move();
    }
}

function moveToMidpoint(){
    while(frontIsClear()){
        while(noBallsPresent()){
            if(frontIsClear()){
                move();        
            } else {
                turnAround();
            }
        }
        if(ballsPresent()){
            takeBall();
        }
        turnAround();
        move();
        putBall();
        move();
    }
    
}

function goToCenter(){
    turnAround();
    for(var i = 0; i < 2; i++){
        while(noBallsPresent()){
            move();
        }
        if(ballsPresent()){
            takeBall();
        }
    }
    putBall();
}

function moveToCenterEven(){
    if(facingWest()){
        takeBall();
        move();
        putBall();
        turnAround();
    }
}
