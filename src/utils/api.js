import axios from "axios";
const base_url = 'https://api.themoviedb.org/3'
const tmdb_token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTdlM2JlYjk4NDk3MTcxMDg2YmI4NWI1MzBkYTA2YyIsInN1YiI6IjY2Mjc3MzhiY2I1YzhlMDE4NzQyZWVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5ftfdv8jQ6B_O5yCp29d8GbbLJOeKF_t0CwWX1ceONg"

const headers = {
Authorization : "bearer " + tmdb_token,      
}

export const fetchDataFromApi = async (url,params)=>{
    try {
       const {data} = await axios.get(base_url + url ,{
        headers,
        params
       })
       return data;
    } catch (error) {
     console.log(error);   
    }
}
 