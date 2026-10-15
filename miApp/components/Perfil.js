import { Text, View, Button} from 'react-native';
import { useState } from 'react';
/* importar el useState */

export const Perfil = ({nombre, carrera, materia, cuatri}) => {
  const[mostrar, setMostrar] = useState(false);
  /* declarar el estado como const */

  return (
    <View>
        <Text>{nombre}</Text>

        { mostrar &&
        <>
        <Text>{carrera}</Text>
        <Text>{materia}</Text> {/* uso de los signos <> para un fragmentado</> */}
        <Text>{cuatri}</Text>
        </>
        }
        <Button title="Ver Perfil" onPress={() => setMostrar(!mostrar)}></Button>
       {/*  definicion de boton como disparador con la ayuda de una funcion flecha */}
       
    </View>
    );
}