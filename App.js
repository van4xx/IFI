import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import StartScreen from './components/StartScreen';
import RegistrationScreen from './components/RegistrationScreen';
import AuthorizationScreen from './components/AuthorizationScreen';
import MainScreen from './components/MainScreen';
import InputMethodScreen from './components/InputMethodScreen';
import ProfileScreen from './components/ProfileScreen';
import UserDataScreen from './components/UserDataScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => (
  <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'Calendar') {
          iconName = focused ? 'calendar' : 'calendar-outline';
        } else if (route.name === 'Book') {
          iconName = focused ? 'book' : 'book-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#E91E63',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: '#1E1E1E' },
      headerShown: false,
    })}
  >
    <Tab.Screen name="Home" component={MainScreen} />
    <Tab.Screen name="Calendar" component={MainScreen} /> 
    <Tab.Screen name="Book" component={MainScreen} /> {/* Замените на соответствующий компонент */}
    <Tab.Screen name="Profile" component={ProfileScreen} onPress={() => navigation.navigate('ProfileScreen')} />
  </Tab.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Start" component={StartScreen} />
    <Stack.Screen name="Registration" component={RegistrationScreen} />
    <Stack.Screen name="Authorization" component={AuthorizationScreen} />
    <Stack.Screen name="UserDataScreen" component={UserDataScreen} />
    <Stack.Screen name="MainScreen" component={MainScreen} />
  </Stack.Navigator>
);

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainApp" component={MainTabs} />
          <Stack.Screen name="InputMethodScreen" onPress={() => navigation.navigate('InputMethodScreen')} component={InputMethodScreen} />
        </Stack.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}