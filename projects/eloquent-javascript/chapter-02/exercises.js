
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {




var str = '#'

while (str.length <= num) {
  console.log(str);
  str = str + '#';
}


}
triangles(7);



////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(num) {

    for (var i = 1; i <= num; i++) {
      if (i % 3 == 0 && i % 5 == 0) 
        console.log('FizzBuzz');
       else if (i % 3 == 0)
       console.log('Fizz');
       else if (i % 5 == 0)
       console.log('Buzz');
       else 
       console.log(i);
    
}
  return num
}
console.log(fizzBuzz(14))
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {

  

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
