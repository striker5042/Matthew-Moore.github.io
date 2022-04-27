








///////////////////////////////////////// COMPLEX DATATYPES ///////////////////////////////////////////////////

// Example object
var person = {
  name: 'Matt',
  age: 24,
  likesGaming: true
};

// Dot notation
person.age // returns 24
// Bracket notation
person['age'] // returns 24

/* if we wanted to change the value of likesGaming to false. We can do that with dot notation like this*/

person.likesGaming = false;

/* if we wanted to add a new property to our person object, we could accomplish that with dot notation as well*/

person.hobbies = ['cooking', 'drawing', 'streaming'];

/*to remove a property from an object, we use the delete keyword like so*/

delete person.age;









/*let’s  access the third item ‘Mexico City’ in the following array*/

//Example Array

var vacationSpots = ['Tokyo', 'Jamaica', 'Mexico City', 'Aruba'];

vacationSpots[2]; // returns 'Mexico City'

/*
Items can be added and removed from the beginning or end of an array using the push(), pop(), unshift(), and shift() methods
*/

// push() - Adds item(s) to the end of an array
vacationSpots.push('Miami');
// pop() - Removes the last item from an array
vacationSpots.pop();
// unshift() - Adds item(s) to the beginning of an array
vacationSpots.unshift('Los Angeles', 'Barbados');
// shift() - Removes the first item from an array
vacationSpots.shift();





/*
The differences between objectsa and arrays: Objects represent “things” with characteristics otherwise known as properties, while arrays create and store lists of data in a single variable
*/