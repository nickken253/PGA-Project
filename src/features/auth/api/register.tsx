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
    console.log(credentials);
    try {
    const data = await axios.post('/auth/register', credentials);
    console.log(data);
    return data;
    } catch (error:any) {
        return {
            message: error.response?.data?.message || error.message,
            code: error.response?.data?.code || null,
            error: true,
        };
    }
    
}