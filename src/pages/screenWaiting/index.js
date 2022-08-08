import React from "react";
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'

import IconMoney from 'react-native-vector-icons/FontAwesome'
import Iconfood from 'react-native-vector-icons/Ionicons'
import IconMotorcycle from 'react-native-vector-icons/Fontisto'
import IconHome from 'react-native-vector-icons/FontAwesome'
import IconHome1 from 'react-native-vector-icons/Entypo'

import {useNavigation} from '@react-navigation/native'

export default function ScreenWaiting() {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleStatus}>Status do pedido</Text>
            <View style={styles.containerStyle}>
                <View style={styles.content}>
                    <View style={styles.lineStatus}><View style={styles.point}></View></View>
                    <View style={styles.contentStatus}>
                        <View style={styles.contentFood}>
                            <IconMoney style={styles.icon} name="cc-mastercard" />
                            <Text style={styles.payment}>aguardando pagamento</Text>
                        </View>
                        <View style={styles.contentFood}>
                            <Iconfood style={styles.icon} name="fast-food" />
                            <Text style={styles.payment}>Preparando pedido</Text>
                        </View>
                        <View style={styles.contentFood}>
                            <IconMotorcycle style={styles.icon} name="motorcycle" />
                            <Text style={styles.payment}>Pedido a caminho</Text>
                        </View>
                        <View style={styles.contentFood}>
                            <IconHome style={styles.icon} name="home" />
                            <Text style={styles.payment}>Pedido entregue</Text>
                        </View>
                    </View>
                    <View style={styles.containerDice}>
                        <View style={styles.containerClient}>
                            <Text style={styles.textName}>
                                Rua dom pedro n° 331,
                                cep 09974-110 Eldorado Diadema sp,
                                Felipe rocha machado
                                Pedido: bolo de cenoura
                                valor: R$ 45,99
                                Forma de pagamento: na entrega
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Menu')}} style={styles.personal}>
                    <IconHome1 style={styles.iconHome} name='home' />
                    <Text style={styles.text} >Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    titleStatus: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '700',
        color: '#0081a7'
    },
    containerClient: {
        paddingLeft: 50,
    },
    containerDice: {
        marginTop: -50,
        backgroundColor: '#eff6e0',
        flex: 1,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        justifyContent: 'center',
        marginBottom:10
    },
    textName: {
        color: '#ca6702',
        fontWeight: '400',
        fontSize: 15,
        marginRight: 10,
    },
    containerStyle: {
        backgroundColor: '#ca6702',
        flex: 1,
        borderTopLeftRadius: 400,
    },
    content: {
        backgroundColor: 'rgba(0,0,0,0)',
        flex: 1
    },
    contentFood: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    contentStatus: {
        padding: 30,
        paddingLeft: 70
    },
    icon: {
        fontSize: 30,
        marginRight: 20,
        color: '#33658a'
    },
    lineStatus: {
        width: 10,
        height: 360, //linha indicador posição inicial = 0 a 360
        backgroundColor: '#7e1f86',
        position: 'absolute',
        top: 72,
        left: 50,
        borderRadius: 5,
        alignItems: 'center'
    },
    point: {
        width: 25,
        height: 25,
        backgroundColor: '#00b4d8',
        borderRadius: 20,
        marginTop: 0 //ponto indicador posição inicial = 0 a 340
    },
    payment: {
        fontSize: 18,
        color: '#284b63',
        fontWeight: 'bold'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f77f00',
        padding: 8
    },
    personal: {
        width:60,
        height:60,
        alignItems: 'center',
        borderRadius:170,
        borderWidth:1,
        borderColor:'#dad7cd',
        padding:4
    },
    address: {
        alignItems: 'center'
    },
    iconHome: {
        fontSize: 27,
        color: '#fff'
    },
    text: {
        fontSize: 11,
        color: '#fff',
        fontWeight: '600',
    }

})