import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
    View: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#99bc2c',
    },
    ViewCadastroAluno: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    CadastroTitulo: {
        fontSize: 30,
        // marginBottom: 220,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    TxtLogin: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    Botao: {
        height: 60,
        width: 330,
        backgroundColor: '#9AD055',
        borderRadius: 15,
        marginVertical: 10,
        padding: 12,  
    },
    Touch: {
        height: 20,
        textAlign: 'right', 
        marginLeft: 195,
        // backgroundColor: 'blue',
    },
    EsqueceuSenha: {
        textAlign: 'right', 
        marginBottom: 10
    },
    Input: {
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 15,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        fontSize: 20,
    },
    Image: {
        width: 250,
        height: 250,
        justifyContent: 'center', 
        resizeMode: 'contain',
        marginBottom: 20
    },
    Imagem: {
        backgroundColor: '#99bc2c', 
        flexGrow: 3, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    SniperFundo: {
        flexGrow: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputCadastro: {
        borderWidth: 1,
        borderColor: '#BDBDBD',
        marginVertical: 10,
        paddingLeft: 15,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        fontSize: 20,
        width: 350
    },
    btnInferior: {
        fontSize: 15,
        color: '#fff',
        backgroundColor: '#9AD055',
        height: 30,
        width: 150,
        textAlign: 'center',
        borderRadius: 5,
        textAlignVertical: 'center'
    },
    TouchBtnInferior: {
        height: 30,
        width: 150,
        borderRadius: 5
    }, 
    ViewbtnInferior: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    btnEscolha: {
        fontSize: 25,
        backgroundColor: '#2F80ED',
        borderRadius: 15,  
        padding: 8,
        color: '#fff',
        marginVertical: 5,
        height: 55,
        width: 300,
        textAlign: 'center' 
    },
    CadastroTxt: {
        fontSize: 25,
        textAlign: 'left',
        width: 325,
        marginBottom: 20
    },
    ViewCadastro: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    EscolhaSexo: {
        fontSize: 20
    },
    TxtAltSenha: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    InputAltSenha: {
        fontSize: 20,
        marginVertical: 10,
        width: 300,
        borderBottomWidth: 2
    },
    btnAltSenha: {
        height: 50,
        width: 250,
        borderRadius: 10,
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        backgroundColor: '#2F80ED',
        marginVertical: 20
    },
    ViewAltSenha: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',   
    },
    ViewPerfil: {
        flexGrow: 1, 
        height: 130, 
        backgroundColor: '#9AD055', 
        borderBottomLeftRadius: 25, 
        borderBottomRightRadius: 25,
        padding: 15,
        justifyContent: 'center',
        marginBottom: 10,
        flexDirection: 'row'
    },
    Grid: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    ImagemGrid: {
        marginVertical: 12, 
        marginHorizontal: 12,
        width: 110, 
        height: 110, 
        borderRadius: 10, 
        backgroundColor: 'pink'
    },
    Imagens: {
        marginHorizontal: 12,
        width: 130, 
        height: 130, 
        borderRadius: 15, 
        backgroundColor: 'pink'
    },
    TxtFeed: {
        fontSize: 28,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    FotoDePerfil: {
        backgroundColor: 'white', 
        height: 100, 
        width: 100, 
        borderRadius: 100, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginRight: 20,
    },
    FotoDePerfil1: {
        backgroundColor: 'white', 
        height: 120, 
        width: 120, 
        borderRadius: 100, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    NomePerfil: {
        fontSize: 22,
        color: 'white',
        borderBottomColor: 'white',
        textAlignVertical: 'center',
        width: 200, 
        height: 40,
        borderBottomWidth: 1,
        marginTop: 30
    },
    ViewProfile: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ViewPerfil1: {
        flexGrow: 1, 
        height: 130, 
        backgroundColor: '#9AD055', 
        borderBottomLeftRadius: 25, 
        borderBottomRightRadius: 25,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    TxtPerfil: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        paddingLeft: 30
    },
    TxtPerfilRight: {
        marginBottom: 20,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        paddingLeft: 40,
        paddingRight: 40
    },
    TxtAlterar: {
        fontSize: 20,
        color: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        width: 220,
        textAlign: 'center',
    },
    TxtSeuPerfil: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 5
    },
    TxtBio: {
        width: 220,
        fontSize: 19,
        marginVertical: 15,
        paddingLeft: 40,
    },
    TxtPerfilBio: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 79.8,
        paddingLeft: 30,
    },
    BoxTxtPerfil: {
        borderBottomColor: '#BDBDBD',
        borderBottomWidth: 1
    },
    ViewConfig: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    },
    TxtDesconectar: {
        textAlignVertical: 'center',
        fontSize: 20,
        paddingLeft: 10,
        color: 'black'
    },
    ViewDesconectar: {
        flexDirection: 'row', 
        padding: 8,
        backgroundColor: '#9AD055',
        borderRadius: 10,
        paddingHorizontal: 20
    },
    FundoCiclistas: {
        height: 265,
        resizeMode: 'contain',
        borderBottomRightRadius: 30
    },  
    ViewGrupo: {
        flexGrow: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#9AD055',
    },
    TituloGrupo: {
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        textAlign: 'left',
        width: 320,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 10,
        paddingLeft: 10,
        marginLeft: 20,
    },
    TxtGrupo: {
        color: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        textAlign: 'left',
        width: 220,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        paddingLeft: 10,
        marginLeft: 20
    },
    GrupoTxt: {
        color: 'white',
        marginLeft: 30,
        paddingRight: 40,
        textAlign: 'left',
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    TxtContato: {
        color: 'white',
        marginLeft: 30,
        paddingRight: 40,
        textAlign: 'left',
        marginVertical: 5,
        fontSize: 15,
        fontWeight: 'bold' 
    },
    ViewBottomBotao: {
        backgroundColor: 'white',
        width: 430,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: 20,
        flexDirection: 'row',
    },
    BotaoBottom: {
        backgroundColor: '#9AD055',
        marginHorizontal: 20,
        width: 150,
        textAlign: 'center',
        paddingVertical: 8,
        borderRadius: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    ViewProf: {
        backgroundColor: '#9AD055',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    TxtTitutloProf: {
        fontSize: 25,
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    TxtNomeProf: {
        fontSize: 22,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderColor: 'black',
        marginVertical: 15,
        width: 350
    },
    TxtProf: {
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderColor: 'black',
        marginVertical: 12,
        width: 200
    },
    ViewTxtProf: {
        alignItems: 'flex-start',
        paddingLeft: 32
    },
    Descricao: {
        width: 330,
        fontSize: 15
    },
    TxtProf1: {
        fontWeight: 'bold',
        fontSize: 16
    },
    Comentario: {
        width: 230,
        marginVertical: 10
    },
    AdcionarComent: {
        borderColor: '#BDBDBD',
        borderBottomWidth: 1,
        width: 200
    },
    Aula: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    ViewBottomProf: {
        backgroundColor: '#9AD055',
        height: 70,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    BotaoProf: {
        backgroundColor: 'white',
        width: 160,
        height: 40,
        borderRadius: 15,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15
    },
})

export default estilo