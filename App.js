import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import React,{useState} from 'react';
import BotonClear from './components/BotonClear';
import Icon from 'react-native-vector-icons/Entypo';
import { evaluate } from 'mathjs';


export default function App() {

  const [list,setList] = useState("");

  const agregarValor=(value)=>{
    setList(list + value);
  }
  const limpiarValores = () =>{
    setList("");
  }
  const calcularResultado = () => {
    try {
      if (list) {
        const resultado = evaluate(list);
        setList(resultado.toString());
      } else {
        Alert.alert("Ingresa valores para calcular");
      }
    } catch (error) {
      Alert.alert("Error al calcular", "La expresión ingresada no es válida");
      
    }
  }; 

  return (
    <View style={styles.container}>
      <View
      
      >
        <Pantalla value={list}  />
      </View>
      <View
      style={styles.Line}
      >
        <Boton ManejarPress={agregarValor}  >7</Boton>
        <Boton ManejarPress={agregarValor} >8</Boton>
        <Boton ManejarPress={agregarValor}  >9</Boton>
        <Boton ManejarPress={agregarValor} >+</Boton>
      </View>
      <View
      style={styles.Line}
      >
        <Boton ManejarPress={agregarValor}>4</Boton>
        <Boton ManejarPress={agregarValor}>5</Boton>
        <Boton ManejarPress={agregarValor}>6</Boton>
        <Boton ManejarPress={agregarValor}>-</Boton>
      </View>
      <View
      style={styles.Line}
      >
        <Boton ManejarPress={agregarValor}>1</Boton>
        <Boton ManejarPress={agregarValor}>2</Boton>
        <Boton ManejarPress={agregarValor}>3</Boton>
        <Boton ManejarPress={agregarValor}>*</Boton>
      </View>
      <View
      style={styles.Line}
      >
        <View>
          <BotonClear ManejarClear={limpiarValores}   >
            <Icon name='trash'/>
          </BotonClear>
        </View>
        <View>
          <Boton ManejarPress={agregarValor}>0</Boton>
        </View>
        <View
          style={styles.LastLine}
        >
        <Boton ManejarPress={calcularResultado}>=</Boton>
        <Boton ManejarPress={agregarValor}>/</Boton>
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
    
  },

});
