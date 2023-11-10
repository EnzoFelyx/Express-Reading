import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useLoading from "../../hooks/useLoading";
import FakeCesta from "../../skeleton/FakeCesta";
import Detalhes from "./componentes/Detalhes";
import Topo from "./componentes/Topo";
import Total from "./componentes/Total";


export default function Cesta() {

    const loading = useLoading();

    return <FakeCesta visible={loading}>
        <GestureHandlerRootView>
            <Detalhes topo={Topo} total={Total} />
        </GestureHandlerRootView>
    </FakeCesta>
}