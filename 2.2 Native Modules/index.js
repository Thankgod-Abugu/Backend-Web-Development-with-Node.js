const fs = require('fs');

// fs.writeFile('messages.txt', 'hello from nodeJS.', (err) => {
//     if (err) throw err;
//     console.log('File created and saved successfully!');
// });

fs.readFile('messages.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(data); 
    // data will be displayed as a buffer if charset is not specified
})