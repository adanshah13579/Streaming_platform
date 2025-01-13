import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import colors from "../../style/color";
import CardComponent from "../JoinnowCard/component";
import str1 from "../../assets/images/str1.png"; // Correct file extension

const Sidebar = ({ open, toggleSidebar }) => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 0,
          transition: "width 0.3s",
          zIndex:"1250",
          overflowX: "hidden",
          overflowY: "auto", // Enable vertical scrolling
          backgroundColor: colors.background,
          padding: "12px",
          scrollbarWidth: "none", // Hide scrollbar in Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar in Chrome, Safari, Edge
          },
        },
      }}
    >
      {/* Header Section */}
      {open && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            paddingBottom: "12px",
            width:"80%",
            margin:"1px auto"


          }}
        >
          <Typography variant="subtitle" sx={{ fontWeight: "bold", color: "white" }}>
            Draw.Me
          </Typography>
          <IconButton onClick={toggleSidebar}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      )}

      {/* Navigation Section */}
      {open && (
        <Box>
          <Typography
            variant="subtitle2"
            color="gray"
            sx={{
              marginLeft:"15px",

              marginTop: "15px",
              marginBottom: "6px",
              paddingLeft: "8px",
              paddingRight: "8px",
              fontSize: "0.85rem",
            }}
          >
            Navigation
          </Typography>
          <List sx={{
    width: "75%", // Set the desired width for the list
    margin: "0 auto", // Center align the list within the sidebar
  }}>
            {["Home", "About", "Services"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={{
                    margin: "6px 0",
                    borderRadius: "6px",
                    padding: "6px 10px", // Reduced padding for compact look
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start", // Align items to the start
                    gap: "5px", // Adjust spacing between icon and text
                    "&:hover": {
                      backgroundColor: colors.hoverBackground,
                      boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}> {/* Reduced min width */}
                    {index === 0 ? (
                      <HomeIcon sx={{ color: "white", fontSize: "1.2rem" }} />
                    ) : index === 1 ? (
                      <InfoIcon sx={{ color: "white", fontSize: "1.2rem" }} />
                    ) : (
                      <PersonIcon sx={{ color: "white", fontSize: "1.2rem" }} />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      color: "white",
                      fontSize: "0.9rem",
                      padding: 0, // Remove extra padding from text
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Divider */}
          <Divider
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              margin: "12px auto",
              width: "80%",
              borderRadius: "6px",
            }}
          />

          {/* Following Section */}
          <Typography
            variant="subtitle2"
            color="gray"
            sx={{
              marginLeft:"15px",
              marginTop: "15px",
              marginBottom: "6px",
              paddingLeft: "8px",
              paddingRight: "8px",
              fontSize: "0.85rem",
            }}
          >
            Following
          </Typography>
          <List sx={{
    width: "75%", // Set the desired width for the list
    margin: "0 auto", // Center align the list within the sidebar
  }}>
            {["User 1", "User 2", "User 3"].map((user) => (
              <ListItem key={user} disablePadding>
                <ListItemButton
                  sx={{
                    margin: "6px 0",
                    borderRadius: "6px",
                    padding: "6px 10px", // Reduced padding for compact look
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start", // Align items to the start
                    gap: "5px", // Adjust spacing between icon and text
                    "&:hover": {
                      backgroundColor: colors.hoverBackground,
                      boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}> {/* Reduced min width */}
                    <PersonIcon sx={{ color: "white", fontSize: "1.2rem" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={user}
                    sx={{
                      color: "white",
                      fontSize: "0.9rem",
                      padding: 0, // Remove extra padding from text
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Another Divider */}
          <Divider
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              margin: "12px auto",
              borderRadius: "6px",
              width: "80%",
            }}
          />

          {/* Card Section */}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop:"25px" }}>
            <CardComponent imageSrc={str1} text="Join & Earn" />
          </Box>
        </Box>
      )}
    </Drawer>
  );
};

export default Sidebar;
