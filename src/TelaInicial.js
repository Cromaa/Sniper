import React from "react"
import {View, Text, TouchableHighlight, Image, ImageBackground} from "react-native"
import Estilos from './Estilos'

export default function TelaInicial({navigation}){
    const Inicial = <>        
        <ImageBackground source = {require('../assets/Img/SniperFundo2.png')} style = {Estilos.SniperFundo}>
            <Image source = {require('../assets/Img/SniperLogoC.png')} style = {Estilos.Image}/>
            <TouchableHighlight style = {Estilos.Botao} onPress = {() => navigation.navigate('Login')}>
                <View>
                    <Text style = {{textAlign: 'center', fontSize: 25, color: 'white'}}>Login</Text>    
                </View>
            </TouchableHighlight>
            <Text style = {{textAlign: 'center', fontSize: 15}}>──────────────  ou  ──────────────</Text>
            <TouchableHighlight style = {Estilos.Botao} onPress = {() => navigation.navigate('Cadastro')}>
                <View>
                    <Text style = {{textAlign: 'center', fontSize: 25, color: 'white'}}>Cadastre-se</Text>
                </View>
            </TouchableHighlight>
        </ImageBackground>       
    </>
    return Inicial
}