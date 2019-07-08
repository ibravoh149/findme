import React, {Component } from 'react';
import { createAppContainer, createStackNavigator } from "react-navigation";
import { HomeScreen, DetailScreen } from "./Screens";



const Navigator = createStackNavigator({
    Home:HomeScreen,
    Details:DetailScreen
    
},
{initialRouteName:"Home"});

const navigate = createAppContainer(Navigator);

export default navigate