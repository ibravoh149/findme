import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from "react-navigation";
// import  HomeScreen as Home from "./Screens";
// im
import { HomeScreen as Home, DetailScreen as Details, AuthScreen as Auth } from "./Screens";
import Map from "./Screens/Map";


const Navigator = createStackNavigator({
    Auth: {
        screen: Auth,
        navigationOptions: {
            header: null,
        },
    },
    Home: { screen: Home },
    Details: {
        screen: Details,
        navigationOptions: {
            header: null,
        },
    }

},
    // { initialRouteName: HomeScreen }
);

const navigate = createAppContainer(Navigator);

export default navigate