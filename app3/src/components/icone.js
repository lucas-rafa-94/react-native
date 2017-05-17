import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

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
