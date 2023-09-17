import { View, StatusBar, SafeAreaView } from 'react-native';

import Produto from './src/telas/Produto/Produto';
import Cesta from './src/telas/Cesta/Cesta';
import Explorar from './src/telas/Explorar/Explorar';

import { useFonts, 
         Montserrat_400Regular, 
         Montserrat_700Bold 
        } from '@expo-google-fonts/montserrat';

import mock from './src/mocks/cesta';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  })

  if(!fonteCarregada) {
    return <View/>
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      {/* <Cesta {...mock} /> */}
      {/* <Explorar/> */}
      <Produto />
    </SafeAreaView>
  );
}
