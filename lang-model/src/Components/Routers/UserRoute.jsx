import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Profile from "../Profile";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/home" element={<Home />} />
            <Route path="/admin/profile" element={<Profile />} />
        </Routes>
    );
};

export default AppRoutes;