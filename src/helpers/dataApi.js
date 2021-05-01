import * as api from "./rest"
import { dataApiUrl } from "./routes"

class DataApi {

    static readAll = () => api.get(dataApiUrl())

    static read = (id) => api.get(dataApiUrl(id))

    static create = (params) => api.post(dataApiUrl(), { item: { ...params } })

    static update = (id, params) => api.put(dataApiUrl(id), params)

    static partialUpdate = (id, params) => api.patch(dataApiUrl(id), params)

    static destroy = (id) => api.remove(dataApiUrl(id))
}

export default DataApi;
