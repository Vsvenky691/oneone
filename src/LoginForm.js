import { Button, Box, TextField, Stack, FormControl } from "@mui/material";
import React, {useState} from "react";
import {auth} from "./firebaseConfig";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function LoginForm() {
 const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState({})
    const handleInput = (e) => {
      let newInput = { [e.target.name]: e.target.value };
      setData({ ...data, ...newInput });
    };
    const handleLogin = async() => {
      
      try {
        const result= await signInWithEmailAndPassword(auth, email, password)
        console.log(result);
        if(result){
          navigate("/Home");
        }
      } catch (err) {
        console.log(err);
      }
    }
  return (
    <Box
      display="flex"
      margin="auto"
      marginTop="40px"
      width="500px"
      height="400px"
      textAlign="center"
      justifyContent="center"
      padding="20px"
      boxShadow=""
    >
      <Stack direction="row" spacing={2}>
        <FormControl>
          <TextField
            margin="normal"
            label="Email"
            type="Email"
            placeholder="Email"
            onChange={(e)=> setEmail(e.target.value)}
          />
          <TextField
            
            label="Password"
            type="Password"
            placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} margin='normal' variant="contained">
            Login
          </Button>
        </FormControl>
      </Stack>
    </Box>
  );
}


// import React, { useState} from 'react'
// import { Box } from '@mui/material';


// const LoginForm = () => {
//   const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [hasAccount, setHasAccount] = useState(false);
//   return (
//      <Box className="login">

        
//         <Box className="loginContainer">
            
//          <label>Username</label>
//          <input type="text" autoFocus required value={email} onChange={(e)=> setEmail(e.target.value)}/>

//            <p className="errorMsg">{emailError}</p>

//            <label>Password</label>
//            <input type="password" autoFocus required value={password} onChange={(e)=> setPassword(e.target.value)}/>
//            <p className="errorMsg">{passwordError}</p>

//            <Box className="btnContainer">
//                {hasAccount ? (
//                     <>
//                     <button onClick={handleLogin}>Sign In</button>
//                     <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
//                     </>
//                ) : (
// <>
//                     <button onClick={handleSignUp}>Sign Up</button>
//                     <p>Already have an account .. <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
//                     </>
//                )}

//            </Box>
//            </Box>
//            </Box>
//   )
// }

// export default LoginForm
