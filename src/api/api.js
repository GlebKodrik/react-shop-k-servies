import axios from "axios";

export const CONFIG = {
  baseURL: "https://shop-api-exam.herokuapp.com/api",
  withCredentials: true,
  validateStatus: (status) => status < 500,
  headers: {
    'content-type': 'application/json'
  }
};

const instance = axios.create(CONFIG);

export const authAPI = {
  me(){
    return instance.get("/auth/me");
  },
  logUp(user){
    return instance.post("/auth/sign-up", user)
  },
  logIn(email, password) {
    return instance.post("/auth/sign-in", { email, password });
  },
  logOut(){
    return instance.post("/auth/logout");
  }
};
export const productAPI = {
  getCategories(){
    return instance.get("/shop/rubrics");
  },
  getProduct(){
    return instance.get("/shop/products/");
  }
}

export const setInterceptor = (setUser) => {
  instance.interceptors.response.use(async (response) => {
    if (response.status === 401) {
      const refreshResponse = await axios.request({
        ...CONFIG,
        url: '/auth/refresh',
        method: 'GET',
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