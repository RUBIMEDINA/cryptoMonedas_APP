import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Formulario from '../components/formulario'; // Asegúrate de que la ruta sea correcta

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Cotizador de <Text style={styles.tituloBold}>Criptomonedas</Text>
      </Text>

      <ScrollView>
        {/* Aquí es donde mandas a llamar a tu componente */}
        <Formulario />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    color: '#374151',
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 20,
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
}); 