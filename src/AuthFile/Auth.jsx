import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { appendErrors } from "react-hook-form";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const Auth = ({children}) => {

    const [user , setUser] = useState(null)
     const createUser = (email ,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth , email, password)
     }
 const logOut = ()=>{
    return signOut(auth);
 }
     useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth , currentUser =>{
            console.log("user in the auth state changed", currentUser)
            setUser(currentUser);
        });
        return()=> {unSubscribe()}
     },[])

 const authInfo={
    user,
createUser,
signIn,
logOut,
 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
            
        
    );
};

export default Auth;