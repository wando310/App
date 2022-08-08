import React from "react"

import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import IconHomeCart from 'react-native-vector-icons/MaterialCommunityIcons'

export default function footerCompenent({ icon, title }) {

    const navigation = useNavigation()

    return (
        <View style={styles.footer}>
            <TouchableOpacity  onPress={() => { navigation.reset({ routes: [{ name:'Menu' }] }) }} style={styles.personal}>
                <IconHomeCart style={styles.icon} name={icon} />
                <Text style={styles.text} >{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#2f2859',
        padding: 5
    },
    personal: {   
        height:60,
        alignItems: 'center',
        justifyContent:'center',       
    },
    address: {
        alignItems: 'center'
    },
    icon: {
        fontSize: 25,
        color: '#fff'
    },
    text: {
        fontSize: 10,
        color: '#fff',
        fontWeight: '600',
    }
})