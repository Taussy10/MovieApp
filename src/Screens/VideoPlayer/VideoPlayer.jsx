import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'


//source={{uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }} 

// How to get data from MovieCards 
const VideoPlayer = ({route}) => {
  // We have destructure the item props and we are taking from item Original_title
// const { item} = route.params;
  // console.log(item)

  const [isVideoVisible, setIsVideoVisible] = useState(false)
  return (
    <View style={styles.mainContainer}>
      {/* Image component */}
      {/* description comp */}
      {/* By default ScrollVIew is Vertical */}
      <ScrollView style={styles.scrollContainer} > 
 {
  isVideoVisible ?(
    null
  ): (
        <Image 
        style={styles.firstContainer}
        source={{uri: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png` }} /> 
  )
 }

{/* Second Container */}
<View  style={styles.secondContainer}>




 {/* First box Netflix component */}
 <View style={{  flexDirection:'row' , alignItems:'center'}}>
  <Image  style={{height:35, width:40 }} source={require('../../Assets/Image/logo.png')}/> 

  <Text style={{fontSize: responsiveFontSize(3),  color:'white',}} >SERIES</Text>
 </View>

{/* Second Box Name */}

 <Text style={styles.text}>
         item.original_title  </Text> 




  {/* Make 3rd box */}
  <View style={{ flexDirection:'row' , gap:5, marginTop:4,}}>
    <Text style={{color:'white'}}>
    item.release_date |
    </Text>
    <Text style={{color:'white'}}>
    item.popularity 
    </Text>
   
  </View>

  {/* 4the box */}
  {/* we have to make an array to use this  */}
  <View style={{marginTop:20,}}> 
  <TouchableOpacity style={[{backgroundColor:'white' } ,styles.button]}>
    <Text style={styles.btnText}>Play</Text>
  </TouchableOpacity>


  <TouchableOpacity style={[{backgroundColor:'grey' } ,styles.button]}>
    <Text style={styles.btnText}>Download</Text>
  </TouchableOpacity>
  </View>

         </View>

<View style={styles.desc}>
<Text>
  MOvie
</Text>
</View>

        </ScrollView>
       
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'black'
  },
  scrollContainer:{
    flex: 1,
    // backgroundColor:'red',
  },
  firstContainer:{
      height: responsiveHeight(35)
    },
    secondContainer:{
 padding:10,
    },
    text:{
      color:'white',
      fontSize: responsiveFontSize(3),
      fontWeight:'bold'

    },
    button:{
     height: responsiveHeight(7),
    //  these works only in parent element not child element
        justifyContent:'center',
        alignItems:'center',
   
    borderRadius: 8,
    },
    btnText:{
    fontSize: responsiveFontSize(3),
    fontWeight: '600',   
    }
}
)