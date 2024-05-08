import { Pressable, StyleSheet, Text } from "react-native";



const BotonClear = (props) =>{
    return(
        <Pressable
            style={styles.buttonClear}
            onPress={() => props.ManejarClear(props.limpiarValores)}
        >
            <Text>
                {props.children}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonClear:{
        backgroundColor: 'green',
        height: 95,
        marginRight:5,
        padding:35,
        borderColor: 'yellow', // Color de la línea alrededor del botón
        borderWidth: 3 // Ancho de la línea alrededor del botón
        
    },
    text:{
        color: 'black'
    }
});


export default BotonClear;