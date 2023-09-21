import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Icones({ familia, icone, tipo, cor}) {

    const ObterFamiliaIcone = (familia) => {
        switch (familia) {

            case 'Fontisto':
                return Fontisto;

            default:
                return MaterialCommunityIcons;
        }
    }

    const FamiliaIcone = ObterFamiliaIcone(familia);

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

    return <TouchableOpacity>
        <FamiliaIcone name={icone} style={estiloIcone.estilo} color={cor} />
    </TouchableOpacity>
}


const estilos = StyleSheet.create({

    tabBar: {
        fontSize: 19,
    },

})
