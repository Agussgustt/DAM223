import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Platform, Switch} from 'react-native';

const mostrarAlerta = (titulo,mensaje) =>{
  if(Platform.OS === 'web'){
    window.alert(`${titulo}\n\n${mensaje}`);
}
else{
  Alert.alert(titulo,mensaje);
}

};

export default function App() {
  const[nombre, setNombre] = useState('');
  const[carrera, setCarrera] = useState('');
  const[semestre, setSemestre] = useState('');
  const [asistencia, setAsistencia] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const registrar = () => {
    const faltantes = [];
    if(nombre.trim() === ''){
      faltantes.push("Nombre");
    }
    if(carrera.trim() === ''){
      faltantes.push('Carrera');
    }
    if(semestre.trim() === ''){
      faltantes.push('Semestre');
    }
    if(faltantes.length >  0){
      mostrarAlerta(' Faltan datos',' Completa\n '+faltantes.join(' '));
      return;
    }
    if(carrera.length === 0){
      mostrarAlerta('Carrera invalida',' debe tener formato correcto');
      return;
    } 
    if(semestre.length !== 1 || isNaN(semestre)){
      mostrarAlerta('Semestre invalido ', ' debe ser un numero');
      return;
    }

    <><Switch
      value={asistencia}
      onValueChange={(valor) => setAsistencia(valor)} /><Switch
      value={constancia}
      onValueChange={(valor) => setConstancia(valor)} /><Switch
      value={deportes}
      onValueChange={(valor) => setDeportes(valor)} />
    </>

    mostrarAlerta('Registro Exitoso',` Nombre: ${nombre}\n\n Carrera: ${carrera} \n\n Semestre: ${semestre} \n\n Asistencia: ${asistencia ? 'Sí' : 'No'} \n\n Constancia: ${constancia ? 'Sí' : 'No'} \n\n Deportes: ${deportes ? 'Sí' : 'No'}`);
    setNombre('');
    setCarrera('');
    setSemestre('');
    setAsistencia(false);
    setConstancia(false);
    setDeportes(false);


  }



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>
      <TextInput style={styles.input}
      placeholder='Nombre'
      value={nombre}
      onChangeText={setNombre}
      />

      <TextInput style={styles.input}
      placeholder='Carrera'
      value={carrera}
      onChangeText={setCarrera}
      />

      <TextInput style={styles.input}
      placeholder='Semestre'
      value={semestre}
      onChangeText={setSemestre}
      keyboardType='numeric'
      />


      <View style={styles.opcionesTexto}>
        <Text>Asistencia:</Text>
        <Switch
          value={asistencia}
          onValueChange={(valor) => setAsistencia(valor)}
        />
      </View>

      <View style={styles.opcionesTexto}>
        <Text>Constancia:</Text>
        <Switch
          value={constancia}
          onValueChange={(valor) => setConstancia(valor)}
        />
      </View>

      <View style={styles.opcionesTexto}>
        <Text>Deportes:</Text>
        <Switch
          value={deportes}
          onValueChange={(valor) => setDeportes(valor)}
        />
      </View>

      <Button title='Registrar' onPress={registrar}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  opcionesTexto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '80%',
  },
  boton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 12,
  },
  botonTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
