import {useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, ActivityIndicator, Alert, KeyboardAvoidingView, Platform, TextInput, Pressable, FlatList, Image } from 'react-native';

export default function Registro_de_libros() {

    const [showSplash, setShowSplash] = useState(true);

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');

    const [libros, setLibros] = useState([]);

    const [cargando, setCargando] = useState(false);


    useEffect(() =>{
        setShowSplash(true);
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleAgregarLibro = () => {
        if (!titulo || !autor || !genero) {
            Alert.alert('Error', 'Por favor, complete todos los campos.');
            return;
        }

        setCargando(true);

        setTimeout(() => {

        const nuevoLibro = {
            titulo,
            autor,
            genero,
        };


        setLibros([...libros, nuevoLibro]);
        setTitulo('');
        setAutor('');
        setGenero('');
        setCargando(false);
        }, 2000);

        Alert.alert('Éxito', 'Libro agregado correctamente.');
    };

    if (showSplash) {
        return (
            <View style={styles.splashContainer}>
            <Image
                source={require('../assets/inicioImg.png')}
                style={styles.cargaImage}
                resizeMode="contain"
            />
                <Text style={styles.splashTitle}>Cargando aplicacion...</Text>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    

    return (
        <ImageBackground
            source={require('../assets/fondo.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text style={styles.title}>Registro de Libros</Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder="Título"
                    value={titulo}
                    onChangeText={setTitulo}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Autor"
                    value={autor}
                    onChangeText={setAutor}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Género"
                    value={genero}
                    onChangeText={setGenero}
                />

                <Pressable style={styles.button} onPress={handleAgregarLibro}>
                    <Text style={styles.buttonText}>Agregar Libro</Text>
                </Pressable>
            </View>

            {cargando && (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Cargando...</Text>
            </View>
            )}

            <Text style={styles.subtitle}> Total de libros: {libros.length}</Text>

            <FlatList
                data={libros}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.libroItem}>
                        <Text style={styles.libroText}>Título: {item.titulo}</Text>
                        <Text style={styles.libroText}>Autor: {item.autor}</Text>
                        <Text style={styles.libroText}>Género: {item.genero}</Text>
                    </View>
                )}
            />
        </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    splashTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    libroItem: {
        padding: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    libroText: {
        fontSize: 16,
    },
    loadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    loadingText: {
        marginLeft: 10,
        fontSize: 16,
    },
    cargaImage: {
        width: 250,
        height: 250,
        marginBottom: 20,
    }
});

