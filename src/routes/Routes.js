import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import LogIn from "../pages/log-in/Login";
import SignUp from "../pages/sign-up/SignUp";
import CreateAccount from '../pages/create-account/CreateAccount';
import Profile from '../pages/profile/Profile';
import { AuthContext } from "../context/Auth";
import { useContext } from "react";


const AppRoutes = () => {
      const { user } = useContext(AuthContext);
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            {user && 
            <Route path='/user/:id' element={<Profile />} 
            />}
            <Route path='/activate/:token' element={<CreateAccount />} />
        </Routes>
    )
};

export default AppRoutes;
