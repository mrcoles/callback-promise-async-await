//
// 06. this example uses promisified fs functions with async/await
//

const { statPromise, readPromise, writePromise } = require('./lib/fs-promise');

async function main(filename, outfilename) {
  let stats = await statPromise(filename);
  let text = await readPromise(filename);
  await writePromise(outfilename, text);
  return outfilename;
}

main('hello.txt', 'goodbye.txt')
  .then(filename => console.log('success!', filename))
  .catch(err => console.error(err));
