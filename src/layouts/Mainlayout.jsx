import React, { useState } from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import NavbarHeader from "../component/Navigation_header/Header";
import { Box } from "@mui/material";

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const drawerWidth = 240;

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box >
      {/* Navbar at the top */}
      <NavbarHeader toggleSidebar={toggleSidebar} />
      
      <Box >
        
      <Sidebar open={open} toggleSidebar={toggleSidebar} />
        <Box
        
        >
          {children} {/* Render children here */}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
