import { MaterialCommunityIcons, Feather, Fontisto } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function Icones({ familia, icone, tipo, cor, interagivel = true }) {

    const ObterFamiliaIcone = (familia) => {
        switch (familia) {

            case 'Fontisto':
                return Fontisto;

            case 'Feather':
                return Feather;

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

            case "capa":
                return {
                    estilo: estilos.capa,
                }
                break;

            case "explorar":
                return {
                    estilo: estilos.explorar,
                }
                break;
            case "cesta":
                return {
                    estilo: estilos.cesta,
                }
                break;

            default:
                break;
        }
    }

    const estiloIcone = tipoEstiloIcone(tipo);

    return <TouchableOpacity disabled={!interagivel}>
        <FamiliaIcone name={icone} style={estiloIcone.estilo} color={cor} />
    </TouchableOpacity>
}


const estilos = StyleSheet.create({

    tabBar: {
        fontSize: 22,
        marginTop: 5,
    },

    capa: {
        fontSize: 20,
    },

    explorar: {
        fontSize: 25,
        marginLeft: 12,
        position: 'absolute',
    },
    cesta: {
        fontSize: 30,
        padding: 20,
        color: '#FFFF',
    }

})
