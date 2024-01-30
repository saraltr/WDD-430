// interfaces example
function greeter(person) {
    return "Hello ".concat(person.firstName, " ").concat(person.lastName, " ");
}
var user = {
    firstName: "Jane",
    lastName: "User"
};
document.body.textContent = greeter(user);
// classes example 
// defining a class 'Student' with a constructor that initializes properties and calculates a 'fullName'
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = "".concat(firstName, " ").concat(middleInitial, " ").concat(lastName);
    }
    return Student;
}());
var user2 = new Student("Jane", "M", "User");
document.body.textContent += greeter(user2);
