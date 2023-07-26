import { requestFactory } from "./requester";

const baseUrl = "https://cooking-social-network-api.vercel.app/data/likes";

export const likesServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async (recipeId) => {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);
    const result = await request.get(`${baseUrl}?where=${query}`);

    const likes = Object.values(result);
    // console.log(likes);

    return likes;
  };

  const create = async (data) => {
    const result = await request.post(baseUrl, data);

    //console.log(result);

    return result;
  };

  const del = async (likeId) => {
    const result = await request.delete(`${baseUrl}/${likeId}`);

    //console.log(result);

    return result;
  };

  return { create, getAll, del };
};
