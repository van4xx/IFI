import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Адаптация</Text>
      <Text style={styles.subtitle}>Помогаем жить без хронических заболеваний</Text>
      
      <LineChart
        data={{
          labels: ["", "", "", "", ""],
          datasets: [{ data: [50, 30, 40, 20, 10] }]
        }}
        width={300}
        height={200}
        chartConfig={{
          backgroundColor: "#000000",
          backgroundGradientFrom: "#000000",
          backgroundGradientTo: "#000000",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
          style: { borderRadius: 16 }
        }}
        bezier
        style={styles.chart}
      />
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('UserDataScreen')}
      >
        <Text style={styles.buttonText}>Продолжить</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Authorization')}>
        <Text style={styles.loginText}>Уже есть аккаунт? Войти</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  chart: {
    marginVertical: 20,
    borderRadius: 16,
  },
  button: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#FFFFFF',
    marginTop: 20,
  },
});

export default StartScreen;