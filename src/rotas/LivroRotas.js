import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Produto from '../telas/Produto/Produto'
import Home from "../telas/Home";


const Stack = createNativeStackNavigator();

export default function LivroRotas({ComponentePrincipal = Home}){ //define home como default

    return <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={ComponentePrincipal} />
        <Stack.Screen name='Produto' component={Produto} />
    </Stack.Navigator>
    
}