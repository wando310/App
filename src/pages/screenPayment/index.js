import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

import * as Animation from 'react-native-animatable'

export default function ScreenPayment({ navigation }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.reset({routes:[{name: 'PaymentPix'}]}) }} style={styles.paiment}>
                <Image style={styles.iconPix} source={require('../../../assets/image/pix.png')} />
                <Text style={styles.text}>PIX</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.reset({routes:[{name: 'PaymentDelivery'}]}) }} style={styles.paiment}>
                <Image style={styles.iconPix} source={require('../../../assets/image/entrega.png')} />
                <Text style={styles.text} >NA ENTREGA</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('Menu')}} style={styles.btn}>                 
                <Text style={styles.textBtn}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fefae0'
    },
    paiment: {
        flexDirection: 'row',
        backgroundColor: '#615cf2',
        margin: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10
    },
    iconPix: {
        width: 35,
        height: 35,
        marginRight: 20
    },
    btn: {
        marginTop: 30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ef233c',
        margin:10,
        padding:10,
        borderRadius:5,
    },
    textBtn:{
        color:'#fff',
        fontSize:15,
        fontWeight:'700',
        marginLeft:10
    },
    text:{
        color:'#fefae0'
    }
})

