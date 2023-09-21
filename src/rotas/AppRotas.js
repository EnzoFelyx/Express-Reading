import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LivroRotas from "./LivroRotas";
import CestaRotas from "./CestaRotas";
import DestaqueRotas from "./DestaqueRotas";
import Icones from "../componentes/Icones";

export default function AppRotas() {

    const Tab = createBottomTabNavigator();

    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color }) => {
                let Icon = <Icones icone={'home'} tipo={'tabBar'} />;

                if (route.name === 'Cesta') {
                    Icon = <Icones icone={'shopping-basket'} tipo={'tabBar'} />
                }
                else if (route.name === 'Destaques') {
                    Icon = <Icones icone={'star'} tipo={'tabBar'} />
                }
                return Icon

            },
            tabBarActiveTintColor: '#2a9f08',
            tabBarInactiveTintColor: '#C7C7C7',
            tabBarLabelStyle: {
                fontSize: 14,
            },
        })}>
            <Tab.Screen name='Home' component={LivroRotas} />
            <Tab.Screen name='Destaques' component={DestaqueRotas} />
            <Tab.Screen name='Cesta' component={CestaRotas} />
        </Tab.Navigator>
    </NavigationContainer>
}