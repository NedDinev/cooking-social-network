import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/comments";

export const commentServiceFactory = (token) => {
  const request = requestFactory(token);

  const create = async (data) => {
    const result = await request.post(baseUrl, data);

    //console.log(result);

    return result;
  };

  const getAll = async (recipeId) => {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);

    const comments = Object.values(result);
   // console.log(comments);

    return comments;
  };

  return { create, getAll };
};
