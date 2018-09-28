function start(){
	moveTwo();
	while(frontIsClear()){
	    fib();
	    move();
	}
	fib();
	goHome();
}

function fib(){
    turnAround();
    moveTwo();
    turnAround();
    ballUpOne();
    turnLeft();
    move();
    moveFirstTopBallStack();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
    ballUpOne();
    turnLeft();
    move();
    moveSecondStackToSpot();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}

function ballUpOne(){
    while(ballsPresent()){
        turnLeft();
        takeBall();
        move();
        putBall();
        turnAround();
        move();
        turnLeft();
    }
}

function moveFirstTopBallStack(){
    while(ballsPresent()){
        takeBall();
        turnRight();
        moveTwo();
        turnRight();
        move();
        turnLeft();
        putBall();
        turnAround();
        moveTwo();
        putBall();
        turnRight();
        move();
    }
}

function moveSecondStackToSpot(){
    while(ballsPresent()){
        takeBall();
        turnRight();
        move();
        turnRight();
        move();
        putBall();
        turnRight();
        move();
        putBall();
        turnRight();
        move();
    }
}

function goHome(){
    turnAround();
    while(frontIsClear()){
        move();
    }
    turnAround();
}

function moveTwo(){
    move();
    move();
}
function start(){
	moveTwo();
	while(frontIsClear()){
	    fib();
	    move();
	}
	fib();
	goHome();
}

function fib(){
    turnAround();
    moveTwo();
    turnAround();
    ballUpOne();
    turnLeft();
    move();
    moveFirstTopBallStack();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
    ballUpOne();
    turnLeft();
    move();
    moveSecondStackToSpot();
    turnRight();
    move();
    turnRight();
    move();
    turnLeft();
}

function ballUpOne(){
    while(ballsPresent()){
        turnLeft();
        takeBall();
        move();
        putBall();
        turnAround();
        move();
        turnLeft();
    }
}

function moveFirstTopBallStack(){
    while(ballsPresent()){
        takeBall();
        turnRight();
        moveTwo();
        turnRight();
        move();
        turnLeft();
        putBall();
        turnAround();
        moveTwo();
        putBall();
        turnRight();
        move();
    }
}

function moveSecondStackToSpot(){
    while(ballsPresent()){
        takeBall();
        turnRight();
        move();
        turnRight();
        move();
        putBall();
        turnRight();
        move();
        putBall();
        turnRight();
        move();
    }
}

function goHome(){
    turnAround();
    while(frontIsClear()){
        move();
    }
    turnAround();
}

function moveTwo(){
    move();
    move();
}
