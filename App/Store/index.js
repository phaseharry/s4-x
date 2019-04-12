import { createStore, combineReducers, applyMiddleware } from 'redux'
// import logger from 'redux-logger' not installed yet
import thunk from 'redux-thunk'

import launchReducer from './reducers/launches'
import rocketsReducer from './reducers/rockets'

const reducer = combineReducers({
  launches: launchReducer,
  rockets: rocketsReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store; 