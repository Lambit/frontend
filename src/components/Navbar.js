import React, { useContext } from "react";
import AppLink from "./Link";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from '../assets/fakeLogo.svg';
import { AuthContext } from "../context/Auth";


const NavBar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const { t } = useTranslation();
  

    return(
        <nav className="navbar navbar-expand-md bg-transparent shadow-sm">
          <div className="container-fluid my-2 ">
   
            <Link className="navbar-brand text-white mx-2 fs-5" to="/">
              <img 
                src={logo}
                alt={'logo'}
              />
              {'  '}{t('titleThree')}
            </Link>

              <button className="navbar-toggler px-4 py-2 my-2 mx-4  bg-warning bg-gradient border-dark rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div 
                className="collapse navbar-collapse justify-content-end" 
                id="navbarNavDropdown"
              >
               
                  <AppLink
                    to={"/"}
                    text={'home'}
                  />
              
                    {!user && (
                      <>
                          <AppLink 
                            to={"/signup"}
                            text={'signUp'}
                          />

                          <AppLink
                            to={"/login"}
                            text={'logIn'}                   
                          />

                      </>
                    )} 

                    {user && ( 
                      <>
                        <AppLink
                          to={`/user/${user.id}`}
                          text={'profile'}
                        />

                        <AppLink 
                          onClick={handleLogout}
                          text={'logout'}
                        />
                     </>
                    )}
      
               </div>   
          </div>
        </nav>
    );
};

export default NavBar;