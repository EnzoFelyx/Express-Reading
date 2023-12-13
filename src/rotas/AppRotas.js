import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LivroRotas from "./LivroRotas";
import CestaRotas from "./CestaRotas";
import BibliotecaRotas from "./BibliotecaRotas";
import Icones from "../componentes/Icones";
import ExplorarRotas from "./ExplorarRotas";
import { tabBar } from '../../config/text.json'
import { useTranslation } from "react-i18next";

export default function AppRotas() {

    const { t, i18n } = useTranslation();
    const Tab = createBottomTabNavigator();
    return <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {

                let Icon = <Icones familia={'Feather'} icone={'home'} tipo={'tabBar'} interagivel={false} cor={focused ? "#2a9f08" : "#C7C7C7"} />;

                if (route.name === t('tabBar.Carrinho')) {
                    Icon = <Icones familia={'Feather'} icone={'shopping-cart'} tipo={'tabBar'} interagivel={false} cor={focused ? "#2a9f08" : "#C7C7C7"} />
                }
                else if (route.name === t('tabBar.Biblioteca')) {
                    Icon = <Icones familia={'MaterialCommunityIcons'} icone={'bookshelf'} tipo={'tabBar'} interagivel={false} cor={focused ? "#2a9f08" : "#C7C7C7"} />
                }
                else if (route.name === t('tabBar.Explorar')) {
                    Icon = <Icones familia={'Fontisto'} icone={'compass-alt'} tipo={'tabBar'} interagivel={false} cor={focused ? "#2a9f08" : "#C7C7C7"} />
                }
                return Icon

            },
            tabBarActiveTintColor: '#2a9f08',
            tabBarInactiveTintColor: '#C7C7C7',
            tabBarLabelStyle: {
                fontSize: 14,
                marginBottom: 5,
                
            },
            tabBarStyle: {
                height: 60,
            },
            tabBarHideOnKeyboard: true,
        })}>
            <Tab.Screen name={t('tabBar.Home')} component={LivroRotas}/>
            <Tab.Screen name={t('tabBar.Biblioteca')} component={BibliotecaRotas} />
            <Tab.Screen name={t('tabBar.Explorar')} component={ExplorarRotas} />
            <Tab.Screen name={t('tabBar.Carrinho')} component={CestaRotas} />
        </Tab.Navigator>
    </NavigationContainer>
}