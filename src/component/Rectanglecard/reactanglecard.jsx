import React from "react";
import { Box, Typography, Button } from "@mui/material";
import str5 from "../../assets/images/str5.png";

// Rectangle Card component
const RectangleCard = ({
  imageSrc = str5,
  title = "Live Event",
  subTitle = "Watch live streaming",
  watchingCount = "1.4K",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens, horizontally on larger screens
        width: "100%", 
        maxWidth: { xs: "100%", sm: "320px", md: "380px" }, // Increased size on larger screens
        borderRadius: "8px", // Rounded corners
        boxShadow: 2, // Add a shadow for better visibility
        marginBottom: "16px", // Add space between cards
        overflow: "hidden",
        backgroundColor: "#f0f0f0", // Light grey background for the entire card
      }}
    >
      {/* Container for Image and Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "row" },
          width: "100%",
          backgroundColor: "#d0d0d0", // Grey background for the inner container
          borderRadius: "8px",
        }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src={imageSrc}
          alt="Card Image"
          sx={{
            width: { xs: "40%", sm: "45%", md: "50%" }, // 100% width on small screens, 45% on larger screens
            height: "auto",
            objectFit: "cover",
            borderTopLeftRadius: "8px", // Rounded top-left corner
            borderBottomLeftRadius: "8px", // Rounded bottom-left corner
          }}
        />

        {/* Text Section */}
        <Box
          sx={{
            padding: { xs: "8px 12px", sm: "12px 16px" }, // Adjust padding for a more compact feel
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: { xs: "100%", sm: "55%", md: "50%" }, // Full width on small screens, 55% on larger screens
          }}
        >
          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: { xs: "14px", sm: "16px", md: "16px" }, // Adjusted font sizes for a smaller look
              marginBottom: "8px",
            }}
          >
            {title}
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="body2"
            sx={{
              color: "black",
              fontSize: { xs: "12px", sm: "14px", md: "14px" }, // Smaller font size for subtitle
              marginBottom: "8px",
            }}
          >
            {subTitle}
          </Typography>

          {/* Watching count with green dot */}
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
            <Box
              sx={{
                width: "6px",
                height: "6px",
                backgroundColor: "green",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "black",
                fontSize: { xs: "12px", sm: "14px", md: "14px" }, // Adjust font size for watching count
              }}
            >
              {watchingCount} watching
            </Typography>
          </Box>

          {/* Follow Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6C5CD3", // Button color
              "&:hover": { backgroundColor: "#5742a1" }, // Hover effect
              width: { xs: "80%", sm: "100%" }, // Full width on larger screens, 80% width on small screens
              marginLeft: { xs: "5%", sm: "0" }, // Center button on small screens
              textTransform: "none", // Remove text transformation
              padding: "6px 0", // Smaller padding for a compact button
              fontSize: { xs: "12px", sm: "14px", md: "14px" }, // Adjust button font size for smaller look
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RectangleCard;
