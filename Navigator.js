import React, { Component } from 'react';
import { createAppContainer, createStackNavigator, createSwitchNavigator, DrawerNavigator, createDrawerNavigator } from "react-navigation";
import  {DrawerNav} from "./Component/DrawerNav";
import { HomeScreen as Home, DetailScreen as Details, AuthScreen as Auth } from "./Screens";
import Splash from "./Screens/Splash";
import Map from "./Screens/Map";

// const AuthLoading = createSwitchNavigator({
//     Splash: {
//         screen: Splash,
//         navigationOptions: {
//             header: null,
//         },
//     },
// })

// const Drawer = createDrawerNavigator({
//     Map:{
//         screen:Map
//     }
// })


const MainStack = createDrawerNavigator({


    Home: { screen: Home },
    Details: {
        screen: Details,
        navigationOptions: {
            header: null,
        },
    },
    Map: {
        screen: DrawerNav
    }
},
    {
        contentComponent: DrawerNav
    })

const AuthStack = createStackNavigator({
    Auth: {
        screen: Auth,
        navigationOptions: {
            header: null,
        },
    },
})


const Navigator = createSwitchNavigator({

    Splash: {
        screen: Splash,
        navigationOptions: {
            header: null,
        },
    },
    // Drawer: Drawer,


    Auth: AuthStack,

    Main: MainStack,






},
    // { initialRouteName: HomeScreen }
);

const navigate = createAppContainer(Navigator);

export default navigate