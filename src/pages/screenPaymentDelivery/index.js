import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

import * as Animation from 'react-native-animatable'
import IconMoney from 'react-native-vector-icons/MaterialIcons'
import IconCard from 'react-native-vector-icons/Fontisto'

export default function ScreenPaymentDelivery({navigation}) {

    const nextPage = ()=>{
        navigation.navigate('screenWaiting')
    }

    return (
        <Animation.View animation='bounceIn' duration={3000} style={styles.container}>
            <Text style={styles.payment}>Forma de pagamento</Text>
            <TouchableOpacity style={styles.money}>
                <IconMoney style={styles.IconMoney} name="attach-money" />
                <Text style={styles.moneyText}>Dinheiro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <IconCard style={styles.Iconcard} name="mastercard" />
                <Text style={styles.cardText}>Cartão</Text>
            </TouchableOpacity>
            <View style={styles.allcard}>

            </View>
            <Button onPress={nextPage} title="Confirmar"/>
        </Animation.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    money:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        backgroundColor:'#fff',
        margin:10,
        borderRadius:5
    },
    card:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        backgroundColor:'#fff',
        margin:10,
        marginBottom:60,
        borderRadius:5
    },
    IconMoney:{
        fontSize:30,
        color:'#0077b6'
    },
    Iconcard:{
        fontSize:25,
        color:'#0077b6'
    },
    moneyText:{
        color:'#3a86ff',
        fontSize:18,
        marginLeft:20,
        fontWeight:'600'
    },
    cardText:{
        color:'#3a86ff',
        fontSize:18,
        marginLeft:20,
        fontWeight:'600'
    },
    payment:{
        fontSize:25,
        textAlign:'center',
        marginBottom:25,
        color:'#0081a7',
        fontWeight:'600'
    }
})

