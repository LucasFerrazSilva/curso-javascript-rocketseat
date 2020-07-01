const buttonExercicio3 = document.querySelector('#button-exercicio-3');
const inputExercicio3 = document.querySelector('#input-exercicio-3');

const divUlElements = document.querySelector('#ul-elements');

buttonExercicio3.onclick = function() {
    const user = inputExercicio3.value;
    inputExercicio3.value = '';

    var ulElement = document.createElement('ul');

    var h2Element = document.createElement('h2');
    var h2Text = document.createTextNode(user + ' repositories:');
    h2Element.appendChild(h2Text);
    
    divUlElements.appendChild(h2Element);
    divUlElements.appendChild(ulElement);

    createAndAppendLiChild(ulElement, 'Carregando...');

    githubRequestPromise(user)
        .then(function(response) {
            ulElement.innerHTML = '';

            for(var repo of response) {
                createAndAppendLiChild(ulElement, repo.name);
            }
        })
        .catch(function(error) {
            ulElement.innerHTML = '';

            createAndAppendLiChild(ulElement, 'Usuário não encontrado');
        })
}

function createAndAppendLiChild(ulElement, liText) {
    var liElement = document.createElement('li');
    var liTextNode = document.createTextNode(liText);
    liElement.appendChild(liTextNode);
    ulElement.appendChild(liElement);
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