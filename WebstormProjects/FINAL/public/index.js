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
//people x,y,size
const people_x1 =50, people_x2=600;
const people_y=290;
const people_w=250,people_h=250;
//draw trump
let img_Trump = new Image();
    img_Trump.src = "/assets/川普_丟1.png";
    img_Trump.Id = "img_Trump";
img_Trump.onload = function(){
    context.imageSmoothingEnabled = false;
    context.drawImage(img_Trump,people_x1,people_y,people_w,people_h);
}
//draw biden
let img_Biden = new Image();
    img_Biden.src = "/assets/拜登_丟1.png";
    img_Biden.Id = "img_Biden";
img_Biden.onload = function(){
    context.imageSmoothingEnabled = false;
    context.drawImage(img_Biden,people_x2,people_y,people_w,people_h);
}
//icon x,y,size
const icon_y =50;
const icon_w=60,icon_h=60;
const icon_x1=10,icon_x2=110;
const icon_x3=600,icon_x4=700;
//draw skill icon
let trump_skill_0 = new Image();
    trump_skill_0.src = "/assets/筆電.png";
    trump_skill_0.onload =  function(){
        context.imageSmoothingEnabled = false;
        context.drawImage(trump_skill_0,icon_x1,icon_y,icon_w,icon_h);
    }
let trump_skill_1 = new Image();
    trump_skill_1.src = "/assets/拜登子.png";
    trump_skill_1.onload =  function(){
        context.imageSmoothingEnabled = false;
        context.drawImage(trump_skill_1,icon_x2,icon_y,icon_w,icon_h);
    }

let biden_skill_0 = new Image();
    biden_skill_0.src = "/assets/女優.png";
    biden_skill_0.onload =  function(){
        context.imageSmoothingEnabled = false;
        context.drawImage(biden_skill_0,icon_x3,icon_y,icon_w,icon_h);
    }
let biden_skill_1 = new Image(); //(700,50),60*60
    biden_skill_1.src = "/assets/郵件選票.png";
    biden_skill_1.onload =  function(){
        context.imageSmoothingEnabled = false;
        context.drawImage(biden_skill_1,icon_x4,icon_y,icon_w,icon_h);
    }

// draw health bar
const width = canvas.width;//800
const height = canvas.height;//600
let health = 100;
const healthBarWidth = 200,healthBarHeight = 30;
const healthBar_trump = new HealthBar(10, 10, healthBarWidth, healthBarHeight, health, "red");
const healthBar_biden = new HealthBar(590, 10, healthBarWidth, healthBarHeight, health, "blue");

//T B的扣分系統
const frame_T = function() {
    context.clearRect(10, 10, healthBarWidth, healthBarHeight);
    requestAnimationFrame(frame_T);
    healthBar_trump.show(context);
}
const frame_B = function() {
    context.clearRect(590, 10, healthBarWidth, healthBarHeight);
    requestAnimationFrame(frame_B);
    healthBar_biden.show(context);
}
frame_T();
frame_B();

//mouseControl.js
