import {use, useState} from 'react';
import {StyleSheet, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function SafeAEjemplo(){
    const[mensaje,setMensaje] = useState('Binevenidos a nuestra practica')
    return(
        <SafeAreaView style={style.container} edges={['top', 'botton']}>
            <Text style={style.titulo}>Ejemplo de SafeAreaView</Text>
            <Text style={style.mensaje}>{mensaje}</Text>

            <Button
            title='cambiar mensaje'
            onPress={() => setMensaje(mensaje === 'esta es nuestra practica'
                ? 'hola': 'esta es nuestra practica'
            )}
            />
            </SafeAreaView>

        );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: 'lightcoral',
        padding:20,
        alightItemes: 'center',
        borderRadius:10,
    },
    titulo:{
        fontSize:20,
        fontWeight: 'bold',
        marginBotton: 10,
    },
    mensaje:{
        fontSize:16,
        marginBotton: 10,
    }
});