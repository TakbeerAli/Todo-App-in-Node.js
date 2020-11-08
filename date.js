
exports.getDate = function(){
var today = new Date();  // current date function
var options = {   // defining method of print
    weekday :"long",
    day :"numeric",
    month : "long"
};

return today.toLocaleDateString("ur-PK", options); // converting time to string & USA Language

};

exports.getDay = function(){

    var today = new Date();  // current date function
    var options = {   // defining method of print
        weekday :"long",
        
    };
    
    return today.toLocaleDateString("ur-PK", options); // converting time to string & USA Language
    
    };

