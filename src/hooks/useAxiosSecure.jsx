import axios from "axios";
import { use } from "react";
import { AuthContext } from "../Context/Context";

const axiosInstance = axios.create({
  baseURL: "https://know-sync-server-side.vercel.app",
});

const useAxiosSecure = () => {
  const { userSignOut } = use(AuthContext);
  const token = localStorage.getItem("token");
  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  });

  axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error.status === 401 || error.status === 403) {
        userSignOut()
          .then(() => {
            console.log(
              `your logged out because of an error with ${error.status} code`
            );
          })
          .catch(() => {});
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default useAxiosSecure;
