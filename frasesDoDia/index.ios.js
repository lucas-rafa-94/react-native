/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const Estilos = {

  principal:{
    flex: 1
  },

  cabecalho:{
    flex: 2
  },

  conteudo: {
    flex:8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape:{
    flex: 2
  },
  estiloBotao:{
    marginTop: 40,
    backgroundColor: 'green',
    width: 200,
    height: 40,
    borderRadius: 10,
    padding:10
  },
  estiloTextoBotao:{
    color: '#fff',
    textAlign: 'center',
  }

}

const funcFrase = () =>{
  var random = Math.random();
  var numeroEscolhido = Math.floor(random * 5);

  var frases = Array();

  frases[0] = 'Frase 1';
  frases[1] = 'Frase 2';
  frases[2] = 'Frase 3';
  frases[3] = 'Frase 4';
  frases[4] = 'Frase 5';

  return alert(frases[numeroEscolhido])
}

const App = () => {

  const {principal, cabecalho, conteudo, rodape, estiloBotao, estiloTextoBotao} = Estilos;

  return (
    <View style={principal}>
      <View style={cabecalho}>

      </View>
      <View style={conteudo}>
          <Image source={require('./img/logo.png')}></Image>
          <TouchableOpacity style={estiloBotao} onPress={funcFrase}>
              <Text style={estiloTextoBotao}>Frase do dia</Text>
          </TouchableOpacity>
      </View>
      <View style={rodape}>

      </View>

    </View>

  );

};

AppRegistry.registerComponent('frasesDoDia', () => {return App});
