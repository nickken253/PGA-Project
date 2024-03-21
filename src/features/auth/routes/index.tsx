import { Route, Routes } from "react-router-dom";
import React from "react";
import { Login } from "./Login";
import { Register } from "./Register";

export const AuthRoutes = () => {
  // console.log("AuthRoutes - index");

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};