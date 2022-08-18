import React, { useState, useContext, useEffect } from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'

import * as Animation from 'react-native-animatable'

import Iconsegment from 'react-native-vector-icons/MaterialIcons'
import Iconsearch from 'react-native-vector-icons/Ionicons'
import Iconshoppingcart from 'react-native-vector-icons/FontAwesome'

import { AutoContext } from '../../context/auth'
import { useNavigation } from '@react-navigation/native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import ModalShowMwssage from '../../components/messageShow'

export default function HeaderMenu() {

    const { sizeMode } = useContext(AutoContext)
    function showMode() {
        sizeMode(0)
    }

    //pegando item localStorage
    const [totalCart, setTotalCart] = useState(0)
    async function getCart() {
        const responseTotal = await AsyncStorage.getItem('@qnt_cart')
        const getTotal = responseTotal ? JSON.parse(responseTotal) : []
        setTotalCart(getTotal[getTotal.length - 1])
    }

    useEffect(() => { getCart() }, [])

    const navigation = useNavigation()

    const [showw, setShoww] = useState(-200)
    function shwoDow() {
        if (totalCart === undefined) {
            setShoww(50)
            setTimeout(() => {
                setShoww(-100)
            }, 2000);
            return
        } else {
            navigation.reset({ routes: [{ name: 'Cart' }] })
        }
    }

    useEffect(() => { shwoDow }, [showw])

    return (
        <SafeAreaView style={styles.containerMenu}>

            {/* Message Show */}
            <ModalShowMwssage show={showw} />

            <View style={styles.menuPrincipal}>
                <View>
                    <TouchableOpacity onPress={showMode} style={styles.menu}>
                        <Iconsegment style={styles.Iconsegment} name='menu-open' />
                        <Text style={styles.textMenu}>MENU</Text>
                    </TouchableOpacity>
                </View>
                <Image style={styles.logoFood} source={require('../../../assets/image/logoFood1.png')} />
                <TouchableOpacity onPress={shwoDow} style={styles.containerCard}>
                    <View style={styles.card}>
                        <Text style={styles.qntCart}>{totalCart}</Text>
                        <Iconshoppingcart style={styles.Iconcard} name='opencart' />
                    </View>
                </TouchableOpacity>
            </View>
            
            <View style={styles.containerStatus}>
                <TouchableOpacity onPress={() => { navigation.reset({ routes: [{ name: 'screenMyrequests' }] }) }} style={styles.pedidos}>
                    <Text style={styles.pedidosText}>Meus pedidos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('screenWaiting') }} style={styles.pedidos}>
                    <Text style={styles.pedidosText}>Status do pedido</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerMenu: {
        height: 210,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0,
        backgroundColor: '#2f2859',
    },
    menuPrincipal: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        paddingLeft: 15,
        paddingRight: 15,       
        marginTop: -30
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textMenu: {
        color: '#457b9d',
        marginRight: 5,
        fontWeight: '700'
    },
    Iconsegment: {
        fontSize: 30,
        color: '#023e8a',
        transform: [{ rotate: "180deg" }],
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -5
    },
    Iconcard: {
        fontSize: 25,
        color: '#6da7f2',
    },
    qntCart: {
        color: '#615cf2',
        fontWeight: '800',
        fontSize: 15,
        marginBottom: -5
    },
    containerStatus: {
        flexDirection: 'row',
        marginTop: 20,

    },
    pedidosText: {
        color: '#cecece',
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: '900',
        fontSize: 14,
        marginTop: 0,
        marginLeft: 5
    },
    imgBacgroundLogo: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'stretch',
        top: 0
    },
    containerSearch: {
        flex: 1,
        marginLeft: 15,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputText: {
        flex: 1,
        marginRight: 4,
        fontWeight: '600',
        color: '#343a40'
    },
    iconSearch: {
        fontSize: 25,
        color: '#3a0ca3'
    },
    logoFood: {
        width: 120,
        height: 120,
    }
})

