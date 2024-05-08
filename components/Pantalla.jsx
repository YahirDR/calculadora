import React from "react";
import {  Text, StyleSheet, View, ScrollView } from "react-native";

const Pantalla = (props) =>{
    return(
        <View
            style={styles.conteiner}
        >
            <ScrollView horizontal>
                <Text style={styles.text} numberOfLines={3}>
                    {props.value}
                </Text>
            </ScrollView>         
        </View>
    );
}


const styles = StyleSheet.create({

    conteiner:{
        marginTop:50,
        height: 150,
        width:350,
        display: 'flex', 
        textAlign: 'right',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: 'black',
        
    },
    text:{
        fontSize: 30,
        color: 'white'

    }
    
});

export default Pantalla;