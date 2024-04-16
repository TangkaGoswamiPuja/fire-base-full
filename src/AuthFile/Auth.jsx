import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { appendErrors } from "react-hook-form";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const Auth = ({children}) => {

    const [homes , setHomes] = useState([]);
    const [year , setYear] = useState([]);
    useEffect(()=>{
        fetch("./data.json")
        .then ((res)=>res.json())
        .then((data)=>{
            setHomes(data);
            const sq = [...data].sort((a,b)=>b.year_built - a.year_built);
            setYear(sq);
          
        });
    },
    []);
    console.log(year,homes)
    const [user , setUser] = useState(null)
    const [load , setLoad] = useState(true)
     const createUser = (email ,password)=>{
        setLoad(true);
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const signIn =(email,password)=>{
        setLoad(true);
        return signInWithEmailAndPassword(auth , email, password)
     }
 const logOut = ()=>{
    setLoad(true);
    return signOut(auth);
 }
     useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth , currentUser =>{
            console.log("user in the auth state changed", currentUser)
            setUser(currentUser);
            setLoad(false)
        });
        return()=> {unSubscribe()}
     },[])

 const authInfo={homes,
   year,
    user,
    load,
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