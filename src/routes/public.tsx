import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { lazyImport } from '../utils/lazyImport';

// const { AuthRoutes } = lazyImport(() => import('../features/auth'), "AuthRoutes");
import { AuthRoutes } from "../features/auth";
import { TableListRoutes } from "../features/tableList";

export const publicRoute = [
    {
        path: '/auth/*',
        element: <AuthRoutes />
    },
    {
        path: '/app/*',
        element: <TableListRoutes />
    }
]
