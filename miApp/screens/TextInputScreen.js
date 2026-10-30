/* 1-ZONA DE IMPORTACIONES  */
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Platform} from 'react-native';

/* 2- ZONA DE COMPONENTE PRINCIPAL (COMPONENTES O SCREENS) */
const mostrarAlerta = (titulo,mensaje) =>{
  if(Platform.OS === 'web'){
    window.alert(`${titulo}\n\n${mensaje}`);
}
else{
  Alert.alert(titulo,mensaje);
}

};


export default function TextInputScreen() {
  const[nombre, setNombre] = useState('');
  const[correo, setCorreo] = useState('');
  const[telefono, setTelefono] = useState('');

  const registrar = () => {
    const faltantes = [];
    if(nombre.trim() === ''){
      faltantes.push("Nombre");
      
    }
    if(correo.trim() = ''){
      faltantes.push('Correo');
    }
    if(telefono.trim() === ''){
      faltantes.push('Telefono');
    }
    if(faltantes.length >  0){
      mostrarAlerta(' Faktan datos','Completa'+faltantes.join(','));
      return;
    }
    if(!correo.includes('@')){
      mostrarAlerta('Correo invalido','debe tener formato correcto');
      return;
    }
    if(telefono.length !== 10){
      mostrarAlerta('Telefono invalido', 'Debe tener 10 Digitos');
      return;
    }
    mostrarAlerta('Datos Registrados con Exito',`Nombre:${nombre}\n Correo:${correo} \n Telefono:${telefono}`);
    setNombre('');
    setCorreo('');
    setTelefono('');
  }

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Registro de Datos</Text>
        <Text>Equipo de Jesus Rojo</Text>
        <TextInput style={styles.input}
        placeholder='Nombre'
        value={nombre}
        onChangeText={setNombre}
        />

        <TextInput style={styles.input}
        placeholder='Correo'
        value={correo}
        onChangeText={setCorreo}
        keyboardType='email-address'
        autoCapitalize='none'
        />

        <TextInput style={styles.input}
        placeholder='Telefono'
        value={telefono}
        onChangeText={setTelefono}
        keyboardType='numeric'
        maxLength={10}
        />
        <Button title='Registrar' onPress={registrar}/>
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
    padding: 20,
    maxWidth: 400,
    width: '100%' ,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  }
});