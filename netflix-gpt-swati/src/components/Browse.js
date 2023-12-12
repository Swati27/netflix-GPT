import Header from './Header'
import React from 'react';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse = () => {

  useNowPlayingMovies();
  return (
    <div><Header/></div>
  )
}

export default Browse