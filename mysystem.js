var os = require('os');
var message = "Here are some info about your system";

var sysarray = new Array('OS: '+ os.type(),
                'node version: '+ process.version,
                'Platform: '+ os.platform(),
                'Hostname: '+ os.hostname()
               );

console.log(message);

i = 0
while(i < sysarray.length){
    console.log(sysarray[i]);
    i++;
                
}
                
                
