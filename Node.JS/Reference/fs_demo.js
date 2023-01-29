const fs = require ('fs')
const path = require('path')

// Create Folder 
// fs.mkdir(path.join(__dirname, '/test'), {}, err => { 
//     if (err) throw err; 
//     console.log('Folder created...');
// });

// // Creat and write to file 
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//  'Hello Dom!', 
//   err => { 
//     if (err) throw err; 
//     console.log('File Writeen To...');

//     //File append

//     fs.appendFile(
//         path.join(__dirname, '/test', 'hello.txt'),
//      'I Love Me!', 
//       err => { 
//         if (err) throw err; 
//         console.log('File Writeen To...');
//     });
    
// });

// Read file 

// fs.readFile(path.join(__dirname, '/test', 'hello.txt', 'utf-8', (err, data) => {
//     if (err) throw err; 
//     console.log(data);
// }));

//Rename file 

fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'goodbye.txt'),
    (err) => {
    if (err) throw err; 
    console.log('File renamed...');
});


