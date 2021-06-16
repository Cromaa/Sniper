import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

//Stack Navigator
import Login from './Login'
import TelaInicial from './TelaInicial'
import Cadastro from './EscolhaCadastro'
import CadastroAluno from './CadastroAluno'

//Tab Navigator
import Config from './Config'
import Feed from './Feed'
import Perfil from './Perfil'

// import Ionicons from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

function Menu() {
  return <>
    <BottomTab.Navigator initialRouteName = 'Feed' 
    tabBarOptions = {{
      labelStyle: {fontSize: 30, textAlignVertical: 'center', marginBottom: 3},
      style: {backgroundColor: '#9AD055', borderTopLeftRadius: 25, borderTopRightRadius: 25},
      activeBackgroundColor: '#74A930',
      activeTintColor: 'white'
    }}>
      <BottomTab.Screen name = 'Config' component = {Config}
      options = {{
        tabBarLabel: '⚙',
      }}/>
      <BottomTab.Screen name = 'Feed' component = {Feed}
      options = {{
        tabBarLabel: '🏠'
      }}/>
      <BottomTab.Screen name = 'Perfil' component = {Perfil} initialParams = {{user: 'Exemplo', password: 'exemplo', email: 'Exemplo@exemplo.com'}}
      options = {{
        tabBarLabel: '👤',
      }}/>
    </BottomTab.Navigator>
  </>
}

export default function App(){
  const Tela = <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Feed'>
        <Stack.Screen name = 'Home' component = {TelaInicial}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen name = 'Login' component = {Login}
          options = {{
            headerShown: false,                                
          }}
        />
        <Stack.Screen name = 'Cadastro' component = {Cadastro}
          options = {{
            headerShown: false,
          }}
        />
        <Stack.Screen name = 'CadastroAluno' component = {CadastroAluno}
          options = {{
            headerShown: false
          }}
        />
        <Stack.Screen name = 'Menu' component = {Menu} 
        options = {{
          headerShown: false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </> 
  return Tela
}



// initialRouteName = 'Cadastro'