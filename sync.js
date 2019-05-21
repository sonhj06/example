var fs=require('fs');
console.log('A');
var result=fs.readFileSync('exampletest.txt','utf8');
console.log(result);
console.log('c');
