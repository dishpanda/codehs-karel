/*
 * The idea: split them apart so you know where the tallest one is, put a ball, 
 * return balls to spot, finish! For Compare3/ any world comparing with zero, 
 * Karel does something different that I'm not in the mood to type out right now.
*/

function start(){
	move();
	moveStackOne();
	copyStackOne();
	copyStackTwo();
	findBall();
	checkFront();
}

function moveStackOne(){
    if(ballsPresent()){
        takeBall();
        turnAround();
        move();
        putBall();
        turnAround();
        move();
        move();
        moveStackTwo();
    } else {
        turnLeft();
        move();
        turnRight();
        move();
        putBall();
    }
}

function moveStackTwo(){
    if(ballsPresent()){
        takeBall();
        move();
        putBall();
        turnAround();
        move();
        move();
        turnAround();
        moveStackOne();
    } else {
        turnLeft();
        move();
        turnLeft();
        move();
        turnAround();
        putBall();
    }
}

function copyStackOne(){
    turnAround();
    while(frontIsClear()){
        move();
    }
    turnLeft();
    move();
    turnLeft();
    //
    while(ballsPresent()){
        takeBall();
        move();
        putBall();
        turnAround();
        move();
        turnAround();
    }
}

function copyStackTwo(){
    while(frontIsClear()){
        move();
    }
    turnAround();
    while(noBallsPresent()){
        move();
    }
    while(ballsPresent()){
        if(frontIsClear()){
            takeBall();
            move();
            putBall();
            turnAround();
            move();
            turnAround();
        } else {
            
        }
    }
    turnAround();
}

function findBall(){
    turnLeft();
    move();
    turnLeft();
    move();
    while(noBallsPresent()){
        if(frontIsClear()){
            move();
        } else {
            turnAround();
        }
    }
    turnAround();
    takeBall();
}

function checkFront(){
    move();
    if(frontIsClear()){
        turnAround();
        move();
        turnAround();
    } else {
        turnLeft();
        move();
        turnLeft();
        while(ballsPresent()){
            takeBall();
            move();
            putBall();
            turnAround();
            move();
            turnAround();
        }
        move();
        turnLeft();
        move();
        turnRight();
    }
}
