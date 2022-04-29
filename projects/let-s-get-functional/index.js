// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./Matthew-Moore.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let males = _.filter(array, function(element) {
if (element.gender === 'male') {
    return true;
} else {
    return false;
}
});
return males.length;
};

var femaleCount = function(array) {
    let numFemales = _.reduce (array, function(accumulator, current, index, collection) {
        if (current.gender === 'female') {
            accumulator += 1;
        }
    return accumulator;
    }, 0)
    return numFemales;
};

var oldestCustomer = function (array) {

let oldest = _.reduce(array, function(accumulator, current, index, collection) {

if (current.age > accumulator.age) {
accumulator = current;

}
return accumulator;
}) 
return oldest.name;
}



var youngestCustomer = function(array) {
let youngest = _.reduce(array, function(accumulator, current, index, collection) {

if (current.age < accumulator.age) {
accumulator = current;

}
return accumulator;
}) 
return youngest.name;
};


var averageBalance = function(array) {

let average = _.reduce (array, (total, current) => total +
Number(current.balance.replace(/[$,] +/g, '')), 0)

var num = parseFloat(average) + .05;

let len = array.length + 1

};
var firstLetterCount = function(array, letter) {

let firstLetter = _.filter(array, function(element) {
    return element.name[0].toUpperCase() === letter.toUpperCase()
})
    return firstLetter.length
};



var friendFirstLetterCount = function() {


};

var friendsCount = function() {

};

var topThreeTags = function() {

};

var genderCount = function(array) {

 let multiGender = _.reduce (array, function(accumulator, current, index, collection) {
        var obj = {};
        
        if (current.gender === 'male' && current.gender === 'female') {
            accumulator += 1;
        }
    return accumulator;
    }, 0)
    return multiGender;

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
