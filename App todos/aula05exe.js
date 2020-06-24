var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

// criando o array de todos, e fazendo com que a aplicaçao carregue os valores salvos no local storage

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// renerizar os todos no html

function renderTodos() {
    //limpa os todos antes e adicionar novos
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        // add link para excluir os todos
        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')')

        var linkText = document.createTextNode('Excluir');


        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();


function addTodo(){
    var todoText = inputElement.value;

    // adicionar um todo no final do array
    todos.push(todoText);

    //limpar o texto atual do input
    inputElement.value = '';

    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;


// excluindo todo

function deleteTodo(pos){

    //metodo splice remove uma quantidade de itens do array baseado na posição que for passada
    todos.splice(pos, 1); // remova um item da posição pos que sera passada

    renderTodos();
    saveToStorage();
}

// salvar os todos no local storage

function saveToStorage(){
    // transformando o array dde todos em JSON para salvar no local Storage
    localStorage.setItem('list_todos', JSON.stringify(todos));

}