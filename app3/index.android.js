import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

const Estilos ={
  estiloImagemTopo:{
    width:200
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
          resultado = 'empate';
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
          resultado = 'empate';
        }
      }else if (escolhaComputador == 'papel') {
        if(escolha == 'pedra'){
          resultado = 'Computador venceu!!';
        }else if (escolha == 'papel') {
          resultado = 'empate';
        }else {
          resultado = 'Usuário Venceu!!';
        }
      }

      this.setState({'escolhaUsuario' : escolha, 'escolhaComputador': escolhaComputador, 'resultado': resultado})
    }

    render(){
    return(
      <View>
          <Topo></Topo>
          <View></View>
          <View></View>
      <Text> Escolha usuario: {this.state.escolhaUsuario} </Text>
      <Text> Escolha computador: {this.state.escolhaComputador}  </Text>
      <Text> Vencedor: {this.state.resultado}  </Text>
      <Button title='Pedra' onPress={ () => this.trocaEscolha('pedra')}  />
      <Button title='Papel' onPress={() => this.trocaEscolha('papel')}/>
      <Button title='Tesoura' onPress={() => this.trocaEscolha('tesoura')}/>
      </View>
    );
  };
};

class Topo extends Component {
  render(){
    const {estiloImagemTopo} = Estilos;
    return(
      <View>
          <Image style={estiloImagemTopo} source={require('./img/jokenpo.png')} />
      </View>
    )
  }
}

AppRegistry.registerComponent('app3', () => app3);
