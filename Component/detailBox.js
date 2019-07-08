import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Button } from "react-native";
import { clubIconPNG, hotelIconPNG, restaurantIconPNG, bookmarkPNG, starPNG, phonePNG, emailPNG } from "../assets/icons";



export const DetailBox = ({ data, showMap }) => {
    const { title } = data;
    return (
        <View style={styles.detailBox}>
            <Text style={styles.textTitle}>{title}</Text>

            <View>
                <View style={{ justifyContent: "center" }}>
                    <View
                        style={{ justifyContent: "flex-start", flexDirection: "row" }}
                    >
                        <Text style={{ color: "white", fontSize: 16, top: -3, marginRight: 2 }}>4.5</Text>
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
                    </View>

                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Text style={{ color: "white" }}>Wall street, London</Text>
                        <TouchableOpacity onPress={showMap}
                            style={styles.takeMeThereButton}>
                            <Text style={{ color: "#0A27C3" }}>Take me there</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: "row", marginTop: 24 }}>
                        <Image
                            source={phonePNG}
                            style={{ height: 16, width: 16, backgroundColor: "#fff" }}
                        />
                        <Text style={{ marginLeft: 5, color: "white", fontSize: 12, top: -2 }}>+2348077654786</Text>

                    </View>

                    <View style={{ flexDirection: "row", marginTop: 9 }}>
                        <Image
                            source={emailPNG}
                            style={{ height: 16, width: 16, backgroundColor: "#fff" }}
                        />
                        <Text style={{ marginLeft: 5, color: "white", fontSize: 12, top: -2 }}>johnsnow@got.com</Text>

                    </View>


                    <View style={{ flext: 1, justifyContent: "space-evenly", alignContent: "space-around", paddingVertical: 30 }}>
                        <Text style={styles.aboutHeader}>About</Text>
                        <Text style={styles.about}>
                            It is a long established fact that a reader will be distracted
by the readable content of a page when looking at its layout.
The point of using Lorem Ipsum is that it hasa more-or-less
normal distribution of letters, as opposed to using 'Content here,
content here'...</Text>
                    </View>


                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    detailBox: {
        height: 286,
        marginHorizontal: 20,
        flex: 1,
        backgroundColor: '#0A27C3',
        color: "#fff",
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 3, height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.8,
        padding: 15,
        top: -30
    },

    textTitle: {
        color: "#fff",
        fontFamily: "Rochester",
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: 23,
        fontWeight: "normal",
        textAlign: "center"
    },

    takeMeThereButton: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "white",
        alignSelf: "flex-end",
        alignContent: "flex-start",
        width: 149,
        height: 31,
        borderRadius: 15,
        marginHorizontal: 15,
        top: -5

    },

    aboutHeader: {
        fontSize: 14,
        fontFamily: 'Ropa Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 14,
        color: '#fff'

    },

    about: {
        textAlign: 'left',
        fontSize: 13,
        fontFamily: 'Ropa Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 14,
        color: '#fff',
        marginTop: 5

    },

});