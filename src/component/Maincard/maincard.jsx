import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WifiIcon from "@mui/icons-material/Wifi";
import str3 from "../../assets/images/str3.png";
import colors from "../../style/color";

const ModernCard = ({
  imageSrc = str3,
  title = "Every tip we’ll take 1 clothing off each", 
  avatarSrc = "https://via.placeholder.com/40",
  name = "John Doe",
  liveWatching = "120",
}) => {
  return (
    <Box
      sx={{
        width: "300px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: 3,
        backgroundColor: colors.cardbackground,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="img"
        src={imageSrc}
        alt="Card Image"
        sx={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />

      <Box sx={{ p: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 1,
            color: "white",
            fontSize: { xs: "16px", sm: "18px" }, 
          }}
        >
          {title.split("take 1 clothing off").map((part, index) => (
            <>
              {part}
              {index === 1 && (
                <span style={{ color: "yellow" }}>take 1 clothing off</span>
              )}
            </>
          ))}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar
            src={avatarSrc}
            alt={name}
            sx={{ width: 40, height: 40, mr: 1 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                color: "white",
              }}
            >
              {name}
              <CheckCircleIcon
                sx={{ color: "green", fontSize: "18px", ml: 1 }}
              />
            </Typography>
            <Typography
              variant="h8"
              sx={{
                color: "grey",
                fontSize: { xs: "12px", sm: "14px" },
                marginTop: "2px",
              }}
            >
              Verified user
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            startIcon={<WifiIcon />}
            sx={{
              backgroundColor: colors.buttoncolor,
              "&:hover": {
                backgroundColor: "#5742a1",
              },
              textTransform: "none",
            }}
          >
            Watch Now
          </Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                backgroundColor: "green",
                borderRadius: "50%",
                marginRight: "4px",
              }}
            />
            <Typography variant="body2" sx={{ color: "white" }}>
              {liveWatching} watching
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ModernCard;
