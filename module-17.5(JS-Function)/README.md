module-17.5(JS-Function)

1. use function keyword to declare function
2. function name
3. parenthesis () to use parameter
4. function body {}
   function hello(){
   console.log('Hello JavaScript')
   }

5. to get output call the function by its name .
   hello()

6. if any variable declared inside function then cannot get the variable outside the function

7. function with parameter
   function sum(a, b) {
   return a + b;
   }

    const result = sum(7, 5);
    console.log(result);
8. have to return to get the value if want to access the value outside otherwise it will return undefined . 
   function sum(a, b) {
   console.log(a+b)
   }

    const result = sum(7, 5);
    console.log(result);