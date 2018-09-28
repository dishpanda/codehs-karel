function start(){
	move();
	makeTemp();
	move();
	moveSecond();
	goToTemp();
	moveTemp();
	goHome();
}

function makeTemp(){
    while(ballsPresent()){
        takeBall();
        turnLeft();
        move();
        putBall();
        turnAround();
        move();
        turnLeft();
    }
}

function moveSecond(){
    while(ballsPresent()){
        takeBall();
        turnAround();
        move();
        turnAround();
        putBall();
        move();
    }
}

function goToTemp(){
    for(var i = 0; i < 2; i ++){
        turnLeft();
        move();
    }
    turnAround();
}

function moveTemp(){
    while(ballsPresent()){
        takeBall();
        move();
        turnRight();
        move();
        turnLeft();
        putBall();
        goToTemp();
    }
}

function goHome(){
    turnAround();
    move();
    turnLeft();
    move();
    turnLeft();
}
