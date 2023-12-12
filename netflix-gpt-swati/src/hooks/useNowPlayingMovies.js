import { useEffect } from 'react';
import { API_OPTIONS } from '../components/utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../components/utils/moviesSlice';

const useNowPlayingMovies = () => {   
    const dispatch = useDispatch();

  const getNowPlayingMovie = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    console.log(json.results)
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    getNowPlayingMovie();
  },[])
}

export default useNowPlayingMovies;