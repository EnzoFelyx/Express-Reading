import { View, StatusBar, SafeAreaView } from 'react-native';
import AppRotas from './src/rotas/AppRotas';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if (!fonteCarregada) {
    return <View />
  }

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <StatusBar backgroundColor="#112236" barStyle='light-content' />
      <AppRotas />
    </SafeAreaView>
  );
}
