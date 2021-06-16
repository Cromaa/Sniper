import React, { useState } from 'react'
import {View, Text, TouchableOpacity, ImageBackground, Image} from 'react-native'
import Estilo from './Estilos'

export default function Cadastro({navigation}){
    const TelaCadastro = <>
        <ImageBackground source = {require('../assets/Img/FundoCadastro.png')} style = {Estilo.Imagem}>
            <Text style = {Estilo.CadastroTitulo}>Cadastro</Text>
        </ImageBackground>
        <View style = {Estilo.ViewCadastro}>
            <Text style = {Estilo.CadastroTxt}>Você é um(a)...</Text>
            <TouchableOpacity onPress = {() => navigation.navigate('CadastroAluno')}>              
                    <Text style = {Estilo.btnEscolha}>Aluno</Text>              
            </TouchableOpacity>
            <TouchableOpacity>              
                    <Text style = {Estilo.btnEscolha}>Estabelecimento</Text>              
            </TouchableOpacity>
            <TouchableOpacity>               
                    <Text style = {Estilo.btnEscolha}>Professor</Text>               
            </TouchableOpacity>
            <TouchableOpacity style = {Estilo.TouchBtnInferior} onPress = {() => navigation.navigate('Login')}>
                <Text style = {Estilo.btnInferior}>Voltar</Text>
            </TouchableOpacity>
        </View>
    </>
    return TelaCadastro
}