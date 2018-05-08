//
// 02. this example shows passing a success and error callback function
// into a nested callback
//

const fs = require('fs');

function main(filename, outfilename, successFn, errorFn) {
  fs.stat(filename, (err, stats) => {
    if (err) {
      errorFn(err);
    } else {
      fs.readFile(filename, 'utf8', (err, text) => {
        if (err) {
          errorFn(err);
        } else {
          fs.writeFile(outfilename, text, err => {
            if (err) {
              errorFn(err);
            } else {
              successFn(outfilename);
            }
          });
        }
      });
    }
  });
}

main(
  'hello.txt',
  'goodbye.txt',
  filename => console.log('success!', filename),
  err => console.error(err)
);
