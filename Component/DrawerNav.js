import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated, ScrollView, Image } from "react-native";
import { lovePNG, settingsPNG } from "../assets/icons";



export const DrawerNav = props => {
    const translateY = props.drawerOpenProgress.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });

    return <Animated.View style={{ transform: [{ translateY }], flex: 1 }}>
        <ScrollView style={{flex:1}}>
            <View style={{flex:1}}>
                <View style={{ backgroundColor: "#0A27C3", flex: 1, paddingBottom: 10 }}>
                    <Image
                        source={require('../assets/pictures/img3.jpg')}
                        style={{ width: 47, height: 47, borderRadius: 23.5, marginTop: 29, marginLeft: 13 }}
                    />
                    <View style={{ marginTop: 15, marginLeft: 13 }}>
                        <Text style={{ color: "#fff" }}>John Smith</Text>
                        <Text style={{ color: "#fff" }}>John@smith.com</Text>
                    </View>
                </View>

                <View style={{ flexGrow: 1, marginLeft: 18, marginVertical: 50, justifyContent: "space-around", alignContent: "space-around" }}>
                    <View style={{ flexDirection: "row", marginVertical: 5 }}>
                        <Image
                            source={lovePNG}
                            style={{ width: 16, height: 16 }}
                        />
                        <Text style={{ marginHorizontal: 20 }}>Favourites</Text>

                    </View>

                    <View style={{ flexDirection: "row", marginVertical: 5 }}>
                        <Image
                            source={settingsPNG}
                            style={{ width: 16, height: 16 }}
                        />
                        <Text style={{ marginHorizontal: 20 }}>Settings</Text>

                    </View>

                </View>

                <View style={{ backgroundColor: "blue", alignContent:"flex-end", justifyContent:"flex-end"}}>
                    <Text style={{color:"white"}}>Logout</Text>
                </View>
            </View>
        </ScrollView>
    </Animated.View>

}