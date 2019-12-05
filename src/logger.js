'use strict';

const emitter = require('../src/emitter.js');


const logError = event => {
  console.log('In event Handler');
  console.error(event);
  //console.log(read)
};

const alterFile = event => {
  console.log(event);
};

const saveFile = event => {
  console.log(event);
};


emitter.on('fileSaved', saveFile);
emitter.on('file-error', logError);
emitter.on('status file', alterFile);
console.log('Set our Listeners');

module.exports = {};
