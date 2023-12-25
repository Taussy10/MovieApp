import { Alert, StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { getUpcomingMovies } from '../Network/Network'

const HomeBanner = () => {
  // useEffect for calling an API
  const [upComingApiData , setUpComingApiData] = useState([])

  useEffect(() => {
      const handleUpComingApi = async () => {
     const {data,status} =  await getUpcomingMovies();
     if (status === 200) {
      setUpComingApiData(data);
     } else {
   Alert.alert(`Request failed with ${data}`)
     }
      }
      handleUpComingApi();
    }
 )
  
  return (
    <View>
      <Text style={{color:'white'}}>HomeBanner</Text>
    </View>
  )
}

export default HomeBanner

const styles = StyleSheet.create({})