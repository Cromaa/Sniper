import React, { useState } from "react"
import {View, Text, TextInput, TouchableHighlight, Alert, KeyboardAvoidingView, Image, Modal, ImageBackground} from "react-native"
import Estilos from './Estilos'

export default function Login({route, navigation}){
    let [SenhaAtual, setSenhaAtual] = useState()
    let [VerEmail, setVerEmail] = useState('')
    let [VerSenhaAtual, setVerSenhaAtual] = useState('')
    let [NovaSenha, setNovaSenha] = useState('') 
    let [RepNovaSenha, setRepNovaSenha] = useState('') 
    let [Vis, setVis] = useState(false)
    let [Log, setLog] = useState('')
    let auxSenha = route.params?.Senha
    let auxLogin = route.params?.Login
    let auxEmail = route.params?.Email 

    const VerificaLogin = () => {         
        setSenhaAtual(auxSenha)    
        if(Log == '' || VerSenhaAtual == '') {
            Alert.alert('Por Favor', 'Preencha todos os espaços')
        } else if(SenhaAtual == VerSenhaAtual && auxLogin == Log){
            Alert.alert('Parabéns', 'Você efetuou seu login com sucesso')
            navigation.navigate('Menu', {screen: 'Feed', params: {user: Log, password: SenhaAtual, email: auxEmail}})
        } else {
            Alert.alert('Login e/ou Senha Incorretos', 'Por Favor verifique seu Login e/ou Senha e tente novamente')
        }
    }
       
    //{screen: 'Perfil', params: {user: Log, password: auxSenha, email: auxEmail}}

    const AlteraSenha = () => {
        setSenhaAtual(auxSenha)
        if(NovaSenha == SenhaAtual || RepNovaSenha == SenhaAtual){
            Alert.alert('😱 Opsss', 'Sua nova senha não pode ser igual a antiga')
        } else if(auxEmail == VerEmail){
            if(NovaSenha == RepNovaSenha){
                setSenhaAtual(NovaSenha)
                Alert.alert('Senha Alterada', 'Sua senha foi alterada com sucesso!')
                setVis(false)
            }
        } else {
            Alert.alert('😱 Eita', 'Parece que você não preencheu todos os campos corretamente!!')
        }
    }
    
    const telaLogin = <>
            <ImageBackground source = {require('../assets/Img/FundoLogin.png')} style = {Estilos.Imagem}>
                <Text style = {Estilos.TxtLogin}>Login</Text>
            </ImageBackground>
            <View style = {Estilos.View}>
                <KeyboardAvoidingView>
                    <TextInput style  = {Estilos.Input} placeholder = '👤 Usuário' 
                    onChangeText = {x => (setLog(x))}/> 
                    <TextInput style  = {Estilos.Input} secureTextEntry = {true} placeholder = '🔒 Senha'
                    onChangeText = {x => (setVerSenhaAtual(x))}/>
                    <TouchableHighlight style = {Estilos.Touch}>
                        <Text style = {Estilos.EsqueceuSenha} onPress = {() => setVis(true)}>Esqueceu sua senha?</Text> 
                    </TouchableHighlight>
                <Modal visible = {Vis} animationType = 'fade'>
                    <ImageBackground source = {require('../assets/Img/FundoAlterarSenha.png')} style = {Estilos.Imagem}>
                        <Text style = {Estilos.TxtAltSenha}>Alterar Senha</Text>
                    </ImageBackground> 
                    <View style = {Estilos.ViewAltSenha}>
                        <TextInput style  = {Estilos.InputAltSenha} onChangeText = {x => setVerEmail(x)} placeholder = 'Email'/>
                        <TextInput style  = {Estilos.InputAltSenha} onChangeText = {x => setNovaSenha(x)} secureTextEntry = {true} placeholder = 'Nova senha'/>
                        <TextInput style  = {Estilos.InputAltSenha} onChangeText = {x => setRepNovaSenha(x)} secureTextEntry = {true} placeholder = 'Repita a nova senha'/>
                        <TouchableHighlight style = {Estilos.TouchAltSenha} onPress = {AlteraSenha}>
                            <Text style = {Estilos.btnAltSenha}>Alterar Senha</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress = {() => setVis(false)} style = {Estilos.TouchBtnInferior}>
                            <Text style = {Estilos.btnInferior}>Fechar</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
                </KeyboardAvoidingView>
                <TouchableHighlight style = {Estilos.Botao} onPress = {VerificaLogin}>
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
            </View>
    </>
    return telaLogin
}