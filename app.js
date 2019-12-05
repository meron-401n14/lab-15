'use strict';


const loadFile = require('./src/file-changer.js');
const saveFile = require('./src/file-changer.js');
const alterFile = require('./src/file-changer.js');
require('./src/logger.js');


// const alterFile= require('./src/file-changer.js');
// require('./src/logger.js');

//loadFile('');
alterFile('');


const runAsync = async () => {
//require('./src/logger.js');
  await loadFile('');
  await saveFile();
  await alterFile();
  // await saveFile(file);
}



 runAsync();


module.exports= alterFile;

// const EventEmitter = require('events');
// const emmittter = new  EventEmitter();


// const fs = require('fs');
// const faker = require('faker');

// const alterFile = (file) => {
//   fs.readFile(file, (err, data) => {
//     if(err) { throw err; }
//     //let text = data.toString().toUpperCase();
//     let text = faker.data.lorem.sentence();

//     fs.writeFile(file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };

// alterFile();
