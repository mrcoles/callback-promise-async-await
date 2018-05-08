//
// 04. this example uses promisified fs functions in a nice Promise chain
//

const { statPromise, readPromise, writePromise } = require('./lib/fs-promise');

function main(filename, outfilename) {
  return statPromise(filename)
    .then(stats => readPromise(filename, 'utf8'))
    .then(text => writePromise(outfilename, text));
}

main('hello.txt', 'goodbye.txt')
  .then(filename => console.log('success!', filename))
  .catch(err => console.error(err));
