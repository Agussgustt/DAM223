import { Text, View, Button, StyleSheet} from 'react-native';
import { useState } from 'react';
/* importar el useState */

export const Perfil = ({nombre, carrera, materia, cuatri, style}) => {
  const[mostrar, setMostrar] = useState(false);
  /* declarar el estado como const */

  return (
    <View style={[estilos.tarjeta, style]} >
        <Text style={estilos.nombres}>{nombre}</Text>

        { mostrar &&
        <>
        <Text style={estilos.carrera}>{carrera}</Text>
        <Text style={estilos.otroTexto}>{materia}</Text> {/* uso de los signos <> para un fragmentado</> */}
        <Text style={estilos.otroTexto}>{cuatri}</Text>
        </>
        }
        <Button title="Ver Perfil" onPress={() => setMostrar(!mostrar)}></Button>
       {/*  definicion de boton como disparador con la ayuda de una funcion flecha */}
       
    </View>
    );
}

const estilos = StyleSheet.create({
  nombres: {
    fontSize:24,
    fontWeight:600,
    textTransform:'uppercase',
  },
  carrera: {
    fontSize:22,
    fontFamily:'roboto',
    color:'blue',
  },
  otroTexto: {
    fontSize:20,
    fontFamily:'courier',
    color:'purple',
    fontStyle:'italic',
  },
  tarjeta: {
    borderWidth:3,
    borderRadius:12,
    borderColor:'black',
    margin:10,
    padding:15,
  },
});