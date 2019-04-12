import { createStackNavigator, createAppContainer } from "react-navigation"

import StartUp from '../Views/StartUp'
import Launches from '../Views/Launches'
import LaunchDetails from '../Views/LaunchDetails'

const AppNavigator = createStackNavigator(
  {
    StartUp,
    Launches,
    LaunchDetails
  }, 
  { 
    initialRouteName: 'StartUp'
  }
)

export default createAppContainer(AppNavigator)
