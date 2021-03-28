function f() {
    console.log('我是f函数');
}
f.abc = 100
f.f1 = function () {
    console.log('我是f函数的一个属性：f1我也是一个函数');
}
f.f()
console.log(f);

//函数也是一个对象，函数也可以添加属性