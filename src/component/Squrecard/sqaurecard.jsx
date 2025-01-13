import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import colors from "../../style/color"; // Global color import
import str4 from "../../assets/images/str4.png"; // Default image

const SquareCard = ({
  imageSrc = str4,
  title = "Live Event",
  watchingCount = "1.4K",
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" }, // Larger size for medium and large screens
        height: { xs: "300px", sm: "100%", md: "100%", lg: "100%" }, // Increased height for larger screens
        overflow: "hidden",
        borderRadius: "16px",
        boxShadow: 3,
      }}
    >
      {/* Image Section */}
      <Box
        component="img"
        src={imageSrc}
        alt="Card Image"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

      {/* Overlay for Text */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.4)", // Semi-transparent black overlay
        }}
      >
        {/* Left and Right Arrow Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            top: "10px",
            left: "10px",
            right: "10px",
            zIndex: 1,
          }}
        >
          <ArrowBack sx={{ color: "white", fontSize: 30, cursor: "pointer" }} />
          <ArrowForward sx={{ color: "white", fontSize: 30, cursor: "pointer" }} />
        </Box>

        {/* Content Section (Text and Button at the bottom left) */}
        <Box
          sx={{
            position: "absolute",
            bottom: "16px",
            left: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            zIndex: 2,
          }}
        >
          {/* Heading */}
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: "bold",
              marginBottom: "8px",
              fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "24px" }, // Increased font size for larger screens
            }}
          >
            {title}
          </Typography>

          {/* Watching Count with Green Dot */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: "green",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" }, // Adjust font size for different screens
              }}
            >
              {watchingCount} watching
            </Typography>
          </Box>

          {/* Follow Button */}
          <Button
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: colors.buttoncolor, // Button color from global colors
              "&:hover": {
                backgroundColor: colors.hoverBackground, // Hover effect from global colors
              },
              marginTop: "8px",
              fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" }, // Increase button font size for larger screens
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SquareCard;
