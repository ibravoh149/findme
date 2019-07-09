import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Button } from "react-native";
import { clubIconPNG, hotelIconPNG, restaurantIconPNG, bookmarkPNG, starPNG, menuPNG } from "../assets/icons";
import { Selector, Card } from "../Component";
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import clubIcon  from "../assets/icons/disco-ball.png";


class HomeScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            catSelector: [
                { id: '1', value: "Clubs", icon: clubIconPNG, selected: false },
                { id: '2', value: "Restaurants", icon: restaurantIconPNG, selected: false },
                { id: '3', value: "Hotels", icon: hotelIconPNG, selected: false },
                { id: '4', value: "Lounges", icon: hotelIconPNG, selected: false },
            ],

            data: [
                { id: '1', title: "San Andress", address: "wall street, London", views: 200, ratingCount:4 },
                { id: '2', title: "The Highwaymen", address: "victoria island, Lagos", views: 100, ratingCount:5 },
                { id: '3', title: "The Pivot", address: "34 Palawan, Italy", views: 20, ratingCount:4 },
                { id: '4', title: "Trench", address: "34 10 Bode Thomas hdhsjdkdkdjjhuwhewuhsh shdhud dhddhdi bhdhhd", views: 400, ratingCount:1 }
            ],

            selected: new Map()
        }
        this._renderCard = this._renderCard.bind(this);
        this._keyExtractor = this._keyExtractor.bind(this);
        this._displaySelector = this._displaySelector.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'FindMe',
            headerLeft: (
                <TouchableOpacity style={{ paddingLeft: 20 }} >
                    <Image
                        source={menuPNG}
                        style={{ height: 20, width: 20 }}
                    />
                </TouchableOpacity>
            ),
        };
    };


    componentDidMount() {
        let catSelector = [...this.state.catSelector];
        catSelector[0].selected = true;
        this.setState((state) => {
            catSelector
        })
    }

    _renderCard = ({ item }) => (
        <Card
            title={item.title}
            address={item.address}
            img={require('../assets/pictures/img.jpg')}
            views={item.views}
            id={item.id}
            onCardSelect={this._onSelectCard}
            ratingCount={item.ratingCount}
        />
    )

    _keyExtractor = (item, index) => item.id;


    _selected() {

    }

    _select = (id) => {

        // this.setState((state) => {
        //     // // copy the map rather than modifying state.
        //     const selected = new Map(this.state.selected);
        //     selected.set(id, !selected.get(id)); // toggle
        //     return { selected };
        // });


        this.setState((state) => {

            let catSelector = [...this.state.catSelector];

            for (let selector of catSelector) {
                // if (selector['id'] = id) {
                //     selector['selected'] = true
                // } else {
                //     selector['selected'] = false;
                // }

                selector['selected'] = false

            }
            return { catSelector }
        })

    }



    _displaySelector = () => {

        return this.state.catSelector.map((selector, index) => {
            return <Selector
                key={index}
                selectItem={selector.id}
                selected={!!selector.selected}
                // selected={!!this.state.selected.get(selector.id)}
                value={selector.value}
                icon={selector.icon}
                onSelectItem={this._select}

            />
        })
    }


    _onSelectCard = (id, title) => {
        this.props.navigation.navigate('Details', {
            id,
            title
        })
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.selectCat}>
                    <Text style={styles.questionText}>What are You looking for?</Text>
                    <ScrollView
                        style={{
                            flex: 1,
                        }}
                        horizontal={true}
                        contentContainerStyle={{
                            alignContent: 'space-around',
                            justifyContent: 'space-around',
                            flexGrow: 1
                        }}>


                        {this._displaySelector()}


                    </ScrollView>

                </View>

                <FlatList
                    data={this.state.data}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderCard}
                />



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

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    questionText: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 18,
        fontFamily: 'Ropa Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 19,
        color: '#000'

        // 
    },

    selectCat: {
        height: 150,
        margin: 5,
        padding: 15,
    },



});

export default HomeScreen