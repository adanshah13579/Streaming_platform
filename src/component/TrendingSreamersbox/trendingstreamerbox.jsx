import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TrenidngSubStreamCard } from "./trendingstreamcar";

export const Trendingstreamerscard = () => {
  return (
    <Box sx={{ textAlign: "center", margin: "20px" }}>
      {/* Heading: "Trending Streamers" */}
      <Typography
        variant="h5"
        sx={{
          fontFamily: "Poppins",
          fontWeight: 300,
          color: "white",
          marginBottom: "20px",
        }}
      >
        Trending Streamers
      </Typography>

      <TrenidngSubStreamCard/>
      <TrenidngSubStreamCard/>
      <TrenidngSubStreamCard/>

      <TrenidngSubStreamCard/>  <TrenidngSubStreamCard/>

      {/* Discover Button */}
      <Box sx={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          sx={{
            width:"200px",
            height:"50px",
            backgroundColor: "#E4E4E41A",
            color: "white",
            padding: "8px 20px",
            borderRadius: "10px",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#FF6230",
            },
          }}
        >
          Discover
        </Button>
      </Box>
    </Box>
  );
};
