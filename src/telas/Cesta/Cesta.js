import React from "react";
import Detalhes from "./componentes/Detalhes";
import Topo from "./componentes/Topo";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Vazia from "./componentes/Vazia";
import Total from "./componentes/Total";
import FakeCesta from "../../skeleton/FakeCesta";
import useLoading from "../../hooks/useLoading";


export default function Cesta() {

    const loading = useLoading();

    return <>
        <FakeCesta visible={loading}>
            <GestureHandlerRootView>
                <Detalhes topo={Topo} total={Total} />
            </GestureHandlerRootView>
        </FakeCesta>
    </>
}