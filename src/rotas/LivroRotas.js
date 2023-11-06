import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produto from '../telas/Produto/Produto'
import Home from "../telas/Home/Home";
import ExibirGeneros from "../telas/Explorar/componentes/ExibirGenero";
import FeedBack from "../telas/Cesta/componentes/FeedBack";


const Stack = createNativeStackNavigator();

export default function LivroRotas({ComponentePrincipal = Home}){ //define home como default

    return <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={ComponentePrincipal} />
        <Stack.Screen name='Produto' component={Produto} />
        <Stack.Screen name='ExibirGenero' component={ExibirGeneros} />
        <Stack.Screen name='FeedBack' component={FeedBack} />
    </Stack.Navigator>
    
}