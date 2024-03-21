import { axios } from '../../../lib/axios';
import { UserResponse } from '../types';

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
    // const data = axios.post('/authentication/login', credentials);
    const data = 'NO REGISTER API YET';
    return data;
}