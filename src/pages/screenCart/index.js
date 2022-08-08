
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Button, FlatList, } from 'react-native'

import * as Animation from 'react-native-animatable'
import Iconcart from 'react-native-vector-icons/FontAwesome'
import IconMore from 'react-native-vector-icons/AntDesign'
import IconMinus from 'react-native-vector-icons/AntDesign'
import IconRemove from 'react-native-vector-icons/FontAwesome5'
import Iconsearch from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FooterPageComponent from '../../components/footerPageComponent'

export default function ScreenCart({ navigation }) {

    const [search, setSearch] = useState('')

    const nextPageCondition = async () => {

        const token = await AsyncStorage.getItem('@_token')

        token ? navigation.reset({ routes: [{ name: 'screenLogin' }] }) : navigation.reset({ routes: [{ name: 'RegisterLogin' }] })
    }


    const [totalCart, setTotalCart] = useState(0)
    const [arrayProduct, setArrayProduct] = useState([])
    const [valorTotal, setValorTotal] = useState(0)
    async function listProduct() {
        //pegando lista de produtos AsyncStorage       
        const response = await AsyncStorage.getItem('@data_key')
        const responseList = response ? JSON.parse(response) : []

        const setUniqui = new Set();

        const filterUniqui = responseList.filter((person) => {
            const duplicatedPerson = setUniqui.has(person.id);
            setUniqui.add(person.id);
            return !duplicatedPerson;
        });
        setArrayProduct(filterUniqui)

        //pegando item qnt AsyncStorage
        const responseTotal = await AsyncStorage.getItem('@qnt_cart')
        const getTotal = responseTotal ? JSON.parse(responseTotal) : []
        setTotalCart(getTotal[getTotal.length - 1])

        let totalV = 0
        arrayProduct.map(item => {
            totalV = totalV + Number(item.value.replace('R$', '').trim())
        })

        setValorTotal(totalV)

    }

    useEffect(() => { listProduct() }, [totalCart])


    //Renderizando lista de produtos
    function renderList({ item }) {
        return (
            <Animation.View animation='bounceIn' duration={2000} style={styles.cartItem}>
                <Image style={styles.imgProduct} source={item.img} />
                <View style={styles.content}>
                    <Text style={styles.titleProduct}>{item.title}</Text>
                    <Text style={styles.descProduct}>{item.description}</Text>
                    <Text style={styles.priceProduct}>{item.value}</Text>

                    <View style={styles.qnt}>
                        <TouchableOpacity>
                            <IconMore style={styles.icon} name='pluscircle' />
                        </TouchableOpacity>
                        <Text style={styles.qntTotal}>1</Text>
                        <TouchableOpacity>
                            <IconMore style={styles.icon} name='minuscircle' />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.remove}>
                    <IconRemove style={styles.trash} name="trash-alt" />
                </TouchableOpacity>
            </Animation.View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerConfirm}>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder='Pesquise seu pedido aqui..'
                        value={search}
                        onChangeText={search => setSearch(search)}
                    />
                    <Iconsearch style={styles.Iconsearch} name='search' />
                </View>

                <View style={styles.cart}>
                    <Animation.View animation='bounceInLeft' duration={5000} style={styles.containerCart}>
                        <Text style={styles.cartValue}>{totalCart}</Text>
                        <Iconcart style={styles.IconcartTop} name="opencart" />
                    </Animation.View>
                </View>
            </View>

            <View style={styles.containerItem}>
                <Text style={styles.title}>Carrinho de compra</Text>
                <View style={styles.center}>
                    <Text style={styles.total}>{`Valor total R$ ${valorTotal.toFixed('2')}`}</Text>
                    <TouchableOpacity onPress={nextPageCondition} >
                        <Animation.Image animation='slideInDown' duration={2000} style={styles.btngif} source={require('../../../assets/image/animation_btn.gif')} />
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={arrayProduct}
                    renderItem={renderList}
                    keyExtractor={item => item.id}
                />

                <FooterPageComponent icon='cart-variant' title='Continuar comprando' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#615cf2'
    },
    imgCapa: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    containerConfirm: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cart: {
        width: '20%',
        padding: 3,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: -30
    },
    IconcartTop: {
        fontSize: 30,
        color: 'red'
    },
    containerCart: {
        alignItems: 'center',
        paddingRight: 20,
    },
    cartValue: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
    },
    containerItem: {
        height: '87%',
        backgroundColor: '#fff',
        marginTop: 0,
        paddingBottom: 0,
        paddingTop: 10,
        borderTopLeftRadius: 90,
        marginLeft:15,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#615cf2',
        fontStyle: 'italic',
        marginLeft: 50,
        marginBottom: 3
    },
    total: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#6da7f2',
        fontStyle: 'italic',
        marginLeft: 20,
    },
    cartItem: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,255,.1)',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,255,.1)',
        borderRightColor: 'rgba(0,0,255,.1)',
        margin: 15,
        marginTop: 0,
        backgroundColor: '#fff',

    },
    imgProduct: {
        width: 100,
        height: '70%',
        borderRadius: 90,
        marginRight: 4,
    },
    titleProduct: {
        fontSize: 15,
        fontWeight: '700',
        color: '#0096c7'
    },
    descProduct: {
        width: 170,
        fontSize: 12,
        color: '#48cae4',
    },
    priceProduct: {
        fontSize: 15,
        fontWeight: '700',
        color: '#cc5803',
        margin: 5,
        marginBottom: -10
    },
    qnt: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        fontSize: 25,
        margin: 15,
        color: '#f77f00',
    },
    remove: {

    },
    trash: {
        fontSize: 25,
        color: '#610f7f',
        marginRight: 12
    },
    qntTotal: {
        fontSize: 20,
        fontWeight: '500',
        color: '#00a6fb'
    },
    gif: {
        width: 150,
        height: 150,
        zIndex: 1,
        position: 'absolute',
        top: -8
    },
    gif1: {
        width: 150,
        height: 150,
        zIndex: 1,
        position: 'absolute',
        top: -20,
        left: 0
    },
    btngif: {
        width: 150,
        height: 50,
    },
    containerContent: {
        backgroundColor: '#eee',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 10,
    },
    center: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    containerInput: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginRight: 5,
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 10,
        marginLeft: 20,
        borderRadius: 5
    },
    Iconsearch: {
        fontSize: 20,
        marginRight: 10,
        marginLeft: 10,
        color: '#8a8c8e'
    },
    input: {
        width: 215
    },
})