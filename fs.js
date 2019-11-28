const fs = require('fs');
// Открываем файл для чтения
fs.open('test.txt', 'r', (err, fd) => {
  //fd - это дескриптор файла
})
// Получаем сведения о файле
// Cведения о файле содержатся в аргументе `stats`
fs.stat('test.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('Это обычный файл? '+ stats.isFile()) //true
  console.log('Это директорий? '+ stats.isDirectory()) //false
  console.log('Это ссылка? '+ stats.isSymbolicLink()) //false
  console.log('Размер файла? ' + stats.size) //1024000 //= 1MB
})
