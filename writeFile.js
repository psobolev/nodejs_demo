const fs = require('fs');
const content = 'Это добавлено!';
fs.writeFile('tmp.txt', content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //файл записан успешно
});
