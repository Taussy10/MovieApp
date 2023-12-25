import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './Routes/AppNavigator';



const App = () => {
  return ( 
   <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})