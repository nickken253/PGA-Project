import { axios } from '../../../lib/axios';
import { UserResponse } from '../types';

export interface LoginCredentials {
    email: string;
    password: string;
};

export const loginEmailAndPassword = async (credentials: LoginCredentials): Promise<any> => { 
    const data = axios.post('/authentication/login', credentials);
    return data;
}