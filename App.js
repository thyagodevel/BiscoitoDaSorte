import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'Seja feliz. A base de remédios',
    'Ela não esta offline, você que está bloqueado',
    'Uma mulher te abraçou". Era sua mãe!!!',
    'É só uma fase ruim, logo vai piorar',
    'Pare de desejar e comece a desistir',
    'Não pare, faça até dar errado',
    'Nada como um dia pior que o outro',
    'Seu maior problema é você',
    'Comemore as pequenas derrotas',
    'A vida é um conto de falhas',
    'Reclame menos, fracasse mais',
    'Um dia você perde, no outro você não ganha',
    'O universo não ta nem ai para você',
  ];

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frases.length);

    setTextoFrase(` "${frases[numeroAleatorio]}" `);
    setImg(require('./src/biscoitoAberto.png'))
  }

  function reiniciar(){
    setTextoFrase('')
    setImg(require('./src/biscoito.png'))
  }

  return(
    <SafeAreaView style={styles.container} >

      <Text style={styles.aviso} >Caso possua algum tipo de depressão, favor avaliar se deve ou não usar o aplicativo.</Text>
      <Text style={styles.titulo} >Biscoito da Depressão</Text>
      <Text style={[styles.titulo, { fontSize: 17, marginBottom: 70, color: '#FF0000' }]} >Fique triste com moderação</Text>

      <Image
        source={img} 
        style={styles.img} 
      />

      <Text style={styles.textoFrase} > {textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito } >
        <View style={styles.btnArea} >
          <Text style={styles.btnTexto} >Quebrar Biscoito</Text> 
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} onPress={ reiniciar } >
        <View style={styles.btnArea} >
          <Text style={[styles.btnTexto, { color: '#121212' }]} >Reiniciar Biscoito</Text> 
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aviso:{
    color: 'grey',
    textAlign: 'center',
  },
  titulo:{
    fontSize: 25,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#dd7b22',
  },  
  img:{
    width: 230,
    height: 230,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
});

export default App;