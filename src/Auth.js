import React from 'react'
import { auth} from './firebaseConfig'
import { Button } from '@mui/material';
import {FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, TwitterAuthProvider } from 'firebase/auth'
import { fireEvent } from '@testing-library/react';


export default function Auth() {
    const Fprovider = new FacebookAuthProvider();
    const GProvider = new  GoogleAuthProvider();
    const GitProvider = new GithubAuthProvider();
    const TwitterProvider = new TwitterAuthProvider();
    const hangleFacebook = async () => {
      
        signInWithPopup(auth,Fprovider)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
          alert(err.message);
        })
    }
    const hangleGoogle = async () => {
      
         signInWithPopup(auth,GProvider)
        .then((res)=> {
            console.log(res)
        })
        .catch((err) => {
          alert(err.message);
        })
    }
    const hangleGithub = async () => {
      
        signInWithPopup(auth,GitProvider)
       .then((res)=> {
           console.log(res)
       })
       .catch((err) => {
         alert(err.message);
       })
   }
   const hangleTwitter = async () => {
      
    signInWithPopup(auth,TwitterProvider)
   .then((res)=> {
       console.log(res)
   })
   .catch((err) => {
     console.log(err);
   })
}
  return (
    <div>
      <Button onClick={hangleFacebook}>Facebook</Button>
      <Button onClick={hangleGoogle}>Google</Button>
      <Button onClick= {hangleGithub}>Github</Button>
      <Button onClick={hangleTwitter}>Twitter</Button>
    </div>
  )
}
