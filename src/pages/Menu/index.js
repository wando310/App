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
})