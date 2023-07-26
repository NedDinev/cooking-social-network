import { requestFactory } from "./requester";

const baseUrl = "https://cooking-social-network-api.vercel.app/users";

export const authServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    login: (loginData) => request.post(`${baseUrl}/login`, loginData),
    register: (registerData) =>
      request.post(`${baseUrl}/register`, registerData),
    logout: () => request.get(`${baseUrl}/logout`),
  };
};
