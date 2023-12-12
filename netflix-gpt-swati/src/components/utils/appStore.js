import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';

const appStore = configureStore({
    reducer : {
        user: userReducer,
        movies: moviesReducer
    },// this reducer will have diff reducers from diff slices
});

export default appStore;