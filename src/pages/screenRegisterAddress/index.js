import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import * as Animation from 'react-native-animatable'
import IconHome1 from 'react-native-vector-icons/Entypo'
import FooterCompenent from '../../components/footerPageComponent'

export default function ScreenRegisterAddress({ navigation }) {

    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const nextPageCondition = async () => {

        if (cep === '') { alert('Preencha o campo CEP'); return }
        if (logradouro === '') { alert('Preencha o campo Logradouro'); return }
        if (numero === '') { alert('Preencha o campo Número'); return }
        if (complemento === '') { alert('Preencha o campo Complemento'); return }
        if (bairro === '') { alert('Preencha o campo Bairro'); return }
        if (cidade === '') { alert('Preencha o campo Cidade'); return }
        if (uf === '') { alert('Preencha o campo UF'); return }

        const registerAdress = {
            'cep': cep,
            'logradouro': logradouro,
            'numero': numero,
            'complemento': complemento,
            'bairro': bairro,
            'cidade': cidade,
            'uf': uf
        }

        await AsyncStorage.setItem('@registerAddress', JSON.stringify(registerAdress))

        alert('Registrado com sucesso !!!')

        navigation.reset({ routes: [{ name: 'RegisterPersonal' }] })
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <TouchableOpacity>
                    <Text onPress={nextPageCondition} style={styles.save}>Salvar</Text>
                </TouchableOpacity>
            </View>
            <Animation.View animation='lightSpeedIn' duration={2000} delay={0} style={styles.containerRegistration}>
                <Animation.Text animation='zoomIn' duration={2000} style={styles.logo}>RK</Animation.Text>
                <View style={styles.registration}>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>CEP</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={0}>
                        <TextInput
                            style={styles.input}
                            value={cep}
                            onChangeText={t => setCep(t)}
                        />
                    </Animation.View>
                </View>
                <View style={styles.registration}>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>Logradouro</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={500}>
                        <TextInput
                            style={styles.input}
                            value={logradouro}
                            onChangeText={t => setLogradouro(t)}
                        />
                    </Animation.View>
                </View>
                <View style={styles.registration}>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>Número</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={1000}>
                        <TextInput
                            style={styles.input}
                            value={numero}
                            onChangeText={t => setNumero(t)}
                        />
                    </Animation.View>
                </View>
                <View style={styles.registration}>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>Complemento</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={1500}>
                        <TextInput
                            style={styles.input}
                            value={complemento}
                            onChangeText={t => setComplemento(t)}
                        />
                    </Animation.View>
                </View>
                <View style={styles.registration}>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>Bairro</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={2000}>
                        <TextInput
                            style={styles.input}
                            value={bairro}
                            onChangeText={t => setBairro(t)}
                        />
                    </Animation.View>
                </View>
                <View style={styles.registration}>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>Cidade</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={2500}>
                        <TextInput
                            style={styles.input}
                            value={cidade}
                            onChangeText={t => setCidade(t)}
                        />
                    </Animation.View>
                </View>
                <View style={styles.registration}>
                    <Animation.Text animation='slideInLeft' duration={2000} style={styles.dados}>UF</Animation.Text>
                    <Animation.View animation='lightSpeedIn' delay={3000}>
                        <TextInput
                            style={styles.input}
                            value={uf}
                            onChangeText={t => setUf(t)}
                        />
                    </Animation.View>
                </View>
            </Animation.View>

            <FooterCompenent icon='home' title='home' />

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
        backgroundColor: '#fff',
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
    save: {
        color: '#fff',
        marginLeft: 270,
        marginTop: -10,
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
        color: '#adb5bd',
        textTransform: 'uppercase',
        fontWeight: '700',
    },
})

