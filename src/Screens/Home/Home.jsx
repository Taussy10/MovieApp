import { ScrollView, StyleSheet, Text, View } from 'react-native'
import HomeBanner from '../../Components/HomeBanner'

import React from 'react'

const Home = () => {
  return (
    <View style={styles.container} >
      <ScrollView horizontal={true} style={styles.ScrollView}>
        <HomeBanner/>
      <Text>Home</Text> 
      </ScrollView>
   
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  },
  ScrollView:{
    
  }
})