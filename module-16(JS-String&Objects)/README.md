module-16(String & Objects)
1. string length : 
    const name = 'Shaon';
    console.log(name.length)

2. access element to string : 
    const name = 'Shaon';
    console.log(name[3])

3. cannot change element on string by using index 
4. string is immutable (cannot change)

<!-- module-16.2 -->
5. toLowerCase: (convert all letters lowercase)
    const subject = "Chemistry";
    const book = "chemistry";
    console.log(subject.toLowerCase())

6. toUpperCase : (convert all letters uppercase)
    const subject = "Chemistry";
    const book = "chemistry";
    console.log(subject.toUpperCase())
7. trim: (remove space from before and after a words)
    const drink = "   Water  ";
    console.log(drink.trim());

<!-- module-16.3 -->
8. slice : slice a specific part from a string
    const str = "I'm a programmer";
    console.log(str.slice(6,Infinity))
9. split: its return an array , split word or letter by separator 
    const str = "I'm a programmer";
    console.log(str.split(" "))
10. join : it returns a string. can join by separator;
    const arr = ['Shaon','poddo','sujon','faysal'];
    console.log(arr.join(','))

11. concat : it can combine 2 string to one single string;
    const fName = 'Shaon';
    const lName = 'Rana';
    console.log(fName.concat(lName))
    console.log(fName+ lName)

12. includes : to check any letters are included or not
    const str = "Programming";
    console.log(str.includes('b'))

13. reverse: it can reverse the string like start from end. 

    const str = "Programming";
    console.log(str.split('').reverse().join(''))

    let reverse = '';
    for(let letter of str){
        reverse = letter + reverse;
    }
    console.log(reverse)

14. Object (properties and values) 

    const person = {
        name : 'Shaon',
        age : 24,
        profession: 'Web Developer'
    }
    console.log(person)

