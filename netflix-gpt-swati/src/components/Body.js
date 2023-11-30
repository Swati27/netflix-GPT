import React, { useEffect } from 'react'
import { RouterProvider, useNavigate } from 'react-router-dom';
import { addUser, removerUser } from './utils/userSlice';

import Browse from './Browse'
import Login from './Login'
import { auth } from "./utils/firebase";
import { createBrowserRouter } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';

const Body = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
      } else {
        dispatch(removerUser())
      }
    });
    
  },[]);

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/browse',
      element: <Browse/>
    }
  ])
  return (
    <div>
        <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default Body