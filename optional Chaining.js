const people = [
 {
   name: 'bob',
   location: { street: '123 main street', timezone: { offset: '+7:00' } },
 },
 { name: 'peter', location: { street: '123 Pine street' } },
 {
   name: 'susan',
   location: { street: '123 Apple street', timezone: { offset: '+9:00' } },
 },
]

people.forEach((person)=>{
 // console.log(person.name)
 // console.log(person.location.timezone.offset)

 // for get an value of offset properties you want to use shortcircuit
 // console.log(person.location && person.location.timezone && person.location.timezone.offset)
// another way is to use optional chaining 
console.log(person?.location?.timezone?.offset)
})