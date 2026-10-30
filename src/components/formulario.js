import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Formulario() {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleCotizar = () => {
    setMostrarMensaje(true);
  };

  return (
    <View style={styles.container}>
      {/* View padre - Text Moneda */}
      <Text style={styles.label}>Moneda</Text>
      
      {/* Picker Moneda */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={moneda}
          onValueChange={(itemValue) => {
            setMoneda(itemValue);
            setMostrarMensaje(false); // Ocultar mensaje si cambia la selección y se seleciona el tipo de moneda
          }}
        >
          <Picker.Item label="Seleccione" value="" />
          <Picker.Item label="Dolar USD" value="USD" />
          <Picker.Item label="Peso Mexicano MXN" value="MXN" />
          <Picker.Item label="Euro EUR" value="EUR" />
          <Picker.Item label="Libra Esterlina GBP" value="GBP" />
        </Picker>
      </View>

      {/* Text Criptomoneda */}
      <Text style={styles.label}>Criptomoneda</Text>
      
      {/* Picker Criptomoneda */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={criptomoneda}
          onValueChange={(itemValue) => {
            setCriptomoneda(itemValue);
            setMostrarMensaje(false); // Ocultar mensaje si cambia la selección
          }}
        >
          <Picker.Item label="Seleccione" value="" />
          {/*  agregar las criptomonedas  */}
          <Picker.Item label="Bitcoin" value="BTC" />
          <Picker.Item label="Ethereum" value="ETH" />
          <Picker.Item label="Cardano" value="ADA" />
        </Picker>
      </View>

      {/* Touchable Cotizar */}
      <TouchableOpacity style={styles.btnCotizar} onPress={handleCotizar}>
        <Text style={styles.btnTexto}>Cotizar</Text>
      </TouchableOpacity>

      {/* Funcionalidad: Al dar clic al btn mostrar un Text que diga "Formulario creado" */}
      {mostrarMensaje && (
        <Text style={styles.mensajeExito}>Formulario creado</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#374151',
  },
  pickerContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  btnCotizar: {
    backgroundColor: '#6D28D9',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  btnTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  mensajeExito: {
    marginTop: 20,
    textAlign: 'center',
    color: '#10B981',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 