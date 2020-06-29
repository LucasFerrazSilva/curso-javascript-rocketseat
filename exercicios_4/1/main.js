/*
    Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
    segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
    idade o resultado deve cair no .then, caso contrário, no .catch
*/


const buttonExercicio1 = document.querySelector('#button-exercicio-1');
const inputExercicio1 = document.querySelector('#input-exercicio-1');

buttonExercicio1.onclick = function() {
    const idade = inputExercicio1.value;
    inputExercicio1.value = '';

    checaIdade(idade)
        .then(function() {
            console.log('Maior que 18');
        })
        .catch(function() {
            console.log('Menor que 18')
        });
}

function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        if(idade > 18) {
            resolve();
        } else {
            reject();
        }
    })
}