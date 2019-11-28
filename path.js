// Загружаем стандартный модуль path для работы с путями к файлам
const path = require('path');

const test = 'test.txt';
console.log('родительская директория файла ' + path.dirname(test)); // .
console.log('имя файла ' + path.basename(test)); // test.txt
console.log('расширение файла ' + path.extname(test)); // .txt
