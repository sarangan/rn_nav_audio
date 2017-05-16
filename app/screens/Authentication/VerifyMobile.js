/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { connect } from 'react-redux';
import * as userProfileActions from '../../actions/userProfile';

class VerifyMobile extends Component {

  static navigationOptions = {
    title: 'VerifyMobile',
  };

  render() {
    console.log(this.props);
    const userProfile = {
      id: 1,
      mobile: '9910670242'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          VerifyMobile
        </Text>
        <Button onPress={() => {
          this.props.dispatch(userProfileActions.setUserProfile(userProfile));
          this.props.dispatch(userProfileActions.resetAccessToken());
        }} title="Verify Mobile"/>
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

export default connect()(VerifyMobile);
