

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import AppNavigator from './Navigator';
// import { SearchSource } from '@jest/core';


type Props = {};
export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

