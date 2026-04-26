<!-- module-14.1/14.2 (Comparison Operator): -->


1. greater then (>):
2. less than (<):
3. double equal (==):
4. triple equal (===):
5. greater than or equal (>=):
6. less than or equal (<=):
7. not equal (!=)/(!==):
8. AND (&&):
9. OR (||):
10. NOT (!):


<!-- module-14.3/14.4 (if/else statement): -->
1. simple if/else:
if(condition){
    do something if condition is true
}else{
    skip (if step) and do something if condition is false;
}
example:
const age = 23;
if(age >= 18){
    console.log("You are eligible to vote")
}else{
    console.log("You are not eligible to vote")
}

2. nested if/else: 
if(condition){
    if(condition){
        do something if condition is true;
    }else{
        do something if condition is false;
    }
}else{
    do something if parent condition is false;
}
example:
const age = 23;
const isAlone = true;
if(age >= 18){
    if(isAlone){
        console.log("Bring someone if you are alone")
    }else{
        console.log("You can go inside")
    }
}else{
    console.log("minimum 18 years old required")
}


module-14.5 (multiple condition logical operators(&& ,||))

1. OR (||): one condition have to be true from both 

const salary = 25000;
const isBCS = false;
if(salary>30000 || isBCS){
    console.log("eso baba kobul")
}else{
    console.log("vag tui mukbul")
}

2. AND (&&): both condition have to be true from both 

const salary = 25000;
const isBCS = false;
if(salary>30000 && isBCS){
    console.log("eso baba kobul")
}else{
    console.log("vag tui mukbul")
}

3. complex condition : AND and OR combination

const isBCS = true;
const salary = 25000;
const height = 170;
if(isBCS && height >165 || salary >= 20000){
    console.log("eso baba kobul")
}else{
    console.log("dure ja mukbol")
}


multi level (if/else if/else): 


// ternary operator 
const num = 33;
const result = num >= 33 ? "Passed":"Failed";
console.log(result)


logical NOT (!): turn the value true to false and check null or undefined 
const isPassed = false;
if(!isPassed){
    console.log("tore biya diya dimu")
}else{
    console.log("tumi amar sunar tukra")
}


[Note: why conditional need ? ]