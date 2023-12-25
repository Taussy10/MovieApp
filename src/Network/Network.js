import axios, { Axios } from "axios";

// In API the thing that is changing is endPoint{cause it always at the end point}

const config = {
  baseURL:'https://api.themoviedb.org/3/movie',
  Token:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDljOWU0YjJjY2QxM2FlZGNmMGM1OTczMDc0YTE4ZSIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6eBWHRPkmJiPkiWJtcyOHBNDCdDZjowYtFgMhScOww'
};

// API is asynchronous so we will use async which means it does't go time to time{time ke saath nhi chalta} API can show data in 5s 15s or 1mins so we will async programming{js will waith till dat come}

export const getUpcomingMovies = async() => {
try {
  const response =  await axios.get(`${config.baseURL}/upcoming`, {
    // We are providing token cause API is private if you have token then you can use it
    headers:{
      Authorization:`Bearer ${config.Token}`

    }
  } )
  const data = response.data
  const status = response.status
  response {success: true, data:data , status:status}
} catch (error) {
  console.log(error);
  return {success: false, data:error , status:status}
}  
}