import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import image1 from "../../../assets/Images/image1.png";
import image2 from "../../../assets/Images/image2.png";
import image3 from "../../../assets/Images/image3.png";

// ✅ Updated JSON Data: Image and Multiple Texts for each box
const boxData = [
  {
    image: image1,
    text: "Nicki Minaj OMG",
    subText1: "Live now in LA!",
    subText2: "Join 20K viewers 🔥",
  },
  {
    image: image2,
    text: "Dicking Around NY",
    subText1: "Streaming from NYC 🗽",
    subText2: "10K people watching!",
  },
  {
    image: image3,
    text: "I’ll do wtvr u want 😏",
    subText1: "Dare me to anything!",
    subText2: "5K dares completed!",
  },
];

const LeftContent = () => {
  return (
    <Box sx={{ width: "40%", padding: 3 }}>
      {/* Title Section */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: "20px" }}>
        <Typography
          color="#fff"
          fontWeight="900"
          sx={{
            fontSize: "64px",
            letterSpacing: "2px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          😈Dare.<span style={{ color: "red" }}>Me</span>
        </Typography>

        <Typography variant="body1" color="white">
          Watch Crazy Live Streamers!
        </Typography>
      </Box>

      {/* Box Data Section */}
      <Grid container spacing={3} sx={{ marginTop: 4, flexDirection: "column" }}>
        {boxData.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                bgcolor: "#2C2F35",
                borderRadius: 2,
                marginBottom: 2,
                width: "100%",
                height: "auto",
                textAlign: "left",
              }}
            >
              <img
                src={item.image}
                alt={`Box ${index + 1}`}
                style={{
                  width: "60px",
                  height: "90px",
                  marginRight: "15px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body1" color="#fff" fontWeight="bold">
                  {item.text}
                </Typography>
                <Typography variant="body2" color="gray">
                  {item.subText1}
                </Typography>
                <Typography variant="body2" color="gray">
                  {item.subText2}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
        <Typography
          sx={{
            color: "white",
            marginLeft: "10%",
            cursor: "pointer",
          }}
        >
          ➕ Find more streamers
        </Typography>
      </Grid>
    </Box>
  );
};

export default LeftContent;
