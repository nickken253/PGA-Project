import { configureAuth } from 'react-query-auth'

import {
    loginEmailAndPassword,
    LoginCredentials,
    AuthUser,
    UserResponse,
    RegisterCredentials,
    registerEmailAndPassword,
    IUserData,
    IUserResponse,
} from "../features/auth";
import storage from "../utils/storage";
import { t } from '@tanstack/query-core/build/legacy/queryClient-6vLRMq5C';

// async function handleUserResponse(response: UserResponse): Promise<any>{
//     const { user, user_cookie, success, errors, data } = response;
//     if(user_cookie){
//         storage.set("token", user_cookie);
//     }
//     return user;
// }
// async function handleUserError(response: UserResponse): Promise<any>{
//     const { user, user_cookie, success, errors, data } = response;
//     return errors;
// }
// async function login(credentials: LoginCredentials): Promise<AuthUser>{
//     const response = await loginEmailAndPassword(credentials);  
//     const user = await handleUserResponse(response);
//     const error = await handleUserError(response);
//     return (user===false ? error : user);
// }
async function handleUserResponse(response: IUserResponse): Promise<any>{
    const { message, error, code, data } = response;
    if(data){
        storage.set("token", data.token);
    }
    else {
        return message;
    }
    return data;
}


async function login(credentials: LoginCredentials): Promise<IUserData>{
    const response = await loginEmailAndPassword(credentials);  
    const data = await handleUserResponse(response);  
    console.log(data);
    
    return data
}

async function register(credentials: RegisterCredentials): Promise<any>{
    const response = await registerEmailAndPassword(credentials);
    // const user = await handleUserResponse(response);
    // const error = await handleUserError(response);
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
    userFn: function (context: { queryKey: t; signal: AbortSignal; meta: Record<string, unknown> | undefined; }): AuthUser | Promise<AuthUser> {
        throw new Error('Function not implemented.');
    },
    loginFn: (credentials: LoginCredentials) => {
        return login(credentials);
    },
    registerFn: function (variables: unknown): Promise<AuthUser> {
        throw new Error('Function not implemented.');
    },
    logoutFn: function (): Promise<void> {
        return logout();
    }
});
