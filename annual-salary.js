//import the fs module
var fs = require('fs'); //imports the library file system CRUD

fs.readFile('salaries1.txt', 'utf8', function(err, data) {
    if (err) throw err; //similar to console.log and break that stops running code after it
    
    // console.log(data);
    var arraydat = data.split('\n');
    
    for (var i = 0; i < arraydat.length; i++) {
        console.log("The data on line", i+1, " is: ",  arraydat[i]);
    }
});
    
fs.readFile('employee.txt', 'utf8', function(err, data) {
    if (err) throw err; //similar to console.log and break that stops running code after it
    
    // console.log(data);
    var arraydat = data.split('\n');
    
    for (var i = 0; i < arraydat.length; i++) {
        console.log("The data on line", i+1, " is: ",  arraydat[i]);
    }
});
    
fs.readFile('dept_emp.txt', 'utf8', function(err, data) {
    if (err) throw err; //similar to console.log and break that stops running code after it
    
    // console.log(data);
    var arraydat = data.split('\n');
    
    for (var i = 0; i < arraydat.length; i++) {
        console.log("The data on line", i+1, " is: ",  arraydat[i]);
    }    
});

fs.readFile('dept_names.txt', 'utf8', function(err, data) {
    if (err) throw err; //similar to console.log and break that stops running code after it
    
    // console.log(data);
    var arraydat = data.split('\n');
    
    for (var i = 0; i < arraydat.length; i++) {
        console.log("The data on line", i+1, " is: ",  arraydat[i]);
    }    
});


// // const readline = require('readline-sync');
// fs.readFileSync

// const weirdString = `name:Sophie;shape:fox;condition:new`;
// // const result = querystring.parse(weirdoString, `;`, `:`);


