import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import * as Animation from 'react-native-animatable'
import IconUser from 'react-native-vector-icons/FontAwesome5'
 
import FooterCompenent from '../../components/footerPageComponent'

export default function ScreenLogin({ navigation }) {

    const [userEmail, setUserEmail] = useState()
    const [userPassword, setUserPassword] = useState()

    const [verific, setVerific] = useState(false)
    const loginUser = async () => {
        const token = await AsyncStorage.getItem('@_token')
        const tokenUser = JSON.parse(token)

        const registerAdress = await AsyncStorage.getItem('@registerAddress')
        const registerPersonal = await AsyncStorage.getItem('@registerPersonal')
        // register ? navigation.reset({ routes: [{ name: 'RegisterPersonal' }] }) : ''

        if (userPassword === tokenUser.password && userEmail === tokenUser.email) {
            registerAdress && registerPersonal ? navigation.reset({ routes: [{ name: 'Payment' }] }) : navigation.reset({ routes: [{ name: 'RegisterAddress' }] })
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
            </View>
            <Animation.View animation='lightSpeedIn' duration={2000} delay={0} style={styles.containerRegistration}>


                {/* --- message ---- */}


                <TouchableOpacity>
                    <Animation.Text animation='flipInX' delay={1500} style={styles.titleLogo}>Login</Animation.Text>
                </TouchableOpacity>
                <IconUser name='user-check' style={styles.logo} />
                <View style={styles.registration}>


                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>E-mail</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={0}>
                        <TextInput
                            style={styles.input}
                            textContentType='emailAddress'
                            value={userEmail}
                            onChangeText={setUserEmail}
                        />
                    </Animation.View>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>Senha</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={0}>
                        <TextInput
                            style={styles.input}
                            textContentType='password'
                            value={userPassword}
                            onChangeText={setUserPassword}
                        />
                    </Animation.View>

                </View>

                <TouchableOpacity onPress={loginUser} style={styles.containerSave}>
                    <Text style={styles.save}>Entrar</Text>
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
        width: 110,
        marginTop: 20
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#6da7f2',
        color: '#2f3e46',
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
    titleLogo: {
        fontSize: 45,
        position: 'absolute',
        zIndex: 1,
        marginTop: -80,
        left: 130,
        fontWeight: '900',
        letterSpacing: 6,
        fontStyle: 'italic',
        color: '#0081a7',

    }
})

