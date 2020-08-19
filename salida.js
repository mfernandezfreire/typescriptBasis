var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Important the difference between let and var was the SCOPE!!
function run() {
    var foo = "Foo";
    var bar = "Bar";
    console.log(foo, bar);
    {
        var baz = "Bazz";
        console.log(baz);
    }
    {
        var baz2 = "Bazz2";
    }
    console.log(baz2);
    //console.log(baz);
}
run();
//Types Inference => What is means? => If you declare a variable, typescript asumes that type for example =>
var myFirstVariable = "Hola"; // This variable always was interpretated as String
// Types
var myString = "hola mundo";
var myNumber = 22;
var myBool = false;
var anyVariable = "Lo que sea";
// Arrays
var StringArray = ["Hello", "Good Bye", "What?"];
var NumberArray = [1, 2, 3];
var booleanArray = [true, false, true];
// tupls
var strNumTuple;
strNumTuple = ["hello", 1];
// strNumTuple = [1, "hello"]; don't allow => uncomment
// void, undefined, null
var myVoid = undefined; //Void means empty
var myNull = null;
var myUndefined = undefined;
// Functions
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof num1 === "string") {
        // Try to comment and you get an error
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        // Try to comment and you get an error
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstName, lastName) {
    // ? Means optional
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
getName("Jesus"); // Try to uncomment the ?
function myVOIDFunction() {
    // return 22; try to uncomment
    return;
}
//Without Interface
function showTodo(todo) {
    console.log(todo.text + " " + todo.text);
}
//With Interface
function showTodoInterface(todo) {
    console.log(todo.text + " " + todo.title);
}
showTodo({ title: "pepe", text: "hola" });
var myTodo = {
    title: "adios",
    text: "hola"
};
showTodo(myTodo);
//Clases
var User = /** @class */ (function () {
    function User(name, email, edad) {
        // The first thing that run when the class is called
        this.name = name;
        this.email = email;
        this.edad = edad;
    }
    User.prototype.register = function () {
        console.log(this.name + " esta registrado");
    };
    User.prototype.showMeAge = function () {
        return this.edad;
    };
    User.prototype.AgeInYears = function () {
        return this.edad + "years";
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var john = new User("john", "jhon@gmail.com", 22);
//Inheritance in classes
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Member;
}(User));
var gordon = new Member(1, "gordon", "gordon@gmail.com", 24);
gordon.payInvoice();
