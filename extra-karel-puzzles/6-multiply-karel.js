function start(){
	move();
	move();
	extendSecond();
	putFirst();
	add();
	goHome();
}

function extendSecond(){
    while(ballsPresent()){
        if(noBallsPresent()){
            
        } else {
            turnLeft();
            takeBall();
            move();
            while(ballsPresent()){
                move();
            }
            putBall();
            turnAround();
            while(frontIsClear()){
                move();
            }
            turnLeft();
        }
    }
    turnAround();
    move();
    turnAround();
}

function putFirst(){
    takeBall();
    while(ballsPresent()){
        takeBall();
        move();
        turnLeft();
        move();
        while(ballsPresent()){
            putBall();
            move();
        }
        turnLeft();
        move();
        turnLeft();
        while(frontIsClear()){
            move();
        }
        turnLeft();
    }
}

function add(){
    move();
    turnLeft();
    move();
    while(ballsPresent()){
        move();
    }
    turnAround();
    move();
    while(ballsPresent()){
        takeBall();
        while(frontIsClear()){
            move();
        }
        putBall();
        //
        turnAround();
        move();
        if(ballsPresent()){
            while(ballsPresent()){
                move();
            }
        } else {
            turnRight();
        }
        turnAround();
        move();
    }
}

function goHome(){
    turnLeft();
    move();
    turnLeft();
}
