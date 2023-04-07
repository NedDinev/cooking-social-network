import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Router from "./components/Router/Router";

import { recipeServiceFactory } from "./services/recipeService";
import { authServiceFactory } from "./services/authService";

import { useEffect, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [formError, setFormError] = useState(null);
  const [auth, setAuth] = useLocalStorage("auth", {});
  const [recipes, setRecipes] = useState([]);

  const recipeService = recipeServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);

  const navigate = useNavigate();

  const onCreateRecipeSubmit = async (data) => {
    data.username = auth.username;
    const newRecipe = await recipeService.create(data, auth.accessToken);
    console.log(newRecipe);
    setRecipes((state) => [...state, newRecipe]);

    navigate("/explore");
  };

  const getRecipe = async (recipeId) => await recipeService.getOne(recipeId);

  useEffect(() => {
    // fetch data
    try {
      const showAllRecipes = async () => {
        const recipes = await recipeService.getAll();
        console.log(recipes);
        // set state when the data received
        setRecipes(recipes);
      };

      showAllRecipes();
    } catch (error) {
      setRecipes([]);
    }
  }, []);

  const onLoginSubmit = async (data) => {
    // Submit login form data to server
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate("/explore");
    } catch (error) {
      setFormError("Invalid email or password");
    }
  };

  const onRegisterSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setFormError("Passwords do not match.");
    } else {
      delete data.confirmPassword;
      try {
        const result = await authService.register(data);
        console.log(result);
        setAuth(result);

        navigate("/explore");
      } catch (error) {
        setFormError("Invalid email or password");
      }
    }
  };

  const onLogout = async () => {
    try {
      await authService.logout();

      setAuth({});
      localStorage.clear();
    } catch (error) {
      console.log(error.message);
    }
  };

  const context = {
    onCreateRecipeSubmit,
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    getRecipe,
    recipes,
    setRecipes,
    recipeService,
    formError,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    username: auth.username,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={context}>
      <div style={styles.container}>
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

const styles = {
  container: { display: "flex", flexDirection: "column", minHeight: "100vh" },
};
