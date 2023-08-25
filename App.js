import React from 'react'
import WelcomeScreen from './src/screens/WelcomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer >
  )
}