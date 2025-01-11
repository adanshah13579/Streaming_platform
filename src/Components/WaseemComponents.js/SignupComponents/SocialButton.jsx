import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const SocialButton = ({ text }) => (
  <Button
    variant="outlined"
    startIcon={<GoogleIcon />}
    fullWidth
    sx={{
      textTransform: "none",
      color: "#fff",
      borderRadius:'20px',
      backgroundColor:"#3F8CFF",
      "&:hover": { borderColor: "#1E90FF", color: "#1E90FF" },
      borderRadius: 1,
    }}
  >
    {text}
  </Button>
);

export default SocialButton;
