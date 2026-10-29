import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Formulario from '../components/formulario'; 

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>
          Cotizador de <Text style={styles.tituloBold}>Criptomonedas</Text>
        </Text>
      </View>

      <ScrollView>
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
  header: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginBottom: 10,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 24,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
}); 