// for my understanding double // means comment /// means topics examples




//document.write('hello world');
//alert('Hello world');
//console.log('Hello js ');
//but in three most powerfull is console.log('Hello js') because of
//Object both aler and document.write not support Object


///example of variables  let and  const

/* alert({name:'ali'});
document.write({name:'ali'});
console.log({name:'ali'}); */


/* const Name ='john';
const lastname='smite';
let fullname= Name+' '+lastname;
console.log(fullname); */

/// Numbers
/// Loosely Typed =don't declare type

// const Numbers=34;

// //not doing this which is mention below
// // const Numbers='34' because its string


// const Number2=2.456;
// const Number3='2.456';

// const add =Numbers+Number2;
// const sub = Numbers - Number2;
// const multi = Numbers * Number2;
// const div = Numbers / Number2;
// console.log('Add=>'+add);

// console.log('Sub=>'+sub);

// console.log('Multi=>'+multi);

// console.log('Divide=>',div);

// String not a number in console its color is black
//console.log(Number3);

///Numbers
/// += , -= , /= , *=, ++, --, %

// let Number = 40;
// Number += 5;
// Number += 5;
// Number += 5;
// Number += 5;
// Number += 5;
// Number = Number + 5;
//console.log(Number);

///scenario of pizza  my 3 kids order pizza
/// % modules example
// const slice=10;
// const Children=3;
// const each= slice / Children;
// const left=slice % Children;
// console.log("Each Child Eat Slice of " + each);
// // but this 0.3333 is not divided in real life so basically its left
// console.log("Left Slice " + left);

///Implicite Type conversion
// const Firstname='john';
// const lastname='smite';
// const fullname=Firstname +' ' +lastname;
// console.log(fullname);
// const result=Firstname - lastname;
// console.log(result);

// const num='10';
// const num2='23';
// const numresult=num-num2;
// const numresult2 = num * num2;
// const numresult3 = num / num2;

// console.log("number results=> "+numresult);
// console.log("number results2=> " + numresult2);
// console.log("number results3=> " + numresult3);
// const num1 = '10';
// const num_2 = '23';
// const numresult1 = num1 + num_2;
// console.log(numresult1);

// const randomnumber=13;
// document.querySelector('.form').addEventListener('submit',
// function(e){
//     e.preventDefault();
//     let value=document.getElementById('amount').value;
//     /// here parseInt javascript function convert string to number
//     //value=parseInt(value);
//     console.log('Input value..!');
//     console.log(value);
//     console.log('Sum of Two Values');
//     console.log(randomnumber +value);

// }

// )

//Data Types - 7 total
// Primitives -String ,Number , Boolean , Null ,Undefined, Symbol


//typeof -operator (typeof variable) (typeof value)
//String
// const text ='some text';
//Number
// const Numbers =13;
//Boolean
// const value1=true;
// const value2 = false;


//Null
// const result=null;
//Undefined
// const result1 ;

//Symbol(ES6)

/// not cover this symbol right now because its es6 part in currently we are at javascript topics
// console.log(typeof text);
// console.log(typeof 'hello world');
// console.log(typeof Numbers);
// console.log(typeof value1);
// console.log(typeof value2);
// console.log(typeof result);
// console.log(typeof result1);


///topic----> Object - Arrays ,Fuctions, Objects
/// Array -[] , 0   index based

// here basically we set data one by one... so lets see whats is the easiest way to define different strings ,number ...of the dattype variables.

// const friend1='john'
// const friend2='peter'
// const friend3='bob'
// const friend4='susy'
// const friends  = ['john','peter','bob','susy',undefined,null];
// // to access array variable values
// console.log(friends);
// //change array variable value
// friends[4]='anna';
// console.log(friends);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);
// console.log(friends[5]);


//Function is basically get your life easy define one call anywhere.

// console.log('Hello there Bob');
// console.log('Hello there Anna');
// console.log('Hello there Susy');

// //some code is here
// console.log('Hello there Bob');
// console.log('Hello there Anna');
// console.log('Hello there Susy');
// //some code is here
// console.log('Hello there Bob');
// console.log('Hello there Anna');
// console.log('Hello there Susy');

// // what if you want to change name Anna to john simple manually change Anna to john
// //but what if the code run on 1000 place..... we use function
// console.log('""Function Example""');
// function hello(){
//     console.log('Hello there Bob');
//     console.log('Hello there Anna');
//     console.log('Hello there Susy');


// }
// // so here first 9-line of code change into 3 and
// // second if we want to change value we can change one's
// hello();
// hello();
// hello();

//Array ,Function and Objects
//params - when declare /define
// placeholders,local vars
//arguments -when invoke /call /run
// use vars/values,multiple params, undefined

// function hello(fname){
//     console.log('Hello there '+fname);
//     // console.log('Hello there Anna');
//     // console.log('Hello there Susy');
// }
// // let fname="Bob";
// // let Sname = "Anna"
// // let Tname = "Susy"

// // Hello there Bob
// hello('Bob');
// // Hello there Anna
// hello('Anna');
// // Hello there Susy
// hello('Susy');



///function Return
// 1 inch 2.54cm
//by default all function return undefined
// const wallHeight=80;
// function calculator(value){
// // console.log('The value in cm is '+ value * 2.54 +" cm");
// // return 'helloworld';/
//     // return console.log('The value in cm is ' + value * 2.54 + " cm");
// return value * 2.54 ;
// }

// const width=calculator(100);
// const height=calculator(wallHeight);
// const dimensions=[width,height];
// console.log(dimensions);
// //  shoking console.log
// The value in cm is 254 cm
//  The value in cm is 203.2 cm
// (2) [undefined, undefined]

/// function condense example

// full function example
// const add=(a,b)=>{
//     return a+b;
// }

// condense example

// const add=(a,b)=>a+b;
// this is basically an implicite return
// automatic return

// function Addvalues(num1,num2){

//     return num1+num2;
// }
// const firstvalue=Addvalues(40,20);
// const secondvalue=Addvalues(80,40);

// //anonymous function example below
// const add =function (num1,num2){

//     return num1+num2;
// }
// //one way
// // const thirdvalue=add(4,5);
// // const values = [firstvalue, secondvalue,thirdvalue];
// //another way
// const values=[firstvalue,secondvalue,add(4,5)];
// console.log(values);


// //arrow function example
// const multiply=(num1,num2)=>num1*num2;



////Arrays,function and objects
///objects - key/values pairs methods
/// dot notation

// const person={
//     name:'john',
//     lastname:'peters',
//     education:false,
//     married:true,
//     siblings:['anna','susan','peter'],
//     greeting:function(){
//         console.log("Hello my name is john")
//     },

// };

// console.log(person.name);
// console.log(person.siblings[2]);
// person.greeting();



/// Conditional Statements
/// >, <, >=,<=,==,===,!=,!===
// if(true)
// {
// console.log("Helloworld");
// }
// if(2>1)
// {
// console.log("Helloworld 2");
// }
// const value=2>1;
// if(value)
// {
// console.log("Helloworld 3");
// }
// const num1=4;
// const num2=6;
// if(num1>num2){
// console.log("first number is bigger than second!");

// }else{
//     console.log("second number is bigger than first!");


// }
// const num1=6;
// const num2=6;
// const result=num1>=num2;
// if(num1>num2){
// console.log("first number is bigger than second!");

// }
// else if(result){
//     console.log("first number is equal to the second!");

// }

// else{
//     console.log("second number is bigger than first!");


// }
// const num1=6;
// const num2=6;
// const result=num1>=num2;
// const value=false;
// if(!value){

//     console.log('value is true..!');
// }
// const num1=6;
// const num2='6';
// const value1 =num1==num2;
// const value2=num1===num2;
// console.log(value1);
// console.log(value2);
// const num1=6;
// const num2='6';
//here is checking both type and value !=
// const value1=num1!=num2;
//here is not checking the type in !==
// const value2=num1!==num2;
// console.log(value1);
// console.log(value2);

/// Logical operator && ||
// const Name='peter';
// const age=24;
// if(Name==='bob'||age===24){
//     console.log("Hello user with or logic");
// }
// else{
//     console.log("Wrong Values with or(||) logic");
// }
// if(Name==='bob' && age===24){
//     console.log("Hello user with and logic");
// }
// else{
//     console.log("Wrong Values with and(&&) logic");
// }
/// switch is another way of if logic
/// dice values :1-6
// const dice=0;
// switch condition most use in react redux
// switch(dice)
// {
//     case 1:
//         console.log("you got one");
//     case 2:
//         console.log("you got two");
//     case 3:
//         console.log("you got three");

// }
// console.log
// you got one
// you got two
// you got three
// so here is the problem and the solution is break



// switch(dice)
// {
//     case 1:
//         console.log("you got one");
//         break;
//     case 2:
//         console.log("you got two");
//         break;

//     case 3:
//         console.log("you got three");
//         break;
//     default:
//         console.log("you did'nt roll the dice");
//         break


// }

// else if condition
// if(dice===1)
// {
// console.log('you got a one');
// }
// else if(dice===2){
//     console.log('you got a two');

// }
// else if(dice===3){
//     console.log('you got a three');

// }
// else{

//     console.log("You did'nt roll the dice");
// }
/// if condition
// if(dice===1)
// {
// console.log('you got a one');
// }
// if(dice===2){
//     console.log('you got a two');

// }
// if(dice===3){
//     console.log('you got a three');

// }
// if(dice!=1 || dice!=6){

//     console.log("You did'nt roll the dice");
// }

/// final topic for javascript Basics
/// Loops
/// dowhie
/// while
/// TURN OFF AUTOSAVE

/// Loop
// let amount=10;
// while(amount>0){

//     console.log('I have '+amount+"dollar and i am going to mall");
//     amount--;
// }
// if we run this we got a infinite loop
// so we want to escape some amount mean everytime we lose some money

/// dowhile
/// here code block run first ,condition is second
/// runs at least one time if condition is true or false
// let money=12;
// do{  
//     console.log("you have " + money +' dollars');
//     money++;

// }while(money<10);

/// Loops
/// repetedly run a block of code while condition is true 
/// for loop  
/// in for loop first initialize if not then 
///check condition then run body then iterate

// for(let i=0;i<5;i++){
//     console.log("Here is iteration value "+ i);
// }

