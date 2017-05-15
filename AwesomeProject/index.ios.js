import React from 'react';
import {View, Text, Button, AppRegistry} from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random()
  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio)
}

const App =  () => {

  return (
  <View>
  <Text> primeiro App</Text>
  <Button
    title= "Botão"
    onPress= {geraNumeroAleatorio}
  />
  </View>
  );
};

AppRegistry.registerComponent('AwesomeProject', () => {
   return App
});
