import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const ResponsiveUnderlineNav = () => {
  const [activeTab, setActiveTab] = useState("Videos"); // Track the active tab

  const tabs = ["Videos", "About", "Stories", "Schedule"];

  return (
    <Box
      sx={{
        backgroundColor:"green",
        display: "flex",
        justifyContent: { xs: "space-evenly", sm: "center", },
        alignItems: "start",
        flexWrap: "wrap",
        gap: { xs: 2, sm: 4 },
        padding: { xs: 2, sm: 3 },
        borderBottom: "2px solid #ccc", // Underline navigation container
        maxWidth:"60%",
      }}
    >
      {tabs.map((tab) => (
        <Typography
          key={tab}
          onClick={() => setActiveTab(tab)}
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontWeight: activeTab === tab ? "bold" : "normal",
            color: activeTab === tab ? "blue" : "gray",
            position: "relative",
            cursor: "pointer",
            "&:hover": {
              color: "blue",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              width: activeTab === tab ? "100%" : "0",
              height: "2px",
              backgroundColor: "blue",
              bottom: "-5px",
              left: 0,
              transition: "width 0.3s ease",
            },
          }}
        >
          {tab}
        </Typography>
      ))}
    </Box>
  );
};

export default ResponsiveUnderlineNav;
