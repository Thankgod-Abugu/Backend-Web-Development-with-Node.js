// const fs = require('fs');
// // line above uses CJS (by default)

import fs from 'fs';
// line above uses ESM, a better alternative to CJS

// fs.writeFile('messages.txt', 'hello from nodeJS.', (err) => {
//     if (err) throw err;
//     console.log('File created and saved successfully!');
// });

fs.readFile('messages.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(data); 
    // data will be displayed as a buffer if charset is not specified
})