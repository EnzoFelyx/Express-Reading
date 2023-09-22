import React from "react";
import Detalhes from "./componentes/Detalhes";
import Topo from "./componentes/Topo";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function Cesta() {
    return <GestureHandlerRootView>
        <Detalhes topo = {Topo} />
    </GestureHandlerRootView>
}