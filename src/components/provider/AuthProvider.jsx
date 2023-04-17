import React, { createContext, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from 'react';
import App from '../../App';
import app from '../../firebase.config';



const auth = getAuth(app);
 export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoding]= useState(true)


const createUser = (email, password)=>{
    setLoding(true);
  return createUserWithEmailAndPassword(auth, email, password);
}
const singIn = (email, password)=>{
    setLoding(true);
  return signInWithEmailAndPassword(auth, email, password);

}
const logOut =()=>{
return signOut(auth)
}

//observing user auth state
useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
 setUser(currentUser);
 setLoding(false)
    });
    return ()=>{
return unsubscribe();
    }
},[])


    const authInfo = {
        user,
        createUser,
        singIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;