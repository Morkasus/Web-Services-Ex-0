var http = require("http");
var Hotel = require("./hotel");
var eventsConfig = require("./config")

//Create new Hotel (name , kind) start with 0 likes
var morHotel = new Hotel("Hilton", "Tourists Vacation");
morHotel.on(eventsConfig.LikeChanges, morHotel.displayDetails);

//operations on this new hotel
morHotel.like();
morHotel.like();
morHotel.unlike();

//Create a response and listen on port 3000 
http.createServer(function(request, response){
    var msgToUser = morHotel.getMessage() + "\n\n\n*** Log file ***\n\n" + morHotel.getLogger();
    response.writeHeader(200 , {'content-Type': 'text/plain'});
    response.write(msgToUser);
    response.end();
}).listen(3000);