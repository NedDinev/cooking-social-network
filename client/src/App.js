import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./components/Router/Router";

import * as authService from "./services/authService";

import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

import { useNavigate } from "react-router-dom";

function App() {
  const [formError, setFormError] = useState(null);
  const [auth, setAuth] = useState({});

  const navigate = useNavigate();

  const onLoginSubmit = async (data) => {
    // Submit login form data to server
    try {
      const result = await authService.login(data);

      setAuth(result);
      console.log(result);
      navigate("/explore");
    } catch (error) {
      setFormError("Invalid email or password");
      console.log("Invalid email or password");
    }
  };

  const context = {
    onLoginSubmit,
    formError,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={context}>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main>
          <Router />
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
