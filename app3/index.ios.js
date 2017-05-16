import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class MeuComponente extends Component{
  render(){
    return(
      <View>
          <Text>{this.props.var1}</Text>
      </View>

    );
  };
};

class app3 extends Component{
  constructor(props){
    super(props);
    this.state = { texto : 'Primera coisa'};
  }

  altTexto(){
    this.setState({texto :'Outra Coisa'})
  }

  render(){

    return(
      <View>
      <MeuComponente var1={this.state.texto}></MeuComponente>
        <Button
          title='Botaum'
          onPress={() => {this.altTexto()}}
        />
      </View>
    );
  };
};

AppRegistry.registerComponent('app3', () => app3);
