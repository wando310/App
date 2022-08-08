import React, { useState } from 'react'

import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'

import * as Animation from 'react-native-animatable'

import IconStar from 'react-native-vector-icons/AntDesign'
import IconHeart from 'react-native-vector-icons/AntDesign'

import product from '../AllArraysProduct'

export default function slide() {

    
    const [status, setStatus] = useState(false)
    function renderItens({ item }) {
        function like(){           
            console.log(status);
        }
        

        return (

            <View style={styles.containerProduct}>
                <TouchableOpacity>
                    <Image style={styles.img} source={item.img} />
                </TouchableOpacity>
                <View style={styles.containerDice}>
                    <Text style={styles.title} >{item.title}</Text>
                    <Text style={styles.preview} >{item.description}</Text>
                    <TouchableOpacity onPress={like} style={styles.containerHeart}>
                        <IconHeart style={ status ? {color:'#000'} : [styles.heart]} name='heart' />
                    </TouchableOpacity>
                    <View style={styles.containerStar}>
                        <View style={styles.selectStar}>
                            <TouchableOpacity>
                                <IconStar style={styles.star} name='star' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IconStar style={styles.star} name='star' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IconStar style={styles.star} name='star' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IconStar style={styles.star} name='star' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IconStar style={styles.star} name='star' />
                            </TouchableOpacity>

                        </View>
                        <Text style={styles.textStar}>200 Review</Text>
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
        backgroundColor: '#fff',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerDice: {
        padding: 10,
    },
    containerProduct: {
        width: 180,
        borderRadius: 25,
        margin: 5,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    img: {
        width: '100%',
        height: 130,
        borderRadius: 25,
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
    },
    preview: {
        fontSize: 12,
        color: '#6c757d'
    },
    containerHeart: {
        alignItems: 'flex-end'
    },
    heart: {
        fontSize: 25,
        color: 'red',
        marginTop: 10
    },
    containerStar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    selectStar: {
        flexDirection: 'row'
    },
    star: {
        fontSize: 16,
        margin: 1,
        color: '#ffd166'
    },
    textStar: {
        fontSize: 9,
        fontWeight: '700'
    }
})