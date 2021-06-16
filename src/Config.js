import React from 'react'
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native'
import Estilos from './Estilos'

export default function Config({navigation}){
    const Desconectar = () => {
        Alert.alert('Tem Certeza? 🤔', 'Você será desconectado!',[{text: 'Cancelar'},
        {text: 'Sim', onPress: () => navigation.navigate('Home')}])   
    }
    
    const TelaConfig = <> 
        <View style = {Estilos.ViewConfig}>
            <TouchableOpacity onPress = {Desconectar}>
                <View style = {Estilos.ViewDesconectar}>
                    <Image source = {require('../assets/Img/sign-out-option.png')}/>
                    <Text style = {Estilos.TxtDesconectar}>Desconectar</Text>
                </View>
            </TouchableOpacity>
        </View>
    </>
    return TelaConfig
}