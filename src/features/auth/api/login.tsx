import { axios } from "../../../lib/axios";
// import { IUserResponse } from "../../../interfaces/auth.interface";

export interface LoginCredentials {
  email: string;
  password: string;
}

export const loginEmailAndPassword = async (credentials: LoginCredentials): Promise<any> => {
  try {
    const response = await axios.post("/auth/login", credentials);
    return response; // Return the user data from the API
  } catch (error:any) {
    return {
      message: error.response?.data?.message || error.message,
      code: error.response?.data?.code || null,
      error: true,
    };
  }
};
