import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyC8B88ZHO2T3jsDaubm6c5QcJEWW_tS3jc',
    authDomain: 'authenticationnative.firebaseapp.com',
    databaseURL: 'https://authenticationnative.firebaseio.com',
    projectId: 'authenticationnative',
    storageBucket: 'authenticationnative.appspot.com',
    messagingSenderId: '2437047853'
  }); 
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
