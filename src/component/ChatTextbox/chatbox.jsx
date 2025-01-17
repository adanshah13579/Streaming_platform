import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatMessage from "../Chatmessage/chatpage";
import Commentbox from "../CommentBox/CommentBox";

const Chatbox = ({setChatState}) => {
  const messages = [
    {
      avatar: "https://example.com/avatar1.jpg",
      name: "Adan Shah",
      time: "🔥 3m ago",
      message:
        "Hey, how are you? lkjdsbf jdbvjds syed adn sj ikduy  iwant to go home m cdjkk Hey, how are you? lkjdsbf jdbvjds syed adn sj ikduy  iwant to go home m cdjkk ",
      isHighlighted: false,
    },
    {
      avatar: "https://example.com/avatar2.jpg",
      name: "John Doe",
      time: " 🔥 2m ago",
      message: "I'm doing great! Thanks for asking.",
      isHighlighted: true,
    },
    {
      avatar: "https://example.com/avatar2.jpg",
      name: "John Doe",
      time: " 🔥 2m ago",
      message:
        "I'm doing great! Thanks for  lkjdsbf jdbvjds syed adn sj ikduy  iwant to g  lkjdsbf jdbvjds syed adn sj ikduy  iwant to g  lkjdsbf jdbvjds syed adn sj ikduy  iwant to gasking.",
      isHighlighted: true,
    },

]
  
  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          borderBottom: "1px solid #ccc",
          height: "auto", // Optional for a bottom border
        }}
      >
        {/* Heading Text */}
        <Typography
          sx={{
            flex: 1,
            color: "white",
            fontFamily: "Poppins",
            fontSize: {
              xs: "20px",  // Small screen size
              sm: "25px",  // Small to medium
              md: "30px",  // Medium to large
              lg: "35px",  // Large screen
            },
            fontWeight: "bold",
          }}
        >
          Heading Text
        </Typography>

        {/* Icons on the right */}
        <Box sx={{ display: "flex", gap: "16px" }}>
          <IconButton color="primary" onClick={()=>setChatState()}>
            <HomeIcon />
          </IconButton>
          <IconButton color="primary">
            <SearchIcon />
          </IconButton>
          <IconButton color="primary">
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Chat Messages Section */}
      <Box
        sx={{
          padding: "20px 10px",
          maxHeight: "900px", // Set a max height for the chat box
          overflowY: "auto", // Enable scrolling if content exceeds
          "&::-webkit-scrollbar": {
            display: "none", // Hide the scrollbar
          },
        }}
      >
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            avatar={msg.avatar}
            name={msg.name}
            time={msg.time}
            message={msg.message}
            isHighlighted={msg.isHighlighted}
          />
        ))}
      </Box>

      {/* <Box><Commentbox/></Box> */}
    </Box>
  );
};

export default Chatbox;