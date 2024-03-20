import { publicRoute } from "./public";
import { useRoutes } from "react-router-dom";
import React from "react";
import {Landing} from "../features/misc";

export const AppRoutes = () => {
    const commonRoutes = [{ path: "/", element: <Landing />}];
    const routes = publicRoute;
    const element = useRoutes([...commonRoutes, ...routes]);
    // console.log("Routes - index");
    
    return (
        <>{element}</>
    )
};