import React, { useState } from "react";
import { Box, Typography, IconButton, Avatar,  } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import colors from "../../style/color";

const ChatMessage = ({ user, avatar, message, isHighlighted }) => {
  const [hover, setHover] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1.5,
        mb: 2,
        backgroundColor:colors.background,
      }}
    >
      {/* Avatar */}
      <Avatar src={avatar} sx={{ width: 32, height: 32 }} />

      {/* Chat Content */}
      <Box sx={{ flex: 1 }}>
        {/* Username */}
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: "bold",
            color: "text.primary",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {user} 🔥 
          <Typography sx={{ fontSize: 12, color: "text.secondary" }}>3m ago</Typography>
        </Typography>

        {/* Message Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: isHighlighted ? "primary.light" : "background.paper",
            p: 1.5,
            borderRadius: 2,
            position: "relative",
            transition: "background 0.3s",
            "&:hover": {
              bgcolor: "#E4E4E41A", // Light blue hover effect
            },
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* Message Text */}
          <Typography
            sx={{
              fontSize: 14,
              color: hover ? "primary.main" : "text.secondary",
              transition: "color 0.3s",
              flex: 1,
            }}
          >
            {message}
          </Typography>

          {/* Hover Icons Inside the Box */}
          {hover && (
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton size="small" sx={{ color: "text.secondary" }}>
                <ReplyIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "text.secondary" }}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" sx={{ color: "text.secondary" }}>
                <MoreVertIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const ChatComponent = () => {
  const messages = [
    {
      user: "Jesus is Brown",
      avatar: "https://i.pravatar.cc/150?img=5",
      message: "Does anyone know where to find that one girl...",
      isHighlighted: false,
    },
    {
      user: "The Pebble",
      avatar: "https://i.pravatar.cc/150?img=8",
      message: "@jesus yeah I'll send her profile to you...",
      isHighlighted: true,
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          user={msg.user}
          avatar={msg.avatar}
          message={msg.message}
          isHighlighted={msg.isHighlighted}
        />
      ))}
    </Box>
  );
};

export default ChatComponent;
