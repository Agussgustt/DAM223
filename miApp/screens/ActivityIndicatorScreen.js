/* 1-ZONA DE IMPORTACIONES  */
import { StyleSheet, View, Text} from 'react-native';

/* 2- ZONA DE COMPONENTE PRINCIPAL (COMPONENTES O SCREENS) */
export default function ActivityIndicatorScreen() {
  return (
    <View style={styles.container}>
        <Text>Aqui va la practica 16</Text>
        <Text>Equipo de Judith</Text>
    </View>
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