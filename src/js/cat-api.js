export {fetchBreeds, fetchCatBreed}

const API_KEY = 'live_JRDiqhjq8lH6Gl1Jk7NT98Xboh8OYBUcN8KEh2sPUrxiISZp8V31uHpKbTTYFSwx'

function fetchBreeds() {
    return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
        'x-api-key': API_KEY,
    }
    }).then(response => {
        return response.json()
    })
}

function fetchCatBreed(catId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`, {
    headers: {
        'x-api-key': API_KEY,
    }
    }).then(response => {
        return response.json()
    })
}