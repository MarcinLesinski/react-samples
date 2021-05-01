import MOVIES from './types'

const INITIAL_STATE = {
    listName: 'Favorite',
    list: ['matrix', 'last samurai', 'interstelar']
}

function reducer(state = INITIAL_STATE, action) {
    if (action == null)
        return state

    switch (action.type) {
        case MOVIES.ADD:
            return {
                ...state, list: [...state.list, action.item]
            }

        case MOVIES.RESET:
            return { ...state, list: [] }

        default:
            return state
    }
}

export default reducer