import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import Topo from './src/components/topo.js'

const Estilos ={
  estiloImagemTopo:{

  },
  buttons:{
    width: 90
  },
  conteudo:{
    marginTop:10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  palco:{
    alignItems:'center',
    marginTop: 20
  },
  textVencedor:{
    height: 40,
    color: 'red',
    fontSize: 20

  },
  resultadoJogo:{
    alignItems:'center',
    marginBottom: 20
  }
}

class app3 extends Component{
    constructor(props){
      super(props);

      this.state = { 'escolhaUsuario' : '',
                     'escolhaComputador': '',
                     'resultado': ''
     };
    }

    trocaEscolha(escolha){
      var numAleatorio = Math.floor(Math.random() * 3);
      var escolhaComputador = '';
      var resultado = '';

      switch (numAleatorio) {
        case 0: escolhaComputador = 'pedra'; break;
        case 1: escolhaComputador = 'tesoura'; break;
        case 2: escolhaComputador = 'papel'; break;
      }

      if(escolhaComputador == 'pedra'){
        if(escolha == 'pedra'){
          resultado = 'Empate!!';
        }else if (escolha == 'papel') {
          resultado = 'Usuário Venceu!!';
        }else {
          resultado = 'Computador venceu!!';
        }
      }else if (escolhaComputador == 'tesoura'){
        if(escolha == 'pedra'){
          resultado = 'Usuário Venceu!!';
        }else if (escolha == 'papel') {
          resultado = 'Computador venceu!!';
        }else {
          resultado = 'Empate!!';
        }
      }else if (escolhaComputador == 'papel') {
        if(escolha == 'pedra'){
          resultado = 'Computador venceu!!';
        }else if (escolha == 'papel') {
          resultado = 'Empate!!';
        }else {
          resultado = 'Usuário Venceu!!';
        }
      }

      this.setState({'escolhaUsuario' : escolha, 'escolhaComputador': escolhaComputador, 'resultado': resultado})
    };

    render(){

    const {estiloImagemTopo, textVencedor, palco, conteudo, buttons} = Estilos;

    return(
      <View>
          <Topo></Topo>
          <View style={conteudo}>
              <View style={buttons}>
                  <Button  title='Pedra' onPress={ () => this.trocaEscolha('pedra')}  />
              </View>
              <View style={buttons}>
                  <Button title='Papel' onPress={() => this.trocaEscolha('papel')}/>
              </View>
              <View style={buttons}>
                  <Button title='Tesoura' onPress={() => this.trocaEscolha('tesoura')}/>
              </View>
          </View>
          <View style={palco}>

          <Text style={textVencedor}> {this.state.resultado} </Text>

          <Icone escolha={this.state.escolhaComputador} usuario={'Computador'}></Icone>
          <Icone escolha={this.state.escolhaUsuario} usuario={'Usuario'}></Icone>

          </View>

      </View>
    );
  };
};

class Icone extends Component{
  render(){
    const {resultadoJogo} = Estilos;
    if(this.props.escolha == "pedra"){
      return(
          <View style={resultadoJogo}>
            <Text>{this.props.usuario}</Text>
            <Image source={require('./img/pedra.png')} />
          </View>
        );
      }else if (this.props.escolha == "tesoura") {
        return(
        <View style={resultadoJogo}>
          <Text>{this.props.usuario}</Text>
          <Image source={require('./img/tesoura.png')} />
        </View>
      );
    }else if (this.props.escolha == "papel") {
      return(
      <View style={resultadoJogo}>
        <Text>{this.props.usuario}</Text>
        <Image source={require('./img/papel.png')} />
      </View>
    );
  }else {
    return false;
  }

  }
}

AppRegistry.registerComponent('app3', () => app3);
