import { Api } from "Helper/Api";

const parseResponse = (response) => response.json();

export const ConviteService = {
  getLista: () =>
    fetch(Api.conviteLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.conviteById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createConvite(), { method: "POST" }).then(parseResponse),
  updateById: (id) =>
    fetch(Api.updateConviteById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deleteConviteById(id), { method: "DELETE" }).then(parseResponse),
};
