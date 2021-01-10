let turn = 1;
let turn_trump = true,turn_biden = false;
//換回合數，川普先攻
//川普-->1 ;拜登-->0
let trump_area=false,biden_area=false;
let skill_1=false,skill_2=false,skill_3=false,skill_4=false; //area
let skillcount_1=1,skillcount_2=1,skillcount_3=1,skillcount_4=1;


startTimer();

canvas.onmousemove = function (e){
    let X = e.offsetX;
    let Y = e.offsetY;
    //trump skill 0
    if(X > icon_x1 && X < icon_x1+icon_w && Y > icon_y && Y < icon_y+icon_h){
        skill_1 =true;
    }else{
        skill_1 =false;
    }
    //trump skill 1
    if(X > icon_x2 && X < icon_x2+icon_w && Y > icon_y && Y < icon_y+icon_h){
        skill_2 =true;
        console.log("skill 2 is here!");
    }else{
        skill_2 =false;
    }
    //biden skill 0
    if(X > icon_x3 && X < icon_x3+icon_w && Y > icon_y && Y < icon_y+icon_h){
        skill_3 =true;
        console.log("skill 3 is here!");
    }else{
        skill_3 =false;
    }
    //biden skill 1
    if(X > icon_x4 && X < icon_x4+icon_w && Y > icon_y && Y < icon_y+icon_h) {
        skill_4 =true;
        console.log("skill 4 is here!");
    }else{
        skill_4 =false;
    }
    //TRUMP
    if(X > people_x1 && X < people_x1+people_w && Y > people_y && Y < people_y+people_h){
        trump_area =true;
    }else{
        trump_area=false;
    }
    //BIDEN
    if(X > people_x2 && X < people_x2+people_w && Y > people_y && Y < people_y+people_h){
        biden_area =true;
    }else{
        biden_area=false;
    }
}
canvas.onclick = function (){

    //trump skill 0
    if(skill_1 && skillcount_1 > 0){
        console.log("using skill 1 ");//success
        skillcount_1 -= 1;
    }
    //trump skill 1
    if(skill_2 && skillcount_2 > 0){
        console.log("using skill 2 ");//success
        skillcount_2 -= 1;
    }
    //biden skill 0
    if(skill_3 && skillcount_3 > 0){
        console.log("using skill 3 ");//success
        skillcount_3 -= 1;
    }
    //biden skill 1
    if(skill_4 && skillcount_4 > 0) {
        console.log("using skill 4 ");//success
        skillcount_4 -= 1;
    }
}
canvas.onmousedown = function (){
    if(trump_area &&  turn_trump){
        console.log("trump is ready");
    }
    if(biden_area &&  turn_biden){
        console.log("biden is ready");
    }
}
//mouseup為測試
/*
canvas.onmouseup = function() {
    switchRound();
    if(turn == 1) {

        healthBar_trump.health -= 10;
        healthBar_trump.updateHealth(healthBar_trump.health);

    }else{

        healthBar_biden.health -= 10;
        healthBar_biden.updateHealth(healthBar_biden.health);

    }

    //console.log(healthBar_trump.health);
    //console.log(healthBar_biden.health);
    while(healthBar_trump.health<=0 || healthBar_biden.health<=0){
        console.log("game over");
        break;
    }
};

 */
canvas.onmouseup = function (){
    if(trump_area &&  turn_trump){
        console.log("trump attack");
        onTimesUp();
        resetTimer();
        switchRound();
    }
    if(biden_area &&  turn_biden){
        console.log("biden attack");
        onTimesUp();
        resetTimer();
        switchRound()
    }
}

function switchRound(){
    turn = (turn+1)%2;//換回合數
    if(turn == 1){
        turn_trump = true;
        turn_biden = false;
        console.log("trump turn now");

    }else{
        turn_trump = false;
        turn_biden = true; // biden
        console.log("biden turn");
    }
} //success

const TIME_LIMIT = 10;//10秒換組
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null; //剩下時間
//let remainingPathColor = COLOR_CODES.info.color;

function startTimer(){ //開始計時
    let timerInterval = setInterval(function(){
        console.log(timeLeft, turn);/////
        timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        if(timeLeft === 0 ){//時間到
            onTimesUp();
            resetTimer();
            switchRound();//換人
        }
    },1000);//每一秒變換
}
function resetTimer(){
    timePassed = 0;
    timeLeft = TIME_LIMIT; //要加這行 不然第二論會是0 9 8 7 ...而不是從10開始
}
function onTimesUp(){
    clearInterval(timerInterval);
    console.log("time's up!");
}







