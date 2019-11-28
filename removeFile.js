const fs = require('fs');

const path = './tmp.txt';

fs.unlink(path, (err) => {
  if (err) {
    console.error(err);
    return;
  }
//file removed
});
