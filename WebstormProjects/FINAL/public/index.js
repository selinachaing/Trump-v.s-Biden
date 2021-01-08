let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");
//draw a background
let img_Background = new Image();
    img_Background.src = "/assets/background.png";
    img_Background.Id = "img_Background";
img_Background.onload = function(){
    context.imageSmoothingEnabled = false;
    context.drawImage(img_Background,0,0,800,600);
}
//draw trump
let img_Trump = new Image();
    img_Trump.src = "/assets/川普_丟1.png";
    img_Trump.Id = "img_Trump";
img_Trump.onload = function(){
    context.imageSmoothingEnabled = false;
    context.drawImage(img_Trump,50,290,250,250);
}
//draw biden
let img_Biden = new Image();
    img_Biden.src = "/assets/拜登_丟1.png";
    img_Biden.Id = "img_Biden";
img_Biden.onload = function(){
    context.imageSmoothingEnabled = false;
    context.drawImage(img_Biden,600,290,250,250);
}
//draw health bar
const width = canvas.width;//800
const height = canvas.height;//600

let health = 100;
const healthBarWidth = 200;
const healthBarHeight = 30;
const healthBar_trump = new HealthBar(10, 10, healthBarWidth, healthBarHeight, health, "red");
const healthBar_biden = new HealthBar(590, 10, healthBarWidth, healthBarHeight, health, "blue");
const frame = function() {
    context.clearRect(10, 10, healthBarWidth, healthBarHeight);
    requestAnimationFrame(frame);
    healthBar_trump.show(context);
    healthBar_biden.show(context);
}
frame();

canvas.onclick = function() {
    health -= 10;
    healthBar_trump.updateHealth(health);
    console.log(healthBar_trump.health);
    console.log(healthBar_biden.health);

    while(healthBar_trump.health==0){
        console.log("game over");
        break;
    }
};


