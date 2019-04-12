import axios from 'axios'

//action types
const LOAD_ROCKETS = 'LOAD_ROCKETS'



//action creators 
const getRockets = rockets => ({
  type: LOAD_ROCKETS,
  rockets
})


//thunks
export const loadRockets = () => {
  return dispatch => {
    return axios.get('https://api.spacexdata.com/v3/rockets/')
    .then(res => res.data)
    .then(rockets => dispatch(getRockets(rockets)))
    .catch(err => console.error(err))
  }
}

const rocketsReducer = (state = [], action) => {
  switch(action.type){
    case LOAD_ROCKETS:
      return action.rockets
    default:
      return state
  }
}

export default rocketsReducer