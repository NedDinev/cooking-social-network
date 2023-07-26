import { requestFactory } from "./requester";

const baseUrl = "https://cooking-social-network-api.vercel.app/data/recipes";

export const recipeServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(baseUrl);
    const recipes = Object.values(result);

    return recipes;
  };

  const getOne = async (recipeId) => {
    const result = await request.get(`${baseUrl}/${recipeId}`);

    return result;
  };

  const create = async (recipeData) => {
    const result = await request.post(baseUrl, recipeData);

    return result;
  };

  const edit = async (recipeData) => {
    const result = await request.put(
      `${baseUrl}/${recipeData._id}`,
      recipeData
    );

    return result;
  };

  const del = async (recipeId) => {
    const result = await request.delete(`${baseUrl}/${recipeId}`);

    return result;
  };

  return { getAll, getOne, create, edit, del };
};
