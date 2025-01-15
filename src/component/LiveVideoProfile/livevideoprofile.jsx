import React from "react";
import { Box, Button, Typography,IconButton } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import colors from "../../style/color";


const LiveVideoProfile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" }, 
        gap: 1,
        justifycontent:"start",
    
        width: "100%",
        height:"100%",
        backgroundColor: colors.background, 
        
      
        alignItems: "center", 
      }}
    >
      {/* Box 1: Avatar */}
      <Box
        sx={{
          width: { xs: "55px", sm: "45px", md: "65px" },
          height: { xs: "55px", sm: "45px", md: "65px" },
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "column" }, 

          justifyContent: "start",
          alignItems: "center",
          
          
        }}
      >
        <Avatar
          alt="User Avatar"
          src="/static/images/avatar/1.jpg" 
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            boxShadow: 3,
          }}
        />
      </Box>

      <Box
      sx={{
        flex: 1, // Takes remaining space
        display: "flex",
        flexDirection: "column",
        gap: 2, // Increased gap for better spacing
        justifyContent: "center",
        padding: 2,
        
        maxWidth:"60%",
      }}
    >
      {/* Profile Name with Verified Icon */}
      <Box
        sx={{
          display: "flex",
          
          gap: 1, 
          alignItems: "center",
          width:"100%",
        }}
      >
        <Typography
          variant="h7"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "18px", sm: "20px", md: "27px" },
            textAlign: "start",
            fontFamily:"poppins",
            color:"white" // Center text for smaller screens
          }}
        >
          The Pebble
        </Typography>
        <IconButton sx={{ padding: 1 }}>
          <CheckCircleIcon sx={{ color: "green" }} /> {/* Verified tick icon */}
        </IconButton>

      </Box>

      {/* Followers and Videos Stats */}
      <Box sx={{ textAlign: "start"  ,display:"flex", justifyContent:"start", gap:"10px",width:"100%"}}>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            fontFamily:"poppins",
            color:"white" 
            
          }}
        >
          536K followers
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            fontFamily:"poppins",
            color:"white" 
            
          }}
        >
          120 videos
        </Typography>
      </Box>

      {/* Description Text */}
      <Box sx={{ textAlign: "start", width:"100%"}}>
       
        <Typography
          variant="caption"
          sx={{
            fontSize: { xs: "6px", sm: "8px", md: "10px" },
            color: "grey",
            width:"30px"
          }}
        >
          I’M LIVE EVERY DAY, I HOPE YOU ENJOY THIS STREAM, LEAVE A COMMENT IF YOU WANNA SEE SOMETHING EVEN COOLER
        </Typography>
      </Box>
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        position: "relative", // To position the "Follow Me" and icons at the bottom right
      }}
    >
      {/* Buttons (Message & Add to Friend) */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "10px",
            fontSize: { xs: "6px", sm: "8px", md: "8px" },
            height: "30px",
            boxShadow: 2,
          }}
        >
          Message
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "10px",
            fontSize: { xs: "10px", sm: "10px", md: "12px" },
            height: "30px",
            boxShadow: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <AddIcon />
        
        </Button>
      </Box>

      {/* "Follow Me" and Social Media Icons */}
      <Box
        sx={{
          
         
          textAlign: "end",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "gray",
            fontSize: { xs: "4px", sm: "5px", md: "7px" },
            
          }}
        >
          Follow Me
        </Typography>
        <Box
          sx={{
            display: "flex",
            
            justifyContent: "space-around",
            alignItems: "bottom",
          }}
        >
          <IconButton sx={{ fontSize: 0.2 }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ fontSize: 0.2  }}>
            <YouTubeIcon />
          </IconButton>
          <IconButton sx={{ fontSize: 0.2  }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ fontSize: 0.2  }}>
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default LiveVideoProfile;