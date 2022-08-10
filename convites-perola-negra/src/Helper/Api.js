const conviteContext = {
  conviteEndpoint: () => `${Api.baseUrl}/convites`,
  conviteLista: () => `${conviteContext.conviteEndpoint()}`,
  conviteById: (id) => `${conviteContext.conviteEndpoint()}/one-convite/${id}`,
  createConvite: () => `${conviteContext.conviteEndpoint()}/create-convite`,
  updateConviteById: (id) =>
    `${conviteContext.conviteEndpoint()}/update-convite/${id}`,
  deleteConviteById: (id) =>
    `${conviteContext.conviteEndpoint()}/delete-convite/${id}`,
};

export const Api = {
  
  baseUrl: "http://localhost:3001",
  ...conviteContext,
};

/* baseUrl: "https://convites-perola.herokuapp.com",*/
