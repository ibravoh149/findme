import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated, ScrollView } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    ...StyleSheet.absoluteFillObject,
    //    height: 400,
    //    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});




const custom = props => {

  const translateX = props.drawerOpenProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  //  <View>
  //    <MapView
  //      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
  //      style={styles.map}
  //      region={{
  //        latitude: 37.78825,
  //        longitude: -122.4324,
  //        latitudeDelta: 0.015,
  //        longitudeDelta: 0.0121,
  //      }}
  //    >
  //    </MapView>
  //    <Text>am in a drawer</Text>
  //  </View>

  return <Animated.View style={{ transform: [{ translateX }] }}>
    <ScrollView>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
      <Text>am in a drawer</Text>
    </ScrollView>
  </Animated.View>

};

export default custom;