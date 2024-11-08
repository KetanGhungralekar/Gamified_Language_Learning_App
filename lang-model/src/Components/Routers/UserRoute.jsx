import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./tabs/home";
import Profile from "./tabs/profile";
import Characters from "./tabs/characters";
import Lessons from "./tabs/lessons";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/admin/home" element={<Home />} />
            <Route path="/admin/profile" element={<Profile />} />
        </Routes>
    );
};

export default AppRoutes;