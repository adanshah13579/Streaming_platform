import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import colors from "../../style/color";

const ResponsiveUnderlineNav = () => {
  const [activeTab, setActiveTab] = useState("Videos"); 

  const tabs = ["Videos", "About", "Stories", "Schedule"];

  return (
    <Box
      sx={{
        backgroundColor: colors.background,
        display: "flex",
        justifyContent: {
          xs: "center", 
          sm: "flex-start", 
          md: "flex-start", 
        },
        alignItems: "center", 
        flexWrap: "wrap",
        gap: { xs: 2, sm: 2 },
        padding: { xs: 2, sm: 3 },
         
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
            color: activeTab === tab ? "white" : "white",
            position: "relative",
            cursor: "pointer",
            "&:hover": {
              color: "white",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              width: activeTab === tab ? "100%" : "0",
              borderRadius:"2px",
              height: "4px",
              backgroundColor: "#3F8CFF",
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
