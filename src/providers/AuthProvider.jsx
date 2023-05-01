import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    // const user = { displayName: 'Allha' }
    // const user = null
    const [user, setUser] = useState(null);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, passworrd) =>{
        return signInWithEmailAndPassword(auth, email, passworrd);
    }
    const profileUser = (name, url) =>{
        return updateProfile( auth, name, url)
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('Logged inside user: ', loggedUser);
            setUser(loggedUser);
        })

        return () =>{
            unsubscribe()
        }
    }, []);

    const authInfo = {
        user,
        createUser,
        signIn,
        profileUser,
        signOut,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;