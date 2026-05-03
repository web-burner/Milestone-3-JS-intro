// 5 things to declare variable
// var userName = "Shaon";
// console.log(userName);

// var age = 23;
// age = 25;
// console.log(age)

// const name = "Shaon";
// console.log(name)

// let value = "Shaon";
// value = true;
// value = 23;
// console.log(typeof value)

// const number = "23";
// const price = "3.53";

// const intNumber = parseFloat(price);
// console.log(intNumber)

// const num1 = 0.1;
// const num2 = 0.2;
// const total = num1 + num2
// console.log(total.toFixed(2))

// let num1 = 10;
// num1 **= 5;
// console.log(num1)

// module-14// compare variable

// console.log(5>10)
// console.log(5<10)
// console.log(5==10)
// console.log(10==10)
// console.log(10>=10)
// console.log(5>=10)
// console.log(5<10)
// console.log(10 === "10")

// const age = 23;
// if(age >= 18){
//     console.log("You are eligible to vote")
// }else{
//     console.log("You are not eligible to vote")
// }

// const age = 23;
// const isAlone = true;
// if(age >= 18){
//     if(isAlone){
//         console.log("Bring someone if you are alone")
//     }else{
//         console.log("You can go inside")
//     }
// }else{
//     console.log("minimum 18 years old required")
// }

// const biriyaniPrice = 500;
// if(biriyaniPrice <= 200){
//     console.log("5 packet pack koren")
// }else{
//     console.log("tor kopale biriyani nai , muri baijja balu kha")
// }

// 14.5

// const salary = 25000;
// const isBCS = false;
// if(salary>30000 && isBCS){
//     console.log("eso baba kobul")
// }else{
//     console.log("vag tui mukbul")
// }

// const bekar = false;
// if(!bekar){
//     console.log("eso baba kobul")
// }else{
//     console.log("vag tui mukbul")
// }

// const isBCS = true;
// const salary = 25000;
// const height = 170;
// if(isBCS && height >165 || salary >= 20000){
//     console.log("eso baba kobul")
// }else{
//     console.log("dure ja mukbol")
// }

// const price = 4000;
// if(price >= 5000){
//     const discount = price * 0.1
//     const payAmount =price - discount;
//     console.log("You have to pay", payAmount)
// }else if(price >= 4000){
//      const discount = price * 0.05
//     const payAmount =price - discount;
//     console.log("You have to pay", payAmount)
// }else{
//     console.log("You have to pay full price")
// }

// // ternary operator
// const num = 33;
// const result = num >= 33 ? "Passed":"Failed";
// console.log(result)

// const isPassed = false;
// if(!isPassed){
//     console.log("tore biya diya dimu")
// }else{
//     console.log("tumi amar sunar tukra")
// }

// task-1:
/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// const burgerPrice = 499;
// if(burgerPrice >= 500){
//     console.log("Coke free with this order")
// }else{
//     console.log("Coke 30tk")
// }

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// const weight = 60;
// const height = 1.73;
// const BMI = weight / (height)**2
// // console.log(BMI)
// if(BMI <18.5){
//     console.log("Under weight")
// }else if(BMI >= 18.5 && BMI <= 24.9){
//     console.log("Normal")
// }else if(BMI >= 25 && BMI <= 29.9){
//     console.log("Over Weight")
// }

// module-15
// const fruits = ["Apple","Mango","Banana","Jackfruit","Guava"]
//  for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i])
//  }

// const fruits = ["Apple","Mango","Banana","Jackfruit","Guava"];
// for(let fruit of fruits){
//     console.log(fruit)
// }

// while loop
// let num = 10;
// while(num<20){
//     console.log(num);
//     num++;
// }

// for(let i = 10; i>=0;i--){
//     console.log(i)
// }

// let sum = 0;
// for(let i =1; i<= 100; i++){
//     if(i % 5 === 0){
//         sum+=i;
//         console.log(i)
//     }
// }
// console.log(sum)

// // let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i < 5) {
//     break;
//   }
//   console.log(i)
// }
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     continue
//   }
//   console.log(i)
// }
// console.log(sum)

// let i = 30;
// while(i>20){
//     if(i <25){
//         break
//     }
//     console.log(i)
//     i--;
// }

// let n = 50;
// while(n>45){
//     if(n<=47){
//         break;
//     }
//     console.log(n);
//     n--;
// }

// let n = 1;
// while (n <= 20) {
//   n++;
//   if (n % 2 === 0) {
//     continue;
//   }
//   console.log(n);
// }

// let i = 2;
// do{
//     console.log(i)
//     i++;
// }while(i<10)

// module-15.5(Array)

// const arr = [1, 2, 3, 4, 5];
// arr[3] = 6
// console.log(arr)

// const numbers = [23, 43, 21, 34, 53, 68];
// numbers.unshift(10)
// console.log(numbers)

// const friends = ["Shaon", "Poddo", "Sujon", "Faysal", "Rayhan", "Sompod"];
// // friends.splice(1,3,"DjSohag")
// // console.log(friends)
// // if(friends.includes("Faysal")){
// //     console.log("Tui ekta bodmash")
// // }

// console.log(Array.isArray(friends))

// module-16
// string
// const name = 'Shaon';
// console.log(name[3])

// const subject = "Chemistry";
// const book = "chemistry";
// console.log(subject.toUpperCase())

// if(subject.toLowerCase() === book.toLowerCase()){
//     console.log('A+ pamu')
// }else{
//     console.log('fail kormu')
// }

// const drink = "   Water  ";
// console.log(drink.trim())

// const str = "I'm a programmer";
// console.log(str.split(" "))

// const arr = ['Shaon','poddo','sujon','faysal'];
// console.log(arr.join(','))

// const fName = 'Shaon';
// const lName = 'Rana';
// console.log(fName.concat(lName))
// console.log(fName+ lName)

// const str = "Programming";
// console.log(str.split('').reverse().join(''))

// let reverse = '';
// for(let letter of str){
//     reverse = letter + reverse;
// }
// console.log(reverse)

// const person = {
//   name: "Shaon",
//   age: 24,
//   profession: "Web Developer",
//   salary: 50000,
//   married: false,
// };
// console.log(person)

// const person2 = new Object();
// console.log(person2)

// const person3 = Object.create({})
// console.log(person3)

// for(let key in person){
//     console.log(key)
//     console.log(person[key])
// }

// conceptual class 
// const a = 5;
// const b = 3;
// console.log(a+b)