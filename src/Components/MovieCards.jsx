import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const MovieCards = ({title,data}) => {
  // console.log(data);
  
  return (
    <View style={styles.container}>
      <Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>{title}</Text>

      <FlatList 
      horizontal
     pagingEnabled
    // ItemSeparatorComponent={()=> <View style={{paddingHorizontal :15,}}>  </View> }

      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item})=> (
    
        <Image 
        resizeMode='contain'
        style={styles.movieImg} 
         source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} />
       )}
      />
    </View>
  )
}

export default MovieCards

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: responsiveHeight(40),
    // gap: 15,
    width: responsiveWidth(100)
  },
  movieImg: {
    height: responsiveHeight(50),
    width: responsiveWidth(100)
  }
})


