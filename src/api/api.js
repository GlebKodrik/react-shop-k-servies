import axios from "axios";
import { urlApi } from "../common/urlApi";

export const CONFIG = {
  baseURL: `${urlApi}/api`,
  withCredentials: true,
  validateStatus: (status) => status < 500,
  headers: {
    "content-type": "application/json",
  },
};

const instance = axios.create(CONFIG);

export const authAPI = {
  me() {
    return instance.get("/auth/me");
  },
  logUp({ name: nickname, password, email, phone }) {
    return instance.post("/auth/sign-up", { nickname, password, email, phone });
  },
  logIn({ email, password }) {
    return instance.post("/auth/sign-in", { email, password });
  },
  logOut() {
    return instance.post("/auth/logout");
  },
};
export const userAPI = {
  changeUser(data) {
    let formData = new FormData();
    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }
    return instance.post("/auth/change-profile", formData);
  },
};

export const productAPI = {
  getSpecs(id) {
    return instance.get(`/shop/specs/${id}`);
  },
  getCategories() {
    return instance.get("/shop/rubrics");
  },
  getProductsCategory(id) {
    return instance.get(`/shop/products?rubricId=${id}`);
  },
  getProduct(id) {
    return instance.get(`/shop/products/${id}`);
  },
};

export const adminAPI = {
  deleteProduct(id) {
    return instance.delete(`/shop/products/${id}`);
  },
  deleteCategories(rubric) {
    return instance.delete(`/shop/rubrics/${rubric}`);
  },
  createCategories(data) {
    let formData = new FormData();

    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }

    return instance.post("/shop/rubrics", formData);
  },
  createProduct({ data: { images, ...data } }) {
    let formData = new FormData();
    images.map((el) => formData.append("images", el.file));

    for (const key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }

    return instance.post("/shop/products", formData);
  },
};
export const basketAPI = {
  sendMessage(data) {
    return instance.post("/email", data);
  },
};

export const setInterceptor = (setUser) => {
  instance.interceptors.response.use(async (response) => {
    if (response.status === 401) {
      const refreshResponse = await axios.request({
        ...CONFIG,
        url: "/auth/refresh",
        method: "GET",
      });

      if (refreshResponse.status === 401) {
        setUser(null);
        return response;
      }

      return axios.request(response.config);
    }

    return response;
  });
};
