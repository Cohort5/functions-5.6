//import the fs module
var fs = require('fs'); //imports the library file system CRUD

fs.readFile('namecolor.txt', 'utf8', function(err, data) {
    if (err) throw err; //similar to console.log and break that stops running code after it
    
    // console.log(data);
    var arraydat = data.split('\n');
    
    for (var i = 0; i < arraydat.length; i++) {
        console.log("The data on line", i+1, " is: ",  arraydat[i]);
        
    }
    

});
