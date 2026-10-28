/* 1-ZONA DE IMPORTACIONES  */
import { StyleSheet, View} from 'react-native';
import MenuScreen from './screens/MenuScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
/* 2- ZONA DE COMPONENTE PRINCIPAL (COMPONENTES O SCREENS) */
export default function App() {
  return (
    <SafeAreaProvider>
    <View style={styles.container}>

      <MenuScreen></MenuScreen>
      
    </View>
    </SafeAreaProvider>
  );
}


/* 3- ZONA DE ESTILOS  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
