import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from "react-native";
import { logoPNG } from "../assets/icons";


class AuthScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            username: "",
            confirmPassword: "",
            showLogin: true,
            showRegister: false
        }
        this._showLogin = this._showLogin.bind(this);
        this._showRegisterForm = this._showRegisterForm.bind(this);
        this._loginButton=this._loginButton.bind(this)
    }



    _toggleLoginRegister = () => {
        this.setState((previouState) => ({
            showLogin: !previouState.showLogin,
            showRegister: !previouState.showRegister
        }));
    }

    _loginButton=()=>{
        this.props.navigation.push('Home');
    }


    _showLogin = () => {
        return (

            <View>
                {/* input field */}
                <View style={styles.textFields}>
                    <TextInput
                        style={{ borderBottomWidth: 1, borderBottomColor: '#E2DBDB' }}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        placeholder="Email"
                    // inlineImageLeft="email"

                    />

                    <TextInput
                        style={{ borderBottomWidth: 1, borderBottomColor: '#E2DBDB' }}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        placeholder="password"
                    // inlineImageLeft="email"
                    />
                </View>

                <TouchableOpacity
                    style={styles.proceedButton}
                    onPress={this._loginButton}>
                    <Text style={{ textAlign: "center", color: "white" }}>Login</Text>
                </TouchableOpacity>

                <View style={styles.haveAccount}>
                    <Text>Don't an account?</Text>
                    <Text
                        onPress={() => this._toggleLoginRegister()}
                        style={{ color: "#0A27C3" }}> Signup</Text>
                </View>
            </View>
        )
    }


    _showRegisterForm = () => {
        return (

            <View>
                {/* input field */}
                <View style={styles.textFields}>
                    <TextInput
                        style={{ borderBottomWidth: 1, borderBottomColor: '#E2DBDB' }}
                        onChangeText={(text) => this.setState({ username: text })}
                        value={this.state.username}
                        placeholder="Username"
                    // inlineImageLeft="email"

                    />

                    <TextInput
                        style={{ borderBottomWidth: 1, borderBottomColor: '#E2DBDB' }}
                        onChangeText={(text) => this.setState({ email: text })}
                        value={this.state.email}
                        placeholder="Email"
                    // inlineImageLeft="email"

                    />

                    <TextInput
                        style={{ borderBottomWidth: 1, borderBottomColor: '#E2DBDB' }}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={this.state.password}
                        placeholder="password"
                    // inlineImageLeft="email"
                    />

                    <TextInput
                        style={{ borderBottomWidth: 1, borderBottomColor: '#E2DBDB' }}
                        onChangeText={(text) => this.setState({ confirmPassword: text })}
                        value={this.state.confirmPassword}
                        placeholder="confirm password"
                    // inlineImageLeft="email"
                    />
                </View>

                <TouchableOpacity
                    onPress={() => this._toggleLoginRegister()}
                    style={styles.proceedButton}>
                    <Text style={{ textAlign: "center", color: "white" }}>Register</Text>
                </TouchableOpacity>

                <View style={styles.haveAccount}>
                    <Text>have an account?</Text>
                    <Text
                        onPress={() => this._toggleLoginRegister()}
                        style={{ color: "#0A27C3" }}> Login</Text>
                </View>
            </View>
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ padding: 46 }}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={logoPNG} style={{ width: 67, height: 94, tintColor: "#0A27C3" }}
                        />
                    </View>

                    {this.state.showLogin ? this._showLogin() : <View></View>}
                    {this.state.showRegister ? this._showRegisterForm() : <View></View>}



                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:"center",
        alignContent: "center"
    },

    logoContainer: {
        justifyContent: "center",
        alignContent: "center",
        // marginTop: 130,
        alignSelf: "center",
        flex: 1,
    },

    textFields: {
        justifyContent: "center",
        alignContent: "center",
        marginTop: 20
    },
    proceedButton: {
        width: 149,
        height: 31,
        backgroundColor: "#0A27C3",
        borderRadius: 15,
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        marginTop: 51
    },
    haveAccount:{ 
        flexDirection: 'row', 
        alignContent: "center", 
        justifyContent: "center", 
        marginTop: 10 }
})

export default AuthScreen;