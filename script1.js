const url = ('https://jsonplaceholder.typicode.com');

fetch(url + '/posts?exclude=[explicit]')
    .then(response => response.json())
    .then(dataJSON => {
        if (dataJSON.type === 'success') {
            displayJokes(dataJSON.value);
        }
    })
    .catch(error => console.error(error));

function displayJokes(jokes) {

    let firstTenJokes = filterJokes(jokes, 10);

    for (let joke of firstTenJokes) {
        displayJoke(joke);
    }
}

function displayJoke(joke) {
    let jokesHTML = document.getElementById('result')

    jokesHTML.innerHTML += '<p class="result">' + joke.joke + '</p>'
}

function filterJokes(jokes, nbr) {
    return jokes.slice(1, nbr);
}