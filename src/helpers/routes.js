const serverUrl = 'http://localhost:8080'
const dataPath = '/'


const dataApiUrl = id =>
    id ? `${serverUrl}${dataPath}/${id}` : `${serverUrl}${dataPath}`

export { dataApiUrl };