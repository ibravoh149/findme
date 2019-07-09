import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Alert, TouchableHighlight } from "react-native";
import { sharePNG, backPNG } from "../assets/icons";
import { ReviewCard, DetailBox } from "../Component";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'


class DetailScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            detailId: '',
            title: '',
            showMapModal: false


        }
        this._showMapModal = this._showMapModal.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
        this.topNav = this.topNav.bind(this);
    }

    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         headerTitle: 'Details'
    //         // headerLeft: (
    //         //     <TouchableOpacity style={{ paddingLeft: 20 }} >
    //         //         <Image
    //         //             source={menuPNG}
    //         //             style={{ height: 20, width: 20 }}
    //         //         />
    //         //     </TouchableOpacity>
    //         // ),
    //     };
    // };


    componentDidMount() {
        const { navigation } = this.props
        const detailId = navigation.getParam('id', 1);
        const title = navigation.getParam('title', 'title');
        this.setState({
            detailId,
            title
        })
    }

    _showMapModal = () => {
        this.setState({
            showMapModal: true
        })
    }


    setModalVisible(value) {
        this.setState({
            showMapModal: value
        })
    }

    topNav = () => {
        return <View style={{
            height: 50,
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            zIndex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15
        }}>
            <TouchableHighlight
                onPress={() => this.props.navigation.goBack()}
            >
                <Image
                    source={backPNG}
                    style={{ height: 20, width: 20, tintColor: "#FFF" }}
                />
            </TouchableHighlight>
            <TouchableHighlight>
                <Image
                    source={sharePNG}
                    style={{ height: 20, width: 20, tintColor: "#FFF" }}
                />
            </TouchableHighlight>
        </View>
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>

                    {this.topNav()}

                    <View style={styles.ImageViewCOntainer}>
                        <ScrollView style={{ flex: 1 }} horizontal={true}
                            contentContainerStyle={{
                                justifyContent: 'space-around',
                                alignContent: 'space-around',
                                flexGrow: 1
                            }}
                        >
                            <Image
                                source={require('../assets/pictures/img.jpg')}
                                style={{ height: 231, width: 304, marginRight: 5 }}
                            />
                            <Image
                                source={require('../assets/pictures/img2.jpg')}
                                style={{ height: 231, width: 304, marginRight: 5 }}
                            />
                            <Image
                                source={require('../assets/pictures/img3.jpg')}
                                style={{ height: 231, width: 304, marginRight: 5 }}
                            />
                        </ScrollView>


                    </View>

                    <DetailBox
                        data={this.state}
                        showMap={this._showMapModal}
                    />

                    
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />

                </ScrollView>

                <TouchableHighlight onPress={() => alert(`${this.state.title}`)}
                    style={{ height: 50, width: 50, borderRadius: 50, bottom: 10, right: 10, backgroundColor: "#0A27C3", position: "absolute" }}
                >
                    <View>
                        <Text style={{ fontSize: 48, lineHeight: 51, color: "#fff", textAlign: "center" }}>+</Text>

                    </View>
                </TouchableHighlight>

                <Modal
                    style={styles.modal}
                    animationType="slide"
                    transparent={false}
                    visible={this.state.showMapModal}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <View style={styles.mapView}>
                                {/* <MapView
                                    provider={PROVIDER_GOOGLE}
                                    style={styles.map}
                                    region={{
                                        latitude: 37.78825,
                                        longitude: -122.4324,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                /> */}

                                <Text>Map here</Text>

                            </View>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.showMapModal);
                                }}
                            >
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

            </View>
        )
    }
}

// require('../assets/pictures/img.jpg')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },

    ImageViewCOntainer: {
        height: 231,
        // flex:1
    },



    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 100
    },

    mapView: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    map: {
        ...StyleSheet.absoluteFillObject
    }

});

export default DetailScreen