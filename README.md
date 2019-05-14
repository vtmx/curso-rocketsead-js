# Excercícios do curso de Javascript da Rocketseat

[Rocketseat](https://rocketseat.com.br)

If simplificado
``` js
if (x > y) console.log('result')
```

Uso do indexOf para pesquisar array
``` js
return array.indexOf('Palavra pesquisada') !== -1
```

Método join junta todos os elementos de um array podendo utilizar uma string como delimitador
``` js
array.join(', ')
// item 1, item 2, item 3
```

Métodos de delay e repetição de tempo
``` js
setTimeout(fn, 1000) // Inicia a função após 1 segundo
setInterval(fn, 1000) // Repete a função a cada 1 segundo
```

Manipulação do DOM
``` js
var container = documentGetElementById('app')
var link = document.createElement('a') // Cria um link
var text = document.createTextnode('Link') // Cria um texto

link.setAttribute('href', 'http://rocketleague.com') // Adiciona o atributo href
link.setAttribute('target', '_blank_')
link.appendChild(text) // Adicionar o texto dentro do link

container.appendChild(link) // Adiciona o link dentro do contaier
container.removeChild(link) // Remove o link
```