import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen.js';
import StyleScreen from './StyleScreen.js';
import LoginScreen from './LoginScreen.js';
import OtpScreen from './OtpScreen.js';
import SignupScreen from './SignupScreen.js';
import ChooseScreen from './ChooseScreen.js';
import PremiumScreen from './PremiumScreen.js';
import SettingScreen from './SettingScreen.js';


const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
        name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="StyleScreen" component={StyleScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ChooseScreen" component={ChooseScreen} />
        <Stack.Screen name="PremiumScreen" component={PremiumScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
