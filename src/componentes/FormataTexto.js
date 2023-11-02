import React from 'react';
import Texto from './Texto';

export default function FormataTexto({ texto, maxLinhas, estilos }) {

    const linhas = texto.split(' ');

    if (linhas.length > maxLinhas) {
        const formata = linhas.slice(0, maxLinhas).join(' ') + '...';
        return <Texto style={estilos}>{formata}</Texto>;
    }
    return <Texto style={estilos}>{texto}</Texto>;
}
