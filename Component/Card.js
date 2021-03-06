import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { bookmarkPNG } from "../assets/icons";


export const Card = ({ title, address, views, id, img, ratingCount, onCardSelect }) => {
const {height, width} = Dimensions.get("window")

    return (
        <TouchableOpacity style={styles.card}
            onPress={() => onCardSelect(id, title)}
        >
            <Text style={styles.cardTitle}>{title}</Text>
            <View style={{ height: 187, alignItems: 'center', flexDirection: 'row' }}>
                <Image
                    source={img}
                    style={{ height: 187}}
                />
            </View>

            <View style={styles.cardInfo}>
                <View>
                    <Text style={styles.rating}>Ratings</Text>
                    <View
                        style={{
                            paddingLeft:-2,
                        }}>
                            
                        <AirbnbRating
                            count={5}
                            // reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                            defaultRating={`${ratingCount}`}
                            size={16}
                            showRating={false}
                            isDisabled={true}
                        />
                    </View>

                    <Text style={styles.cardViews}>{`${views} view(s)`}</Text>
                </View>


                <View style={{ alignSelf: 'center', flex: 1, alignItems: 'flex-start', paddingLeft: 15 }}>
                    <Text style={styles.address}>{address}</Text>
                </View>


                <TouchableOpacity
                    onPress={() => alert(`${title} has been saved`)}
                >
                    <Image
                        source={bookmarkPNG}
                        style={{ height: 20, width: 20 }}
                    />
                </TouchableOpacity>

            </View>

        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    card: {
        // flex:1,
        height: 291,
        // backgroundColor: "red",
        marginTop: 5
    },

    cardTitle: {
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
        fontSize: 18,
        fontFamily: 'Rochester',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 23,
        color: '#000'
    },

    cardInfo: {
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 7
    },

    rating: {
        fontFamily: 'Alef',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 19,
        color: '#000000'


    },

    cardViews: {
        fontFamily: 'Alef',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 19,
        color: '#000000',
        marginTop: 4
    },

    address: {
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'Ropa Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 14,
        color: '#000'

    },




});