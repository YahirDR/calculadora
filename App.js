import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';

export default function App() {
  return (
    <View style={styles.container}>
      <View
      
      >
        <Pantalla value='d'  />
      </View>
      <View
      style={styles.Line}
      >
        <Boton>7</Boton>
        <Boton>8</Boton>
        <Boton>9</Boton>
        <Boton>+</Boton>
      </View>
      <View
      style={styles.Line}
      >
        <Boton>4</Boton>
        <Boton>5</Boton>
        <Boton>6</Boton>
        <Boton>-</Boton>
      </View>
      <View
      style={styles.Line}
      >
        <Boton>1</Boton>
        <Boton>2</Boton>
        <Boton>3</Boton>
        <Boton>*</Boton>
      </View>
      <View
      style={styles.Line}
      >
        <View>
        <Boton>0</Boton>
        </View>
        <View>
          <Boton>=</Boton>
        </View>
        <View
          style={styles.LastLine}
        >
        <Boton>/</Boton>
        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: 'black' 
  },
  Line:{
    flexDirection: 'row', // Alinea los botones horizontalmente
    justifyContent: 'space-between', // Crea espacio entre los botones
    marginTop: 20
  },
  LastLine:{
    flexDirection: 'row', // Alinea los botones horizontalmente
    justifyContent: 'flex-end', // Alinea los botones a la derecha
    marginLeft:90
  },

});
