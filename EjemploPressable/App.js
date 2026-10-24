import { useState } from 'react';
import { StyleSheet, Text, View, Switch, Pressable } from 'react-native';

export default function App() {

  //Constante para el estado del switch
  const [encendido, setEncendido] = useState(false);

  //Constante para el estado del pressable
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Práctica: Switch y Pressable</Text>

      <Switch
        value={encendido}
        onValueChange={(valor) => setEncendido(valor)}
      />
      <Text style={styles.texto}>
        El Switch está: {encendido ? 'Encendido' : 'Apagado'}
      </Text>

      <Pressable 
        style={styles.boton} 
        onPress={() => setContador(contador + 1)}
      >
        <Text style={styles.textoBoton}>Presióname</Text>
      </Pressable>
      
      <Text style={styles.texto}>
        Veces presionado: {contador}
      </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  texto: {
    fontSize: 18,
    marginVertical: 15,
  },
  boton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
