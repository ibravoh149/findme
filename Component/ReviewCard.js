import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Button } from "react-native";
import { starPNG } from "../assets/icons";


export const ReviewCard = () => {
    return (

        <View style={styles.reviews}>
            <View style={styles.reviewCard}>
                <Image
                    source={require('../assets/pictures/img3.jpg')}
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                />

                <View
                    style={{
                        flex: 1,
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignContent: "center",
                        marginLeft: 10

                    }}
                >
                    <Text style={styles.reviewCardTitle}>Michael Jay White</Text>
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={starPNG}
                            style={{ height: 16, width: 16 }}
                        />
                        <Image
                            source={starPNG}
                            style={{ height: 16, width: 16 }}
                        />
                        <Image
                            source={starPNG}
                            style={{ height: 16, width: 16 }}
                        />
                        <Image
                            source={starPNG}
                            style={{ height: 16, width: 16 }}
                        />
                        <Text style={styles.reviewCardTime}>one week ago</Text>

                    </View>
                    <Text style={{ justifyContent: "center" }}>
                        It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it hasa more-or-less
                    normal distribution of letters, as opposed to using 'Content here,
                   content here
 </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    reviews: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    reviewCard: {
        flexDirection: "row"
    },


    reviewCardTitle: {
        fontSize: 14,
        fontFamily: 'Ropa Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 15,
        color: '#000',
    },

    reviewCardTime: {
        fontSize: 11,
        fontFamily: 'Ropa Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 12,
        color: '#949090',
        textAlign: "center",
        alignSelf: "center",
        marginLeft: 7
    },

    reviewText: {
        fontSize: 13,
        fontFamily: 'Ropa Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 14,
        color: '#000',
    }


});
