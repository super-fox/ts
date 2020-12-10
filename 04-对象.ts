/* let person ={
    name:'小白',
    sayHi:function(){
        console.log('我是小白')
    }
} */


//对象的类型注解
/* let person: {
    name: string;
    age: number;
    sayHi: () => void
}
//对象
person = {
    name: '小白',
    age: 20,
    sayHi: function () {
        console.log('我是小白')
        return 12
    }
} */


// let person: {
//     name: string;
//     age: number;
//     sayHi: () => void
// } = {
//     name: '小白',
//     age: 20,
//     sayHi: function () {
//         console.log('我是小白')
//         return 12
//     }
// }

//创建一个接口
interface IUser {
    name: string;
    age: number;
    sayHi: () => void
}

//接口的使用
let p1: IUser = {
    name: '小白',
    age: 10,
    sayHi: function () {
        console.log('我是小白')
    }
}
let p2: IUser = {
    name: '小黑',
    age: 15,
    sayHi: function () {
        console.log('我是小黑')
    }
}

console.log(p1.name);
p1.sayHi()

