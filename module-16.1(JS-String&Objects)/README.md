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

14. Object (properties/keys and values) 

    const person = {
        name : 'Shaon',
        age : 24,
        profession: 'Web Developer'
    }
    console.log(person)

15. get and set object properties : there are 2 ways to get object properties 
    1. dot notation: 
        const person = {
        name : 'Shaon',
        age : 24,
        profession: 'Web Developer',
        salary: 50000,
        married: false
        }
        console.log(person.name)
        console.log(person.age)

    2. bracket notation: 
        const person = {
        name: "Shaon",
        age: 24,
        profession: "Web Developer",
        salary: 50000,
        married: false,
        };
        console.log(person["married"]);
        console.log(person["profession"]);

    3. get and set by dot and bracket notation
        const person = {
        name: "Shaon",
        age: 24,
        profession: "Web Developer",
        salary: 50000,
        married: false,
        };      
        person.age = 25;
        console.log(person['age']);
    4. set new properties :
        const person = {
    name: "Shaon",
    age: 24,
    profession: "Web Developer",
    salary: 50000,
    married: false,
    };
    person.nationality = "Bangladeshi"
    console.log(person)

16. keys , values , nested object and Delete
    1. keys : to access keys use object.keys
        const person = {
        name: "Shaon",
        age: 24,
        profession: "Web Developer",
        salary: 50000,
        married: false,
        };
        console.log(Object.keys(person))
    2. values : to access values use Object.values
        const person = {
        name: "Shaon",
        age: 24,
        profession: "Web Developer",
        salary: 50000,
        married: false,
        };
        console.log(Object.values(person))
    3. nested Object : it is like one object in another object . 
        const person = {
        name: "Shaon",
        age: 24,
        profession: "Web Developer",
        salary: 50000,
        married: false,
        address: {
          city: 'Cumilla',
          country: 'Bangladesh'
        }
        };
        console.log(person.address.city)
    4. delete: to delete properties use delete
        const person = {
        name: "Shaon",
        age: 24,
        profession: "Web Developer",
        salary: 50000,
        married: false,
        address: {
          city: 'Cumilla',
          country: 'Bangladesh'
        }
        };
        delete person.married
        console.log(person)

17. loop an object and ways to declare an object 
    1. loop: 
          const person = {
          name: "Shaon",
          age: 24,
          profession: "Web Developer",
          salary: 50000,
          married: false,
        };

        for(let key in person){
            console.log(key)
            console.log(person[key])
        }
    2. ways to declare: 
        1. direct using name
        const person = {
          name: "Shaon",
          age: 24,
          profession: "Web Developer",
          salary: 50000,
          married: false,
        };
        console.log(person)

        2. use new keyword
        const person2 = new Object();
        console.log(person2)

        3. use Object.create 
        const person3 = Object.create({})
        console.log(person3)