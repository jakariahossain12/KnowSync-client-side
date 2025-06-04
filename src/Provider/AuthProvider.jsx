import React, { useState, useEffect } from "react";
import { AuthContext } from "../../Context/Context";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignUpWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userUpdateProfile = (upDateInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, upDateInfo);
  };

  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      
        setUser(currentUser);
      
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    userSignUp,
    userLogin,
    userUpdateProfile,
    userSignOut,
    userSignUpWithGoogle,
  };

  return (
    <AuthContext.Provider value={userInfo}> {children} </AuthContext.Provider>
  );
};

export default AuthProvider;
