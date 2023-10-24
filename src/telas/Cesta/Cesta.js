import React from "react";
import Detalhes from "./componentes/Detalhes";
import Topo from "./componentes/Topo";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Vazia from "./componentes/Vazia";
import Total from "./componentes/Total";


export default function Cesta() {

    const MinhaCesta = 1;

    if (MinhaCesta === 0) {
        return <Vazia />
    }

    else {
        return <GestureHandlerRootView>
            <Detalhes topo={Topo} total={Total}/>
        </GestureHandlerRootView>
    }
}