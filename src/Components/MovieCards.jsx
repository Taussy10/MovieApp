import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const MovieCards = ({ title, data , navigation }) => {
  // console.log(data);

  // We wrote here so that we can access item otherwise if we write item in renderItem then that's in scope so we can't use it now we can use
  // but what does item contain: data of each particular movie

  const handlePress = (item) => {
    // console.log(item.original_title);
    // console.log(item)
    // Add your navigation logic or other actions here using the item data
    // console.log(item);
    // This is how we pass data to particular screen Data shoud be Json also refer to documention of reactNavigation{passing parameters to routes}
    navigation.navigate("VideoPlayer", {item})
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
      <FlatList
        horizontal
        pagingEnabled
        // ItemSeparatorComponent={()=> <View style={{paddingHorizontal :15,}}>  </View> }
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Image
              resizeMode='contain'
              style={styles.movieImg}
              source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MovieCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: responsiveHeight(40),
    // gap: 15,
    width: responsiveWidth(100),
  },
  movieImg: {
    height: responsiveHeight(50),
    width: responsiveWidth(100),
  },
});
