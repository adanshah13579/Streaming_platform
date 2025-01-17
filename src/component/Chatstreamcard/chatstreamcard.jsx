import React from "react";
import { Box, Typography, Avatar, IconButton, Chip } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import colors from "../../style/color";

const StreamCard = ({ image, title, avatar, channelName, language, live }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.cardBackground || "#1e1e2f",
        borderRadius: 2,
        overflow: "hidden",
        width: 350,
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Video Thumbnail */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 200,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {live && (
          <Chip
            label="Live"
            color="error"
            size="small"
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              fontWeight: "bold",
            }}
            icon={<LiveTvIcon />}
          />
        )}
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: 10,
            display: "flex",
            gap: 1,
          }}
        >
          <IconButton sx={{ bgcolor: "rgba(0,0,0,0.5)", color: "white" }}>
            <PlayArrowIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: "rgba(0,0,0,0.5)", color: "white" }}>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Card Content */}
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: "bold",
            color: "white",
            mb: 1,
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar src={avatar} sx={{ width: 32, height: 32 }} />
          <Typography sx={{ fontSize: 14, color: "gray" }}>
            {channelName}
          </Typography>
        </Box>
        <Typography
          sx={{ fontSize: 12, color: "gray", mt: 0.5 }}
        >{`🇺🇸 ${language}`}</Typography>
      </Box>
    </Box>
  );
};

export default StreamCard;
