import { useState , createContext } from "react";

/* Create an auth context check current users status.Created a Provider to wrap around app. */ 

export const AuthContext = createContext();

function AuthProvider(props) {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    // const getUser = () => {
    //     const isLoggedIn = localStorage.getItem('user');
    //     if (isLoggedIn) {
    //       const foundUser = JSON.parse(isLoggedIn);
    //       setUser(foundUser);
    //     }
    // };

    const handleLogout = () => {
    setUser(null);
    localStorage.clear();
  };

    return(
        <AuthContext.Provider 
          value={{ 
            loading,
            setLoading,
            // getUser,
            user, 
            setUser,
            handleLogout
          }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;