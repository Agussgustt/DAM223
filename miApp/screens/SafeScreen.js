/* 1-ZONA DE IMPORTACIONES  */
import { StyleSheet, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SafeAEjemplo from '../components/SafeAreaEjemplo';
import ScrollViewEjemplo from '../components/ScrollViewEjemplo';

/* 2- ZONA DE COMPONENTE PRINCIPAL (COMPONENTES O SCREENS) */
export default function SafeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
  
        <Text>Aqui va la practica 10</Text>
        <Text>Equipo de Dulce</Text>
        <SafeAEjemplo/>
        <ScrollViewEjemplo/>
        </SafeAreaView>

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
  tituloPrincipal:{
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBotton: 15,
  }
});
