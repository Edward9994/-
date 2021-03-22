window.addEventListener('load', function () {
    let box = document.querySelector('#box');
    let screen = box.querySelector('.screen');
    let ul = screen.querySelector('ul');
    let lis = ul.querySelectorAll('li');
    let ol = box.querySelector('ol');
    let imges = ['images/laugh01.gif', 'images/laugh02.gif',
        'images/laugh03.gif', 'images/laugh04.gif', 'images/laugh05.gif',
    'images/laugh43.gif']
    //小圆点
    for (let i = 0; i < imges.length; i++){
        let li = document.createElement('li');
        li.innerHTML = i + 1;
        ol.appendChild(li);
        ol.children[i].onclick = function () {
            for (let i = 0; i < ol.children.length; i++){
                ol.children[i].classList.remove('current');
            }
            this.classList.add('current');
            ul.children[0].children[0].src = imges[i];
            index = i;
        
        }
    }
    let arr =box.querySelector('#arr');
    let right = arr.querySelector('#right');
    let left = arr.querySelector('#left');
    let index = 0;
      // 右箭头
    right.onclick = function () {
       
            if (index == 5) index = -1;
                  //根据上一个li克隆一个li
        let liclone = ul.firstElementChild.cloneNode(true);
             liclone.firstChild.src = imges[index+1];
            // console.log(liclone.firstChild);
             index++;
            //插入到前面li后面
            ul.appendChild(liclone);
            animateSlow(ul, -screen.offsetWidth, 'left', function () {
                ul.children[0].remove();  
                ul.style.left = 0;
            });    
    }
    //左箭头 // index:-1~4
    left.onclick = function () {
        index--;
        if (index<0) index =5;
                  //根据上一个li克隆一个li
        let liclone = ul.firstElementChild.cloneNode(true);
             liclone.firstChild.src = imges[index];
            // console.log(liclone.firstChild);
            //插入到前面li后面
            ul.insertBefore(liclone, ul.children[0]);
        ul.style.left =  -500+'px'
        console.log(   ul.style.left);
            animateSlow(ul,0, 'left', function () {
                 ul.style.left = 0;
                ul.children[1].remove();  
               
            });    
    }
    

})