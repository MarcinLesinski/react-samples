import { bindActionCreators } from 'redux'
import ACTORS from './types'


const add = item => ({ type: ACTORS.ADD, item })

const actions = (dispatch) => bindActionCreators({ add }, dispatch)

export default actions