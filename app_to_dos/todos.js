var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = 
    JSON.parse(localStorage.getItem('list_todos')) 
    || 
    [
        'Fazer café',
        'Estudar Javascript',
        'Acessar comunidade da Rocketseat'
    ];

displayElements();

buttonElement.onclick = addTodo;

function addTodo() {
    var text = inputElement.value;
    inputElement.value = '';
    todos.push(text);
    
    displayElements();

    saveToStorage();
}

function displayElements() {
    listElement.innerHTML = '';

    for (var todo of todos) {
        var liElement = document.createElement('li');
        var text = document.createTextNode(todo);
        liElement.appendChild(text);

        var aElement = document.createElement('a');
        aElement.setAttribute('href', '#');
        aElement.style.marginLeft = 10;
        var aText = document.createTextNode('Excluir');
        aElement.appendChild(aText);

        var pos = todos.indexOf(todo);
        aElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        
        liElement.appendChild(aElement);
        listElement.appendChild(liElement);
    }
}

function deleteTodo(pos) {
    todos.splice(pos, 1);

    displayElements();

    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}