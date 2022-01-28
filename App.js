import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';

function App(){
  const [img, setImg] = useState(require('./src/biscoito,png'));

  return(
    <SafeAreaView style={styles.container} >
      <Image
        source={img} 
        style={styles.img}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width: 230,
    height: 230,
  },
});

export default App;