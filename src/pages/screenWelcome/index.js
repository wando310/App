import React, { useContext, useState } from 'react'

import { StyleSheet, SafeAreaView } from 'react-native'
import * as Anima from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

import { AutoContext } from '../../context/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function ScreenWelcome() {

    const navigate = useNavigation()

    const { sizeMode } = useContext(AutoContext)

    const [st, setSt]= useState(true)
    const home = async () => {           

        if(st){
            setTimeout(() => {
                sizeMode(-330)
                    navigate.reset({ routes: [{name: 'Menu'}] })              
            }, 4000);
            setSt(false)
        }
    }

    home()

    return (
        <SafeAreaView style={styles.container}>
            <Anima.Image animation='zoomInDown' duration={4000} style={styles.logo} source={require('../../../assets/image/logo.png')} />
        </SafeAreaView>
    )
}

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#023e8a'
    },
    logo: {
        width: 170,
        height: 170,
        marginTop: 230
    },

})