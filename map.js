const people = [
  {
    name: "bob",
    age: 30,
    position: "Software Developer",
  },
  { name: "peter", age: 32, position: "Project manager" },
  {
    name: "susy",
    age: 27,
    position: "the Boss",
  },
];

//return a new array
// does not change the size of original array (unlike filter)
//  uses  values from original array when making new one

// const ages=people.map((person)=>{
//  console.log(person)//[{name:"bob",age:30,position:'Software Developer'.....}]
//  return person.age

// })
// console.log(ages)   //when function return nothing [undefined, undefined, undefined]
// console.log(ages) // after return an age [30, 32, 27]
const getAges=(person)=>{
return person.age*2;
}
const ages =people.map(getAges);//[60,64,54]
const newPerson=people.map((item)=>{
 return {
  firstName:item.name.toUpperCase(),
  age:item.age + 20,


 }

})
console.log("newPerson=>",newPerson); //0: {firstName: "BOB", age: 50} 1: {firstName: "PETER", age: 52}2: {firstName: "SUSY", age: 47}
const names=people.map((person)=>`<h2>${person.name}</h2>`)
// console.log(name)
const result=document.querySelector('#result');
result.innerHTML=names.join('');