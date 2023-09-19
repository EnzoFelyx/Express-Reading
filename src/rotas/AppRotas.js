import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LivroRotas from "./LivroRotas";
import CestaRotas from "./CestaRotas";
import DestaqueRotas from "./DestaqueRotas";

export default function AppRotas() {

    const Tab = createBottomTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='Home' component={LivroRotas} />
            <Tab.Screen name='Destaques' component={DestaqueRotas} />
            <Tab.Screen name='Cesta' component={CestaRotas} />
        </Tab.Navigator>
    </NavigationContainer>
}