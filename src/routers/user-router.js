import React from "react"
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom"
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const routes = [
    {
        path: "/",
        component: <Home />,
    },
    {
        path: "/cart",
        component: <Cart />,
    },
]

const router = () => (
    <Router>
        <Routes>
            {routes.map((item) => (
                <Route path={item.path} element={item.component} key={item.path} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
)

export default router
