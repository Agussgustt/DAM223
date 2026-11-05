/* 1-ZONA DE IMPORTACIONES  */
import { StyleSheet, View, Text, TextInput, ActivityIndicator, KeyboardAvoidingView, Platform, Switch, Button} from 'react-native';
import Ract, { useState} from 'react';

/* 2- ZONA DE COMPONENTE PRINCIPAL (COMPONENTES O SCREENS) */
export default function ActivityIndicatorScreen() {
  const [cargando, setCargando] = useState(false);
  const [esGrande, setIsGrande] = useState(false);
  const [cambiarColor, setCambiarColor] = useState(false);

  const handleEnviar = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 4000);
  };

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={20}
    style={styles.container}
    >
    <TextInput
    placeholder="Escribe tu mensaje"
    style={styles.input}
    />

    <View style={styles.actionContainer}>
      {cargando ? (
        <ActivityIndicator 
          size={esGrande ? 'large' : 'small'}
          color={cambiarColor ? 'lightblue' : 'coral'}
        />
      ) : (
        <Button title="Enviar" onPress={handleEnviar} />
      )}
    </View>

    <View style={styles.switchBox}>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}> Hacer Grande</Text>
        <Switch
        value={esGrande}
        onValueChange={setIsGrande}/>
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}> Cambiar Color </Text>
        <Switch
        value={cambiarColor}
        onValueChange={setCambiarColor}
        />
      </View>
    </View>
    </KeyboardAvoidingView>  
  );
}


/* 3- ZONA DE ESTILOS  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding:  20,
    justifyContent: 'flex-end',
  },
  input: {
    borderWidth: 1,
    borderColor: ' #6cc2ff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor:' #ffff', 
  },
  action: {
    height: 40,
    justifyContent: 'center',
    marginBottom: 20,
  },
  switchBox: {
    borderWidth: 1,
    borderColor: '#80ffee',
    borderRadius:8,
    padding: 15,
    backgroundColor: '#fbacff',
  },
switchRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 15,
},
switchText: {
  fontSize: 16,
},
});