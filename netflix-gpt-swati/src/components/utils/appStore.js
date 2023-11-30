import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const appStore = configureStore({
    reducer : {
        user: userReducer,
    },// this reducer will have diff reducers from diff slices
});

export default appStore;