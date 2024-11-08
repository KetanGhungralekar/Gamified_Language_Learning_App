import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Default route to Home */}
            <Route path="/" element={<Home />} />
            
            {/* Admin-specific routes */}
            <Route path="/admin/home" element={<Home />} />
            <Route path="/admin/profile" element={<Profile />} />

            {/* Catch-all route to redirect to Home if route not found */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
