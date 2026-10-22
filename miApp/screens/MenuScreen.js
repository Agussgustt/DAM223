/* 1-ZONA DE IMPORTACIONES  */
import { StyleSheet, View, Text, Button} from 'react-native';
import {useState} from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import TextInputScreen from './TextInputScreen';
import ImageBackScreen from './ImageBackScreen';

/* 2- ZONA DE COMPONENTE PRINCIPAL (COMPONENTES O SCREENS) */
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');
    switch (screen) {
        case 'safe':
            return <SafeScreen/>;
        case 'press':
            return <PressableScreen/>;
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'activity':
            return <ActivityIndicatorScreen/>;
        case 'flat':
            return <FlatListScreen/>;
        case 'modal':
            return <ModalScreen/>;
        case 'textInput':
            return <TextInputScreen/>
        case 'back':
            return <ImageBackScreen/>
        case 'menu':
            default:

            return (
                <View style={styles.container}>
                    <Text>Menu de Practicas</Text>
                    <Button title='Practica Tarjetas' onPress={()=>setScreen('tarjetas')}></Button>
                    <Button title='Practica SafeAreaView' onPress={()=>setScreen('safe')}></Button>
                    <Button title='Practica Pressable' onPress={()=>setScreen('press')}></Button>
                    <Button title='Practica ActivityIndicator' onPress={()=>setScreen('textInput')}></Button>
                    <Button title='Practica FlatList' onPress={()=>setScreen('flat')}></Button>
                    <Button title='Practica ImageBackground' onPress={()=>setScreen('back')}></Button>
                    <Button title='Practica Modal' onPress={()=>setScreen('modal')}></Button>
                    <Button title='Practica TextInput' onPress={()=>setScreen('activity')}></Button>
                </View>
            );
        }
}


/* 3- ZONA DE ESTILOS  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
