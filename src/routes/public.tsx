import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { lazyImport } from '../utils/lazyImport';

// const { AuthRoutes } = lazyImport(() => import('../features/auth'), "AuthRoutes");
import { AuthRoutes } from "../features/auth";

export const publicRoute = [
    {
        path: '/auth/*',
        element: <AuthRoutes />
    },
]
