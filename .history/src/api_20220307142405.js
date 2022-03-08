import config from '@/config'

function getFrom(path, jwt = '') {
    let headers = {}
    if (jwt != '') {
        headers.api = 123
        headers.Authorization = `Bearer ${jwt}`
    }
    //console.log(`${config.apiBaseUrl}${path}`)
    return fetch(`${config.apiBaseUrl}${path}`, {
        method: 'GET',
        headers: headers,
    })
        .then((response) => response.json())
        .then((data) => (data.error == '' ? data.body : data.error))
}

export default {
    getFrom,
}
