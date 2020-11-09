const crypto = require('crypto');
const start= Date.now();

function logHashtime(){
    crypto.pbkdf2('a','b',100000,512,'sha512',function(){
        console.log('Hash: ',Date.now() - start);
    })
}
logHashtime();
logHashtime();
logHashtime();
logHashtime();
logHashtime();
const os= require('os');
console.log(os.cpus());