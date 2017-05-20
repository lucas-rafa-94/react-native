import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Item extends Component {
  render() {
    return (
      <View style={style.item}>
          <View style={style.foto} >
                <Image style={{
                  height: 100,
                  width: 100
                }} source={{ uri: this.props.item.foto }}/>
          </View>
          <View style={style.texto}>
                <Text style={style.txtTitulo}>{this.props.item.titulo}</Text>
                <Text style={style.txtPreco}>R$ {this.props.item.valor}</Text>
                <Text style={style.txtDetalhes}>Local: {this.props.item.local_anuncio}</Text>
                <Text style={style.txtDetalhes}>Dt Publicação: {this.props.item.data_publicacao}</Text>
          </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
      item:{
          borderWidth: 0.5,
          borderColor: '#999',
          margin: 10,
          padding: 10,
          flexDirection: 'row'
      },
      foto:{
        height: 102,
        width: 102
      },
      texto:{
          marginLeft: 20,
          flex: 1
      },
      txtTitulo:{
        fontSize: 18,
        color: 'blue',
        marginBottom: 5
      },
      txtPreco: {
        fontSize: 16,
        fontWeight: 'bold'
      },
      txtDetalhes:{
        fontSize:16
      }

})

export default Item
