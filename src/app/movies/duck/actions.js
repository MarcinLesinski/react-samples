import { bindActionCreators } from 'redux'
import MOVIES from './types'

const add = (item) => ({ type: MOVIES.ADD, item })
// item is not needed
const reset = (item) => ({ type: MOVIES.RESET, item })
// my way, but doesnt work.... yet!
const actions = (dispatch) => bindActionCreators({ add }, dispatch)


export default {
    add,
    reset
}