const fs = require('fs');
const content1 = 'Это добавлено методом writeFile!';
fs.writeFile('tmp.txt', content1, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //файл записан успешно
});
const content2 = 'А это добавлено методом appendFile!';
fs.appendFile('tmp.txt', content2, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //готово!
});
