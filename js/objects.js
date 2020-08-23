class Person {
    // constructor
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // method
    fullName() {
        return this.firstName + " " + this.lastName;
    }

    // setter
    set setFirstName(firstName) {
        this.firstName = firstName;
    }

    set setLastName(lastName) {
        this.lastName = lastName;
    }

    // getter
    get getFirstName() {
        return this.firstName;
    }

    get getLastName() {
        return this.lastName;
    }
}

// create an instance
var person1 = new Person("Arindam", "Ray");
console.log(person1.fullName());

var person2 = new Person();
person2.setFirstName = "Sachin";
person2.setLastName = "Tendulkar";
console.log(person2.fullName());
console.log(person2.getFirstName);

// inheritance
class Shape { 
    constructor(color) { 
       this.color = color;
    }

    draw() {
        console.log("In draw() of Shape");
    }
 }

class Rectangle extends Shape {
    constructor(length, width, color) {
        // call super class constructor
        super(color);
        
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }

    // overridden method
    draw() {
        console.log("In draw() of Rectangle");
    }
}

var rectangle1 = new Rectangle(12, 3, "Blue");
console.log(rectangle1.color);
console.log(rectangle1.area());
rectangle1.draw();
var shape1 = new Shape("Green");
shape1.draw();