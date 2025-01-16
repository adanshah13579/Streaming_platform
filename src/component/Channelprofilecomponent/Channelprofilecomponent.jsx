import React from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import colors from "../../style/color";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Channelprofilecomponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 1,
        height:"150px",
      
        width:"70%",
       backgroundColor:colors.greycardcolor,
        alignItems: "center",
        padding: 2,
        margin:"0px auto",
        borderRadius:"24px"
      }}
    >
      {/* Left Section: Avatar, Name, and Details */}
      <Box
        sx={{
          display: "flex",
          flexDirection:"row",
          alignItems: "self-start",
          gap: 3,
          width: "100%",
         
          height:"110px"
        }}
      >
        
          <Avatar
            src="/path-to-avatar-image.jpg" // Replace with the avatar image URL
            alt="The Pebble"
            sx={{
              width: 80,
              height: 80,
              
            }}
          />
    

        {/* Name, Followers, and Description */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: { md: "70%" },
          
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
             
              gap: 1,
            }}
          >
            {/* Text */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "18px", sm: "24px" },
                color: "white",
                fontFamily: "poppins",
                lineHeight: 1.2, // Ensures consistent spacing between lines
              }}
            >
              The Pebble
            </Typography>

            {/* Fixed Tick Icon */}
            <CheckCircleIcon
              sx={{
                color: "green",
                fontSize: "24px", // Matches better with the font size
                verticalAlign: "middle", 
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              fontFamily: "poppins",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                color: "white",
              }}
            >
              536K followers
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                color: "white",
              }}
            >
              120 videos
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          width: "100%",
          alignItems: { sm: "self-start" },
          marginTop: { xm: "20px" },
        }}
      >
        {/* Row 1: Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button
            sx={{
              backgroundColor: "#6C5DD3",
              fontSize: { xs: "8px", sm: "8px" },
              height:"40px",
              width: { xs: "80px", md: "150px" },
              padding: { xs: "5px 10px", sm: "8px 20px" },
              borderRadius: "10px",
              boxShadow: 2,
              color: "white",
            }}
          >
            Support this Creater
          </Button>
          <Button
            sx={{
              width: "10px",
              height: "40px",
              borderRadius: "10%",
              backgroundColor: "#F0F3F61A",
            }}
          >
            <PersonAddIcon
             sx={{ color: "white" ,fontSize:"20px", }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Channelprofilecomponent;
