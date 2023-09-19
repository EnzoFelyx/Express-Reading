import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../telas/Home";
import Cesta from '../telas/Cesta/Cesta';
import LivroRotas from "./LivroRotas";

export default function AppRotas() {

    const Tab = createBottomTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Destaques' component={LivroRotas} />
            <Tab.Screen name='Cesta' component={Cesta} />
        </Tab.Navigator>
    </NavigationContainer>
}