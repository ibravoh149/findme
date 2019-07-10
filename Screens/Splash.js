import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Image, Text } from 'react-native';
import { logoPNG } from "../assets/icons";




export default class SlashScreen extends Component {


componentDidMount(){
    setTimeout(()=>{
        this.props.navigation.navigate('Auth');
    }, 4000)
}

    render() {
        return (
            <View style={styles.container}>
                {/* <View style={{ justifyContent:"center", alignContent:"center", flex:1}}> */}
                <View style={{ marginVertical: 20, alignItems: "center" }}>
                    <Text style={{ color: "#fff", fontSize: 30, fontFamily: "times new roman" }}>Findme App</Text>
                </View>

                <View style={{ alignItems: "center" }}>
                    <Image
                        source={logoPNG} style={{ width: 67, height: 94, tintColor: "#fff" }}
                    />
                </View>



                <View style={{ marginVertical: 20, alignItems: "center" }}>
                    <ActivityIndicator size="small" color="#fff" />
                </View>
            </View>
        )
    }

};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#0A27C3",

    },
});