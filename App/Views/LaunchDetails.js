import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class LaunchDetails extends React.Component{
  render(){
    const { missionName, launchYear, rocket, telemetry, launchSite, launchSuccess, details } = this.props.launch
    return (
      <View>
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
  console.log(ownProps)
  return {
    launch: launches.find(launch => launch.flight_number === flightNum)
  }
}

export default connect(mapStateToProps, null)(LaunchDetails)