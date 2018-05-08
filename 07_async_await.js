//
// 07. this example uses promisified fs functions with async/await
//

const { statPromise, readPromise, writePromise } = require('./lib/fs-promise');

async function main(filename, outfilename) {
  // await will resolve `statPromise(...)` before the rest of this function
  // is executed
  let stats = await statPromise(filename);

  let text = await readPromise(filename);

  // you do not need to assign the result of an await
  await writePromise(outfilename, text);

  return outfilename;
}

// async functions are Promises, you still want to call it like a Promise,
// and you can hold off on try/catch inside to use a catch at the end!
main('hello.txt', 'goodbye.txt')
  .then(filename => console.log('success!', filename))
  .catch(err => console.error(err));
