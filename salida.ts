// Important the difference between let and var was the SCOPE!!
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar);

  {
    let baz = "Bazz";
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

var myString: string = "hola mundo";
var myNumber: number = 22;
var myBool: boolean = false;
var anyVariable: any = "Lo que sea";

// Arrays

var StringArray: string[] = ["Hello", "Good Bye", "What?"];
var NumberArray: number[] = [1, 2, 3];
var booleanArray: boolean[] = [true, false, true];

// tupls

var strNumTuple: [string, number];
strNumTuple = ["hello", 1];
// strNumTuple = [1, "hello"]; don't allow => uncomment

// void, undefined, null

let myVoid: void = undefined; //Void means empty
let myNull: null = null;
let myUndefined: undefined = undefined;

// Functions

function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

let mySum = function (num1: number | string, num2: number | string): number {
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

function getName(firstName: string, lastName?: string): string {
  // ? Means optional
  if (lastName == undefined) {
    return firstName;
  }
  return firstName + " " + lastName;
}

getName("Jesus"); // Try to uncomment the ?

function myVOIDFunction(): void {
  // return 22; try to uncomment
  return;
}

// Interfaces
interface Itodo {
  title: string;
  text: string;
}

//Without Interface
function showTodo(todo: { title: string; text: string }) {
  console.log(todo.text + " " + todo.text);
}

//With Interface
function showTodoInterface(todo: Itodo) {
  console.log(todo.text + " " + todo.title);
}

showTodo({ title: "pepe", text: "hola" });

let myTodo: Itodo = {
  title: "adios",
  text: "hola",
};
showTodo(myTodo);

//Clases
class User {
  private name: string; // private and protected only can be called inside the class
  public email: string;
  protected edad: number;

  constructor(name: string, email: string, edad: number) {
    // The first thing that run when the class is called
    this.name = name;
    this.email = email;
    this.edad = edad;
  }

  register() {
    console.log(`${this.name} esta registrado`);
  }

  showMeAge() {
    return this.edad;
  }

  private AgeInYears() {
    return this.edad + "years";
  }

  payInvoice() {
    console.log(`${this.name} paide invoice`);
  }
}

var john = new User("john", "jhon@gmail.com", 22);

//Inheritance in classes
class Member extends User {
  id: number;
  constructor(id, name, email, age) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

var gordon = new Member(1, "gordon", "gordon@gmail.com", 24);
gordon.payInvoice();
