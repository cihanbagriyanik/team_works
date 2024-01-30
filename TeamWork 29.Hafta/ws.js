// 1. What is the output of the following code block ?
// console.log(0.1 + 0.2); // 0.30000000000000004
// // ondalikli sayilarda 2 ve katlarin kucuk br kusurat farki cikiyor dikkalti olmak lazim...
// console.log(0.1 + 0.2 == 0.3); //false

// console.log((0.1 + 0.2).toFixed(1)); // 0.3
// console.log((0.1 + 0.2).toFixed(1) == 0.3); // true

/* -------------------------------------------------------------------------- */
// 2. What is the output of the following code block ?
// console.log(1 < 2 < 3); //true
// JS okuma seklinden kaynakli asagida false cikiyor 3 > 2 true(1) oluyor  bunun sonucu 1 > 1 false dusuyor
// console.log(3 > 2 > 1); //false

/* -------------------------------------------------------------------------- */
// 3. Write program to find the sum of positive numbers. But if the user enters a negative numbers, the loop ends, if the negative number entered is not added to sum?
// let sum = 0;
// let number = parseInt(prompt('Enter a number: '));
// while(number >= 0) {
//         sum += number;
//         number = parseInt(prompt('Enter a number: '));
// }
// console.log(sum)

/* -------------------------------------------------------------------------- */
// 4. What is the output of the following code block ?
// console.log(null == undefined);
// null == undefined
// console.log(null === undefined);
// null === undefined
// isNaN(2 + null)
// isNaN(2 + undefined)
// null ? console.log("true") : console.log("false") //false

/* -------------------------------------------------------------------------- */
// 5. What is the output of the following code block ?
// var hash = "";
// var count = 1;
// var n = 3;
// for (var x = 1; x <= 7; x++) {
// while (hash.length != count)
// hash += "#";
// hash += "\n";
// count += n;
// n++;
// }
// console.log(hash);
// output
/*
#
##
###
####
#####
######
#######
*/

/* -------------------------------------------------------------------------- */
// 6. What is the output of the following code block ?
// let firstName = null;
// let lastName = null;
// let nickName = "coderBond";
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // coderBond
// //            false        false      true         true       // Ilk true deger ekrana basiyor

/* -------------------------------------------------------------------------- */
// 7. What is the output of the following code block ?
// function onZoom(x) {
//   console.log("Zoom active for", x);
// }
// function startClass(x, y, z) {
//   console.log(" Class starts at", x);
//   y(z);
// }
// startClass("20:00", onZoom, "FS");
// output
/* 
Class starts at 20:00
Zoom active for FS
*/

/* -------------------------------------------------------------------------- */
// 8. What is the output of the following code block ?
// console.log(
//   (function f(n) {
//     return n > 1 ? n * f(n - 1) : n;
//   })(5)
// ); // 120

/* -------------------------------------------------------------------------- */
// 9. What is the output of the following code block ?
// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1,
//     y = 2;
//     console.log(x); // 1
//   }
//   console.log(x); // undefined
//   console.log(y); // 2
// })();

/* -------------------------------------------------------------------------- */
// 10. What is the output of the following code block ?
// let a = [10, 20, 30];
// a[10] = 100;
// console.log(a[6]); //undefined
// let b = [undefined];
// b[2] = 1;
// console.log(b); // [ undefined, <1 empty item>, 1 ]
// console.log(b.map((e) => 99)); // [ 99, <1 empty item>, 99 ]

/* -------------------------------------------------------------------------- */
// 11. What is the output of the following code block ?
// function orderPizza(type, ingredients, callback) {
//   console.log("Pizza ordered..."); //Pizza ordered...
//   console.log("Pizza is for preparation"); // Pizza is for preparation
//   setTimeout(function () {
//     let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is
//     $10`;
//     callback(msg);
//   }, 3000);
// }
// orderPizza("Vegeterian", "Cheese", function (message) {
//   console.log(message); //Your Vegeterian Cheese Pizza is ready! The total bill is $10
// });

/* -------------------------------------------------------------------------- */
// 12. What is the output of the following code block ?
// class Employee {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
//   detail() {
//     console.log(this.id + " " + this.name);
//   }
// }
// let e1 = new Employee(10, "Qadir Adamson");
// let e2 = new Employee("Victor Hug");
// let e3 = new Employee(12);
// e1.detail();
// e2.detail();
// e3.detail();
/*
10 Qadir Adamson
Victor Hug undefined
12 undefined
*/

/* -------------------------------------------------------------------------- */
// 13. What is the output of the following code block ?
class Animal {
    constructor(name, weight) {
    this.name = name;
    this.weight = weight;
    }
    eat() {
    return `${this.name} is eating`;
    }
    sound(){
    return `${this.name} is says`;
    }
    }
    class Cat extends Animal {
    constructor(name, weight) {
    super(name, weight);
    }
    sound(){
    return `${super.sound()} Meow!`;
    }
    }
    let felix=new Cat("felix",5)
    console.log(felix.sound()) //felix is says Meow!
