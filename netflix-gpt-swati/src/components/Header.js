import React, { useEffect } from "react";
import { addUser, removerUser } from "./utils/userSlice";

import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(store => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth).then(() => {}).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removerUser());
        navigate("/")
      }
    });
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (<div className="flex p-2">
        <img
          src= {user?.photoURL}
          alt="usericon"
          className="w-12 h-12"
        />
      <button className= "font-bold text-white" onClick={handleSignout}>Sign Out</button>
      </div>)
      }
    </div>
  );
};

export default Header;
