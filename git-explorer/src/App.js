import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate,useLocation } from "react-router-dom";
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
import { CSSTransition, SwitchTransition } from "react-transition-group"

function App() {
  const [username, setUsername] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();
  return (
    <SwitchTransition component={null}>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300} unmountOnExit>
        <div className="App">
          <Routes location={location}>
            
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/user/:username" element={<UserProfile />} />
              <Route path="/search" element={<SearchUser />} />
              <Route element={<Login setIsLogged={setIsLogged} setUsername={setUsername} />} path="/login" />
              <Route element={isLogged ? <AuthProfile username={username} /> : <Navigate replace to={"/login"} />} path="/authProfile" />

            
            <Route path="*" element={<NotFound />} />


          </Routes>
        </div>

      </CSSTransition>
    </SwitchTransition>

  );
}

export default App;
