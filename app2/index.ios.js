import React from 'react';
import {Text, TouchableOpacity, Button, View, AppRegistry, Image} from 'react-native';

const Estilos = {
  estiloTexto : {
    fontSize: 20,
    backgroundColor : 'green',
    color: '#fff',
    textAlign: 'center',
    fontWeight: '200'
  },
  /*
  estiloTexto2 : {
    fontSize: 20,
    backgroundColor : '#fff',
    height: 30,
    width:30,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '200'
  },
  estiloView: {
    backgroundColor: 'blue',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  }
  */
  principal: {
    backgroundColor: 'blue',
    flex : 1
  },
  topo:{
    backgroundColor: 'red',
    flex : 2
  },
  conteudo:{
    backgroundColor: '#fff',
    flex : 8
  },
  rodape:{
    backgroundColor: 'green',
    flex : 1
  },
  estiloBotao:{
    backgroundColor: '#0094FF',
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
    //alignSelf: 'center'
  },
  textoBotao:{
    color: '#fff',
    textAlign: 'center'
  },
  estiloImagem:{
    width:100,
    height:100,
    alignSelf:'center',
    marginTop:20
  }
};

const botaofunc = () =>{
  return alert('Olá');
}

const App = () => {

  const { estiloBotao, textoBotao, estiloImagem, principal, topo, conteudo, rodape, estiloTexto } = Estilos;

  return (
  <View style = {principal}>
    <Text style = {topo}></Text>
      <View style = {conteudo}>
        <Text style =  {estiloTexto}>Teste Botao</Text>
        <TouchableOpacity style={estiloBotao} onPress={botaofunc}>
            <Text style={textoBotao}>Clique aqui</Text>
        </TouchableOpacity>
              <Image source={require('./img/logo.png')}
                style={estiloImagem}>
              </Image>
        </View>
    <Text style = {rodape}></Text>
  </View>
)
};
AppRegistry.registerComponent('app2', () => {return App});
