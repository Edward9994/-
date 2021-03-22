window.addEventListener('load', function () {
    var c = document.createElement("canvas");
    c.width = window.innerWidth;//窗口的文档显示区的宽度。
    c.height = window.innerHeight;//窗口的文档显示区的高度。
    var ctx = c.getContext("2d");
    let herobullet;
    let Tankimg;
    let herobullets = [];

    //获取标签的函数
    function get_by_tagname(name) {
        return document.getElementsByTagName(name);
    }
    //获取body标签
    get_by_tagname("body")[0].appendChild(c);
    //tank 父类,移动函数
    class Tank {
        constructor(x, y, direct, color) {
            this.x = x;
            this.y = y;
            this.direct = direct;
            this.color = color;
            this.speed = 10;
            this.islive = true;
            this.movingr = true;
            this.movingl = true;
            this.movingu = true;
            this.movingd = true;
            this.getImg = function () {
                return Tankimg = this.direct + 'Tank';


            }
            //坦克方向判定+移动
            //向上移动
            this.moveup = function () {
                if (this.y > 0 && this.movingu) {
                    this.y -= this.speed;
                }
                this.direct = 0;
            } //向右移动
            this.moveright = function () {
                if (this.x < c.width - 167 && this.movingr) {
                    this.x += this.speed;
                }
                this.direct = 1;
            } //向下移动
            this.movedown = function () {
                if (this.y < c.height - 167 && this.movingd) {
                    this.y += this.speed;
                }
                this.direct = 2;
            } //向左移动
            this.moveleft = function () {
                if (this.x > 0 && this.movingl) {
                    this.x -= this.speed;
                }
                this.direct = 3;
            }
        }
    }
    // 子弹类
    class Bullet {
        constructor(x, y, direct, speed, type, tank) {
            this.x = x;
            this.y = y;
            this.direct = direct;
            this.speed = speed;
            this.type = type;
            this.tank = tank;
        }
    }
    //墙类
    class wall {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    // 砖墙
    class wall1 extends wall {
        constructor(x, y) {
            super(x, y);
            let that = this;
            this.blood = 2;
            this.drawwall = function () {
                let imgs = document.createElement('img');
                imgs.setAttribute('src', `./images/wall1.png`);
                imgs.onload = function () {
                    ctx.drawImage(imgs, 0, 0, 180, 180, that.x, that.y, 180, 180);
                }
            }
        }
    }
    //子类
    class Hero extends Tank {
        constructor(x, y, direct, color) {
            super(x, y, direct, color);
            //私有函数 发子弹
            var that = this;
            //创建子弹对象
            this.hertenemy = function () {
                switch (this.direct) {
                    case 0: herobullet = new Bullet(this.x, this.y - 118, this.direct, 5, hero, this);
                        break;
                    case 1: herobullet = new Bullet(this.x + 118, this.y, this.direct, 5, hero, this);
                        break;
                    case 2: herobullet = new Bullet(this.x, this.y + 118, this.direct, 5, hero, this);
                        break;
                    case 3: herobullet = new Bullet(this.x - 118, this.y, this.direct, 5, hero, this);
                        break;
                }
                herobullets.push(herobullet);
                // console.log(herobullets);
            }
            //绘制
            this.drawTank = function () {
                if (this.islive) {
                    let imgs = document.createElement('img');
                    imgs.setAttribute('src', `./images/${this.direct}Tank.png`);
                    imgs.onload = function () {
                        ctx.drawImage(imgs, 0, 0, 180, 180, that.x, that.y, 180, 180);

   }
                }


    }
            this.born = function () {
          this.islive = true;
                this.x = x;
                this.y = y;
       }
        }
    }
    //绘子
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
    function Bulletupdate() {
        for (i = 0; i < herobullets.length; i++) {
            // console.log(herobullets[i]);
            if (herobullets.length != 0) {
                if (herobullets[i].direct == 0) {
                    herobullets[i].y -= herobullets[i].speed;
                } else if (herobullets[i].direct == 1) {
                    herobullets[i].x += herobullets[i].speed;
                } else if (herobullets[i].direct == 2) {
                    herobullets[i].y += herobullets[i].speed;
                } else if (herobullets[i].direct == 3) {
                    herobullets[i].x -= herobullets[i].speed;
                }
            }
        }
    }
    let hero = new Hero(0, 0, 2, 255);
    let hero2 = new Hero(c.width - 167, 0, 2, 255);
    let zhuanwall = new wall1(200, 200);
    //刷新页面
    let timer = setInterval(function () {
        ctx.clearRect(0, 0, c.width, c.height);
        pengZ(hero, herobullets, zhuanwall);
        pengZ(hero2, herobullets, zhuanwall);
        hero2.drawTank();
        hero.drawTank(); //绘制tank
        drawBullet(); //绘制子弹
        Bulletupdate(); //子弹刷新
        zhuanwall.drawwall();
    }, 15)
    // hero.drawTank();
    //键盘监听事件
    // hero1 wdsa k  hero2 shang you xia zuo space  
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
            case 74: hero.born();
                break;
            // -------
            case 37: hero2.moveleft();
                break;
            case 38: hero2.moveup();
                break;
            case 39: hero2.moveright();
                break;
            case 40: hero2.movedown();
                break;
            case 32: hero2.hertenemy();
                break;
        }
    }
    //碰撞检测
    function pengZ(tankobj, Bulletobj, wallobj) {
        //子弹和tank
        for (i = 0; i < Bulletobj.length; i++) {
            if (Math.abs(tankobj.x - Bulletobj[i].x) < 110 && Math.abs(tankobj.y - Bulletobj[i].y) < 110) {
                console.log('pengdaol');
                Bulletobj.splice(i, 1);
                tankobj.islive = false;
                delete tankobj.x;
                delete tankobj.y;
                console.log(tankobj);
            }
        }
        //tank和wall
        if (wallobj) {
            // console.log('tx' + tankobj.x, 'ty' + tankobj.y, 'wx' + wallobj.x, 'wy' + wallobj.y,);
            if (Math.abs(tankobj.x - wallobj.x) < 180 && Math.abs(tankobj.y - wallobj.y) < 180) {
                if (tankobj.x - wallobj.x < 0 && tankobj.direct == 1 && Math.abs(tankobj.y - wallobj.y) < 160) {
                    tankobj.movingr = false;
                    console.log('pengr');
                }
                else if (tankobj.x - wallobj.x > 0 && tankobj.direct == 3 && Math.abs(tankobj.y - wallobj.y) < 160) {
                    tankobj.movingl = false;
                    console.log('pengl');
                }
                else if (tankobj.y - wallobj.y > 0 && tankobj.direct == 0 && Math.abs(tankobj.x - wallobj.x) < 160) {
                    tankobj.movingu = false;
                    console.log('pengu');
                }
                else if (tankobj.y - wallobj.y < 0 && tankobj.direct == 2 && Math.abs(tankobj.x - wallobj.x) < 160) {
                    tankobj.movingd = false;
                    console.log('pengd');
                }
            } else {
                tankobj.movingr = true;
                tankobj.movingl = true;
                tankobj.movingu = true;
                tankobj.movingd = true;
            }
            //子弹和wall
            for (let i = 0; i < Bulletobj.length; i++) {
                if (Math.abs(Bulletobj[i].x - wallobj.x) < 110 && Math.abs(Bulletobj[i].y - wallobj.y) < 110) {
                    Bulletobj.splice(i, 1);
                    wallobj.blood--;
                    console.log(wallobj.blood);
                    if (wallobj.blood == 0) {
                        delete wallobj.x;
                        delete wallobj.y;
                    }
                }
            }
        }




    }
})
