

class LocalStorage {
    static write = (key, value) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    static read = (key) => {
        const value = window.localStorage.getItem(key)

        if (value) {
            return JSON.parse(value)
        }
    }
}

export default LocalStorage;