const http = require('http')  //  подключение модуля http.
const hostname = '127.0.0.1'  
const port = 3000
// создаём новый HTTP-сервер
// req - запрос, res — ответ
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
}
// прослушивание определённого порта на заданном хосте
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
}
// Для проверки сервера введите в адресной строке браузера http://127.0.0.1:3000
