import axios from 'axios'

//Types 
const ALL_LAUNCHES = 'ALL LAUNCHES'


//action creators
export const getLaunches = launchData => ({
  type: ALL_LAUNCHES, launchData
})

//thunks
export const loadLaunches = () => {
  return dispatch => {
    return axios.get('https://api.spacexdata.com/v3/launches/')
    .then(res => res.data)
    .then(launches => {
      launches.reverse();
      return dispatch(getLaunches(launches))
    })
    .catch(err => console.error(err))
  }
}

//reducer
const launchReducer = (state = [], action) => {
  switch(action.type){
    case ALL_LAUNCHES: 
      return [ ...state, ...action.launchData]
    default:
      return state
  }
}

export default launchReducer