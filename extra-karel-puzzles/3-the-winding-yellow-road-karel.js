function start(){
    while(ballsPresent()){
        checkFront();
    }
}

function checkFront(){
    move();
    if(ballsPresent()){
        
    } else {
        whoopsNotThere();
        checkLeft();
    }
}

function checkLeft(){
    turnLeft();
    move();
    if(ballsPresent()){
        
    } else {
        whoopsNotThere();
        checkRight();
    }
}

function whoopsNotThere() {
    turnAround();
    move();
    turnAround();
}

function checkRight() {
    turnAround();
    move();
    if(ballsPresent()) {
        
    } else {
        whoopsNotThere();
        turnLeft();
        move();
    }
}
