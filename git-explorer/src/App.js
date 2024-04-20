import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate,useLocation } from "react-router-dom";
import Home from "./components/home";
import { useState,lazy ,Suspense} from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group"

const Users=lazy(()=>import("./components/users"));
const UserProfile=lazy(()=>import("./components/userProfile"));
const SearchUser=lazy(()=>import("./components/searchUser"));
const Login=lazy(()=>import("./components/login"));
const AuthProfile=lazy(()=>import('./components/authProfile'));
const AboutUs=lazy(()=>import("./components/about"));
const NotFound=lazy(()=>import("./components/notfound"));

function App() {
  const [username, setUsername] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();
  return (
    <SwitchTransition component={null}>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300} unmountOnExit>
        <Suspense fallback={()=><h1>Loading...</h1>}>
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
        </Suspense>

      </CSSTransition>
    </SwitchTransition>

  );
}

export default App;
