import { createStore } from 'redux'
import initialState from 'store/initialState'

import { actions as app } from 'components/app'
import { actions as logout } from 'components/logout'
import root from 'store/actions'

const actions = {
  ...app,
  ...logout,
  ...root
}

export default createStore(
  (state = initialState, { type, payload }) => {
    return actions[type] ? actions[type](state, payload) : state
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)
