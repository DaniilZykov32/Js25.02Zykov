// const express = require('express');
// const app = express();
//
// app.get('/', function (request, response) {
// 	response.end('ABOBA');
// });
// app.listen(3000);
// const fs = require('fs');
// const http = require('http');
// const util = require('util');
// const Emitter = require('events');
// const stream = require('stream');
// const zlib = require('zlib');

// let message = "hello, igor'!";
// http
// 	.createServer(function (request, response) {
// 		console.log(message);
// 		response.end(message);
// 	})
// 	.listen(3000, '127.0.0.1');

// function display(data, callback) {
// 	// с помощью случайного числа определяем ошибку
// 	let randInt = Math.random() * (10 - 1) + 1;
// 	let err = randInt > 5 ? new Error('Ошибка выполнения. randInt больше 5') : null;
//
// 	setTimeout(function () {
// 		callback(err, data);
// 	}, 0);
// }
//
// console.log('Начало работы программы');
//
// display('Обработка данных...', function (err, data) {
// 	if (err) throw err;
// 	console.log(data);
// });
//
// console.log('Завершение работы программы');

// fs.readFile('text.txt', 'utf8', (error, data) => {
// 	// асинхронно
// 	console.log('Асинхронное чтение файла...');
// 	if (error) {
// 		throw error;
// 	}
// 	console.log(data);
// });

// console.log('Синхронное чтение файла...');
// let fileContent = fs.readFileSync('text.txt', 'utf8'); // синхронно
// console.log(fileContent);
//
// // Запись файла
// fs.writeFileSync('text.txt', 'AIRBUS A390'); // синхронно
// fs.writeFile('text.txt', 'Ил-2 Штурмовик', (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('Асинхронная запись ЗАВЕРШЕНА. Содержимое файла:');
// 	let data = fs.readFileSync('text.txt', 'utf8');
// 	console.log(data);
// }); // асинхронно

// Удаление файла

// fs.unlink('text.txt', (err) => {
// 	if (err) throw err;
// 	else console.log('text.txt was deleted');
// });

// let emitter = new Emitter();
// let eventName = 'Artem123';
// emitter.on(eventName, (data) => {
// 	console.log('hello123. Your name is ' + data);
// });

// emitter.emit(eventName, 'Artem');

// class User extends Emitter {
// 	sayHi(data) {
// 		this.emit('Artem123', data);
// 	}
// }

// const user = new User();
// user.on('Artem123', (data) => console.log(data));
// user.sayHi('some text');

// Stream

// let writableStream = fs.createWriteStream('stream.txt');
// writableStream.write('Привет мир');
// writableStream.write('\nЗдарова БигБон\n');
// writableStream.write('Бургер кинг гав гав\n');
// for (let i = 0; i < 50; i++) {
// 	writableStream.write(`| ${i} `);
// }
// writableStream.end('\n Завершение записи');
// let readableStream = fs.createWriteStream('stream.txt', 'utf8');
//
// readableStream.on('data', function (chunk) {
// 	console.log(chunk);
// });

// let readableStream = fs.createReadStream('stream.txt', 'utf8');
// let writableStream = fs.createWriteStream('stream2.txt.gz');

// let gzip = zlib.createGzip();
// readableStream.pipe(gzip).pipe(writableStream);


// Сервер

// const http = require("http");
  
// http.createServer(function(request, response){
      
//     response.setHeader("Content-Type", "text/html");
//     response.write("<!DOCTYPE html>");
//     response.write("<html>");
//     response.write("<head>");
//     response.write("<title>Hello Node.js</title>");
//     response.write("<meta charset=\"utf-8\" />");
//     response.write("</head>");
//     response.write("<body><h2>Привет мир</h2></body>");
//     response.write("</html>");
//     response.end();
// }).listen(3000);

// const http = require("http");
  
// http.createServer(function(request, response){
     
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
//     if(request.url === "/home" || request.url === "/"){
//         response.write("<h2>Home</h2>");
//     }
//     else if(request.url == "/about"){
//         response.write("<h2>About</h2>");
//     }
//     else if(request.url == "/contact"){
//         response.write("<h2>Contacts</h2>");
//     }
//     else{
//         response.write("<h2>Not found</h2>");
//     }
//     response.end();
// }).listen(3000);

// const http = require("http");
  
// http.createServer(function(request, response){
     
//     response.setHeader("Content-Type", "text/html; charset=utf-8;");
     
//     if(request.url === "/"){
//         response.statusCode = 302; // временная переадресация
//         // на адрес localhost:3000/newpage
//         response.setHeader("Location", "/newpage");
//     }
//     else if(request.url == "/newpage"){
//         response.write("New address");
//     }
//     else{
//         response.statusCode = 404; // адрес не найден
//         response.write("Not Found");
//     }
//     response.end();
// }).listen(3000);


// Отправка файлов


// const http = require("http");
// const fs = require("fs");
  
// http.createServer(function(request, response){
      
//     console.log(`Запрошенный адрес: ${request.url}`);
//     // получаем путь после слеша
//     const filePath = request.url.substr(1);
//     fs.readFile(filePath, function(error, data){
              
//         if(error){
                  
//             response.statusCode = 404;
//             response.end("Resourse not found!");
//         }   
//         else{
//             response.end(data);
//         }
//     });
// }).listen(3000, function(){
//     console.log("Server started at 3000");
// });

// Получение данных от клиента

// const http = require("http");
// const fs = require("fs");
 
// http.createServer(async (request, response) => {
      
//      if (request.url === "/user") {
         
//         const buffers = []; // буфер для получаемых данных
 
//         for await (const chunk of request) {
//             buffers.push(chunk);        // добавляем в буфер все полученные данные
//         }
 
//         const user = JSON.parse(Buffer.concat(buffers).toString());
//         console.log(user.name,"-", user.age);
//         response.end("Данные успешно получены");
//     }
//     else{
//         fs.readFile("index.html", (error, data) => response.end(data));
//     }
// }).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));

// ШАБЛОНЫ
const http = require("http");
const fs = require("fs");
 
http.createServer(function(request, response){
     
    fs.readFile("index.html", "utf8", function(error, data){
                 
        let message = "Изучаем Node.js"; 
        let header = "Главная страница";
        data = data.replace("{header}", header).replace("{message}", message);
        response.end(data);
    })
}).listen(3000);
