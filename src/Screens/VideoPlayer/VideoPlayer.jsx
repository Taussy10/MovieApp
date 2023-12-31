import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions' 

// import Icons from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Entypo';




// for putting videoPlayer
import Video from 'react-native-video'

// this is for making video in landscape mode
import Orientation from 'react-native-orientation-locker'




// How to get data from MovieCards 
const VideoPlayer = ({route}) => {

const {item} = route.params;
  // console.log(item)

  const [isVideoVisible, setIsVideoVisible] = useState(false)
  return (
    <View style={styles.mainContainer}>
      {/* Image component */}

      {/* description comp */}
      {/* By default ScrollvIew is Vertical */}
      <ScrollView style={styles.scrollContainer} > 
 {
  isVideoVisible ?(
    <Video  style={styles.Video}
     setControls
     controls
     repeat={false}
    //  fullscreen={true}
     resizeMode='cover'
   
    


onFullscreenPlayerWillPresent={() => {
  Orientation.lockToLandscape();
}}
onFullscreenPlayerWillDismiss={() => {
  Orientation.lockToPortrait();
}}

source={{uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }} 
    />

    
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
 {item.original_title} </Text> 




  {/* Make 3rd box */}
  <View style={{ flexDirection:'row' , gap:5, marginTop:4,}}>
    <Text style={{color:'white'}}>
   { item.original_title}
    </Text>

    <View style={{height:20, width:3 , backgroundColor:'white'}}>
    </View>
       
    <Text style={{color:'white', fontSize:18 }}>{item.release_date}</Text>
   
  </View>

  {/* 4the box */}
  {/* we have to make an array to use this  */}
  <View style={{marginTop:20,}}> 

  <TouchableOpacity 
   onPress={ ()=>{ setIsVideoVisible(true) }}
  style={[{backgroundColor:'white', flexDirection:'row' } ,styles.button]}>

 <Icon name="controller-play" size={30} />

    <Text style={styles.btnText}>Play</Text>
  </TouchableOpacity>


  <TouchableOpacity style={[{backgroundColor:'grey',  flexDirection:'row', gap:10 } ,styles.button]}>
  <Icon name="download" size={30}  color="#FFFFFF"/>
    <Text style={[{alignItems:'center', color:'white'},styles.btnText ]}>Download</Text>
  </TouchableOpacity>
  </View>


  <View style={styles.desc}>
<Text style={{color:'white', lineHeight:20, textAlign:'justify', marginVertical:10, fontSize: 16 }}>  
{item.overview}

</Text>
</View>

         </View>


        </ScrollView>
       
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
  Video:{
    height: responsiveHeight(35),
    // marginTop:0,
  },
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
    },
    desc:{
      color:'white'
    }
}
)