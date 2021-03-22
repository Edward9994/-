window.addEventListener('load', function () {
    var c = document.createElement("canvas");
    c.width = window.innerWidth;//窗口的文档显示区的宽度。
    c.height = window.innerHeight;//窗口的文档显示区的高度。
    var ctx = c.getContext("2d");
    var body =document.querySelector('body')
    body.appendChild(c);
    let herobullet;
    let Tankimg;
    let herobullets = [];
    class Tank {
        constructor(x,y,direct){
            this.x=x;
            this.y=y;
            this.speed=10;
            //方向
            this.direct=direct;
            //tank移动
            this.moveup = function(){
                if(this.y>0){ 
                    this.y-=this.speed;
                    this.direct=1;
                }
            }
            this.movedown = function(){
                if(this.y<c.height){
                    this.y+=this.speed;
                    this.direct=2;
                }
            }
            this.moveleft = function(){
                if(this.x>0){
                    this.x-=this.speed;
                    this.direct=3;
                }
            }
            this.moveright = function(){
                if(this.x<c.width){
                    this.x+=this.speed;
                    this.direct=4;
                }
            }
        }
    }
    class Bullet {
        constructor(x, y,  speed) {
            this.x = x;
            this.y = y;
            this.speed = speed;
        }
    }
    class Hero extends Tank {
        constructor(x,y,direct){
            //继承tank基类
            super(x,y,direct);
            var that = this;
            //绘制坦克
            this.drawTank = function(){
                let imgs = document.createElement('img');
                imgs.setAttribute('src',`./images/${this.direct}.png`);
                imgs.onload = function () {
                    //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
                ctx.drawImage(imgs, 0, 0, 180, 180, that.x, that.y, 180, 180);

                }
            }
            this.drawBullet = function(){
                let imgs1 = document.createElement('img');
                imgs1.setAttribute('src',`./images/1.png`);
                imgs1.onload = function () {
                    //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
                ctx.drawImage(imgs1, 0, 0, 280, 280, that.x, that.y, 280, 280);

                }
            }
            //子弹
            this.hertenemy = function () {
                herobullet = new Bullet(this.x + 118, this.y,  5);
               
            }

        }
    }
    function drawBullet() {
        for (i = 0; i < herobullets.length; i++) {
            var Bulletimg = document.createElement('img');
            Bulletimg.setAttribute('src', `./images/Bullet${herobullets[i].direct}.png`);
            ctx.drawImage(Bulletimg, 0, 0, 69, 69, herobullets[i].x, herobullets[i].y, 69, 69);
            if (herobullets[i].x > c.width || herobullets[i].x < 0 || herobullets[i].y < 0 || herobullets[i].y > c.height) {
                herobullets.splice(i, 1);
            }   
            // console.log(herobullets);
        }
    }
    setInterval(function(){
//         ctx.fillStyle="red";
// ctx.fillRect(0,0,300,150);
// ctx.clearRect(20,20,100,50);
        //在给定矩形内清空一个矩形：
        ctx.clearRect(0, 0, c.width, c.height);
        hero.drawTank();
    },15);

    let hero = new Hero(0, 0,1);
    window.onkeydown = function (e) {
        var code = e.keyCode;
        switch (code) {
            case 87: hero.moveup();
                break;
            case 68: hero.moveright();
                break;
            case 83: hero.movedown();
                break;
            case 65: hero.moveleft();
                break;
            case 75: hero.hertenemy();
                break;
           
        }
    }
})

