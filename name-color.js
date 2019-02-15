fs = require('fs')
fs.readFile(name-color.txt, ["The data in line one is: "], ["The data in line two is: ");

fs = require('fs');
fs.readFile('/doesnt/exist', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});


var myFirstLastName = readline.question("The data in line one is: ");
var myFavoriteColor = readline.question("The data in line two is: ");

console.log(myFirstLastName);
console.log(myFavoriteColor);



// 3. Create a program to read the file in step 3 and conole.log;
//     "The data on line var {1} is :" var {the line one data}
//     "The data on line var {2} is :" var {the line two data}
 