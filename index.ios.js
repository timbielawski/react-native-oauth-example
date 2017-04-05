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
  TouchableOpacity
} from 'react-native';
import OAuthManager from 'react-native-oauth';


const manager = new OAuthManager('AdBooker')
manager.configure({
  google: {
    callback_url: `put ios scheme here`,
    client_id: 'put client id here',
  }
});

export default class oauth extends Component {


  auth = () => {
    manager.authorize('google', {scopes: 'email'})
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
          <TouchableOpacity onPress={this.auth}>
        <Text style={styles.instructions}>
         Tap here for OAuth
        </Text>
         </TouchableOpacity>
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

AppRegistry.registerComponent('oauth', () => oauth);
