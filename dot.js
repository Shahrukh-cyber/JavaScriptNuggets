/// Connect The Dots
/// Topics
/// String Methods
/// Global /Local Scope
/// Array Iterators -(map,filter,reduce)
/// Global Objects -Math,Date

// let text =' Peter Jordan ';
// let result=text.length;
// let fruits=["Banana","Orange","Apple","Mango"];
// console.log(result);
// console.log(text.length);
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.charAt(0));
// console.log(text.length);
/// to get the charter at the position of which i pass as a params

// console.log(text.charAt(text.length-1));
/// return index of any character string number or whitespace
/// -1 means the char is not available in our string 
// console.log(text.indexOf(' '));
// console.log(text.indexOf('p'));
// console.log("Length of string Before",text.length);
// const aftertrim=text.trim();
//trim remove whitespace from starting and ending of sting
// console.log("Length of string After",aftertrim.length);

///if start with same string or not including whitespace
// console.log(text.startsWith('peter'));

// console.log(text.trim().toLowerCase().startsWith('peter'));

// console.log(text.includes('Jordan'));

//// 0-6 means show length of string before 6 (0 1 2 3 4 5)
// console.log(text.slice(0,6));
/// - means show string from start string end
// console.log(text.slice(-7));
// fruits.splice(2,1,"Lemon","Kiwi");
// console.log(fruits)
// console.log(text.splice(0,6));

// const person={

//     Name:'peter',//property
//     greeting(){

//         console.log("Hey,I'm Peter");
//     },
// };
// console.log(person);
// console.log(person.Name);
// person.greeting();

///Templatre Literals -Es6+
/// Backtick characters `` - above toolbar(left from one)
/// Interpolation ${} -insert expression(value )

// const Name='John'
// const age=25;

///old version
// const sentence="Hey it's " + Name + 'and he is ' + age +' years old'; 
// console.log("Sentense in old version=>",sentence);

/// new version
// const NewSentence=`Hey it's ${Name} and he is ${age} years old`; 
// console.log("Sentense in new version=>",NewSentence);

// const names=['john','bobo','barry','olgo','ben'];
///length
// console.log(names.length);
// console.log(names[0]);
///concat
// const lastname=['pepper','onion','banana'];
//add item at the end of array
// const allNames=names.concat(lastname);
// console.log(allNames);

/// reverse
//add items at the start of array
// console.log(allNames.reverse());

/// unshift
// add the item at the beginning 
// allNames.unshift('susy');
// allNames.unshift('anna');
// console.log(allNames);
/// shift
//remove the item from start of array

// allNames.shift('susy');
// allNames.shift('anna');
// console.log(allNames);

///push
/// at item at the end of array
// allNames.push('susy');
// allNames.push('anna');
// allNames.push('peter');
// console.log(allNames)

///pop 
// remove the item at the end of array
// allNames.pop();
// allNames.pop();
// allNames.pop();
// console.log(allNames)


///exercise fullname using Arrays and for loop 
// const names =['anna','susy','bob','peter','john'];
// const lastname='shakeandbake';
// let newArray=[];
// for loop
// for (let i = 0 ; i  < names.length ; i++){
//  console.log(names);
//  console.log(i);
//  console.log(names[i]);
//  const fullname =`${names[i]} ${lastname}`;
//  newArray.push(fullname)

// }
// console.log(names);
// console.log(newArray);
const gas=[20,40,100];
const food=[10,40,50];
function calculateTotal(arr){
let total=0;
for(let i=0 ;i < arr.length; i++)
{
// console.log(arr[i]);
// total=total+arr[i];
total+= arr[i];

}
return total;
}

const foodTotal=calculateTotal(food);
console.log('food:',foodTotal);
const gasTotal=calculateTotal(gas);

console.log('gas:',gasTotal);