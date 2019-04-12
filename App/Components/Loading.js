import React from 'react'
import { Image } from 'react-native'

import SpaceX from '../Assets/spacex-logo.png'

class Loading extends React.Component{
  render(){
    return (
      <Image source={SpaceX}/>
    )
  }
}

export default Loading