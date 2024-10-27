import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>20:00</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Уровень ифи</Text>
        <Text style={styles.infoValue}>2,11</Text>
        <View style={styles.vitalContainer}>
          <View style={styles.vitalItem}>
            <Text style={styles.vitalText}>Давление</Text>
            <Text style={styles.vitalValue}>120/70</Text>
          </View>
          <View style={styles.vitalItem}>
            <Text style={styles.vitalText}>Пульс</Text>
            <Text style={styles.vitalValue}>75</Text>
          </View>
        </View>
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Результат</Text>
        <LineChart
          data={{
            labels: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
            datasets: [{ data: [1, 2, 1.5, 2, 1, 1.5, 1.2] }]
          }}
          width={300}
          height={150}
          chartConfig={{
            backgroundColor: '#333',
            backgroundGradientFrom: '#333',
            backgroundGradientTo: '#333',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: { borderRadius: 16 },
            propsForDots: {
              r: "0",
            }
          }}
          bezier
          style={styles.chart}
        />
      </View>
      <View style={styles.emptyBox}></View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="heart-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerButton} onPress={() => navigation.navigate('InputMethodScreen')}>
          <Ionicons name="add" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="book-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  time: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'flex-end',
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  infoTitle: {
    color: '#fff',
    fontSize: 18,
  },
  infoValue: {
    color: '#fff',
    fontSize: 72,
    fontWeight: 'bold',
  },
  vitalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  vitalItem: {
    alignItems: 'center',
  },
  vitalText: {
    color: '#fff',
    fontSize: 16,
  },
  vitalValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chartContainer: {
    marginTop: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
  },
  chartTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  emptyBox: {
    height: 100,
    backgroundColor: '#333',
    borderRadius: 10,
    marginTop: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  navItem: {
    padding: 10,
  },
  centerButton: {
    backgroundColor: '#E91E63',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;