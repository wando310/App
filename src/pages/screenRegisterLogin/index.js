import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import FooterCompenent from '../../components/footerPageComponent'

import * as Animation from 'react-native-animatable'
import IconUser from 'react-native-vector-icons/FontAwesome5'

export default function ScreenRegisterLogin({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')

    const registration = async () => {
        const user = {
            email: email,
            password: password,
            confirmpassword: confirmpassword
        }

        if (email === '' || password === '' || confirmpassword === '') {
            alert('Campos obrigatórios')
            return
        } else {
            if (password != confirmpassword) {
                alert('Senhas não conferem tente novamente')
                return
            }

            await AsyncStorage.setItem('@_token', JSON.stringify(user))
            navigation.reset({ routes: [{name: 'screenLogin'}] })
        }  
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <TouchableOpacity>

                </TouchableOpacity>
            </View>
            <Animation.View animation='lightSpeedIn' duration={2000} delay={0} style={styles.containerRegistration}>
                <IconUser name='user-lock' style={styles.logo} />
                <View style={styles.registration}>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>E-mail</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={0}>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={ setEmail }
                        />
                    </Animation.View>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>Senha</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={0}>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={ setPassword }
                        />
                    </Animation.View>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>Confirmar senha</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={0}>
                        <TextInput
                            style={styles.input}
                            value={confirmpassword}
                            onChangeText={ setConfirmpassword }
                        />
                    </Animation.View>
                </View>

                <TouchableOpacity onPress={registration} style={styles.containerSave}>
                    <Text style={styles.save}>Ir para login</Text>
                </TouchableOpacity>

            </Animation.View>
           
           <FooterCompenent/>

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
        backgroundColor: '#FEFAE0',
        padding: 20,
        paddingTop: 40,
        marginTop: -40,
        flex: 1
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
        fontSize: 40,
        position: 'absolute',
        zIndex: 1,
        top: -40,
        left: 20,
        color: '#fff',
    },
    containerSave: {
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#4361ee',
        borderRadius: 7,
        backgroundColor: '#4895ef'
    },
    save: {
        width: '100%',
        color: '#fff',
        fontWeight: '900',
        fontSize: 15,
        padding: 10,
        textAlign: 'center'
    },
    registration: {
        margin: 10,
        padding: 20
    },
    dados: {
        color: '#6da7f2',
        fontWeight: '700',
        marginTop: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#6da7f2',
        color: '#2f2859',
        fontWeight: '800',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor:'#fff'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f77f00',
        padding: 28,

    },
})

