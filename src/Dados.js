import React, { useState } from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import Estilo from './Estilos'

export default function Dados({route, navigation}){ 
    const TelaDados = <>
        <View style = {Estilo.View}>
            <Text style = {{color: 'white', fontSize: 30, marginBottom: 10, textAlign: 'center'}}>Você foi cadastrado com sucesso!</Text>
            <Text style = {{color: 'white', fontSize: 30, marginBottom: 10, textAlign: 'center'}}></Text>
            <Text style = {{color: 'white', fontSize: 30, marginBottom: 10, textAlign: 'center'}}></Text>
            <Text style = {{color: 'white', fontSize: 30, marginBottom: 10, textAlign: 'center'}}></Text>
            <TouchableHighlight onPress = {() => navigation.navigate('Home')}>
                <Text>Ir pra Home</Text>
            </TouchableHighlight>
        </View>
    </>
    return TelaDados
}