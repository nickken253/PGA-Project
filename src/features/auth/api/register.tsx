import { axios } from '../../../lib/axios';

export interface RegisterCredentials {
    email: string;
    password: string;
    repeatPassword: string;
    name: string;
    gender: string;
    region: Number;
    state: Number;
};

export const registerEmailAndPassword = async (credentials: RegisterCredentials): Promise<any> => { 
    const data = axios.post('/auth/register', credentials);
    return data;
}