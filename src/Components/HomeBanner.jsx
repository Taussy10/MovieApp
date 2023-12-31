import React, { useEffect, useState } from 'react';
import { Alert, FlatList, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getUpcomingMovies } from '../Network/Network';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const HomeBanner = ({ navigation }) => {
  const [upComingApiData, setUpComingApiData] = useState([]);

  useEffect(() => {
    const handleUpComingApi = async () => {
      try {
        const { data, status } = await getUpcomingMovies();
        if (status === 200) {
          setUpComingApiData(data.results);
        } else {
          Alert.alert(`Request failed with ${data}`);
        }
      } catch (error) {
        console.log(error);
        Alert.alert(`Request failed with error: ${error.message}`);
      }
    };

    handleUpComingApi();
  }, []); // <-- Provide an empty dependency array

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        data={upComingApiData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ImageBackground
            resizeMode='cover'
            style={styles.movieBanner}
            source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,7)']}
              style={styles.linearContainer}
            >
              <TouchableOpacity>
                <Text style={styles.title}>My List </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.playButton}
              
              >
                <Text style={styles.playText}>
                  <Icon name="controller-play" size={30} /> Play
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.title}>Info </Text>
              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>
        )}
      />
    </View>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: responsiveHeight(70),
    width: responsiveWidth(100),
    backgroundColor: 'red',
  },
  movieBanner: {
    width: responsiveWidth(100),
    height: 500,
    justifyContent: 'flex-end',
    opacity: 0.9,
  },
  linearContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: responsiveFontSize(3),
    color: 'white',
  },
  playButton: {
    color: 'black',
    backgroundColor: 'white',
    height: responsiveHeight(7.5),
    width: responsiveWidth(33),
    borderRadius: 20,
  },
  playText: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
