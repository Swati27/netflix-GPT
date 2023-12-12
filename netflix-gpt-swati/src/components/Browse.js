import Header from "./Header";
import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/> 
      <SecondaryContainer/>
      {/* 
        - Main Conatiner
          - BackgroundVideo
          - VideoTitle
        - Secondary Container
          - MovieList * n
            - MovieCards * n
       */}
    </div>
  );
};

export default Browse;
