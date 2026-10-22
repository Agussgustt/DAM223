/* 1-ZONA DE IMPORTACIONES  */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { Perfil } from '../components/Perfil';

/* 2- ZONA DE COMPONENTE PRINCIPAL (COMPONENTES O SCREENS) */
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      <Perfil 
      nombre="Agustin Rivera"
      carrera="ITIID"
      materia="Movil"
      cuatri="4to"
      style={styles.tarjeta1} />

      <Perfil 
      nombre="Karen hdz"
      carrera="ITIID"
      materia="Movil"
      cuatri="4to"
      style={styles.tarjeta2} />

      <Perfil 
      nombre="Kevin Pina"
      carrera="ITIID"
      materia="Movil"
      cuatri="4to"
      style={styles.tarjeta3} />
      <StatusBar style="auto" />
    </View>
  );
}


/* 3- ZONA DE ESTILOS  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjeta1: {
    backgroundColor:'lightblue',
  },
  tarjeta2: {
    backgroundColor:'lightgreen',
  },
  tarjeta3: {
    backgroundColor:'lightcoral',
  },
});
