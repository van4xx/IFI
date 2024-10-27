import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';

const UserDataScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Данные</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Имя"
        placeholderTextColor="#666"
        value={name}
        onChangeText={setName}
      />
      
      <View style={styles.genderButtons}>
        <TouchableOpacity 
          style={[styles.genderButton, gender === 'male' && styles.activeGenderButton]}
          onPress={() => setGender('male')}
        >
          <Text style={styles.genderButtonText}>Мужчина</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.genderButton, gender === 'female' && styles.activeGenderButton]}
          onPress={() => setGender('female')}
        >
          <Text style={styles.genderButtonText}>Женщина</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Возраст"
          placeholderTextColor="#666"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Вес"
          placeholderTextColor="#666"
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Рост"
        placeholderTextColor="#666"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainScreen')}>
        <Text style={styles.buttonText}>Подтвердить</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  genderButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  genderButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  activeGenderButton: {
    backgroundColor: '#E91E63',
  },
  genderButtonText: {
    color: '#fff',
  },
  button: {
    backgroundColor: '#E91E63',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UserDataScreen;