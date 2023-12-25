import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import Splash from '../Screens/Splash/Splash';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return ( 
    <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}} >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({});
