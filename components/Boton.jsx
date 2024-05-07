import React from "react";
import { Button } from "react-native";


const Boton = (props)=>{
    const EsOperador = (value) => {
        // Aquí puedes realizar alguna lógica basada en el valor recibido
    }

    return (
        <Button
            title={props.children}
        />
           
    );
}

export default Boton;