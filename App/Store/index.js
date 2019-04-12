import { createStore, combineReducers, applyMiddleware } from 'redux'
// import logger from 'redux-logger' not installed yet
import thunk from 'redux-thunk'

import launchReducer from './launches'

const reducer = combineReducers({
  launches: launchReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store; 