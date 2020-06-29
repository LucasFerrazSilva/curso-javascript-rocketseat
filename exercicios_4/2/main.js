/*
    Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
    nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
    URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
    URL de exemplo: https://api.github.com/users/diego3g/repos
*/


const buttonExercicio2 = document.querySelector('#button-exercicio-2');
const inputExercicio2 = document.querySelector('#input-exercicio-2');

const divUlElements = document.querySelector('#ul-elements');

buttonExercicio2.onclick = function() {
    const user = inputExercicio2.value;
    inputExercicio2.value = '';

    githubRequestPromise(user)
        .then(function(response) {
            var ulElement = document.createElement('ul');

            for(var repo of response) {
                console.log(repo.name);

                var liElement = document.createElement('li');
                var liText = document.createTextNode(repo.name);
                liElement.appendChild(liText);
                ulElement.appendChild(liElement);
            }

            var h2Element = document.createElement('h2');
            var h2Text = document.createTextNode(user + ' repositories:');
            h2Element.appendChild(h2Text);

            divUlElements.appendChild(h2Element);
            divUlElements.appendChild(ulElement);
        })
        .catch(function(error) {
            console.log(error);
        })
}

var githubRequestPromise = function(user) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/' + user + '/repos');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}