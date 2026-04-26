module-15(Loops)

module-15.1 What is loop?
=> do the things until the condition matched 
1. for loop 
    for(let i = 1; i<10;i++){
        console.log(i)
    }

    const fruits = ["Apple","Mango","Banana","Jackfruit","Guava"]
 for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i])
 }

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
