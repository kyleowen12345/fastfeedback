import React, {useState, useEffect, useContext, createContext} from 'react';
import { createUser } from './db';
import firebase from './firebase'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'
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
    const router = useRouter()
    const handleUser = async (rawUser) => {
        if(rawUser){
            const user = await formatUser(rawUser);
            const {token, ...userWithoutToken}=user
            createUser(user.uid, userWithoutToken)
            setUser(user)
            cookie.set('fast-feedback-auth',true,{expires:1})
            return user
        }else{
            setUser(false)
            cookie.remove('fast-feedback-auth')
            router.push('/')
            return false
        }
        
    }

    const signinWithGithub = () => {
        
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {
                handleUser(response.user);
                router.push('/dashboard')
            }).catch(err=>{
                console.log(err.message)
            })
    };
    const signinWithGoogle = () => {
        
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                handleUser(response.user);
                router.push('/dashboard')
            }).catch(err=>{
               console.log(err.message)
            })
    };
    const signinFaceBook = () => {
        
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((response) => {
                handleUser(response.user);
                router.push('/dashboard')
            }).catch(err=>{
                console.log(err.message)
            })
    };


    const signout = () => {
       
        return firebase
            .auth()
            .signOut()
            .then(() => {
                cookie.remove('fast-feedback-auth')
                handleUser(false);
            });
    };
    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

        return () => unsubscribe();
    }, []);

    return {
        user,
        signinWithGithub,
        signinWithGoogle,
        signinFaceBook,
        signout,
    };
}

const formatUser = async (user) => {
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      provider: user.providerData[0].providerId,
      photoURL: user.photoURL,
      token:user.za

    };
  };