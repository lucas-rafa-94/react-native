import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

//http://faus.com.br/recursos/c/dmairr/api/itens.html
import Item from './Item.js';
import axios from 'axios';

class ListaItens extends Component {
//Ciclo de vida de um componente
  constructor(props){
    super(props);
    this.state = {
      'listaItens': []
    };
}
  componentWillMount(){
    axios.get("http://faus.com.br/recursos/c/dmairr/api/itens.html")
    .then(response => {
      this.setState({ 'listaItens': response.data});
     }).catch((err) => {
      console.log(err);
    });
  }
  //componentDidMount(){

  //}
  render() {
    return (

      <ScrollView>
      {this.state.listaItens.map(function (item) {
        return (
          <Item key={item.titulo} item={item}></Item>
        )
      })}
      </ScrollView>
    );
  }
}
export default ListaItens;
