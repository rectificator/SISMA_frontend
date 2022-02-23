import config from '@/config'

function getFrom(path) {
    fetch(`${config.apiBaseUrl}`).then((response) => response.json)
}


export default {
    getFrom
}