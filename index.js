// 1.  Destructuring

const person = {
    name: "Arman",
    age: 26
};
let {name,age} = person;
console.log(person);
console.log(name,age);


//  2. Module

// import { calculateArea } from  "./module.js";
// console.log(calculateArea(5))

//  3. classes

class Rectangle {
    constructor (width,height){
        this.width = 100;
        this.height = 200;
    }
    calculateArea(){
        return this.width * this.height;
    }
}
const myRec = new Rectangle(5*10);
const myArea = myRec.calculateArea();
// console.log(myArea)

// 4. Getter and Setter


//  5. class Expressions

class Circle {
    constructor (radius) {
        this.radius = radius;


    }

    calculateArea2(){
        return 2 * Math.PI * this.radius;
    }
}


let myRec2 = new Circle(10)
let myArea2 = myRec.calculateArea2();
// console.log(myArea2)

// 6. computed properties

let one = 'name';
let two = 'age';
let three = 'job';

let man = {
  [one]: "Arman",
  [two]: 30,
  [three]: "Font-end-Developer"
};

// console.log(man);

// 7. Inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} is barking`;
    }
}

class Dog extends Animal {
    constructor(name, age, color){
        super(name,age)
        this.color = color;
    }

    speak() {
        return `${this.name} is ${this.color}`;
    }
}

let cow = new Animal("cow",)
let dog = new Dog("Sahin", 20, "red");
// console.log(dog.speak());
// console.log(cow.speak());

// 9.

class MathUtil {
    static square(number) {
        return number * number;
    }
}

let number = 5;
// console.log(MathUtil.square(number));


// 10. 

let mySymbol = Symbol('mySymbol');


let obj = {
    [mySymbol]: 'This is a symbol property value'
};

console.log(obj[mySymbol]);

console.log(obj['mySymbol']);