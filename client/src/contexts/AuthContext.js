import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { recipeServiceFactory } from "../services/recipeService";
import { authServiceFactory } from "../services/authService";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [formError, setFormError] = useState(null);
  const [auth, setAuth] = useLocalStorage("auth", {});
  const [recipes, setRecipes] = useState([]);

  const recipeService = recipeServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);

  const navigate = useNavigate();

  const onCreateRecipeSubmit = async (data) => {
    data.username = auth.username;
    const newRecipe = await recipeService.create(data, auth.accessToken);
    // console.log(newRecipe);
    setRecipes((state) => [...state, newRecipe]);

    navigate("/explore");
  };

  useEffect(() => {
    // fetch data
    try {
      const showAllRecipes = async () => {
        const recipes = await recipeService.getAll();
        // console.log(recipes);
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
        // console.log(result);
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
      //console.log(error.message);
    }
  };

  const context = {
    onCreateRecipeSubmit,
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
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
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
