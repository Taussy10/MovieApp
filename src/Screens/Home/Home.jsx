import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import HomeBanner from '../../Components/HomeBanner'

import React,{useState, useEffect} from 'react'
import MovieCards from '../../Components/MovieCards'
// import { getUpcomingMovies } from '../../Network/Network'
import { getTopRatedMovies } from '../../Network/Network'
import { getNowPlayingMovies } from '../../Network/Network'
import { getPopularMovies } from '../../Network/Network'

const Home = ({navigation}) => {
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [popularMoviesData, setPopularMoviesData] = useState([]);
  const [topRatedMoviesData, setTopRatedMoviesData] = useState([]);
  // const [upComingMoviesData, setUpComingMoviesData] = useState([]);

  useEffect(() => {
    const handleApi = async () => {
      try {
        const { data, status } = await getNowPlayingMovies();
        if (status === 200) {
          setNowPlayingData(data.results);
        } else {
          Alert.alert(`Request failed with ${data}`);
        }
      } catch (error) {
        console.log(error);
        Alert.alert(`Request failed with error: ${error.message}`);
      }
    };

    handleApi();
  })

  useEffect(() => {
    const handleApi = async () => {
      try {
        const { data, status } = await getPopularMovies();
        if (status === 200) {
          setPopularMoviesData(data.results);
        } else {
          Alert.alert(`Request failed with ${data}`);
        }
      } catch (error) {
        console.log(error);
        Alert.alert(`Request failed with error: ${error.message}`);
      }
    };

    handleApi();
  })

  useEffect(() => {
    const handleApi = async () => {
      try {
        const { data, status } = await getTopRatedMovies();
        if (status === 200) {
          setTopRatedMoviesData(data.results);
        } else {
          Alert.alert(`Request failed with ${data}`);
        }
      } catch (error) {
        console.log(error);
        Alert.alert(`Request failed with error: ${error.message}`);
      }
    };

    handleApi();
  })


  // console.log(nowPlayingData);
  // console.log(popularMoviesData);
  return (
    <View style={styles.container} >
      {/* StatusBar shows notification network logo on your phone so do you want to put app till that Yeah offcourse so use it otherwise at that area statusBar will black{default is black} and it's not good so we use   */}
       <StatusBar  backgroundColor={"transparent"} />  
      <ScrollView   style={styles.ScrollView}>
      <HomeBanner navigation={navigation} />

        <View style={styles.subContainer}>
     
         <MovieCards title='Now Playnig' data={nowPlayingData}/>

         <MovieCards title='Popular Movies'data={popularMoviesData} />
         
         <MovieCards title='Top Rated Movies' data={topRatedMoviesData} />
        </View>
      

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
    
  },
  subContainer:{
    padding:15,
    //  backgroundColor:'red',
      flex:1,
      marginTop:20,
  }
})