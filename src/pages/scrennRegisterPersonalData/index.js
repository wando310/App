import React, { useState } from 'react'

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import FooterCompenent from '../../components/footerPageComponent'

import * as Animation from 'react-native-animatable'

export default function ScrennRegisterPersonalData({ navigation }) {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [apelido, setApelido] = useState('')
    const nextPageCondition = async () => {

        const registerPersonal = {
            'nome': nome,
            'telefone': telefone,
            'email': email,
            'apelido': apelido
        }

        if (nome === '') { alert('Campo Nome não preenchido'); return }
        if (telefone === '') { alert('Campo Telefone não preenchido'); return }
        if (email === '') { alert('Campo Email não preenchido'); return }
        if (apelido === '') { alert('Campo Apelido não preenchido'); return }

        await AsyncStorage.setItem('@registerPersonal', JSON.stringify(registerPersonal))

        navigation.reset({ routes: [{ name: 'Payment' }] })

    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>

            </View>
            <Animation.View animation='lightSpeedIn' duration={2000} delay={0} style={styles.containerRegistration}>
                <Animation.Text animation='zoomIn' duration={2000} style={styles.logo}>RK</Animation.Text>
                <View style={styles.registration}>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>Nome</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={0}>
                        <TextInput
                            style={styles.input}
                            value={nome}
                            onChangeText={t => setNome(t)}
                        />
                    </Animation.View>
                </View>
                <View style={styles.registration}>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>Telefone</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={500}>
                        <TextInput
                            style={styles.input}
                            value={telefone}
                            onChangeText={t => setTelefone(t)}
                        />
                    </Animation.View>
                </View>
                <View style={styles.registration}>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>E-mail</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={1000}>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={t => setEmail(t)}
                        />
                    </Animation.View>
                </View>
                <View style={styles.registration}>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>Apelido</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={1500}>
                        <TextInput
                            style={styles.input}
                            value={apelido}
                            onChangeText={t => setApelido(t)}
                        />
                    </Animation.View>
                </View>

                <TouchableOpacity onPress={nextPageCondition} style={styles.containerSave}>
                    <Text style={styles.save}>Salvar</Text>
                </TouchableOpacity>

            </Animation.View>

            <FooterCompenent icon='home' title='Home' />

        </View>
    )
}

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerRegistration: {
        borderTopLeftRadius: 150,
        backgroundColor: '#fefae0',
        padding: 20,
        paddingTop: 40,
        marginTop: -40,
        flex: 1,
    },
    containerLogo: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
        backgroundColor: '#615cf2',
        flexDirection: 'row',
    },
    logo: {
        fontSize: 18,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#8338ec',
        backgroundColor: '#fb5607',
        padding: 8,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
        position: 'absolute',
        zIndex: 1,
        top: -20,
        left: 170
    },
    containerSave: {
        backgroundColor: '#2f2859',
        alignItems: 'center',
        padding: 8,
        marginTop: 200,
        borderRadius: 5
    },
    save: {
        color: '#fff',
        fontWeight: '600'
    },
    registration: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    },
    dados: {
        color: '#6da7f2',
        fontWeight: '700',
        width: 110,
        textAlign: 'right'
    },
    input: {
        width: 200,
        borderBottomWidth: 1,
        borderColor: '#6da7f2',
        color: '#2f2859',
        fontWeight: '700',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f77f00',
        padding: 8
    },
    personal: {
        width: 60,
        height: 60,
        alignItems: 'center',
        borderRadius: 170,
        borderWidth: 1,
        borderColor: '#dad7cd',
        padding: 4
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