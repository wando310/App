import React, { useState, useContext, useEffect } from "react";

import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import IconpizzaSize from 'react-native-vector-icons/Ionicons'
import Iconcart from 'react-native-vector-icons/FontAwesome'
import IconHome1 from 'react-native-vector-icons/Entypo'

import AppIntroSlider from 'react-native-app-intro-slider'
import AsyncStorage from '@react-native-async-storage/async-storage'

import * as Animation from 'react-native-animatable'

function Modal({ route, navigation }) {

    const data = route.params.item
    const dataArray = route.params.array


    const [statusSmall, setStatusSmall] = useState(true)
    const [statusLarge, setStatusLarge] = useState(true)

    const [size, setSize] = useState('')
    const [price, setPrice] = useState('Escolha o tamanho')

    //small
    function small() {
        statusSmall ? setStatusSmall(false) : setStatusSmall(true)
        setStatusLarge(true)
        setPrice(`R$ ${data.p}`)
        setSize('P')
    }
    //large
    function large() {
        statusLarge ? setStatusLarge(false) : setStatusLarge(true)
        setStatusSmall(true)
        setPrice(`R$ ${data.g}`)
        setSize('G')
    }

    //add contador do carinho
    const [confirm, setConfirm] = useState(false)
    const [count, setCount] = useState(0)
    function addCart() {

        if (price === 'Escolha o tamanho') {
            Alert.alert('RK Orienta!', 'Escolha o tamanho do seu pedido (P ou G)')
            return
        }

        setCount(count + 1)

        count === 0 ? saveCartpurchase(1) : saveCartpurchase(count + 1)
        //show confirma
        setConfirm(true)
        setTimeout(() => setConfirm(false), 2000);
    }

    //Add compra no carrinho
    async function saveCartpurchase(c) {
        // inserindo qntCart
        const response1 = await AsyncStorage.getItem('@qnt_cart')
        const respQntCart = response1 ? JSON.parse(response1) : []

        const qntCart = [...respQntCart, c]
        await AsyncStorage.setItem('@qnt_cart', JSON.stringify(qntCart))

        //inserindo dataCart        
        const dataCart = {
            "description": data.description,
            "icon": data.icon,
            "id": data.id,
            "img": data.img,
            "title": data.title,
            "value": price,
            "size": size,
            "type": data.type
        }

        const response = await AsyncStorage.getItem('@data_key')
        const previwData = response ? JSON.parse(response) : []
        const cartArray = [...previwData, dataCart]
        await AsyncStorage.setItem('@data_key', JSON.stringify(cartArray))
        //AsyncStorage.clear()       

    }

    //pegando qnt Itens   
    async function getData() {
        const response = await AsyncStorage.getItem('@qnt_cart')
        const getResponse = response ? JSON.parse(response) : []

        getResponse[getResponse.length - 1] ? setCount(getResponse[getResponse.length - 1]) : setCount(0)
    }

    getData()

    //Renderizando o slide
    function renderSlider({ item }) {
        return (
            <View style={styles.containerSlider}>
                <Image style={styles.imgSlide} source={item.img} />
                <Text style={styles.titleSlide}>{item.title}</Text>
                <Text style={styles.descriptionSlide}>{item.description}</Text>
                <Text style={styles.valueSlide}>{`R$ ${item.value}`}</Text>
            </View>
        )
    }

    //verifica itens no carrinho
    const verific = () => {
        if (count !== 0) {
            navigation.reset({ routes: [{ name: 'Cart' }] })
        } else {
            Alert.alert('Atenção', 'Você não possui itens no carrinho')
        }
    }

    return (
        <SafeAreaView style={styles.containerPrincipal}>

            {/* Modal show confirma */}
            <View style={confirm ? [styles.modalShow, { display: 'flex' }] : [styles.modalShow, { display: 'none' }]}>
                <Text style={styles.textModalShow}>Pedido adicionado com Sucesso !!!</Text>
            </View>

            <View style={styles.containerImg}>

                <Animation.View animation='bounceInDown' duration={2000} delay={1000} style={styles.home}>
                    <TouchableOpacity onPress={() => { navigation.reset({ routes: [{ name: 'Menu' }] }) }} style={styles.personal}>
                        <IconHome1 style={styles.iconHome} name='home' />
                        <Text style={styles.text} >Home</Text>
                    </TouchableOpacity>
                </Animation.View>

                <TouchableOpacity onPress={verific} style={styles.cart}>
                    <Animation.View animation='bounceInLeft' duration={5000} style={styles.containerCart}>
                        <Text style={styles.cartValue}>{count}</Text>
                        <Iconcart style={styles.IconcartTop} name="opencart" />
                    </Animation.View>
                </TouchableOpacity>

                <Image style={styles.img} source={data.img} />
            </View>

            <Animation.View animation='bounceIn' duration={3000} style={styles.purchase}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <View style={styles.containerSize}>
                    <TouchableOpacity onPress={small} style={styles.small}>
                        <IconpizzaSize name='md-tennisball-sharp' style={statusSmall ? [styles.imgSmall] : { fontSize: 20, transform: [{ translateY: -5 }], color: '#52796f' }} />
                        <Text style={statusSmall ? [styles.textSmall] : { color: '#00b4d8', fontWeight: '700', fontSize: 15 }}>PEQUENO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={large} style={styles.large}>
                        <IconpizzaSize name='md-tennisball-sharp' style={statusLarge ? [styles.imgLarge] : { fontSize: 20, transform: [{ translateY: -5 }], color: '#52796f' }} />
                        <Text style={statusLarge ? [styles.textLarge] : { color: '#00b4d8', fontWeight: '700', fontSize: 15 }}>GRANDE</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.value}>{price}</Text>
                <Animation.View animation='bounceIn' duration={3000} delay={1000}>
                    <TouchableOpacity onPress={addCart} style={styles.btnAdd}>
                        <Text style={styles.btnTitle}>ADD AO CARRINHO</Text>
                        <Iconcart style={styles.iconCart} name="opencart" />
                    </TouchableOpacity>
                </Animation.View>
            </Animation.View>

            <AppIntroSlider style={styles.sliderShow}
                renderItem={renderSlider}
                data={dataArray}
                activeDotStyle={{
                    backgroundColor: '#3a86ff',
                    width: 30,
                }}
                renderNextButton={() => <Text style={styles.next}>Próximo</Text>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        alignItems: 'center'
    },
    img: {
        width: 390,
        height: 200,
        resizeMode: 'stretch',
    },
    purchase: {
        width: 340,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop: -80,
        alignItems: 'center',
        padding: 5,
        paddingBottom: 0
    },
    title: {
        color: '#e76f51',
        fontWeight: 'bold',
        fontSize: 20
    },
    description: {
        color: '#adb5bd',
        textAlign: 'center'
    },
    containerSize: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    small: {
        alignItems: 'center',
        margin: 15,
    },
    medium: {
        alignItems: 'center',
        margin: 15
    },
    large: {
        alignItems: 'center',
        margin: 15
    },
    imgSmall: {
        fontSize: 20,
        color: '#e85d04'
    },
    imgMedium: {
        fontSize: 20,
        color: '#e85d04'
    },
    imgLarge: {
        fontSize: 20,
        color: '#e85d04'
    },
    textSmall: {
        textTransform: 'uppercase',
        color: '#aaa',
        fontWeight: '700',
        fontSize: 12
    },
    textMedium: {
        textTransform: 'uppercase',
        color: '#aaa',
        fontWeight: '700',
        fontSize: 12
    },
    textLarge: {
        textTransform: 'uppercase',
        color: '#aaa',
        fontWeight: '700',
        fontSize: 12
    },
    value: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ee6c4d',
        margin: 20
    },
    btnAdd: {
        width: 340,
        flexDirection: 'row',
        backgroundColor: '#ddd',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: '#ee6c4d',
    },
    btnTitle: {
        color: '#fff',
        fontWeight: '700'
    },
    iconCart: {
        fontSize: 25,
        marginLeft: 15,
        color: '#fff',
    },
    imgSlide: {
        width: 380,
        height: 150,
        resizeMode: 'stretch'
    },
    sliderShow: {
        width: 380,
        marginTop: 10,
        backgroundColor: '#fff',
    },
    containerSlider: {
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    titleSlide: {
        color: '#ee6c4d',
        fontWeight: 'bold',
        fontSize: 20
    },
    descriptionSlide: {
        color: '#00b4d8'
    },
    valueSlide: {
        color: '#bb3e03',
        fontSize: 25,
        fontWeight: '800',
        margin: 10
    },
    next: {
        color: '#bb3e03',
        fontWeight: '600'
    },
    modalShow: {
        width: 300,
        height: 300,
        zIndex: 1,
        position: 'absolute',
        top: 170,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,255,.7)',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textModalShow: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#fff'
    },
    //carrinho
    cart: {
        position: 'absolute',
        zIndex: 1,
        padding: 0,
        marginLeft: 300,
        marginTop: 5
    },
    IconcartTop: {
        fontSize: 35,
        color: 'red'
    },
    containerCart: {
        alignItems: 'center',
        backgroundColor: '#1d3557',
        padding: 10,
        borderRadius: 15,
    },
    cartValue: {
        color: 'yellow',
        fontWeight: '700',
        fontSize: 20
    },
    home: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
        position: 'absolute',
        zIndex: 3
    },
    personal: {
        width: 60,
        height: 60,
        alignItems: 'center',
        borderRadius: 170,
        borderWidth: 1,
        borderColor: '#3a86ff',
        padding: 4
    },
    address: {
        alignItems: 'center'
    },
    iconHome: {
        fontSize: 27,
        color: '#3a86ff'
    },
    text: {
        fontSize: 11,
        color: '#3a86ff',
        fontWeight: '700',
    }
})



export default Modal