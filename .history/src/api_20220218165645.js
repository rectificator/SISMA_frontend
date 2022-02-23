import config from '@/config'

function getFrom(path) {
    fetch(`${config.apiBaseUrl}/${path}`).then((response) => response.json)
}


export default {
    getFrom,
}