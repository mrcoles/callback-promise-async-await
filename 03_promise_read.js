//
// 03. an example Promise that performs fs.read(...)
//

const fs = require('fs');

function readPromise(filename, opts) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, opts, (err, text) => {
      err ? reject(err) : resolve(text);
    });
  });
}

readPromise('hello.txt', 'utf8')
  .then(text => console.log(text))
  .catch(err => console.error(err));
