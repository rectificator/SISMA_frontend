import config from '@/config'

function getFrom(path) {
    return fetch(`${config.apiBaseUrl}${path}`).then((response) => response.headers)
}


export default {
    getFrom,
}