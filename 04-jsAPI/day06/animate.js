/**
 * 
 * @param {element} ele 
 * @param {number} target 
 * @param {string} cssProp 
 * @param {function} fn 
 */
function animateSlow(ele, target, cssProp, fn) {
    // 先干掉可能存在的定时器
    clearInterval(ele.timeId);

    ele.timeId = setInterval(function () {
        // 样式是全局的
        // 获取元素本身的left的值
        let left = getComputedStyle(ele)[cssProp];

        // 将带单位的left转成数字
        left = parseInt(left);

        // 动态计算步长：会出现小数
        let step = (target - left) * 0.1;

        // 像素变化：保证整数
        // 如果是向右运动：目标 > 当前位置，移动的距离是正数，向上取整（1）
        // 如果是向左运动：目标 < 当前位置，移动的距离是负数，向下取整（-1）
        if (target > left) step = Math.ceil(step);
        if (target < left) step = Math.floor(step);

        // 修改元素当前的left值
        ele.style[cssProp] = left + step + 'px';

        // 缓速运动：最后的单位一定会变成1px的移动，最后步长会变成0：结束的方式有很多
        if (step == 0) {
            clearInterval(ele.timeId);

            // 新追加一个动画
            // fn接收一个回调函数：不一定会接收到，安全处理：是函数才调用函数
            if (typeof fn === 'function') fn();
        }
    }, 20);
}