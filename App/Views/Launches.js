import React from 'react';
import { StyleSheet, FlatList, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux'

import Logo from '../Components/Logo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});

class Launches extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo/>
  }
  renderLaunch = item => {
    const { navigation } = this.props
    return (
      <Button 
        style={styles.item} 
        key={item.mission_id} 
        title={item.mission_name} 
        onPress={() => navigation.navigate('LaunchDetails', {
          flightNum: item.flight_number
        })}
      />
    )
  }
  render() {
    const { launches } = this.props
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList 
          data={launches} 
          renderItem={({item}) => this.renderLaunch(item)}
          keyExtractor={(item, index) => index.toString()}  
        />
      </ScrollView>
    );
  }
} 

const mapStateToProps = state => {
  return {
    launches: state.launches
  }
}

export default connect(mapStateToProps, null)(Launches)