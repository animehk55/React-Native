import React, { Component } from 'react';
import { View } from 'react-native';
// import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';
// import * as firebase from 'firebase';


export default class App extends Component {

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
