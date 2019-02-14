console.log('todos coming...');

const fs = require('fs');

// add a todo item //
var addTodo = (whatTodo) => {
    var todos = fetchTodos();
    var todo = {
        whatTodo
    };

    var duplicatetodos = todos.filter((todo) => todo.whatTodo === whatTodo);

    if (duplicatetodos.length === 0) {
        todos.push(todo);
        saveTodos(todos);
        return todo;
    }
};

// delete a todo item //
var deleteTodo = (whatTodo) => {
    var todos = fetchTodos();
    var filteredtodos = todos.filter((todo) => todo.whatTodo !== whatTodo);
    saveTodos(filteredtodos);

    return todos.length !== filteredtodos.length;
};

// read a todo item //
var readTodo = (whatTodo) => {
    var todos = fetchTodos();
    var filteredTodos = todos.filter((todo) => todo.whatTodo === whatTodo);
    return filteredTodos[0];
};

// list all todo items //
var listTodos = () => {
    return fetchTodos();
};

// utility functions
var fetchTodos = () => {
    try {
        var todosString = fs.readFileSync('todo-data.json');
        var todoStringId = fs.readFileSync('todo-data.json');
        return JSON.parse(todosString, todoStringId);
    } catch (e) {
        return [];
    }
};

var saveTodos = (todos) => {
    fs.writeFileSync('todo-data.json', JSON.stringify(todos));
};

var logTodo = (todo) => {
    console.log('------');
    console.log(`On Your Todo list is: ${todo.whatTodo}`);
};

// export functions
module.exports = {
    addTodo,
    deleteTodo,
    readTodo,
    listTodos,
    logTodo
};
