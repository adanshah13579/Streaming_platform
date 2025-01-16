import React from "react";
import { Box, Button, Typography, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const ChannelProfileComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 3,
        backgroundColor: "#18181B",
        borderRadius: 2,
        maxWidth: 1200,
        height: 180,
        margin: "auto",
      }}
    >
      {/* Avatar and Name Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar
          src="/path-to-avatar-image.jpg"
          alt="The Pebble"
          sx={{ width: 90, height: 90 }}
        />
        <Box>
          <Typography variant="h5" color="white" display="flex" alignItems="center">
            The Pebble
            <CheckCircleIcon sx={{ color: "#4CAF50", ml: 1, fontSize: 24 }} />
          </Typography>
          <Typography variant="body1" color="gray">
            536K followers • 120 videos
          </Typography>
        </Box>
      </Box>

      {/* Buttons Section */}
      <Box sx={{ display: "flex", gap: 6, ml: "auto" }}>
        <Button variant="contained" color="primary" sx={{ textTransform: "none", fontSize: 14, padding: "8px 18px" }}>
          Support this Creator
        </Button>
        <Button variant="outlined" color="secondary" sx={{ padding: "8px 18px" }}>
          <PersonAddIcon fontSize="medium" />
        </Button>
      </Box>
    </Box>
  );
};

export default ChannelProfileComponent;
