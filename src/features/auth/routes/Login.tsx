import React from "react";

import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { Layout } from "../components/Layout";

export const Login = () => {
    const navigate = useNavigate();
    
    return (
        <Layout title="Login">
            <LoginForm onSuccess={() => navigate("/app/table-list")} />
        </Layout>
    );
}
