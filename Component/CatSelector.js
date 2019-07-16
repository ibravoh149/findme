import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

// const selectedStyle= (styles, isSelected)=>{
//     if(isSelected){
//         return styles.
//     }

// }

export const Selector = ({ selected, value, icon, onSelectItem, selectItem }) => {

    let selectedStyle = selected ? styles.selected : styles.notSelected;

    let selectedTextStyle = selected ? styles.selectedText : styles.notSelectedText

    return (
        <TouchableOpacity style={styles.selectorComponent}
            onPress={() => onSelectItem(selectItem)}
        >
            <View style={selectedStyle}>
                <Image
                    style={{ height: 25, width: 25 }}
                    source={icon}
                />
            </View>
            <Text style={selectedTextStyle}>{value}</Text>
        </TouchableOpacity>
    )
}

// #615959


const styles = StyleSheet.create({
    selectedText: {
        fontFamily: 'Ropa Sans',
        fontStyle: 'normal',
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: 15,
        color: '#000000',
        fontWeight: "bold"
    },

    notSelectedText: {
        fontFamily: 'Ropa Sans',
        fontStyle: 'normal',
        fontSize: 10,
        fontWeight: 'normal',
        lineHeight: 15,
        color: '#615959'
    },

    selected: {
        flex: 1,
        borderRadius: 35,
        borderWidth: 1.5,
        borderColor: '#0A27C3',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 70,

    },
    notSelected: {
        flex: 1,
        borderRadius: 35,
        borderWidth: 1.5,
        borderColor: '#D5D6DA',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        width: 70,
    },

    selectorComponent: {
        paddingHorizontal: 3,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
})