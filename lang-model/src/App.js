import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box } from "@mui/material";
import AppRoutes from "./Components/Routers/UserRoute";
import { Sidebar } from "./Components/Sidebar/Sidebar";

const App = () => {
    return (
        <Router>
            <Box sx={{ display: "flex" }}>                
                <Sidebar />
                {/* Main Content Area */}
                <Box sx={{ flex: 1, padding: 3, backgroundColor: "#F3F4F6", minHeight: "100vh" }}>
                    <AppRoutes /> {/* Will render Home by default */}
                </Box>
            </Box>
        </Router>
    );
};

export default App;
