var hotelName = "JavaScript Hotel";

var roomTypes = ["Twin", "Single", "Double", "Queen", "King"] //0,1,2,3,4,5
var roomPrices = [75, 85, 100, 150, 200]

var availableRoomNumbers = [[101, 102, 103, 104], [105, 106, 107, 108], [201, 202, 203, 204], [301, 302, 303], [304, 305]];  ////nested array

var bookedRooms = [[], [], [], [], []]; //0,1,2,3,4,5

function availableRoomQty() {  //global scope
  var totalAvailableRoomQty = 0;  ///local scope
   
   for (var i = 0; i < availableRoomNumbers.length; i++) {
//   availableRoomNumbers[i].length; // equal to four on the first loop
   totalAvailableRoomQty += availableRoomNumbers[i].length;
    }
    
return totalAvailableRoomQty;
}

function totalAvailableRoomsReport() {
    console.log("Total Room Count:", availableRoomQty());
}

// var availableRoomNumbers = [[101, 102, 103, 104], [105, 106, 107, 108], [201, 202, 203, 204], [301, 302, 303], [304, 305]];  ////nested array

// var bookedRooms = [[], [], [], [], []];

function bookTwin() {
    bookedRooms[0].push(availableRoomNumbers[0].pop()); 
    
}

function bookSingle() {
    bookedRooms[1].push(availableRoomNumbers[1].pop()); 
    
}

function bookDouble() {
    bookedRooms[2].push(availableRoomNumbers[2].pop()); 
    
}

function bookQueen() {
    bookedRooms[3].push(availableRoomNumbers[3].pop()); 
    
}

function bookKing() {
    bookedRooms[4].push(availableRoomNumbers[4].pop()); 
    
}

// var roomTypes = ["Twin", "Single", "Double", "Queen", "King"]

// var roomPrices = [75, 85, 100, 150, 200]

// var availableRoomNumbers = [[101, 102], [105, 106, 107], [201, 202, 203, 204], [301, 302,], [304, 305]];  ////nested array

// var bookedRooms = [[104, 103], [108], [], [303], []];

function salesReport() {
    // bookedRooms[0].lengh * roomPrices[0].length
    var totalRoomSales = 0; 
    
    for (var i = 0; i < bookedRooms.length; i++) {
        totalRoomSales += bookedRooms[i].length * roomPrices[i];
        
    };
    
    return totalRoomSales;
    
}

// Car rental business by next class on Thursday



