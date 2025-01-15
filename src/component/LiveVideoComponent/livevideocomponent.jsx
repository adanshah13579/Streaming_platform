import React from "react";
import { Box } from "@mui/material";

const Livevideobox = () => {
  return (
    <Box
  sx={{
    backgroundColor: "black",
    color: "white",
    width: { xs: "90%", sm: "80%", md: "80%px", lg: "80%" },
    height: { xs: "100px", sm: "150px", md: "240px", lg: "300px" }, // Increased height
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    boxShadow: 3,
  }}
>
  Square Card
</Box>

  );
};

export default Livevideobox;
