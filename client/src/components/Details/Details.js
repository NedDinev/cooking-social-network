import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard/DetailsCard";
import DetailsError from "./DetailsError/DetailsError";

export default function Details() {
  const [recipe, setRecipe] = useState({});

  const { recipeId } = useParams();
  const { getRecipe } = useContext(AuthContext);

  useEffect(() => {
    // fetch data
    try {
      const dataFetch = async () => {
        const data = await getRecipe(recipeId);

        // set state when the data received
        setRecipe(data);
      };

      dataFetch();
    } catch (error) {
      setRecipe({});
    }
  }, [getRecipe, recipeId]);

  return recipe._id === recipeId ? (
    <DetailsCard recipe={recipe} />
  ) : (
    <DetailsError />
  );
}
