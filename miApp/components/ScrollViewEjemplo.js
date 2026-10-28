import { useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";


export default function ScrollViewEjemplo(){
    const[desplazar, setDesplazar] = useState(true);
    return(
        <View style={style.container}>
            <Text style={style.titulo}> Ejemplo de Scrollview</Text>
            <Button
            title={ desplazar ? 'desactivar desplazamiento': 'activar desplazamiento'}
                onPress={()=>setDesplazar(!desplazar)}
            />

            <ScrollView
            style={style.lista}
            contentContainerStyle={style.contenido}
            showsVerticalScrollIndicator={true}
            scrollEnabled={desplazar}>

                <View style={style.tarjeta1}><Text> Tarjeta 1 </Text></View>
                <View style={style.tarjeta2}><Text> Tarjeta 2 </Text></View>
                <View style={style.tarjeta3}><Text> Tarjeta 3 </Text></View>
                <View style={style.tarjeta4}><Text> Tarjeta 4 </Text></View>
                </ScrollView>
                </View>

    );
}

const style = StyleSheet.create({
    container:{
        padding:10,
        backgrounColor: 'blue',
    },
    titulo:{
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    lista:{
        height: 200,
        flexGrow: 0,
        marginTop: 10,
    },
    contenido:{
        paddingBottom: 20,
    },
    tarjeta1:{
        backgroundColor: 'lightblue', padding: 25, marginBottom: 10, borderRadius: 8},
    tarjeta2:{
        backgroundColor: 'lightgreen', padding: 25, marginBottom: 10, borderRadius: 8},
    tarjeta3:{
        backgroundColor: 'lightcoral', padding: 25, marginBottom: 10, borderRadius: 8},
    tarjeta4:{
        backgroundColor: 'gray', padding: 25, marginBottom: 10, borderRadius: 8},
    

});

