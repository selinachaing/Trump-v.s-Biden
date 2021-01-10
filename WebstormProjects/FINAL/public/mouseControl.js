let turn = 1;
let turn_trump = true,turn_biden = false;
//換回合數，川普先攻
//川普-->1 ;拜登-->0
let trump_area=false,biden_area=false;
//area
let skill_1=false,skill_2=false,skill_3=false,skill_4=false;
let add_1=false,add_2=false;
//skill only use once
let skillcount_1=1,skillcount_2=1,skillcount_3=1,skillcount_4=1;
let addcount_1=1,addcount_2=1;

let stringNews;
let PathNewsPic;

startTimer();
setAttackMode();

function switchRound(){
    clearPic();
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
    setAttackMode();
} //success
function attack(){
    console.log(`power is ${power}`);
} //undone
function displayNews(StringNews,x,y){
    contextNews.font = '18px Courier';
    contextNews.fillStyle = "white";
    contextNews.fillText(StringNews,x,y);
    setTimeout(function (){
        clearNews();
    },5000);
}
function clearNews(){
    contextNews.clearRect(0,0,800,100);
    let img_News = new Image();
    img_News.src = "/assets/文字條.png";
    img_News.onload = function(){
        contextNews.imageSmoothingEnabled = false;
        contextNews.drawImage(img_News,0,0,800,100);
    }
}
function displayPic(PathNewsPic){
    let display_pic = new Image();
    display_pic.src = PathNewsPic;
    display_pic.onload = function(){
        context_above.imageSmoothingEnabled = false;
        context_above.drawImage(display_pic,0,0,canvas_above.width,canvas_above.height);
    }
    document.getElementById("canvas_above").style.border="solid 6px #FFFFFF";
    setTimeout(function (){
        clearPic();
        document.getElementById("canvas_above").style.border="0px";
    },5000);
}
function clearPic(){
    console.log("clean");
    context_above.clearRect(0,0,canvas_above.width,canvas_above.height);
}

canvas.onmousemove = function (e){
    let X = e.offsetX;
    let Y = e.offsetY;

    //trump add1
    if(X > icon_add1 && X < icon_add1+icon_w && Y > icon_y && Y < icon_y+icon_h){
        add_1 =true;
        trump_skill_add.src = "/assets/icon_hover_推特鳥.png";
    }else{
        add_1 =false;
        trump_skill_add.src = "/assets/icon_推特鳥.png";
    }
    //trump skill 0
    if(X > icon_x1 && X < icon_x1+icon_w && Y > icon_y && Y < icon_y+icon_h){
        skill_1 =true;
        trump_skill_0.src = "/assets/icon_hover_筆電.png";
    }else{
        skill_1 =false;
        trump_skill_0.src = "/assets/icon_筆電.png";
    }
    //trump skill 1
    if(X > icon_x2 && X < icon_x2+icon_w && Y > icon_y && Y < icon_y+icon_h){
        skill_2 =true;
        trump_skill_1.src = "/assets/icon_hover_拜登子.png";
    }else{
        skill_2 =false;
        trump_skill_1.src = "/assets/icon_拜登子.png";
    }
    ///////////////////////////
    //biden skill 0
    if(X > icon_x3 && X < icon_x3+icon_w && Y > icon_y && Y < icon_y+icon_h){
        skill_3 =true;
        biden_skill_0.src = "/assets/icon_hover_女優.png";
    }else{
        skill_3 =false;
        biden_skill_0.src = "/assets/icon_女優.png";
    }
    //biden skill 1
    if(X > icon_x4 && X < icon_x4+icon_w && Y > icon_y && Y < icon_y+icon_h) {
        skill_4 =true;
        biden_skill_1.src = "/assets/icon_hover_covid.png";
    }else{
        skill_4 =false;
        biden_skill_1.src = "/assets/icon_covid.png";
    }
    //biden add1
    if(X > icon_add2 && X < icon_add2+icon_w && Y > icon_y && Y < icon_y+icon_h){
        add_2 =true;
        biden_skill_add.src = "/assets/icon_hover_郵件選票.png";
    }else{
        add_2 =false;
        biden_skill_add.src = "/assets/icon_郵件選票.png";
    }
    ////////////////////////////
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
    if(turn_trump) {
        //trump add
        if (add_1 && addcount_1 > 0) {
            //+10
            healthBar_trump.health += 10;
            healthBar_trump.updateHealth(healthBar_trump.health);
            displayPic("/assets/技能動畫1.png");
            displayNews("川普再度露面氣色好轉，誓言全力抗疫狂發推特！I FEEL LIKE SUPER MAN!!!", 10, 50);//
            addcount_1 -= 1;
        }
        //trump skill 0
        if (skill_1 && skillcount_1 > 0) {
            //biden -20
            healthBar_biden.health -= 20;
            healthBar_biden.updateHealth(healthBar_biden.health);
            displayNews("速報！喬．拜登之子亨特．拜登糟《紐約郵報》披露使用的個人筆記本電腦中的大量通訊、照片，包含不雅照、吸毒。", 10, 50);//
            //displayNews("New York post article based on purported juicy emails and photos found on a laptop.",10,70);
            skillcount_1 -= 1;
        }
        //trump skill 1
        if (skill_2 && skillcount_2 > 0) {
            //biden -10
            healthBar_biden.health -= 10;
            healthBar_biden.updateHealth(healthBar_biden.health);
            displayNews("拜登之子亨特．拜登曾與嫂子哈莉搞婚外情", 10, 50);//
            //displayNews("Hunter used to date his widowed sister-in-law, Hallie Biden, who had lost her husband, Beau, to brain cancer in 2015",10,70);
            skillcount_2 -= 1;
        }
    }
    ////////////
    if(turn_biden) {
        //biden skill 0
        if (skill_3 && skillcount_3 > 0) {
            //trump -10
            healthBar_trump.health -= 10;
            healthBar_trump.updateHealth(healthBar_trump.health);
            displayNews("幫川普掩蓋「AV女星緋聞」前私人律師遭判入監3年徒刑", 10, 50);//
            skillcount_3 -= 1;
        }
        //biden skill 1
        if (skill_4 && skillcount_4 > 0) {
            //trump -20
            healthBar_trump.health -= 20;
            healthBar_trump.updateHealth(healthBar_trump.health);
            displayNews("川普確診新冠肺炎！拜登呼籲全民戴口罩 專家評估：對拜登選情非常有利", 10, 50);//
            skillcount_4 -= 1;
        }
        //biden add
        if (add_2 && addcount_2 > 0) {
            //+10
            healthBar_biden.health += 10;
            healthBar_biden.updateHealth(healthBar_biden.health);
            displayPic("/assets/技能動畫2.png");
            displayNews("大逆轉！！郵寄選票翻轉搖擺州！！拜登目前領先川普！！", 10, 50);//
            addcount_2 -= 1;
        }
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
canvas.onmouseup = function (){
    if(trump_area &&  turn_trump){
        //attack();
        console.log("trump attack");
        onTimesUp();
        resetTimer();
        switchRound();
    }
    if(biden_area &&  turn_biden){
        //attack();
        console.log("biden attack");
        onTimesUp();
        resetTimer();
        switchRound();
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

const TIME_LIMIT = 16;//10秒換組
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null; //剩下時間
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;
const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};
let remainingPathColor = COLOR_CODES.info.color;

function resetTimer(){
    timePassed = 0;
    timeLeft = TIME_LIMIT; //要加這行 不然第二論會是0 9 8 7 ...而不是從10開始
}
function onTimesUp(){
    clearInterval(timerInterval);
    console.log("time's up!");
}
function startTimer(){ //開始計時
    let timerInterval = setInterval(function(){
        console.log(timeLeft, turn);/////

        setCircleDasharray();
        timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = timeLeft;
        //document.getElementById("base-timer-label").innerHTML = timeLeft;
        if(timeLeft === 0 ){//時間到
            onTimesUp();
            resetTimer();
            switchRound();//換人
        }
    },1000);//每一秒變換
}

function setAttackMode(){
    console.log("set well");
    let trump_atk = new Image();
    trump_atk.src = "/assets/推特鳥.png";
    trump_atk.onload = function(){
        context_above.imageSmoothingEnabled = false;
        context_above.drawImage(trump_atk,0,canvas_above.height-50,50,50);
    }
    let biden_atk = new Image();
    biden_atk.src = "/assets/郵件選票.png";
    biden_atk.onload = function(){
        context_above.imageSmoothingEnabled = false;
        context_above.drawImage(biden_atk,canvas_above.width-50,canvas_above.height-50,50,50);
    }
}
/////timer
document.getElementById("clock").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${timeLeft}</span>
</div>
`;
function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;

    // If the remaining time is less than or equal to 5, remove the "warning" class and apply the "alert" class.
    if (timeLeft <= alert.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);

        // If the remaining time is less than or equal to 10, remove the base color and apply the "warning" class.
    } else if (timeLeft <= warning.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
    }
}

function calculateTimeFraction() {
    return timeLeft / TIME_LIMIT;
}

// Update the dasharray value as time passes, starting with 283
function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}











