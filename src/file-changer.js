'use strict';

const fs = require('fs');
const util = require('util');
const emitter = require('../src/emitter.js');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);



const loadFile = async (path) => {
  console.log('In load File!');
  try {
    let contents = await readFile(path);
    console.log(contents);
    //return await readFile(path);
    return  contents;
  }catch(e) {
    throw e;
  }
 };

 const saveFile =  async file => {
   console.log('in save file');
   try{
    //  let contents = await readFile(file);
    //  console.log(contents);
     return await writeFile(file, faker.lorem.sentence());
    
    } catch (e){
      throw e;
    }
  }

  const alterFile = async (path) => {
  
    console.log('in alterFile', )
    try {
      await loadFile('');
      await saveFile(file);
    } catch(err) {
      if(!err)
     // emitter.emit(' On success', {status: 1, message: saveFile(file)})
      emitter.emit('fileSaved', saveFile)
      
      else  emitter.emit('file-error', {status:0, message: err.message});
    }
  }

  let file = process.argv.slice(2).shift();
  
  
  module.exports = alterFile;



     

      




