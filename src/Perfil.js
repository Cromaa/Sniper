import React, {useState} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import Estilos from './Estilos' 

export default function Perfil({navigation, route}){
    let [Var, setVar] = useState(require('../assets/Img/AlterarFoto/Foto2.jpeg'))
    let Aux = 0

    const Alterar = () => {
        if(Aux == 0){
            setVar(require('../assets/Img/AlterarFoto/Foto4.jpeg'))
            Aux = 1
        } else if(Aux == 1){
            setVar(require('../assets/Img/AlterarFoto/Foto3.jpeg'))
            Aux = 2
        }
    }

    const TelaPerfil = <> 
        <View style = {Estilos.ViewPerfil1}>
            <Text style = {Estilos.TxtSeuPerfil}>Seu Perfil</Text>
            <Image source = {Var} style = {Estilos.FotoDePerfil1}/>
            <TouchableOpacity onPress = {Alterar}>
                <Text style = {Estilos.TxtAlterar}>Alterar Imagem</Text>
            </TouchableOpacity>
        </View>
        <View style = {Estilos.ViewProfile}>
            <View style = {{flexDirection: 'row', marginBottom: 20}}>
                <View style = {Estilos.BoxTxtPerfil}>
                    <Text style = {Estilos.TxtPerfil}>Nome</Text>
                    <Text style = {Estilos.TxtPerfil}>Senha</Text>
                    <Text style = {Estilos.TxtPerfil}>Email</Text>
                    <Text style = {Estilos.TxtPerfilBio}>Bio</Text>
                </View>
                <View style = {Estilos.BoxTxtPerfil}>
                    <Text style = {Estilos.TxtPerfilRight}>{route.params?.user}</Text>
                    <Text style = {Estilos.TxtPerfilRight}>{route.params?.password}</Text>
                    <Text style = {Estilos.TxtPerfilRight}>{route.params?.email}</Text>
                    <Text style = {Estilos.TxtBio}>Surfista, adoro jogar futebol e curtir uma prainha de final de semana</Text>
                </View>
            </View>
        </View>
    </>
    return TelaPerfil
}