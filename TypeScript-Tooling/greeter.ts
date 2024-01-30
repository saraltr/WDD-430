// interfaces example

// defining an interface 'Person' to enforce a structure for objects with firstName and lastName properties
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName} `;
}

let user = {
    firstName: "Jane",
    lastName: "User"
}


document.body.textContent = greeter(user);

// classes example 

// defining a class 'Student' with a constructor that initializes properties and calculates a 'fullName'
class Student {
    fullName: string;

    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = `${firstName} ${middleInitial} ${lastName}`; 
    }
}

// reusing the 'Person' interface for type checking on instances of the 'Student' class
interface Person {
    firstName: string;
    lastName: string;
}

let user2 = new Student("Jane", "M", "User")

document.body.textContent += greeter(user2);
