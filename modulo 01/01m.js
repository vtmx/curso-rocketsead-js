// Módulo 1 - Exercício 1
var endereco = {
	rua: 'Rua dos pinheiros',
	numero: 1293,
	bairro: 'Centro',
	cidade: 'Sao Paulo',
	uf: 'SP'
}

console.log(`MÓDULO 1 - EXCERCÍCIO 1\nO usuario mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com o nº ${endereco.numero}.`)

// Módulo 1 - Exercício 2
console.log(`\nMÓDULO 1 - EXCERCÍCIO 2`)

function pares(x, y) {
	for (x; x <= y; x++) {
		if (x % 2 === 0)
			console.log(`${x} par`)
	}
}

pares(0, 10)

// Módulo 1 - Exercício 3
console.log(`\nMÓDULO 1 - EXERCÍCIO 3`)

function temHabilidade(skills) {
	if (skills.indexOf('Javascript') !== -1)
		console.log('Tem habilidade Javascript')
	else
		console.log('Não tem habilidade Javascript')
}

var skills = ['Javascript', 'RactJS', 'React Native']
temHabilidade(skills)

// Módulo 1 - Exercício 4
console.log(`\nMÓDULO 1 - EXERCÍCIO 4`)

function experiencia(anos) {
	if (anos >= 0 && anos <= 1)
		console.log('De 0-1 ano: Iniciante')
	else if (anos > 1 && anos <= 3)
		console.log('De 1-3 anos: Intermediário')
	else if (anos > 3 && anos <= 6)
		console.log('De 3-6 anos: Avançado')
	else
		console.log('De 7 acima: Jedi Master')
}

var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

// Módulo 1 - Exercício 5
console.log(`\nMÓDULO 1 - EXERCÍCIO 5`)

var usuarios = [{
		nome: "Diego",
		habilidades: ["Javascript", "ReactJS", "Redux"]
	},
	{
		nome: "Gabriel",
		habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
	}
];

function infoUsuarios(usuarios) {
	for (let usuario of usuarios) {
		console.log(`O ${usuario.nome} possui as habilidades: ${usuario.habilidades.join(', ')}`)
	}
}

infoUsuarios(usuarios)

// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir