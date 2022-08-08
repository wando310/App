import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Iconplus from 'react-native-vector-icons/Entypo'
import {useNavigation} from '@react-navigation/native'

import * as Animation from 'react-native-animatable'

import cakeArray from './cakeArray';

const ListCake = ({array}) => {

    const navigation = useNavigation()

    function renderItem({ item }) {
        return (
            <TouchableOpacity onPress={ ()=> navigation.reset({ routes: [{ name: "Modal", params:{ item: item, array: cakeArray }}]})}  style={styles.container}>
                <View style={styles.containerImg}>
                    <Animation.Image animation='flipInX' duration={2000} style={styles.img} source={item.img} />
                </View>

                <Animation.View animation='bounceInRight' duration={4000} style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.value}>{`R$ ${item.value}`}</Text>
                    <Iconplus style={styles.icon} name={item.icon} />
                </Animation.View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.containerPrincipal}>
            <FlatList
                data={array}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        marginTop: -10,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    container: {
        width: 400,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 20,
        paddingRight: 5,
        paddingLeft: 5
    },
    containerImg: {
        paddingLeft: 5,
        paddingRight: 25
    },
    content: {
        flex: 1,
    },
    img: {
        width: 150,
        height: 120
    },
    icon: {
        marginLeft: 130,
        backgroundColor: '#e36414',
        width: 30,
        height: 20,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        borderBottomRightRadius: 10
    },
    title: {
        fontSize: 20,
        color: '#457b9d'
    },
    description: {
        width:170,
        fontWeight: '500',
        color: '#a8dadc',
        fontSize: 15,
    },
    value: {
        color: '#e36414',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 30
    }
});

export default ListCake;