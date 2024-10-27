import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InputMethodScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Что использовать?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Занести данные вручную</Text>
        <View style={styles.square} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Через камеру</Text>
        <View style={styles.square} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Через Smart часы</Text>
        <View style={styles.square} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#333333',
    borderRadius: 5,
  },
});

export default InputMethodScreen;
