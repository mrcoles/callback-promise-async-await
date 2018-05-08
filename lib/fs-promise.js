const fs = require('fs');

const statPromise = filename =>
  new Promise((resolve, reject) => {
    fs.stat(filename, (err, status) => {
      err ? reject(err) : resolve(status);
    });
  });

const readPromise = (filename, opts) =>
  new Promise((resolve, reject) => {
    fs.readFile(filename, opts, (err, text) => {
      err ? reject(err) : resolve(text);
    });
  });

const writePromise = (filename, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(filename, content, err => {
      err ? reject(err) : resolve(filename);
    });
  });

module.exports = {
  statPromise,
  readPromise,
  writePromise
};
