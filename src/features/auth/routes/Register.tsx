import React from "react";

import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";
import { Layout } from "../components/Layout";

export const Register = () => {
    const navigate = useNavigate();
    
    return (
        <Layout title="Register">
            <RegisterForm onSuccess={() => navigate("/")} />
        </Layout>
    );
}
