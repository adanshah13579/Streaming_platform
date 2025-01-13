import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import colors from "../../style/color"; // Import colors from your global color file

const Stories = () => {
  const userStories = [
    { avatar: "https://via.placeholder.com/60", name: "John Doe" },
    { avatar: "https://via.placeholder.com/60", name: "Jane Smith" },
    { avatar: "https://via.placeholder.com/60", name: "Alex Johnson" },
    { avatar: "https://via.placeholder.com/60", name: "Emily Davis" },
    { avatar: "https://via.placeholder.com/60", name: "Emily Davis" },
    { avatar: "https://via.placeholder.com/60", name: "Emily Davis" },
    { avatar: "https://via.placeholder.com/60", name: "Emily Davis" },
  ];

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 4, backgroundColor: colors.background }}>
      <Box
        sx={{
          backgroundColor: colors.cardbackground, // Different background color for the wrapper
          borderRadius: "16px", // Rounded corners for the entire wrapper
          padding: { xs: 2, sm: 4 }, // Responsive padding
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          <span style={{ color: "red" }}>Live Dares</span> from Channel You Follow
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "nowrap",
            gap: 2,
            overflowX: "auto", // Enable horizontal scroll on small screens
            paddingBottom: "16px", // Space at the bottom for scrolling on small screens
            scrollbarWidth: "none", // Hide scrollbar in Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar in WebKit-based browsers (Chrome, Safari)
            },
          }}
        >
          {/* Story Upload */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: colors.cardBackground, // Use the global background color for the card
              borderRadius: "10px",
              padding: "8px",
            }}
          >
            <Avatar sx={{ bgcolor: "gray", width: 60, height: 60 }}>+</Avatar>
            <Typography variant="body2" sx={{ color: "white", textAlign: "center" ,mt:"8px" }}>
              Add Story
            </Typography>
          </Box>

          {/* User Stories */}
          {userStories.map((story, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: colors.cardBackground, // Use the global background color for the card
                borderRadius: "10px",
                padding: "8px",
              }}
            >
              <Avatar src={story.avatar} alt={story.name} sx={{ width: 60, height: 60 }} />
              <Typography variant="body2" sx={{ color: "white", textAlign: "center", mt: 1 }}>
                {story.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Stories;
