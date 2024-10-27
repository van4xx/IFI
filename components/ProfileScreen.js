import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Профиль</Text>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Александр</Text>
        <Text style={styles.email}>aleksandr@email.com</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Данные</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Язык</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Другое:</Text>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionButtonText}>Экспорт карты пульса</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionButtonText}>Обратная связь</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionButtonText}>Политика конфиденциальности</Text>
      </TouchableOpacity>
      <Text style={styles.version}>Версия приложения</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  profileInfo: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: '#999',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    width: '48%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  version: {
    color: '#999',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default ProfileScreen;