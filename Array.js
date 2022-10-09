const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton'];

//A indexação (index) começa pelo número 0
console.log(pilotos[0]); //Senna
console.log(pilotos[3]); //Hamilton

//Acessar o tamanho do Array
console.log(pilotos.length);

//iterável
for (let piloto of pilotos) {
  console.log(piloto);
}

//adicionar elemento
piloto.push('Alonso');
console.log(pilotos);

//encontrar um elemento
const senna = pilotos.find(pilotos => pilotos === 'Senna');
console.log(senna);

//Deletar um elemento
pilotos.splice(1, 1);

console.log(pilotos);