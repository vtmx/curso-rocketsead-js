var listEl = document.querySelector('#app ul')
var inputEl = document.querySelector('#app input')
var buttonEl = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || []

// var todos = [
// 	'Fazer café',
// 	'Estudar Javascript',
// 	'Acessar comunidade da Rocketseat'
// ]

function renderTodos() {
	// Remove todos os elementos
	listEl.innerHTML = ''

	for (todo of todos) {
		var todoEl = document.createElement('li')
		var todoText = document.createTextNode(todo)

		var linkEl = document.createElement('a')
		linkEl.setAttribute('href', '#')
		
		var linkText = document.createTextNode('Excluir')
		
		linkEl.appendChild(linkText)

		var pos = todos.indexOf(todo)
		linkEl.setAttribute('onclick', 'deleteTodo(' + pos + ')')
		
		todoEl.appendChild(todoText)
		todoEl.appendChild(linkEl)
		listEl.appendChild(todoEl)
	}
}

renderTodos()

function addTodo() {
	var todoText = inputEl.value

	if (todoText !== '')
		todos.push(todoText)
		inputEl.value = ''
		inputEl.focus()
		renderTodos()
		saveToStorage()
}

buttonEl.onclick = addTodo

function deleteTodo(pos) {
	todos.splice(pos, 1)
	saveToStorage()
	renderTodos()
}

function saveToStorage() {
	localStorage.setItem('list_todos', JSON.stringify(todos))
}
