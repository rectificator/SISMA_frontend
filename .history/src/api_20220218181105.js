import config from '@/config'

function getFrom(path) {
    console.log(`${config.apiBaseUrl}${path}`)
    return fetch(`${config.apiBaseUrl}${path}`, {
        method: 'GET',
        mode: 'cors',
    }).then((response) => response.json)
    .then(data => data.body)
}

export default {
    getFrom,
}
