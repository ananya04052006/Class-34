var ball;
var database, position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPos = database.ref('ball/position');
    ballPos.on("value", readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-4,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,4);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data) {
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function writePosition(xPos, yPos) {
    database.ref('ball/position').set({
        x: position.x + xPos,
        y: position.y + yPos
    })
}
