import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
// This lilblrary has 3 things 
// 1. responsiveFontSize: the text will occupy X percentage of screen avalible{check by backGroundColor property it will tell you how much screen you have}
// 2. responsiveHeight: The container will  occupy X percentage of screen height avalible{check by backGroundColor property it will tell you how much screen you have}
// 3.  responsiveWidth: The container will  occupy X percentage of screen width avalible{check by backGroundColor property it will tell you how much screen you have}

// Caution: understand the nested View{divs} if div is nested inside big dive  then it will work according to that parent div basically for them screen is the parent div not actual div 


const PracResponsive = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}></Text> */}
      <View style={styles.subContainer}> 
      
      </View>
      <View style={styles.subContainer2}> 
      {/* <Text>Chuha</Text> */}
      </View>
    </View>
  )
}

export default PracResponsive;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height: responsiveHeight(100), // Adjusted to 50% of the screen height
    backgroundColor: "yellow",
    flexDirection:'row'
  },
  text: {
    color: 'red',
    // fontSize: responsiveFontSize(25),
    // backgroundColor:'black'
  },
  subContainer: {
    width: responsiveWidth(50),
    height: responsiveHeight(50),
    backgroundColor: 'blue',
  },
  subContainer2: {
    width: responsiveWidth(50),
    height: responsiveHeight(50),
    backgroundColor: 'red',
  },
});
