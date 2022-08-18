import React, { useEffect, useState } from 'react'

import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'

import * as Animation from 'react-native-animatable'

import IconStarFill from 'react-native-vector-icons/AntDesign'
import IconStarEmputy from 'react-native-vector-icons/AntDesign'
import IconStarHalfEmputy from 'react-native-vector-icons/FontAwesome5'

import IconPlus from 'react-native-vector-icons/MaterialCommunityIcons'

import product from '../AllArraysProduct'

export default function slide() {
    function renderItens({ item }) {

        //Add star
        function addStar() {
            const arrayStart = [0, 0, 0, 0, 0]

            let floor = Math.floor(item.note)
            let rest = item.note - floor

            for (var i = 0; i < floor; i++) {
                arrayStart[i] = 2
            }

            rest > 0 ? arrayStart[i] = 1 : ''

            return (
                <View style={styles.selectStar}>
                    {arrayStart.map((note, index) => (
                        <View key={index}>
                            { note === 0 && <IconStarEmputy style={styles.star} name='staro' /> }
                            { note === 1 && <IconStarHalfEmputy style={styles.star} name='star-half-alt' />}
                            { note === 2 && <IconStarFill style={styles.star} name='star' />}
                        </View>
                    ))}
                </View>
            )
        }

        return (

            <View style={styles.containerProduct}>
                <TouchableOpacity>
                    <Image style={styles.img} source={item.img} />
                </TouchableOpacity>
                <View style={styles.containerDice}>
                    <Text style={styles.title} >{item.title}</Text>
                    <Text style={styles.preview} >{item.description}</Text>
                    <TouchableOpacity onPress={() => { }} style={styles.containerHeart}>
                        <IconPlus style={{ color: 'red', fontSize: 30 }} name='message-plus' />
                    </TouchableOpacity>
                    <View style={styles.containerStar}>
                        {addStar()}
                        <Text style={styles.textStar}>{item.note}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.containerSlide}>
            <FlatList
                numColumns={2}
                data={product}
                renderItem={renderItens}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerSlide: {
        width: '100%',
        flex: 1,
        backgroundColor:'#1e193b',
        marginTop: -15,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop:20
    },
    containerDice: {
        padding: 10,
    },
    containerProduct: {
        width: 180,
        borderRadius: 25,
        margin: 5,
        backgroundColor: '#023e8a',
    },
    img: {
        width: '100%',
        height: 130,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
    },
    preview: {
        fontSize: 12,
        color: '#0077b6'
    },
    containerHeart: {
        alignItems: 'flex-end'
    },
    containerStar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    selectStar: {
        flexDirection: 'row',
    },
    star: {
        fontSize: 16,
        margin: 1,
        color: '#ffd166'
    },
    textStar: {
        fontSize: 15,
        fontWeight: '700',
        color: '#6c757d'
    },
})