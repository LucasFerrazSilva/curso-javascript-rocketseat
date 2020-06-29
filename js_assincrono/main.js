// Requisição assíncrona / Ajax
// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/diego3g');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }


//Promises
// var minhaPromise = function() {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest();

//         xhr.open('GET', 'https://api.github.com/users/diego3g-155165156165');
//         xhr.send(null);

//         xhr.onreadystatechange = function() {
//             if(xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }

// minhaPromise()
//     .then(function(response) {
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.warn(error);
//     });

//Axios
axios.get('https://api.github.com/users/diego3g')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });