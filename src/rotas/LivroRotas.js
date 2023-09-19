import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Produto from '../telas/Produto/Produto'
import Home from "../telas/Home";


const Stack = createNativeStackNavigator();

export default function LivroRotas(){

    return <Stack.Navigator>
        <Stack.Screen name='DestaqueScreen' component={Home} />
        <Stack.Screen name='Produto' component={Produto} />
    </Stack.Navigator>
    
}