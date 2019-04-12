import React from 'react'
import { Provider } from 'react-redux'

import store from './App/Store'
import AppContainer from './App/Navigation'

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default App