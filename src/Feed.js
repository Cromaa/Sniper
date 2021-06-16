import React, {useState} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView, Modal} from 'react-native'
import Estilos from './Estilos'

export default function Feed({navigation, route}){
    // console.warn(route.params?.email)
    // console.warn(route.params?.password)
    // console.warn(route.params?.email)
    
    let [Ciclistas, setCiclistas] = useState(false)
    let [Prof, setProf] = useState(false)

    const TelaCadastro = <>
      <ScrollView>
      <View style = {Estilos.ViewPerfil}>
        <Image source = {require('../assets/Img/AlterarFoto/Foto3.jpeg')} style = {Estilos.FotoDePerfil} />
        <Text style = {Estilos.NomePerfil}>{route.params?.user}</Text> 
      </View>
      <Text style = {Estilos.TxtFeed}>Seus Grupos:</Text>
      <ScrollView horizontal = {true} style = {{marginVertical: 20}}>
        <TouchableOpacity onPress = {() => setCiclistas(true)}>
          <Image style = {Estilos.Imagens} source = {require('../assets/Img/Feed/Ciclistas.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style = {Estilos.Imagens} source = {require('../assets/Img/Feed/Surfistas.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style = {Estilos.Imagens} source = {require('../assets/Img/Feed/Academia.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style = {Estilos.Imagens} source = {require('../assets/Img/Feed/Ciclistas.png')}/>
        </TouchableOpacity>
      </ScrollView>
      <Text style = {Estilos.TxtFeed}>O que há de novo:</Text>
      <ScrollView horizontal = {true} style = {{marginVertical: 20}}>
        <TouchableOpacity>
          <Image style = {Estilos.Imagens} source = {require('../assets/Img/Feed/Cartas.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style = {Estilos.Imagens} source = {require('../assets/Img/Feed/Corrida.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style = {Estilos.Imagens} source = {require('../assets/Img/Feed/Volei.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style = {Estilos.Imagens} source = {require('../assets/Img/Feed/Ciclistas.png')}/>
        </TouchableOpacity>
      </ScrollView>
      <Text style = {Estilos.TxtFeed}>Professores disponíveis:</Text>
      <ScrollView horizontal = {true} style = {{marginVertical: 20}}>
        <TouchableOpacity onPress = {() => setProf(true)}>
          <Image style = {Estilos.Imagens} source = {require('../assets/Img/Feed/Pessoa.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style = {Estilos.Imagens} source = {require('../assets/Img/Feed/Pessoa1.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style = {Estilos.Imagens} source = {require('../assets/Img/Feed/Pessoa2.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style = {Estilos.Imagens} source = {require('../assets/Img/Feed/Ciclistas.png')}/>
        </TouchableOpacity>
      </ScrollView>
      <Text style = {Estilos.TxtFeed}>Atividades:</Text>
      <View style = {Estilos.Grid}>
        <Image source = {require('../assets/Img/Grid/Vetor1.jpeg')} style = {Estilos.ImagemGrid}/>
        <Image source = {require('../assets/Img/Grid/Vetor2.jpeg')} style = {Estilos.ImagemGrid}/>
        <Image source = {require('../assets/Img/Grid/Vetor3.jpeg')} style = {Estilos.ImagemGrid}/>
      </View>
      <View style = {Estilos.Grid}>
        <Image source = {require('../assets/Img/Grid/Vetor4.jpeg')} style = {Estilos.ImagemGrid}/>
        <Image source = {require('../assets/Img/Grid/Vetor5.jpeg')} style = {Estilos.ImagemGrid}/>
        <Image source = {require('../assets/Img/Grid/Vetor6.jpeg')} style = {Estilos.ImagemGrid}/>
      </View>
      <View style = {Estilos.Grid}>
        <Image source = {require('../assets/Img/Grid/Vetor7.jpeg')} style = {Estilos.ImagemGrid}/>
        <Image source = {require('../assets/Img/Grid/Vetor8.jpeg')} style = {Estilos.ImagemGrid}/>
        <Image source = {require('../assets/Img/Grid/Vetor9.jpeg')} style = {Estilos.ImagemGrid}/>
      </View>
      <View style = {Estilos.Grid}>
        <Image source = {require('../assets/Img/Grid/Vetor10.jpeg')} style = {Estilos.ImagemGrid}/>
        <Image source = {require('../assets/Img/Grid/Vetor11.jpeg')} style = {Estilos.ImagemGrid}/>
        <Image source = {require('../assets/Img/Grid/Vetor12.jpeg')} style = {Estilos.ImagemGrid}/>
      </View> 
    </ScrollView>
    <Modal visible = {Prof}>
      <ScrollView>
        <View style = {Estilos.ViewProf}>
          <Image style = {Estilos.FotoDePerfil1} source = {require('../assets/Img/AlterarFoto/Foto5.jpeg')}/>
          <Text style = {Estilos.TxtTitutloProf}>Fisioterapia do Corpo</Text>
        </View>
        <View style = {Estilos.ViewTxtProf}>
          <Text style = {Estilos.TxtNomeProf}>Professora: Letícia Mariana</Text>
          <Text style = {Estilos.TxtProf}>Descrição: </Text>
          <Text style = {Estilos.Descricao}>
            Amplo espaço, ótimos profissionais, poucos alunos por horário e preços acessíveis. 
            Aceitamos só Unimed e Bradesco como planos de saúde. A novidade é que agora na pandemia, 
            começamos a realizar fisioterapia home-care.
          </Text>
          <Text style = {Estilos.TxtProf}>Contato: </Text>
          <Text style = {Estilos.TxtProf1}>Telefone:</Text>
          <Text>(00) 00000-0000</Text>
          <Text style = {Estilos.TxtProf}>Local: </Text>
          <Text style = {Estilos.TxtProf1}>Rua Washington Luiz, 7000</Text>
          <Text style = {Estilos.TxtProf}>Dias e Horários: </Text>
          <Text style = {Estilos.TxtProf1}>De segunda a sexta-feira</Text>
          <Text>das 10h as 22h</Text>
          <Text style = {Estilos.TxtProf}>Avaliações: </Text>
          <Text style = {Estilos.TxtProf1}>Giovanna Pimenta - 5 estrelas</Text>
          <Text style = {Estilos.Comentario}>Ótima profissional, começa a aula no hórario</Text>
          <Text style = {Estilos.TxtProf1}>Marcos Pinto - 1 estrela</Text>
          <Text style = {Estilos.Comentario}>Toda sessão começa 15 minutos atrasada</Text>
          <Text style = {Estilos.AdcionarComent}>Adicionar Comentário</Text>
          <Text style = {Estilos.Aula}>Marque uma aula experimental</Text>
        </View>
        <View style = {Estilos.ViewBottomProf}>
            <TouchableOpacity onPress = {() => setProf(false)}>
              <Text style = {Estilos.BotaoProf}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style = {Estilos.BotaoProf}>Bate-Papo</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
    <Modal animationType = 'slide' visible = {Ciclistas}>
      <ScrollView>
        <View style = {Estilos.ViewGrupo}>
          <Image style = {Estilos.FundoCiclistas} source = {require('../assets/Img/CiclistasFundo.png')}/>
          <View>
            <Text style = {Estilos.TituloGrupo}>Ciclistas 013</Text>
            <Text style = {Estilos.TxtGrupo}>Descrição: </Text> 
            <Text style = {Estilos.GrupoTxt}>
              Essa comunidade foi criada para ciclistas de Santos  
              e região que gostam de aventuras e esportes radicais. 
              Para mais informações, entre no bate-papo.
            </Text>
            <Text style = {Estilos.TxtGrupo}>Restrição: </Text> 
            <Text style = {Estilos.GrupoTxt}>
              Ser maior de 18 anos, boa convivência em grupo, 
              utilizar equipamentos de proteção adequados e ter alto condicionamento
            </Text>
            <Text style = {Estilos.TxtGrupo}>Contato: </Text> 
            <Text style = {Estilos.TxtContato}>Telefone: </Text>
            <Text style = {Estilos.TxtContato}>(00) 00000-0000</Text>
          </View>
          <View style = {Estilos.ViewBottomBotao}>
            <TouchableOpacity onPress = {() => setCiclistas(false)}>
              <Text style = {Estilos.BotaoBottom}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style = {Estilos.BotaoBottom}>Localizações</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Modal>
    </>
    return TelaCadastro
}

// style = {{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}