import { axios } from "../../../lib/axios";
import { UserResponse } from "../types";

export interface LoginCredentials {
  email: string;
  password: string;
}

export const loginEmailAndPassword = async (credentials: LoginCredentials): Promise<any> => {
  try {
    const response = await axios.post("/auth/login", credentials);
    return response; // Return the user data from the API
  } catch (error) {
    return error;
  }
};
