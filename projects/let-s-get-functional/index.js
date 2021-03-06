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

var all = _.map(array, function(element) {
    return Number(element.balance.replace(/[^0-9.-]+/g,""));
})

var toat = _.reduce(all, function(x, y) {
    return x + y
}, 0)

var avg = toat/all.length

return avg;

};



var firstLetterCount = function(array, letter) {

let firstLetter = _.filter(array, function(element) {
    return element.name[0].toUpperCase() === letter.toUpperCase()
})
    return firstLetter.length
};



var friendFirstLetterCount = function(array, customer, letter) {

var z = 0; 
let names = _.filter(array, function(element) {
    return element.name === customer
})
let friendz = _.map(names[0].friends, function(ele, i) {
    if (ele.name[0].toUpperCase() === letter.toUpperCase()) {
        z++
    }
})
  return z;
};



var friendsCount = function(array, name) {

    var result = _.filter(array, function(customerObj) {
        for(var i = 0; i < customerObj.friends.length; i++) {
            if (customerObj.friends[i].name === name) {
                return customerObj;
            }
        }
    });
    return _.pluck(result, "name");

};



var topThreeTags = function(array) {

    var myArray = [];
    var topTags = [];
    
    
    var tags = _.pluck(customers, "tags");
    
    var allTags = _.reduce(tags, function(acc, currTag) {
        return acc.concat(currTag);
    }).sort();
    
    var total = allTags.reduce(function(count, tag) {
        count[tag] ? count[tag] = count[tag] + 1 : count[tag] = 1;
        return count;
    }, {});
    
   for(var key in total){
       myArray.push([key, total[key]]);
   }
   var top = myArray.sort(function(acc, currTag) {
       return currTag[1] - acc[1];
   }).slice(0, 3);
   
   
   _.filter(top, function(topTagArr) {
       return topTagArr[0] ? topTags.push(topTagArr[0]) : null;
   });
   return topTags;

};



var genderCount = function(array) {

 
        
        
    let maleGender = _.reduce (array, function(accumulator, current, index, collection) {
        
        
        if (current.gender === 'male') {
            accumulator += 1;
        } 
    return accumulator;
    }, 0)
    
    
  let femaleGender = _.reduce (array, function(accum, curr) {

    if (curr.gender === 'female') {
      accum += 1;
    }
     return accum;
  }, 0)

let nonBinary = _.reduce (array, function(a, c) {
  if (c.gender === 'non-binary') {
    a++
  }
  return a
}, 0)
  
    var obj = {};
    obj.male = maleGender
    obj.female = femaleGender
    obj['non-binary'] = nonBinary
  return obj
    
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
