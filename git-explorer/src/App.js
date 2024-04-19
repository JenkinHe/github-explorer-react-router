import logo from "./logo.svg";
import "./App.css";
import { Route, Routes,Navigate } from "react-router-dom";
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import Navbar from "./components/navbar";
import NotFound from "./components/notfound";
import UserProfile from "./components/userProfile"
import SearchUser from "./components/searchUser"
import Login from "./components/login";
import AuthProfile from './components/authProfile';
import { useState } from "react";

function App() {
  const [username,setUsername] =useState('');
  const [isLogged,setIsLogged] =useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar isLogged={isLogged} />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user/:username" element={<UserProfile/>}/>
          <Route path="/search" element={<SearchUser/>}/>
          <Route element={<Login setIsLogged={setIsLogged} setUsername={setUsername}/>} path="/login"/>
          <Route element={isLogged? <AuthProfile username={username}/>:<Navigate replace to={"/login"}/>} path="/authProfile"/>

        </Route>
        <Route path="*" element={<NotFound/>}/>


      </Routes>
    </div>
  );
}

export default App;
