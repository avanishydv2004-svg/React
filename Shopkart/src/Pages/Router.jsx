import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import App from "../App.jsx";
import Products from "../Pages/Products.jsx";
import Layout from "../Common/Layout.jsx"; 
import Login from "./Login.jsx";
import Card from "./Card.jsx";
import OrderSuccess from "./OrderSuccess.jsx";
import Payment from "./Payment.jsx";

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
            },
            {
                path: "card",
                element: <Card/>
            },
            {
                path: "payment",
                element: <Payment/>
            },
            {
                path: "success",
                element: <OrderSuccess/>
            },
            {
                path: '/Login',
                element: <Login/>
            }
        ]
    }
]);
export default router;