import React from "react";

import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { Layout } from "../components/Layout";

export const Login = () => {
    const navigate = useNavigate();
    // console.log("Login - index");
    
    return (
        <Layout title="Login">
            <LoginForm onSuccess={() => navigate("/")} />
        </Layout>
    );
}
