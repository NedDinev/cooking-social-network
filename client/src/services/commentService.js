import { requestFactory } from "./requester";

const baseUrl = "https://cooking-social-network-api.vercel.app/data/comments";

export const commentServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async (recipeId) => {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);

    const comments = Object.values(result);
    // console.log(comments);

    return comments;
  };

  const create = async (data) => {
    const result = await request.post(baseUrl, data);

    //console.log(result);

    return result;
  };

  const del = async (commentId) => {
    const result = await request.delete(`${baseUrl}/${commentId}`);

    //console.log(result);

    return result;
  };

  return { create, getAll, del };
};
