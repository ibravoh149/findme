import React, { Component } from 'react'
import {
    View, Text, StyleSheet, ScrollView, Image,
    TouchableOpacity, Modal, Alert, TouchableHighlight, TextInput
} from "react-native";
import { sharePNG, backPNG } from "../assets/icons";
import { ReviewCard, DetailBox } from "../Component";
import { AirbnbRating } from 'react-native-ratings';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'


class DetailScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            detailId: '',
            title: '',
            showMapModal: false,
            showReviewModal: false,
            review: "",
            star: 0

        }
        this._showMapModal = this._showMapModal.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
        this.topNav = this.topNav.bind(this);
        this._showReviewModal = this._showReviewModal.bind(this);
        this._addReviewModal = this._addReviewModal.bind(this);
        this._onFinishRating = this._onFinishRating.bind(this);
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


    _showReviewModal = () => {
        this.setState({
            showReviewModal: true
        })
    }

    _onFinishRating = (value) => (
        this.setState({
            star: value
        })
    )

    setModalVisible(value, whichModal) {
        switch (whichModal) {
            case "map":
                this.setState({
                    showMapModal: value
                })
                break;

            case "review":
                this.setState({
                    showReviewModal: value
                })
                break;

            default:
                break;
        }

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

    _addReviewModal = () => {
        return <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.showReviewModal}
        >

            <ScrollView style={[styles.modalContainer, { padding: 20 }]}>
                <TouchableHighlight
                    style={styles.cancelButtonContanier}
                    onPress={() => {
                        this.setModalVisible(!this.state.showReviewModal, 'review');
                    }}
                >
                    <Text style={styles.cancelButton}>X</Text>
                </TouchableHighlight>
                <View style={styles.modalContentContainer}>




                    {/* user info */}
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={require('../assets/pictures/img3.jpg')}
                            style={{ width: 40, height: 40, borderRadius: 20 }}
                        />
                        <Text style={styles.addReviewUsername}>Michael Jay White</Text>
                    </View>

                    {/* rating */}
                    {/* <View
                        style={{ backgroundColor: "green", paddingLeft: -2 }}                   > */}
                    <AirbnbRating
                        count={5}
                        reviews={["Terrible", "Bad", "Good", "Very Good", "Impeccable"]}
                        defaultRating={this.state.star}
                        size={31}
                        showRating={true}
                        onFinishRating={(value) => this.setState({ star: value })}
                    />
                    {/* </View> */}

                    {/* <View> */}
                    <TextInput
                        // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ review: text })}
                        value={this.state.review}
                        multiline={true}
                        placeholder="share your experience"
                    />
                    {/* </View> */}

                    <TouchableHighlight
                        style={{ marginTop: 50, width: 149, height: 31, backgroundColor: "#0A27C3", borderRadius: 15, alignSelf: "center", alignContent: "center", justifyContent: "center" }}
                        onPress={() => alert(`your review is ${this.state.star} star(s) and ${this.state.review}`)}
                    >
                        <Text style={{ color: "white", textAlign: "center" }}>Submit</Text>
                    </TouchableHighlight>


                </View>
            </ScrollView>

        </Modal>
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>

                    {this.topNav()}

                    <View style={styles.imageViewContainer}>
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

                <TouchableHighlight onPress={() => this._showReviewModal()}
                    style={{ height: 50, width: 50, borderRadius: 25, bottom: 10, right: 10, backgroundColor: "#0A27C3", position: "absolute" }}
                >
                    <View>
                        <Text style={styles.floatingButton}>+</Text>

                    </View>
                </TouchableHighlight>

                {this._addReviewModal()}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.showMapModal}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.modalContainer}>
                        <View style={{ padding: 20 }}>
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
                                    this.setModalVisible(!this.state.showMapModal, 'map');
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
    modalContainer: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.25)'
    },

    imageViewContainer: {
        height: 231,
        // flex:1
    },

    modalContentContainer: {
        padding: 32,
        marginVertical: 100,
        backgroundColor: "#fff",
        borderRadius: 15,
        flex: 1
    },

    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        padding: 100
    },

    mapView: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    map: {
        ...StyleSheet.absoluteFillObject
    },

    addReviewUsername: {
        fontSize: 14,
        fontFamily: 'Ropa Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 15,
        color: '#000000',
        marginLeft: 13,
        marginTop: 5,
        fontWeight: 'bold'
    },
    floatingButton: {
        fontSize: 48,
        lineHeight: 51,
        color: "#fff",
        textAlign: "center"
    },
    cancelButton: {
        fontSize: 15,
        // lineHeight: 51,
        color: "#000",
        textAlign: "center"
    },
    cancelButtonContanier:{
        position: "absolute",
        right: 0,
        top: 100,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        borderRadius: 15,
        height: 30,
        width: 30,
        zIndex: 1,
        flex:1,
        justifyContent:"center",
        alignContent:"center"
    }

});

export default DetailScreen