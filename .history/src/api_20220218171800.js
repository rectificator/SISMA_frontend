import config from '@/config'

function getFrom(path) {
    return fetch(`${config.apiBaseUrl}${path}`).then((response) => response.response.json)
}


export default {
    getFrom,
}