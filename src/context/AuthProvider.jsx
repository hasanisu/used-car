import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { allWishlistByEmail } from '../api/user';
const provider = new GoogleAuthProvider();


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const createUser =(email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }

    const loginUser =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        localStorage.removeItem('usedcar-token')
        return signOut(auth)
    }


  //wishlist api call
//   useEffect(()=>{
//         allWishlistByEmail(user?.email)
//         .then(data =>{
//         console.log(data)
//         setWishlist(data)
//         }).catch(err => console.log(err))
    
//     },[user])



    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser=>{
            console.log('user Observing')
            setUser(currentUser);
            setLoading(false)
        }));
        return () => unsubscribe()
    }, []) 



  



    const authInfo = {user, 
        createUser,
        loginUser, 
        updateUserProfile, 
        setLoading,
        signInWithGoogle,
        loading,
        logOut,
    
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;