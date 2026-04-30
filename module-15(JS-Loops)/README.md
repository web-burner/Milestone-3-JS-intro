module-15(Loops)

module-15.1 What is loop?
=> do the things until the condition matched 

 1. for of loop: (best use of array)

 for(let i of arr){
    console.log(i)
 }

 const fruits = ["Apple","Mango","Banana","Jackfruit","Guava"];
for(let fruit of fruits){
    console.log(fruit)
}


module-15.2 (while loop)
let num = 10;
while(num<20){
    console.log(num);
    num++;
}

[Note: cannot run infinite loop]


module-15.4 (for loop)
    for(let i = 1; i<10;i++){
        console.log(i)
    }

    const fruits = ["Apple","Mango","Banana","Jackfruit","Guava"]

    for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i])
    }

    // let i = 30;
// while(i>20){
//     if(i <25){
//         break
//     }
//     console.log(i)
//     i--;
// }

<!-- break -->

let n = 50;
while(n>45){
    if(n<=47){
        break;
    }
    console.log(n);
    n--;
}

<!-- continue -->
let n = 1;
while (n <= 20) {
  n++;
  if (n % 2 === 0) {
    continue;
  }
  console.log(n);
}


<!-- do while   -->
let i = 2;
do{
    console.log(i)
    i++;
}while(i<10)