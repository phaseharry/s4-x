import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import BackButton from '../Components/BackButton'

class LaunchDetails extends React.Component{
  static navigationOptions = {
    header: null
  }
  render(){
    const { missionName, launchYear, rocket, telemetry, launchSite, launchSuccess, details } = this.props.launch
    return (
      <View>
        <BackButton navigation={this.props.navigation}/>
        <Text>{missionName}</Text>
        <Text>{launchYear}</Text>
        <Text>{details? details : 'No further details'}</Text>
        <Text>{rocket.rocket_name}</Text>
      </View>
    )
  }
}

const mapStateToProps = ({ launches }, ownProps) => {
  const flightNum = ownProps.navigation.getParam('flightNum')
  return {
    launch: launches.find(launch => launch.flight_number === flightNum)
  }
}

export default connect(mapStateToProps, null)(LaunchDetails)