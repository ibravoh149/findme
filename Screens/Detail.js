import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Alert, TouchableHighlight } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ReviewCard, DetailBox } from "../Component";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



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
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Details'
            // headerLeft: (
            //     <TouchableOpacity style={{ paddingLeft: 20 }} >
            //         <Image
            //             source={menuPNG}
            //             style={{ height: 20, width: 20 }}
            //         />
            //     </TouchableOpacity>
            // ),
        };
    };


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


    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
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
                    style={{ height: 50, width: 50, borderRadius: 50, bottom: 10, left: 350, backgroundColor: "#0A27C3" }}
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
                            <Text>Hello World!</Text>

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
     }

});

export default DetailScreen