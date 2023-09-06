import React, { useContext, useEffect } from "react";
import Layout from "./layout";
import AppRoutes from "./routes/Routes";
import storage from "./storage/storage";
import { AuthContext } from "./context/Auth";


function App() {
  const { setUser } = useContext(AuthContext);

  useEffect((firstValue = null) => {
    const loggedInUser = storage.getItem("user") || firstValue;
    // if (loggedInUser !== firstValue) {
      setUser(loggedInUser);
    // }
  }, [setUser]);


  

  return (
      <Layout>
          <div className="container my-4">
            <AppRoutes />
          </div>
      </Layout>
  );
}

export default App;
