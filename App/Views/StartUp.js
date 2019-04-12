import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux'

import { loadLaunches } from '../Store/reducers/launches'
import { loadRockets } from '../Store/reducers/rockets'
import { removeStartUp } from '../Navigation/helpers'
import SpaceX from '../Assets/spacex-logo.png'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start'
  },
  image: {
    height: height * 0.1,
    width: width
  }
})

class Launches extends React.Component {
  static navigationOptions = {
    header: null
  };
  componentDidMount(){
    return this.props.initialLoad()
    .then(() => {
      setTimeout(() => {
        this.props.navigation.dispatch(removeStartUp)
      }, 2000)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={SpaceX} style={styles.image}/>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initialLoad: () => {
      dispatch(loadLaunches())
      dispatch(loadRockets())
    }
  }
}

export default connect(null, mapDispatchToProps)(Launches)
