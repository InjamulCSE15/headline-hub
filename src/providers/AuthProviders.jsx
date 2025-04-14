import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (name, email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, { displayName: name }).then(() => {
                    // Fetch the updated user object
                    const updatedUser = { ...user, displayName: name };
                    setUser(updatedUser); // Manually update state with the updated user info
                    return updatedUser; // Return the updated user
                });
            });
    };
    
    const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
            setLoading(false);
            const user = userCredential.user;
            toast.success(' Login Successfully');
            setUser(user); // Ensure the user state updates immediately
            return user;
        })
        .catch((err) => {
            setLoading(false);
            throw err; 
        });        
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    
    const authInfo = { user, loading, createUser, signIn, signOutUser };
    
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Set user from local storage
        }
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            currentUser ? localStorage.setItem('user', JSON.stringify(currentUser)) : localStorage.removeItem('user');
        });
        return () => unSubscribe();
    }, []);

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
