let GameBackground;
let Trump;
let Biden;
let Trump_Throw;
let Biden_Throw;
let Trump_item;
let Biden_item;
function preload(){
    GameBackground = loadImage("/assets/background.png");
    Trump = createSprite(200,435,300,300);
    Trump.scale = 0.3;
    Trump.addImage('throw1', loadImage('/assets/川普_丟1.png'));
    Trump.addImage('throw2', loadImage('/assets/川普_丟2.png'));
    Trump.addImage('throw3', loadImage('/assets/川普_丟3.png'));
    Trump.addImage('throw4', loadImage('/assets/川普_丟4.png'));
    Trump.addImage('throw5', loadImage('/assets/川普_丟5.png'));
    Trump.addImage('throw6', loadImage('/assets/川普_丟6.png'));
    Trump_Throw = loadAnimation('/assets/川普_丟1.png', '/assets/川普_丟2.png','/assets/川普_丟3.png',
        '/assets/川普_丟4.png','/assets/川普_丟5.png','/assets/川普_丟6.png');

    Biden = createSprite(700,435);
    Biden.scale = 0.3;
    Biden.addImage('throw1', loadImage('/assets/拜登_丟1.png'));
    Biden.addImage('throw2', loadImage('/assets/拜登_丟2.png'));
    Biden.addImage('throw3', loadImage('/assets/拜登_丟3.png'));
    Biden.addImage('throw4', loadImage('/assets/拜登_丟4.png'));
    Biden.addImage('throw5', loadImage('/assets/拜登_丟5.png'));
    Biden.addImage('throw6', loadImage('/assets/拜登_丟6.png'));
    Biden_Throw = loadAnimation('/assets/川普_丟1.png', '/assets/川普_丟2.png','/assets/川普_丟3.png',
        '/assets/川普_丟4.png','/assets/川普_丟5.png','/assets/川普_丟6.png');
}
function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(GameBackground);

    drawSprites();
    fill("blue");
    stroke("blue");
    circle(200, 435, 1); //trump location
}
//mouse control
