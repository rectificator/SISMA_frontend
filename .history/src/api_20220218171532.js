import config from '@/config'

function getFrom(path) {
    return fetch(`${config.apiBaseUrl}${path}`).then((response) => response)
}


export default {
    getFrom,
}