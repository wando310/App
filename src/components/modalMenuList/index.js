import React, { useState, useContext } from 'react'

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import Iconfastfood from 'react-native-vector-icons/Ionicons'
import IconProgressclose from 'react-native-vector-icons/MaterialCommunityIcons'
import IconDrink from 'react-native-vector-icons/Entypo'
import IconSwarm from 'react-native-vector-icons/Entypo'
import IconPizzaslice from 'react-native-vector-icons/FontAwesome5'
import IconBirthdaycake from 'react-native-vector-icons/FontAwesome5'

import { AutoContext } from '../../context/auth'
import * as Animation from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function ModalMenuList() {

    const navigation = useNavigation()

    const [show, setShow] = useState(true)

    const { sizeshow, sizeMode } = useContext(AutoContext)

    function hiddenMode() {
        sizeMode(-330)
    }

    function drinks() {
        hiddenMode()
        navigation.reset({ routes: [{ name: 'listDrinkMenu' }] })
    }

    function lunchs() {
        hiddenMode()
        navigation.reset({ routes: [{ name: 'listLunchMenu' }] })
    }

    function cakes() {
        hiddenMode()
        navigation.reset({ routes: [{ name: 'listCakeMenu' }] })
    }

    function sweet() {
        hiddenMode()
        navigation.reset({ routes: [{ name: 'listSweetMenu' }] })
    }

    function pizza() {
        hiddenMode()
        navigation.reset({ routes: [{ name: 'listPizzaMenu' }] })
    }

    return (

        <View style={!show ? styles.hiddenMenu : [styles.hiddenMenu, { marginLeft: sizeshow.size }]}>

            <TouchableOpacity onPress={hiddenMode} style={styles.close}>
                <IconProgressclose style={styles.IconClose} name='menu-open' />
            </TouchableOpacity>

            <View style={styles.containerLogo}>
                <Animation.Image animation='fadeInUpBig' style={styles.logo} source={require('../../../assets/image/logo.png')} />
            </View>

            <TouchableOpacity onPress={lunchs} style={styles.containerIcon_1}>
                <Iconfastfood style={styles.Icon} name='fast-food' />
                <Text style={styles.textIcon}>Lanche</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={cakes} style={styles.containerIcon_1}>
                <IconBirthdaycake style={styles.Icon} name='birthday-cake' />
                <Text style={styles.textIcon}>Bolos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={drinks} style={styles.containerIcon_1}>
                <IconDrink style={styles.Icon} name='drink' />
                <Text style={styles.textIcon}>Bebidas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={sweet} style={styles.containerIcon_1}>
                <IconSwarm style={styles.Icon} name='swarm' />
                <Text style={styles.textIcon}>Doces</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pizza} style={styles.containerIcon_1}>
                <IconPizzaslice style={styles.Icon} name='pizza-slice' />
                <Text style={styles.textIcon}>Pizzas</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    hiddenMenu: {
        width: '80%',
        height: '100%',
        position: 'absolute',
        zIndex: 1,
        marginLeft: -330,
        top: 50,
        backgroundColor: '#0e3a73',
        alignItems: 'center'
    },
    IconClose: {
        color: '#e85d04',
        fontSize: 35,

    },
    close: {
        width: 40,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: 230,
    },
    containerIcon_1: {
        width: 280,
        backgroundColor: 'rgba(0,0,0,.2)',
        margin: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderColor: '#118ab2',
        borderTopWidth: 1
    },
    Icon: {
        fontSize: 30,
        marginRight: 10,
        color: '#734734',
        padding: 7,
        borderRadius: 10
    },
    textIcon: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#d7d7d9'
    },
    containerLogo: {
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 0
    },
    logo: {
        width: 150,
        height: 150,
    },
})