/* function getSum(a: number[]) {
    let sum :number = 0
    for(let i :number =0;i<a.length;i++){
         sum += a[i]
    }
    return sum
}
getSum([1,2,3]) + getSum([2,3,4]) */


/* function fn(): number {
    return 15
}

let result: number = fn()
console.log(result) */

//求任意三角形面积
/* function calcArea(a: number, h: number): number {
    let area: number = 1 / 2 * a * h
    return area;
}
console.log(calcArea(10, 20)) */

//得到任意两个数中的最大值
/* function getMax(num1: number, num2: number): number {
    return num1 > num2 ? num1 : num2;

}
console.log(getMax(1, 20)) */


//断点调试
console.log('代码开始执行')

function work(){
    console.log('工作')
    console.log('下班')
}

let count :number = 0
count++
work()

console.log('代码执行结束')