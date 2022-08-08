import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, View, ScrollView, TouchableOpacity } from 'react-native'

import IconHome1 from 'react-native-vector-icons/Entypo'

import * as Animation from 'react-native-animatable'

export const ScreenRequests = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image style={styles.fundologo} source={require('../../../assets/image/fundo_logo.jpg')} />
                <Animation.Image animation='flipInX' duration={2000} delay={2000} style={styles.logo} source={require('../../../assets/image/logo.png')} />
                <Text style={styles.logoText}>Lanchonete RK</Text>
            </View>
            <View style={styles.containerProduct}>
                <Animation.View animation='zoomInDown' style={styles.containerValue}>
                    <Text style={styles.textValue}>Valor da compra</Text>
                    <View style={styles.totalValues}>
                        <Text style={styles.ValueSimbol}>R$</Text>
                        <Text style={styles.Value}>75,99</Text>
                    </View>
                </Animation.View>
                <ScrollView style={styles.scroll}>
                    <Animation.View animation='lightSpeedIn' duration={2000} style={styles.dadosProduct}>
                        <View style={styles.dice}>
                            <Animation.Image animation='flipInY' delay={1000} style={styles.img} source={require('../../../assets/bolos/b1.jpg')} />
                            <Text style={styles.textProduct}>Bolo de Milho</Text>
                        </View>
                        <View style={styles.showPrice}>
                            <Animation.Text animation='zoomIn' delay={1500} style={styles.ValueSimbol1}>R$</Animation.Text>
                            <Animation.Text animation='zoomIn' delay={1000} style={styles.Value1}>12,50</Animation.Text>
                        </View>
                    </Animation.View>
                    <Animation.View animation='lightSpeedIn' duration={2000} style={styles.dadosProduct}>
                        <View style={styles.dice}>
                            <Animation.Image animation='flipInY' delay={1000} style={styles.img} source={require('../../../assets/bolos/b1.jpg')} />
                            <Text style={styles.textProduct}>Bolo de Milho</Text>
                        </View>
                        <View style={styles.showPrice}>
                            <Animation.Text animation='zoomIn' delay={1500} style={styles.ValueSimbol1}>R$</Animation.Text>
                            <Animation.Text animation='zoomIn' delay={1000} style={styles.Value1}>12,50</Animation.Text>
                        </View>
                    </Animation.View>
                    <Animation.View animation='lightSpeedIn' duration={2000} style={styles.dadosProduct}>
                        <View style={styles.dice}>
                            <Animation.Image animation='flipInY' delay={1000} style={styles.img} source={require('../../../assets/bolos/b1.jpg')} />
                            <Text style={styles.textProduct}>Bolo de Milho</Text>
                        </View>
                        <View style={styles.showPrice}>
                            <Animation.Text animation='zoomIn' delay={1500} style={styles.ValueSimbol1}>R$</Animation.Text>
                            <Animation.Text animation='zoomIn' delay={1000} style={styles.Value1}>12,50</Animation.Text>
                        </View>
                    </Animation.View>
                    <Animation.View animation='lightSpeedIn' duration={2000} style={styles.dadosProduct}>
                        <View style={styles.dice}>
                            <Animation.Image animation='flipInY' delay={1000} style={styles.img} source={require('../../../assets/bolos/b1.jpg')} />
                            <Text style={styles.textProduct}>Bolo de Milho</Text>
                        </View>
                        <View style={styles.showPrice}>
                            <Animation.Text animation='zoomIn' delay={1500} style={styles.ValueSimbol1}>R$</Animation.Text>
                            <Animation.Text animation='zoomIn' delay={1000} style={styles.Value1}>12,50</Animation.Text>
                        </View>
                    </Animation.View>
                    <Animation.View animation='lightSpeedIn' duration={2000} style={styles.dadosProduct}>
                        <View style={styles.dice}>
                            <Animation.Image animation='flipInY' delay={1000} style={styles.img} source={require('../../../assets/bolos/b1.jpg')} />
                            <Text style={styles.textProduct}>Bolo de Milho</Text>
                        </View>
                        <View style={styles.showPrice}>
                            <Animation.Text animation='zoomIn' delay={1500} style={styles.ValueSimbol1}>R$</Animation.Text>
                            <Animation.Text animation='zoomIn' delay={1000} style={styles.Value1}>12,50</Animation.Text>
                        </View>
                    </Animation.View>
                    <Animation.View animation='lightSpeedIn' duration={2000} style={styles.dadosProduct}>
                        <View style={styles.dice}>
                            <Animation.Image animation='flipInY' delay={1000} style={styles.img} source={require('../../../assets/bolos/b1.jpg')} />
                            <Text style={styles.textProduct}>Bolo de Milho</Text>
                        </View>
                        <View style={styles.showPrice}>
                            <Animation.Text animation='zoomIn' delay={1500} style={styles.ValueSimbol1}>R$</Animation.Text>
                            <Animation.Text animation='zoomIn' delay={1000} style={styles.Value1}>12,50</Animation.Text>
                        </View>
                    </Animation.View>
                    <Animation.View animation='lightSpeedIn' duration={2000} style={styles.dadosProduct}>
                        <View style={styles.dice}>
                            <Animation.Image animation='flipInY' delay={1000} style={styles.img} source={require('../../../assets/bolos/b1.jpg')} />
                            <Text style={styles.textProduct}>Bolo de Milho</Text>
                        </View>
                        <View style={styles.showPrice}>
                            <Animation.Text animation='zoomIn' delay={1500} style={styles.ValueSimbol1}>R$</Animation.Text>
                            <Animation.Text animation='zoomIn' delay={1000} style={styles.Value1}>12,50</Animation.Text>
                        </View>
                    </Animation.View>
                    <Animation.View animation='lightSpeedIn' duration={2000} style={styles.dadosProduct}>
                        <View style={styles.dice}>
                            <Animation.Image animation='flipInY' delay={1000} style={styles.img} source={require('../../../assets/bolos/b1.jpg')} />
                            <Text style={styles.textProduct}>Bolo de Milho</Text>
                        </View>
                        <View style={styles.showPrice}>
                            <Animation.Text animation='zoomIn' delay={1500} style={styles.ValueSimbol1}>R$</Animation.Text>
                            <Animation.Text animation='zoomIn' delay={1000} style={styles.Value1}>12,50</Animation.Text>
                        </View>
                    </Animation.View>
                    <Animation.View animation='lightSpeedIn' duration={2000} style={styles.dadosProduct}>
                        <View style={styles.dice}>
                            <Animation.Image animation='flipInY' delay={1000} style={styles.img} source={require('../../../assets/bolos/b1.jpg')} />
                            <Text style={styles.textProduct}>Bolo de Milho</Text>
                        </View>
                        <View style={styles.showPrice}>
                            <Animation.Text animation='zoomIn' delay={1500} style={styles.ValueSimbol1}>R$</Animation.Text>
                            <Animation.Text animation='zoomIn' delay={1000} style={styles.Value1}>12,50</Animation.Text>
                        </View>
                    </Animation.View>
                    <Animation.View animation='lightSpeedIn' duration={2000} style={styles.dadosProduct}>
                        <View style={styles.dice}>
                            <Animation.Image animation='flipInY' delay={1000} style={styles.img} source={require('../../../assets/bolos/b1.jpg')} />
                            <Text style={styles.textProduct}>Bolo de Milho</Text>
                        </View>
                        <View style={styles.showPrice}>
                            <Animation.Text animation='zoomIn' delay={1500} style={styles.ValueSimbol1}>R$</Animation.Text>
                            <Animation.Text animation='zoomIn' delay={1000} style={styles.Value1}>12,50</Animation.Text>
                        </View>
                    </Animation.View>
                    <Animation.View animation='lightSpeedIn' duration={2000} style={styles.dadosProduct}>
                        <View style={styles.dice}>
                            <Animation.Image animation='flipInY' delay={1000} style={styles.img} source={require('../../../assets/bolos/b1.jpg')} />
                            <Text style={styles.textProduct}>Bolo de Milho</Text>
                        </View>
                        <View style={styles.showPrice}>
                            <Animation.Text animation='zoomIn' delay={1500} style={styles.ValueSimbol1}>R$</Animation.Text>
                            <Animation.Text animation='zoomIn' delay={1000} style={styles.Value1}>12,50</Animation.Text>
                        </View>
                    </Animation.View>      
                   
                </ScrollView>
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
        flex: 1,
        backgroundColor: '#edf2f4',
    },
    containerLogo: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:30
    },
    containerProduct: {
        flex: 1,
        paddingBottom: 10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#fff',
        marginTop:-30
    },
    logo: {
        width: 150,
        height: 150,
        margin:10
    },
    fundologo:{
        width:'100%',
        height:'100%',
        position:'absolute'
    },
    logoText: {
        color: '#fff',
        fontWeight: '700',
        marginBottom:10
    },
    containerValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 20
    },
    textValue: {
        fontSize: 18,
        fontWeight: '700',
        color: '#118ab2'
    },
    ValueSimbol: {
        fontWeight: '900',
        marginRight: 5,
        color:'#ff9f1c',
    },
    Value: {
        fontSize: 25,
        fontWeight: '900',
        color:'#ff9f1c'
    },
    totalValues: {
        flexDirection: 'row'
    },
    img: {
        width: 80,
        height: 80,
        marginRight: 20,
        borderRadius: 10,
        borderTopRightRadius:80,
    },
    textProduct: {
        fontSize: 15,
        fontWeight: '700',
    },
    dadosProduct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ee9b00',
        alignItems: 'center',
        borderRadius: 10,
        margin:10,        
    },
    dice: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    showPrice: {
        height: '100%',
        flexDirection: 'row',
        backgroundColor: '#52d1dc',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderTopLeftRadius: 90,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    ValueSimbol1: {
        fontWeight: '900'
    },
    Value1: {
        fontSize: 23,
        fontWeight: '900'
    },
    scroll: {
        paddingTop: 10,
        marginTop: -20,
        borderTopLeftRadius:20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#3a86ff',
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