import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import App from "../App.jsx";
import Products from "../Pages/Products.jsx";
import Layout from "../Common/Layout.jsx"; 
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/products',
                element: <Products/>
            }
        ]
    }
]);
export default router;