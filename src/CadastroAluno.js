import React, { useState } from 'react'
import {View, Text, TouchableHighlight, TextInput, Image, ImageBackground, KeyboardAvoidingView, CheckBox} from 'react-native'
import Estilo from './Estilos'

export default function Cadastro({route, navigation}){
    let [Login, setLogin] = useState('')
    let [Senha, setSenha] = useState('')
    let [Email, setEmail] = useState('')
    let [SexoMasc, setSexoMasc] = useState(false)
    let [SexoFem, setSexoFem] = useState(false)
    let [Sexo, setSexo] = useState('')

    const TelaCadastro = <>
        <ImageBackground source = {require('../assets/Img/FundoCadastroAluno.png')} style = {Estilo.Imagem}>
            <Text style = {Estilo.TxtLogin}>Informações Pessoais</Text>
        </ImageBackground>
        <View style = {Estilo.ViewCadastroAluno}>
            <KeyboardAvoidingView>
                <View>
                    <TextInput style = {Estilo.InputCadastro} placeholder = 'Usuário' 
                    onChangeText = {x => setLogin(x)} />
                </View>
                <View>
                    <TextInput secureTextEntry = {true} style = {Estilo.InputCadastro} placeholder = 'Senha' 
                    onChangeText = {x => setSenha(x)}/>
                </View>
                <View>
                    <TextInput style = {Estilo.InputCadastro} placeholder = 'Email' 
                    onChangeText = {x => setEmail(x)}/>
                </View>
                {/* <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Text style = {Estilo.EscolhaSexo}>Sexo</Text>
                    <CheckBox value = {SexoMasc} onValueChange = {() => setSexoMasc(!SexoMasc)}/>
                    <Text style = {Estilo.EscolhaSexo}>Masculino</Text>
                    <CheckBox value = {SexoFem} onValueChange = {() => setSexoFem(!SexoFem)}/>
                    <Text style = {Estilo.EscolhaSexo}>Feminino</Text>
                </View> */}
            </KeyboardAvoidingView>
        </View>
        <View style = {Estilo.ViewbtnInferior}>
                <TouchableHighlight style = {Estilo.TouchBtnInferior} onPress = {() => navigation.navigate('Cadastro')}>
                    <Text style = {Estilo.btnInferior}>Voltar</Text>
                </TouchableHighlight>
                <TouchableHighlight style = {Estilo.TouchBtnInferior} onPress = {() => navigation.navigate('Login',{Login, Senha, Email})}>
                    <Text style = {Estilo.btnInferior}>Ok</Text>
                </TouchableHighlight>
        </View>
    </>
    return TelaCadastro
}