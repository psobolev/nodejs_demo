const fs = require('fs');
// Открываем файл для чтения
fs.open('test.txt', 'r', (err, fd) => {
  //fd - это дескриптор файла
})
// Получаем сведения о файле
fs.stat('/Users/flavio/test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  //сведения о файле содержатся в аргументе `stats`
});
console.log(stats.isFile(), stats.isDirectory(), stats.isSymbolicLink(), stats.size);
