//
// 05. this buggy use of a Promise mistakenly assigns text to the promise when
// it instead should be looking inside readPromise(...).then(...)
//

const { readPromise } = require('./lib/fs-promise');

let text = readPromise('hello.txt', 'utf8');

// `text` here is actually the Promise, this is a bug!
console.log('success?', text);
