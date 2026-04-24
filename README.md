module-13.3 <!-- Maths needed to start learning programming language? -->

1. Number
2. Integer 
3. Float/Fraction
4. Even/Odd
5. Operation : Plus,Minus,multiply,divide,modulus/reminder
6. percentage , sum , average , max , min , prime number , series , area , geometry , triangle , square , permutation 

module-13.4 <!--what is variable and how to declare variable-->

1. variable is container where i can store data .

2. <!-- 5 things to declare a variable. -->
    1. keyword (var/let/const)
    2. variable name(name should be related)
    3. equal sign (=)
    4. value 
    5. semi-colon (; to finish the line)

[Note: if variable's value is not define then the variable value will be undefined]

How to change variable value;
    variableName = newValue;
    var age = 23;
    age = 25;
    console.log(age)

[tips: command+j for show and hide terminal]

module-13.5 <!--(const)-->
1. if a variable is dedicated for one item then it should be declare by const . 
2. if i declare a variable with const then i can't change or upgrade its value anymore. it's fixed.
3. if i try to do then it will show an error (typeError)

module-13.6 <!-- variable data types , numeric ,string and boolean -->

1. data types : 
    1. string ("") : if inside string i write anythings it called string value; write something with quotation
    2. number : without string only number is called number types value; simple number 
    3. boolean : true / false; write without quotation

[Note: for check the types of variable data then i have to use typeof keyword]

module-13.7 <!-- JS Keyword, variable naming convention -->
1. variable is container to store data ;
2. variable naming convention : 
    1. no keyword in variable name
    2. no space or gap in variable name(user name)
    3. no quote in variable name("",'')
    4. cannot start with number (1name) but later is allowed other than first letter
    5. name is case sensitive (camelCase is the best)
    6. for long name use underscore (_) instead of space. or use camelCase like one word after start with capital letter 

3. reserved keyword : in js some keyword is reserved for write syntax . i cannot use this keyword as variable name 
4. keyword is case sensitive all keyword should be small letter 

module-13.8 <!-- know fundamentals of js numbers -->

1. convert the string to number 
    1. for decimal number parseInt(variableName)
    const number = "23";
    const price = "3.53";

    const intNumber = parseInt(number);
    console.log(intNumber)

    2. for fraction number parseFloat(variableName)
    const number = "23";
    const price = "3.53";

    const intNumber = parseFloat(price);
    console.log(intNumber)

[Note: this method used for number or number like string but if i use it for normal string like letter then it will return NaN(not a number)]

2. how many number will be after a decimal number (to fixed)
const num1 = 0.1;
const num2 = 0.2;
const total = num1 + num2
console.log(total.toFixed(2))

[Note: if i use toFixed then the number will convert string itself]

module-13.9 <!-- Arithmetic Operators-->

1. addition (+) : 
2. subtraction (-) :
3. multiplication (*) : 
4. division (/):
5. modulus(%):
6. exponentiation (**):


module-13.10 <!-- mathematical Operation shorthand-->

addition shorthand: 

let num1 = 10;
num1 += 5;
console.log(num1)

subtraction shorthand : 

let num1 = 10;
num1 -= 5;
console.log(num1)

multiplication shorthand:

let num1 = 10;
num1 *= 5;
console.log(num1)

divide shorthand : 

let num1 = 10;
num1 /= 5;
console.log(num1)

modulus shorthand: 

let num1 = 10;
num1 %= 5;
console.log(num1)

