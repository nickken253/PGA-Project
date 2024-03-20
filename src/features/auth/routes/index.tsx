import { Route, Routes } from "react-router-dom";
import React from "react";
import { Login } from "./Login";

export const AuthRoutes = () => {
  // console.log("AuthRoutes - index");

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};