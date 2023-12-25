import { StyleSheet, Text, View,Image, StatusBar, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'

import { myColors } from '../../Utils/Theme'

const Splash = ({navigation}) => {
useEffect(() => {
  setTimeout(() => {
    navigation.replace("Home")
  }, 3000);

})


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} hidden />
      <Image style={styles.logo} source={{uri:'https://s.yimg.com/ny/api/res/1.2/1nCMWd.ISmHrSpVQ5KXhig--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/hypebeast_936/55dd2178cbbd27b2cdba3f8985a08d48'}} />

   
    </View>
  )
}

export default Splash;

const styles = StyleSheet.create({
  container:{
    backgroundColor: myColors.primary,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },

  logo:{
    width: '70%', 
    height: 50,
    

  }
})