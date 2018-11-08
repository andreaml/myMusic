const URL = 'https://mobile-api-ucol.herokuapp.com/';

function getToken(email, password) {
    return fetch(`${URL}login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(response => response.json())
    .then(data => {
        return data;
    });
}

function getMusicData(email, password) {
    return fetch(`${URL}music_data`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            token: global.token
        })
    })
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
        return {
            id: artist.mbid,
            name: artist.name,
            image: artist.image[3]['#text'],
            likes: 200,
            comments: 140
        }
    }));
}

export { getToken, getMusicData };