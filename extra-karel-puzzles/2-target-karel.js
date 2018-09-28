function start(){
    search();
    moveNextTo();
    putMarker();
    buildVerticalRow();
    returnToCenter();
    buildHorizontalRow();
    backToTheCenter();
}

function search(){
    while(noBallsPresent()){
        if(frontIsClear()){
            move();
        } else {
            turnAround();
            while(frontIsClear()){
                move();
            }
            turnRight();
            move();
            turnRight();
        }
    }
}

function moveNextTo(){
    move();
    putBall();
    turnAround();
    move();
    turnAround();
}

function buildVerticalRow(){
    turnLeft();
    while(frontIsClear()){
        move();
        putBall();
    }
    turnAround();
    while(frontIsClear()){
        move();
        if(noBallsPresent()){
            putBall();
        }
    }
    turnLeft();
}

function returnToCenter(){
    move();
    turnLeft();
    while(noBallsPresent()){
        if(frontIsClear()){
            move();   
        }
    }
    turnRight();
}

function backToTheCenter(){
    turnRight();
    move();
    turnRight();
    while(noBallsPresent()){
        move();
    }
    move();
    takeBall();
    turnRight();
    move();
    turnRight();
    move();
    turnAround();
}

function buildHorizontalRow(){
    checkAndPutBall();
    turnAround();
    checkAndPutBall();
}

function checkAndPutBall(){
    while(frontIsClear()){
        move();
        if(noBallsPresent()){
            putBall();
        }
    }
}

function putMarker(){
    turnLeft();
    move();
    turnRight();
    move();
    putBall();
    turnAround();
    move();
    turnLeft();
    move();
    turnLeft();
}
