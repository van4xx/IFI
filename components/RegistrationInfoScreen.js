import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RegistrationInfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Зарегестрируйтесь чтобы отслеживать здоровье</Text>
      
      <TouchableOpacity style={styles.yandexButton}>
        <Text style={styles.yandexButtonText}>Я Продолжить с Яндекс</Text>
      </TouchableOpacity>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.emailButton}>
          <Text style={styles.emailButtonText}>✉️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreButtonText}>⋯</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
  },
  yandexButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  yandexButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emailButton: {
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  moreButton: {
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 5,
  },
  emailButtonText: {
    fontSize: 20,
  },
  moreButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default RegistrationInfoScreen;