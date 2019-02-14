// npm init
//npm i axios --save
//npm i express --save
// npm i yargs --save
// npm i lodash --save


//node app.js addTodo --title="trening"
//node app.js deleteTodo --title="trening"
//node app.js readTodo --title="trening"  pokazuje czy jest na liscie jesli zwraca ze nie
//node app.js listTodo pokazuje liste



console.log('Start app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const todos = require('./todo.js');


const argv = yargs.argv;
var command = argv._[0];

console.log('Your Command: ', command);

if (command === 'addTodo') {
    todos.addTodo(argv.whatTodo);
    console.log('Add new Todo to Your list.')
} else if (command === 'deleteTodo') {
    var todoDeleted = todos.deleteTodo(argv.whatTodo);
    var message = todoDeleted ? 'Todo was deleted' : 'Todo not found';
    console.log(message);
} else if (command === 'readTodo') {
    var todo = todos.readTodo(argv.whatTodo);
    if (todo) {
        console.log('Todo wos found.');
        todos.logTodo(todo);
    } else {
        console.log('Todo not found.');
    }
} else if (command === 'listTodo') {
    var allTodos = todos.listTodos();
    console.log(`U have ${allTodos.length} todos.`);
    allTodos.forEach((todo) => todos.logTodo(todo));
} else {
    console.log('Command not found.');
}
