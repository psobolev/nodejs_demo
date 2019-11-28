const fs = require('fs');
const content = 'Это добавлено методом writeFile!';
fs.writeFile('tmp.txt', content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //файл записан успешно
});
const content = 'А это добавлено методом appendFile!'
fs.appendFile('file.log', content, (err) => {
  if (err) {
    console.error(err)
    return
  }
  //готово!
})
