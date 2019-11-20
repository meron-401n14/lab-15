'use strict';
const EventEmitter = require('events');
const emmittter = new  EventEmitter();


const fs = require('fs');
const faker = require('faker');
let file = process.argv.slice(2).shift();
console.log('myArgs:', file);

const alterFile = (file) => {
  fs.readFile(file, (err, data) => {
    if(err) { throw err; }
    //let text = data.toString().toUpperCase();
    let text = faker.lorem.data();
    //console.log(lab15);
    
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

alterFile();
