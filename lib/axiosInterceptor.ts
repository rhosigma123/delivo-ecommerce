import { BACKEND_URL } from "@/config";
import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const apiClient = axios.create({
  baseURL: BACKEND_URL,
});

const refreshAccessToken = async (refreshToken: string) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/refresh-token`, {
      refreshToken,
    });

    console.log("response");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Token refresh failed:", error);
    throw new Error("Failed to refresh token");
  }
};
apiClient.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session?.user?.accessToken) {
      config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    } else {
      console.log("Access Token is missing");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh the access token
        const session = await getSession();

        if (session?.user?.refreshToken) {
          // Call the refresh token function
          const refreshedData = await refreshAccessToken(
            session?.user?.refreshToken
          );

          if (refreshedData?.accessToken) {
            // Update the Authorization header with the new access token
            originalRequest.headers.Authorization = `Bearer ${refreshedData.accessToken}`;
            // Retry the original request
            return axios(originalRequest);
          } else {
            console.error("Access token not found after refresh");
          }
        } else {
          console.error("No refresh token available in session");
        }
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        await signOut();
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
