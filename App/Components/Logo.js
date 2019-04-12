import React from 'react'
import { Image } from 'react-native'
import SpaceX from '../Assets/spacex-logo.png'

class Logo extends React.Component{
  render(){
    return <Image source={SpaceX} style={{width: 140, height: 35}}/>
  }
}

export default Logo