import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  ArrowDropDown,
  CabinOutlined,
  DashboardOutlined,
  JoinFullOutlined,
  ViewList,
  ViewListOutlined,
} from "@mui/icons-material";

const VideoUploadControls = () => {
  const [anchorEl, setAnchorEl] = useState(null); // State for category dropdown
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

  const handleCategoryClick = (event) => {
    setAnchorEl(event.currentTarget); // Open category dropdown
  };

  const handleCategoryClose = () => {
    setAnchorEl(null); // Close category dropdown
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Set selected category
    handleCategoryClose(); // Close the dropdown
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "16px", sm: "32px" },
      }}
    >
      {/* Heading in the top left corner */}
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          fontFamily: "Poppins",
          color: "white", // Dark color for the heading
          marginBottom: "16px", // Space between heading and content
        }}
      >
        You uploaded 16 videos
      </Typography>

      {/* Flex row layout for controls */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", // Ensure all items are in one line
          alignItems: "center",
          gap: "16px", // Space between items
        }}
      >
        {/* Checkbox */}
        <Checkbox sx={{ color: "#242731" }} />

        {/* Category Button with Down Arrow */}
        <Button
          sx={{
            backgroundColor: "#242731", // Use the specified color
            color: "#fff",
            "&:hover": {
              backgroundColor: "#242731", // Keep the same color on hover
            },
            fontSize: { xs: "8px", sm: "10px" },
            padding: "8px 16px",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Slight shadow for glass effect
            backdropFilter: "blur(5px)", // Glass effect blur
            display: "flex",
            alignItems: "center", // Align text and icon
            gap: "8px",
          }}
          onClick={handleCategoryClick}
        >
          {selectedCategory || "Select Category"}{" "}
          {/* Show selected category or default text */}
          <ArrowDropDown /> {/* Down arrow icon */}
        </Button>

        {/* Spacer to push buttons to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Flex-end buttons (Move, Delete, Add to Playlist) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end", // Align buttons to the end
            gap: "16px", // Space between the buttons
            alignItems: "center", // Align items vertically
          }}
        >
          <Button
            sx={{
              backgroundColor: "#242731", // Use the specified color
              color: "#fff",
              "&:hover": {
                backgroundColor: "#6C5DD3", // Keep the same color on hover
              },
              fontSize: { xs: "8px", sm: "10px" },
              padding: "8px 16px",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Slight shadow for glass effect
              backdropFilter: "blur(5px)", // Glass effect blur
            }}
          >
            <JoinFullOutlined
              sx={{
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "14px",
                  marginRight: "3px",
                }, // Icon font size with responsiveness
                color: "inherit", // Ensure the icon inherits the color of the button
              }}
            />
            Move
          </Button>

          <Button
            sx={{
              backgroundColor: "#242731", // Use the specified color
              color: "#fff",
              "&:hover": {
                backgroundColor: "#6C5DD3", // Keep the same color on hover
              },
              fontSize: { xs: "8px", sm: "10px" },
              padding: "8px 16px",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Slight shadow for glass effect
              backdropFilter: "blur(5px)", // Glass effect blur
            }}
          >
            <JoinFullOutlined
              sx={{
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "14px",
                  marginRight: "3px",
                }, // Icon font size with responsiveness
                color: "inherit", // Ensure the icon inherits the color of the button
              }}
            />
            Delete
          </Button>

          <Button
            sx={{
              backgroundColor: "#242731", // Use the specified color
              color: "#fff",
              "&:hover": {
                backgroundColor: "#6C5DD3", // Keep the same color on hover
              },
              fontSize: { xs: "8px", sm: "10px" },
              padding: "8px 16px",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Slight shadow for glass effect
              backdropFilter: "blur(5px)", // Glass effect blur
            }}
          >
            <JoinFullOutlined
              sx={{
                fontSize: {
                  xs: "8px",
                  sm: "10px",
                  md: "14px",
                  marginRight: "3px",
                }, // Icon font size with responsiveness
                color: "inherit", // Ensure the icon inherits the color of the button
              }}
            />
            Add to Playlist
          </Button>

          {/* Icons in a row */}
          <Box
            sx={{
              display: "flex",
              gap: "16px", // Space between icons
              justifyContent: "flex-end", // Align to the right
              alignItems: "center", // Align icons vertically
            }}
          >
            <ViewListOutlined sx={{ color: "white", fontSize: "24px" }} />
            <DashboardOutlined
              sx={{
                color: "white",
                fontSize: "35px",
                backgroundColor: "#3F8CFF",
                borderRadius: "10%", // Circular border radius
                padding: "8px",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Category Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCategoryClose}
      >
        <MenuItem onClick={() => handleCategorySelect("Category 1")}>
          Category 1
        </MenuItem>
        <MenuItem onClick={() => handleCategorySelect("Category 2")}>
          Category 2
        </MenuItem>
        <MenuItem onClick={() => handleCategorySelect("Category 3")}>
          Category 3
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default VideoUploadControls;
