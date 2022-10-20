import React, {createContext, useState} from "react";
import LoginForm from "./LoginForm";
import Homepage from "./Homepage";
import Auth from "./Auth";
import { Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export const store = createContext();
export default function App() {
     const [data, setData] = useState(0);

  return (
    <>
    <store.Provider value={[data, setData]}>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/auth">Auth</Link>
        <Link to="/Home">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LoginForm />} />

        <Route path="/auth" element={<Auth />} />

        <Route path="/Home" element={<Homepage />} />
      </Routes>
      <Button variant='contained' onClick={()=>setData(data+1)}>hero</Button>
      </store.Provider>
    </>
  );
}
