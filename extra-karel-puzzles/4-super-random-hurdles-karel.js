function start(){
	while(frontIsClear()){
	    move();
	}
	checkFront();
	getDownFromThere();
}

function checkFront(){
    turnLeft();
    move();
    turnRight();
    if(frontIsClear()){
        jumpHurdle();
    }
}

function jumpHurdle(){
    move();
    turnRight();
    move();
    turnLeft();
    checkFront();
}

function getDownFromThere(){
    turnRight();
    move();
    turnLeft();
}
