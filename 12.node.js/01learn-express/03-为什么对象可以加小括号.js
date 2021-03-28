function f () {
  console.log("我是f函数")
}

f.abc = 100
f.f1 = function() {
  console.log('我是f函数中一个属性:f1，我也是一个函数')
}

f.f1()
console.log(f)