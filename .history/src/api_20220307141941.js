import config from '@/config'

function getFrom(path, jwt) {
    //console.log(`${config.apiBaseUrl}${path}`)
    return fetch(`${config.apiBaseUrl}${path}`, {
        method: 'GET',
        headers: {
            api: 123,
            Authorization: `Bearer ${jwt}`
        },
    })
        .then((response) => response.json())
        .then((data) => (data.error == '' ? data.body : data.error))
}

export default {
    getFrom,
}
