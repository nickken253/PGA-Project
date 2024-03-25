import { configureAuth } from 'react-query-auth'

import {
    loginEmailAndPassword,
    LoginCredentials, // Interface
    RegisterCredentials, // Interface
    registerEmailAndPassword,
    IUserData,  // Interface
    IUserResponse, // Interface
} from "../features/auth";

import storage from "../utils/storage";
import { t } from '@tanstack/query-core/build/legacy/queryClient-6vLRMq5C';

async function handleUserResponse(response: IUserResponse): Promise<any>{
    const { message, error, code, data } = response;
    if(data){
        storage.set("token", data.token);
    }
    return {data, message};
}


async function login(credentials: LoginCredentials): Promise<IUserData>{
    const response = await loginEmailAndPassword(credentials);  
    // debugger;
    
    const data = await handleUserResponse(response);  
    console.log(data);
    
    return data
}

async function register(credentials: RegisterCredentials): Promise<any>{
    const response = await registerEmailAndPassword(credentials);
    return response;
}

async function logout(): Promise<void>{
    storage.remove("token");
    window.location.reload();
}

const authConfig = {
    login,
    logout,
};

export const { useUser, useLogin, useRegister, useLogout } = configureAuth({
    userFn: function (context: { queryKey: t; signal: AbortSignal; meta: Record<string, unknown> | undefined; }): IUserData | Promise<IUserData> {
        throw new Error('Function not implemented.');
    },
    loginFn: (credentials: LoginCredentials) => {
        return login(credentials);
    },
    registerFn: function (variables: unknown): Promise<IUserData> {
        throw new Error('Function not implemented.');
    },
    logoutFn: function (): Promise<void> {
        return logout();
    }
});
