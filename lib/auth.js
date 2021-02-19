import React, {useState, useEffect, useContext, createContext} from 'react';
import { createUser } from './db';
import firebase from './firebase'

const authContext = createContext();

export function AuthProvider({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

 


function useProvideAuth() {
    const [user, setUser] = useState(null);
    const handleUser = async (rawUser) => {
        if(rawUser){
            const user = await formatUser(rawUser);
            createUser(user.uid, user)




function useProvideAuth() {
    const [user, setUser] = useState(null);
    const handleUser=(rawUser)=>{
        console.log(rawUser)
        if(rawUser){
            const user=formatUser(rawUser)


            setUser(user)
            return user
        }else{
            setUser(false)
            return false
        }
        
    }

    const signinWithGithub = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {

                console.log(response.user)
                handleUser(response.user);
                


                console.log(response.user)
                handleUser(response.user);
                


            });
    };



    // const signup = (email, password) => {
    //     return firebase
    //         .auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((response) => {
    //             setUser(response.user);
    //             return response.user;
    //         });
    // };


    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                handleUser(false);
            });
    };



    // const sendPasswordResetEmail = (email) => {
    //     return firebase
    //         .auth()
    //         .sendPasswordResetEmail(email)
    //         .then(() => {
    //             return true;
    //         });
    // };

    // const confirmPasswordReset = (password, code) => {
    //     const resetCode = code || getFromQueryString('oobCode');

    //     return firebase
    //         .auth()
    //         .confirmPasswordReset(resetCode, password)
    //         .then(() => {
    //             return true;
    //         });
    // };


    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });

        return () => unsubscribe();
    }, []);

    console.log(user)


    console.log(user)

    return {
        user,
        signinWithGithub,
        signout,
    };
}

const formatUser = async (user) => {


    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      provider: user.providerData[0].providerId,
      photoUrl: user.photoURL,



    
    return {
      uid: user?.uid,
      email: user?.email,
      name: user?.displayName,
      provider: user?.additionalUserInfo.providerId,
      photoUrl: user?.photoURL,



    };
  };