/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  // AppRegistry,
  StyleSheet,
  Text,
  View,
  // Button,
  // ListView
} from 'react-native';

import { DrawerItems } from 'react-navigation';

import { connect } from 'react-redux';
// import * as userProfileActions from '../../actions/userProfile';

// import { MyDrawerNavigator } from './routes';

class Drawer extends Component {

  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ height: 150, paddingTop: 24, backgroundColor: '#f54f53', justifyContent: 'center', alignItems: 'center' }}>
          <Text>Username</Text>
          <Text>Tenant</Text>
        </View>
        <DrawerItems {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect()(Drawer);
