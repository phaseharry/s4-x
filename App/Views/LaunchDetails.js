import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class LaunchDetails extends React.Component{
  constructor(){
    super()
    this.state = {
      missionName: '',
      launchYear: '',
      rocket: {
        rocket_name: '',
        rocket_type: ''
      },
      telemetry: '',
      launchSite: {
        site_id: '',
        site_name: '',
        site_name_long: '',
      },
      launchSuccess: true,
      details: '',
    }
  }
  componentDidMount(){
    const flightNum = this.props.navigation.getParam('flightNum', '1')
    const mission = this.props.launches.find(launch => {
      return launch.flight_number === flightNum;
    })
    this.setState({
      missionName: mission.mission_name,
      launchYear: mission.launch_year,
      rocket: mission.rocket,
      telemetry: mission.telemetry,
      launchSite: mission.launch_site,
      launchSuccess: mission.launch_success,
      details: mission.details,
    })
  }
  render(){
    const { missionName, launchYear, rocket, telemetry, launchSite, launchSuccess, details } = this.state
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

const mapStateToProps = ({ launches }) => {
  return {
    launches
  }
}

export default connect(mapStateToProps, null)(LaunchDetails)