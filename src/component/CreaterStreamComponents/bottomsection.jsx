import React from "react";
import { Box, Typography, Button } from "@mui/material";

const ScheduleStream = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#161A36",
        color: "white",
        padding: "24px",
        borderRadius: "16px",
        textAlign: "center",
        maxWidth: "100%",
      }}
    >
      {/* Title */}
      <Typography sx={{ fontSize: "0.9rem", fontWeight: "400", mb: 1 }}>
        Let your Viewers Know when you will be Live
      </Typography>

      {/* Subtitle */}
      <Typography sx={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", mb: 2 }}>
        The consistent you are with your Schedule the more the algorithm will help you to win more viewers
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#715AFF",
          borderRadius: "12px",
          fontSize: "0.8rem",
          padding: "10px 40px",
          textTransform: "none",
          width:"40%",
          "&:hover": { backgroundColor: "#5b47e0" },
        }}
      >
        Schedule Your Next Stream
      </Button>
    </Box>
  );
};

export default ScheduleStream;
