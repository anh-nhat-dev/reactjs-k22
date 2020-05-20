import Http from "./Http";

export const getProducts = function (config = {}) {
  return Http.get("/get-products", config);
};

export const getDetailProduct = function (id, config = {}) {
  return Http.get(`/product/${id}`, config);
};

export const getCommentProduct = function (id, config) {
  return Http.get(`/get-product-comments/${id}`, config);
};

export const createComment = function (data = {}, config = {}) {
  return Http.post(`/create-comment`, data, config);
};
