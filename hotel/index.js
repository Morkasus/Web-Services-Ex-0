'use strict'
var EventEmitter = require("events");
var eventConfig = require("../config");
var moment = require('moment');

//Global - logger 
var logger = "";

//Class Hotel 
module.exports = class Hotel extends EventEmitter {
    
    
    constructor(hotelName, hotelKind) {
        super();
        this.name = hotelName;
        this.kind = hotelKind;
        this.likes = 0;
    }
    
    like() {
        this.likes ++;
        this.emit(eventConfig.LikeChanges);  
    }
    
    unlike() {
        this.likes--;
        if(this.likes < 0) this.likes = 0;
        this.emit(eventConfig.LikeChanges);
    }
    
    getMessage(){
        var message = "*** Hotel Details ***\n\nName: " + this.name + "\nKind: " + this.kind + "\nLikes: " + this.likes;
        return message;
    }
    
    getLogger(){
        return logger;
    }
    
    displayDetails() {
        var details, now;
        var details = this.name + ", " + this.kind +  " --->  have now " + this.likes + " LIKES";
        var now = moment().format("YYYY-MM-DD HH:mm");
        logger += now + "   " + details + "\n";
        console.log(details); 
    }
}