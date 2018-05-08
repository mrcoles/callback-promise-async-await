//
// 06. this anti-pattern example nests Promises and loses the benefits of chaining
// If you encounter this in code, then #timeToRefactor
//

const { statPromise, readPromise, writePromise } = require('./lib/fs-promise');

function main(filename, outfilename) {
  return new Promise((resolve, reject) => {
    statPromise(filename).then(stats => {
      readPromise(filename, 'utf8').then(text => {
        writePromise(outfilename, text)
          .then(resolve)
          .catch(reject);
      });
    });
  });
}

main('hello.txt', 'goodbye.txt')
  .then(filename => console.log('success!', filename))
  .catch(err => console.error(err));
