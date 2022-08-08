import React from 'react'

import { StyleSheet, SafeAreaView } from 'react-native'

import HeaderMenu from '../../components/headerMenu'
import Slide from '../../components/slide'
import ModalMenuList from '../../components/modalMenuList'

export default function Menu({ navigation }) {
    return (
        <SafeAreaView style={styles.menu}>
            <ModalMenuList/>           
            <HeaderMenu />
            <Slide />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        backgroundColor: '#edf6f9',
    },
    hiddenMenu: {
        width: '80%',
        height: '100%',
        position: 'absolute',
        zIndex: 1,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
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