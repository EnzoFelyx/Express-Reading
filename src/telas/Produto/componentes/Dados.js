import React from "react";
import { View } from "react-native";
import Estrela from "../../../componentes/Estrela";
import Texto from "../../../componentes/Texto";
import Icones from '../../../componentes/Icones'
import { useRoute } from "@react-navigation/native";

export default function Dados() {


    const route = useRoute();

    const { avaliacao, paginas, capa, lingua } = route.params

    return <View>
        <View>
            {/* <Estrela /> */}
            <Texto>{avaliacao}</Texto>
            <Texto>Nota</Texto>
        </View>

        <View>
            {/* <Icones icone={'book-open-page-variant-outline'} familia={''} tipo={'capa'} cor={""} /> */}
            <Texto>{paginas}</Texto>
            <Texto>Páginas</Texto>
        </View>

        <View>
            {/* <Icones icone={'book-outline'} familia={''} tipo={'capa'} cor={""} /> */}
            <Texto>{capa}</Texto>
            <Texto>Capa</Texto>
        </View>

        <View>
            {/* <Icones icone={'language-outline'} familia={''} tipo={'capa'} cor={""} /> */}
            <Texto>{lingua}</Texto>
        </View>

    </View>
}