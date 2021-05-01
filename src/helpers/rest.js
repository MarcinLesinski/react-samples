const get = url => {

    const method = (resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
    }

    return new Promise(method)
}


const post = (url, body) =>
    new Promise(
        (resolve, reject) => apiCall(url, 'POST', body, resolve, reject)
    )


const put = (url, body) => {
    console.log(body)
    return new Promise(
        (resolve, reject) => apiCall(url, 'PUT', body, resolve, reject)
    )
}


const patch = (url, body) =>
    new Promise(
        (resolve, reject) => apiCall(url, 'PATCH', body, resolve, reject)
    )


const remove = (url) =>
    new Promise(
        (resolve, reject) => fetch(url, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }).then(response => {
            if (response.ok) {
                resolve(response)
            } else {
                reject(response)
            }
        })
    )


const apiCall = (url, method, body, resolve, reject) =>
    fetch(url, {
        method: method,
        headers: { "Content-Type": 'application/json; charset=utf-8' },
        body: JSON.stringify(body)
    }).then(response => {
        if (response.ok) {
            response.json().then(json => resolve(json))
        } else {
            reject(response)
        }
    })

export { get, post, put, patch, remove };