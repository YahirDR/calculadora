import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";


const Boton = (props)=>{
    const EsOperador = (value) => {
        if(isNaN(value) && (value != '.') && (value != '=')){
            return true;
        }else{
            return false;
        }
    }
    //Si esta condición es verdadera, se ejecutará la primera parte de la expresión, 
    //es decir, styles.operator. Si es falsa, se ejecutará la segunda parte, styles.number.
    const estiloBoton = EsOperador(props.children) ? styles.operator : styles.number;

    return (
        <Pressable
            style={estiloBoton}
            onPress={console.log()}

        >
            <Text
                style={styles.text}
            >
                {props.children}
            </Text>
        </Pressable>
           
    );
}

const styles = StyleSheet.create({
    number:{
        backgroundColor: '#50D6D3',
        marginRight:5,
        padding:35,
        borderColor: 'orange', // Color de la línea alrededor del botón
        borderWidth: 3 // Ancho de la línea alrededor del botón

        
    },
    operator:{
        backgroundColor: '#C08FD3',
        marginRight:5,
        padding:35,
        borderColor: 'red', // Color de la línea alrededor del botón
        borderWidth: 3 // Ancho de la línea alrededor del botón
        
    },
    text:{
        color: 'black'
    }
});



export default Boton;