//draw canvas_score
//let canvas_score = document.getElementById("canvas_score"),
//    context_score = canvas_score.getContext("2d"); //canvas score
//draw canvas_above
let canvas_above = document.getElementById("canvas_above"),
    context_above = canvas_above.getContext("2d"); //canvas
//draw canvas 800*600
let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"); //canvas

let img_Background = new Image();
    img_Background.src = "/assets/background.png";
    img_Background.Id = "img_Background";
img_Background.onload = function(){
    context.imageSmoothingEnabled = false;
    context.drawImage(img_Background,0,0,800,600);
}
//draw News 800*100
let canvasNews = document.getElementById("canvasNews"),
    contextNews = canvasNews .getContext("2d"); //canvasNews
let img_News = new Image();
    img_News.src = "/assets/文字條.png";
img_News.onload = function(){
    contextNews.imageSmoothingEnabled = false;
    contextNews.drawImage(img_News,0,0,800,100);
}

//people x,y,size
const people_x1 =-10, people_x2=600;
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
const icon_y =65;
const icon_w=60,icon_h=60;
const icon_add1=10;
const icon_x1=80,icon_x2=150; //trump
const icon_x3=590,icon_x4=660; //biden
const icon_add2=730;
//draw skill icon

let trump_skill_add = new Image(); //trump add
    trump_skill_add.src = "/assets/icon_推特鳥.png";
    trump_skill_add.onload =  function(){
    context.imageSmoothingEnabled = false;
    context.drawImage(trump_skill_add,icon_add1,icon_y,icon_w,icon_h);
}
let trump_skill_0 = new Image(); //skill
    trump_skill_0.src = "/assets/icon_筆電.png";
    trump_skill_0.onload =  function(){
        context.imageSmoothingEnabled = false;
        context.drawImage(trump_skill_0,icon_x1,icon_y,icon_w,icon_h);
    }
let trump_skill_1 = new Image(); //skill
    trump_skill_1.src = "/assets/icon_拜登子.png";
    trump_skill_1.onload =  function(){
        context.imageSmoothingEnabled = false;
        context.drawImage(trump_skill_1,icon_x2,icon_y,icon_w,icon_h);
    }
//biden
let biden_skill_0 = new Image();
    biden_skill_0.src = "/assets/icon_女優.png";
    biden_skill_0.onload =  function(){
        context.imageSmoothingEnabled = false;
        context.drawImage(biden_skill_0,icon_x3,icon_y,icon_w,icon_h);
    }
let biden_skill_1 = new Image(); //(700,50),60*60
    biden_skill_1.src = "/assets/icon_covid.png";
    biden_skill_1.onload =  function(){
        context.imageSmoothingEnabled = false;
        context.drawImage(biden_skill_1,icon_x4,icon_y,icon_w,icon_h);
    }
let biden_skill_add = new Image(); //trump add
    biden_skill_add.src = "/assets/icon_郵件選票.png";
    biden_skill_add.onload =  function(){
    context.imageSmoothingEnabled = false;
    context.drawImage(biden_skill_add,icon_add2,icon_y,icon_w,icon_h);
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
