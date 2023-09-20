import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Icones({ icone, tipo, cor }) {

    const tipoEstiloIcone = (tipo) => {
        switch (tipo) {
            case "tabBar":
                return {
                    estilo: estilos.tabBar,
                }
                break;

            default:
                break;
        }
    }

    const estiloIcone = tipoEstiloIcone(tipo);

    return <TouchableOpacity onPress={{}} >
        <Fontisto name={icone} style={estiloIcone.estilo} />
    </TouchableOpacity>
}


const estilos = StyleSheet.create({

    tabBar: {
        fontSize: 19,
    },

})
