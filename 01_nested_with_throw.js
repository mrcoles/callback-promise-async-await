//
// 01. this example shows how nesting can get real deep
//

const fs = require('fs');

function main(filename, outfilename) {
  fs.stat(filename, (err, stats) => {
    if (err) {
      throw err;
    } else {
      fs.readFile(filename, 'utf8', (err, text) => {
        if (err) {
          throw err;
        } else {
          fs.writeFile(outfilename, text, err => {
            if (err) {
              throw err;
            } else {
              console.log('success!', outfilename);
            }
          });
        }
      });
    }
  });
}

main('hello.txt', 'goodbye.txt');

// *NOTE: fs.stat should not be used to determine if a file
// exists or not, because it is async and it may no longer
// exist between an fs.stat call and an fs.read call. It is
// better to just deal with errors on fs.read instead, however
// I am using it to make my nesting example deeper :D
