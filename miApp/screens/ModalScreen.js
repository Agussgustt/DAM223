/* 1-ZONA DE IMPORTACIONES  */
import { StyleSheet, View, Text} from 'react-native';

/* 2- ZONA DE COMPONENTE PRINCIPAL (COMPONENTES O SCREENS) */
export default function ModalScreen() {
  return (
    <View style={styles.container}>
        <Text>Aqui va la practica 15</Text>
        <Text>Equipo de Iancarlo</Text>
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