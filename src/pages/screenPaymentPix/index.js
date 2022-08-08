import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, ToastAndroid } from 'react-native'

import * as Animation from 'react-native-animatable'
import IconCopy from 'react-native-vector-icons/MaterialIcons'

export default function ScreenPaymentPix({ navigation }) {

    const nextPage = () => {
        ToastAndroid.show('Código Pix copiado', 2000)
        navigation.reset({routes:[{ name: 'screenWaiting' }]})
    }

    return (
        <Animation.View animation='bounceIn' duration={3000} style={styles.container}>
            <View style={styles.logoPix}>
                <Animation.Image animation='bounceIn' duration={4000} delay={1000} style={styles.logo} source={require('../../../assets/image/logo-pix.png')} />
            </View>
            <View style={styles.containerPedido}>
                <Text style={styles.pedido}>Pedido aguardando pagamento</Text>
                <Text style={styles.copy}>Copie o código abaixo para pagar via pix</Text>
            </View>
            <TouchableOpacity onPress={nextPage} style={styles.containerCodigo}>
                <Text style={styles.codigoPix}>000000000</Text>
                <IconCopy style={styles.iconCopy} name="content-copy" />
            </TouchableOpacity>
            <Text style={styles.date}>Pague até:10/07/2022 às 10:30</Text>
            <View style={styles.containerTotal}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.value}>R$ 52,99</Text>
            </View>
            <Button onPress={nextPage} style={styles.btnCopiar} title="Copiar código" />
        </Animation.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logoPix: {
        alignItems: 'center'
    },
    logo: {
        width: 160,
        height: 160
    },
    containerPedido: {
        alignItems: 'center'
    },
    pedido: {
        fontSize: 20,
        color: '#3e4040',
        marginBottom: 20
    },
    copy: {
        color: '#626666',
        marginBottom: 20
    },
    containerCodigo: {
        borderWidth: 1,
        borderColor: '#cbcbcb',
        borderStyle: 'dashed',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        paddingBottom: 5,
        paddingTop: 5,
    },
    codigoPix: {
        fontSize: 18,
        color: '#5390d9',
        fontWeight: '700'
    },
    iconCopy: {
        fontSize: 20,
        marginLeft: 20
    },
    date: {
        margin: 25,
        color: '#577590'
    },
    containerTotal: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 30
    },
    total: {
        fontSize: 18
    },
    value: {
        fontSize: 18,
        fontWeight: '700',
        color: '#616666'
    }
})

