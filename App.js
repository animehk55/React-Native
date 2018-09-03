import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';


export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header headerText='Sonagreens' />
        <AlbumList />
      </View>
    );
  }
}

