import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard/DetailsCard";
import DetailsError from "./DetailsError/DetailsError";
import { recipeServiceFactory } from "../../services/recipeService";

export default function Details() {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  const { token } = useContext(AuthContext);
  const recipeService = recipeServiceFactory(token);

  useEffect(() => {
    // fetch data
    try {
      const dataFetch = async () => {
        const data = await recipeService.getOne(recipeId);

        // set state when the data received
        setRecipe(data);
      };

      dataFetch();
    } catch (error) {
      setRecipe({});
    }
  }, [recipeId]);

  return recipe._id === recipeId ? (
    <DetailsCard recipe={recipe} />
  ) : (
    <DetailsError />
  );
}
