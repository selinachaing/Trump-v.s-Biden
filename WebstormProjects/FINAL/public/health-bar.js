class HealthBar {
    constructor(x, y, w, h, maxHealth, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.maxHealth = maxHealth;
        this.maxWidth = w;
        this.health = maxHealth;
        this.color = color;
    }
    show(context) {
        context.lineWidth = 4;//粗度
        context.strokeStyle = "#333";//線顏色
        context.fillStyle = this.color;//血槽顏色
        context.fillRect(this.x, this.y, this.w, this.h);
        context.strokeRect(this.x, this.y, this.maxWidth, this.h);
    }
    updateHealth(val) {
        if (val >= 0) {
            this.health = val;
            this.w = (this.health / this.maxHealth) * this.maxWidth;
        }
    }
}

/*
class health_num{
    constructor(x,y,num,color){
        this.x=x;
        this.y=y;
        this.num=num;
        this.color = color;
    }
    show(context){
        context.font = "30px Arial";
        contex.fillText(this.num,this.x,this.y);
    }
    updateHealth(val) {
        if (val >= 0) {
            this.health = val;
            this.w = (this.health / this.maxHealth) * this.maxWidth;
        }
    }
}*/