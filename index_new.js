const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');

// for(var i=1; i<=4;i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.html`,`My test file ${i}`)
// }
fs.readdir(dirPath,(err,files)=>{
    files.forEach((file)=>{
        console.log(file);
        
    })
});
console.log(dirPath);

