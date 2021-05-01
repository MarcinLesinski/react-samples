import ACTORS from './types'

const INITIAL_STATE = {
    listName: 'Best',
    list: ['Tom Hanks', 'Brad Pit', 'Sylvester Stalone']
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTORS.ADD:
            return {
                ...state, list: [...state.list, action.item]
            }

        case ACTORS.RESET:
            return { ...state, list: [] }

        default:
            return state
    }
}

export default reducer