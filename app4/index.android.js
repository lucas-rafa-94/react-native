import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListaItens from './src/components/ListaItens.js'

export default class app4 extends Component {
  render() {
    console.log("teste");
    return (

      <ListaItens></ListaItens>
    );
  }
}


AppRegistry.registerComponent('app4', () => app4);
