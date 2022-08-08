import React, { useContext, useEffect, useState } from 'react'

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Iconcart from 'react-native-vector-icons/FontAwesome'
import Iconsegment from 'react-native-vector-icons/MaterialIcons'
import Iconsearch from 'react-native-vector-icons/Feather'

import { AutoContext } from '../../context/auth'
import * as Animation from'react-native-animatable'

import ListCake from '../../../assets/bolos'
import cakeArray from '../../../assets/bolos/cakeArray'

import FooterCompenent from '../../components/footerPageComponent'

import ModalMenuList from '../../components/modalMenuList'

export default function ListCakeMenu({navigation}) { 
 
    const { sizeMode } = useContext(AutoContext)        

    function showMode() {
        sizeMode(0)
    }

    //Pesquisando
    const [search, setSearch] = useState('')
    const [list, setList] = useState(cakeArray)
    useEffect(()=>{
        if(search === ''){
            setList(cakeArray)
        }else{
            setList(
                cakeArray.filter(item => {
                    if(item.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1){
                        return true
                    }else{
                        return false
                    }
                })
            )
        }
    },[search])   
    
     //pegando item localStorage
     const [totalCart, setTotalCart] = useState(0)
     async function getCart() {
         const responseTotal = await AsyncStorage.getItem('@qnt_cart')
         const getTotal = responseTotal ? JSON.parse(responseTotal) : []
         setTotalCart(getTotal[getTotal.length -1])
     }
 
     useEffect(() => { getCart() }, []) 

    return (
        <View style={styles.containerMenu}>
            
            <ModalMenuList/>
           
            <View style={styles.menuPrincipal}>
                <View>
                    <TouchableOpacity onPress={showMode} style={styles.menu}>
                        <Iconsegment style={styles.Iconsegment} name='segment' />
                        <Text style={styles.textMenu}>MENU</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerInput}>
                    <TextInput 
                    style={styles.input}
                    placeholder='Pesquisar Lanche'
                    value={search}
                    onChangeText={search => setSearch(search)}
                    />
                    <Iconsearch style={styles.Iconsearch} name='search' />
                </View>
                <View style={styles.containerCard}>
                    <View style={styles.card}>
                        <Text style={styles.qntCart}>{totalCart}</Text>
                        <Iconcart style={styles.Iconcard} name='opencart' />
                    </View>
                </View>
            </View>
                     
            <ListCake array={list} />       

            <FooterCompenent icon='home' title='Home'/>

        </View>
    )
}

//Styles
const styles = StyleSheet.create({
    containerMenu: {
        flex: 1,
    },
    menuPrincipal: {
        height: 120,
        padding: 15,
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        
    },
    textMenu: {
        color: '#8a8c8e',
        marginRight: 5
    },
    Iconsegment: {
        fontSize: 30,
        color: '#8a8c8e'
    },
    input: {
        width: 160,
        height: 30,
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 2
    },
    containerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    },
    containerInput: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginRight: 5,
        alignItems: 'center'
    },
    Iconsearch: {
        fontSize: 20,
        marginRight: 10,
        marginLeft: 10,
        color: '#8a8c8e'
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Iconcard: {
        fontSize: 30,
        color: '#FF7F50',
        marginBottom: 15
    },
    qntCart: {
        color: '#FF1493',
        marginLeft: 10,
    },
    
})

