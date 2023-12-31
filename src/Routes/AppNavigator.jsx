import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import Splash from '../Screens/Splash/Splash';
import PracResponsive from '../Screens/PracResponsive';
import VideoPlayer from '../Screens/VideoPlayer/VideoPlayer';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return ( 
   
    <Stack.Navigator initialRouteName='VideoPlayer' screenOptions={{headerShown:false}} >
         <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='PracResponsive' component={PracResponsive } />
      <Stack.Screen name='VideoPlayer' component={VideoPlayer} />
   
    </Stack.Navigator>
  
  );
}

export default AppNavigator;

const styles = StyleSheet.create({});
