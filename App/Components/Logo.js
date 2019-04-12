import React from 'react'
import { Image } from 'react-native'
import SpaceX from '../Assets/spacex-logo.png'

class Header extends React.Component{ //will turn this into a header with a icon for rockets and an icon for launches
  render(){
    return <Image source={SpaceX} style={{width: 140, height: 35}}/>
  }
}

export default Header