import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LivroRotas from "./LivroRotas";
import CestaRotas from "./CestaRotas";
import DestaqueRotas from "./DestaqueRotas";
import Icones from "../componentes/Icones";
import ExplorarRotas from "./ExplorarRotas";

export default function AppRotas() {

    const Tab = createBottomTabNavigator();
    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {

                let Icon = <Icones familia={'Feather'} icone={'home'} tipo={'tabBar'} interagivel={false} cor={focused ? "#2a9f08" : "#C7C7C7"} />;

                if (route.name === 'Carrinho') {
                    Icon = <Icones familia={'Feather'} icone={'shopping-cart'} tipo={'tabBar'} interagivel={false} cor={focused ? "#2a9f08" : "#C7C7C7"} />
                }
                else if (route.name === 'Destaques') {
                    Icon = <Icones familia={'Feather'} icone={'star'} tipo={'tabBar'} interagivel={false} cor={focused ? "#2a9f08" : "#C7C7C7"} />
                }
                else if (route.name === 'Explorar') {
                    Icon = <Icones familia={'Fontisto'} icone={'compass-alt'} tipo={'tabBar'} interagivel={false} cor={focused ? "#2a9f08" : "#C7C7C7"} />
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
            <Tab.Screen name='Explorar' component={ExplorarRotas} />
            <Tab.Screen name='Destaques' component={DestaqueRotas} />
            <Tab.Screen name='Carrinho' component={CestaRotas} />
        </Tab.Navigator>
    </NavigationContainer>
}