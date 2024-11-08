import { Home, Person, Group, School } from "@mui/icons-material"; // Adjusted icons
import { Drawer, Typography, useMediaQuery, Box } from "@mui/material";

// Use a retro pixel font for typography
const pixelFont = "'Press Start 2P', cursive"; // Popular retro font for pixel-art look

const menu = [
    { title: "Home", icon: <Home />, path: "/home" },
    { title: "Profile", icon: <Person />, path: "/profile" },
    { title: "Characters", icon: <Group />, path: "/characters" },
    { title: "Lessons", icon: <School />, path: "/lessons" },
];

export const Sidebar = ({ handleClose }) => {
    const isSmallScreen = useMediaQuery("(max-width:1080px)");

    return (
        <Drawer
            variant={isSmallScreen ? "temporary" : "permanent"}
            open={true}
            onClose={handleClose}
            anchor="left"
            sx={{
                zIndex: 1,
                "& .MuiDrawer-paper": {
                    backgroundColor: "#1F2937",
                    color: "#FFFFFF",
                    width: isSmallScreen ? "50vw" : "20vw",
                    boxShadow: "3px 0 5px rgba(0, 0, 0, 0.2)",
                    borderRight: "none",
                    overflow: "hidden",
                    fontFamily: pixelFont, // Applying pixel font
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    justifyContent: "space-between",
                    py: 4,
                }}
            >
                <Box sx={{ flex: 1 }}>
                    {menu.slice(0, menu.length - 1).map((item, i) => (
                        <Box key={i} sx={{ mb: 2 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    px: 3,
                                    py: 1.5,
                                    cursor: "pointer",
                                    borderRadius: 2,
                                    transition: "transform 0.3s, background-color 0.3s",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // More blocky shadow for a pixel look
                                    "&:hover": {
                                        backgroundColor: "#374151",
                                        transform: "translateY(-2px)", // Slight hover movement
                                        boxShadow: "0 6px 10px rgba(0, 0, 0, 0.4)", // Blockier hover effect
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 36,
                                        height: 36,
                                        borderRadius: "50%",
                                        backgroundColor: "#4B5563",
                                        mr: 2,
                                        border: "2px solid #D1D5DB", // Adding border to icons to make them more pixel-like
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ mb: 2 }}>
                    {/* Logout Option */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            px: 3,
                            py: 1.5,
                            cursor: "pointer",
                            borderRadius: 2,
                            transition: "transform 0.3s, background-color 0.3s",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                            "&:hover": {
                                backgroundColor: "#374151",
                                transform: "translateY(-2px)",
                                boxShadow: "0 6px 10px rgba(0, 0, 0, 0.4)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                backgroundColor: "#4B5563",
                                mr: 2,
                            }}
                        >
                        </Box>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            Logout
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
};
