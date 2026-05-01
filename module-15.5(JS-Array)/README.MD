module-15.5(Array)

1. what is array? ans: a list or collection of values
2. syntax of array
   const numbers = [1,2,3,4,5];
3. value typed should same in same array
4. array length : 
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.length)
5. array index : 
    const arr = [1, 2, 3, 4, 5]
    console.log(arr[2])
6. set and update value of array by index
    const arr = [1, 2, 3, 4, 5];
    arr[3] = 6
    console.log(arr)
7. push() add an element at the last in array 
    const numbers = [23, 43, 21, 34, 53, 68];
    numbers.push(100)
    console.log(numbers)
8. pop() remove the last element from array
    const numbers = [23, 43, 21, 34, 53, 68];
    numbers.pop()
    console.log(numbers)
9. shift remove first element from array
    const numbers = [23, 43, 21, 34, 53, 68];
    numbers.shift()
    console.log(numbers)
10. unshift Add element as first at array
    const numbers = [23, 43, 21, 34, 53, 68];
    numbers.unshift(10)
    console.log(numbers)

11. includes : check element is included or not?
    const friends = ["Shaon", "Poddo", "Sujon", "Faysal", "Rayhan", "Sompod"];
    console.log(friends.includes('Shaon'))
12. indexOf: find the index number of element:
    const friends = ["Shaon", "Poddo", "Sujon", "Faysal", "Rayhan", "Sompod"];
    console.log(friends.indexOf('Sujon'))
    [Note: if the element is not in the array then it will show -1]
13. isArray() check array or not?
    const friends = ["Shaon", "Poddo", "Sujon", "Faysal", "Rayhan", "Sompod"];
    console.log(Array.isArray(friends))
14. join(): join all element by separation point
    const friends = ["Shaon", "Poddo", "Sujon", "Faysal", "Rayhan", "Sompod"];
    console.log(friends.join('+'))
    [Note: it will return a string]

15. concat(): combine 2 array and return a new array
    const friends = ["Shaon", "Poddo", "Sujon", "Faysal", "Rayhan", "Sompod"];
    const friends2 = ["Roman", "Polash", "Jakir"]
    console.log(friends.concat(friends2))
16. slice(): slice the array 
    const friends = ["Shaon", "Poddo", "Sujon", "Faysal", "Rayhan", "Sompod"];
    console.log(friends.slice(1,3))
    [Note: main will not changed]
17. splice(): can slice and add element in array
    const friends = ["Shaon", "Poddo", "Sujon", "Faysal", "Rayhan", "Sompod"];
    friends.splice(1,3,"DjSohag")
    console.log(friends)