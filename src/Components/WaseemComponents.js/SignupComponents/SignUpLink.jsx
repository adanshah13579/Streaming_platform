import React from "react";
import { Box, Button, Typography } from "@mui/material";

const SignUpLink = () => (
  <Box display="flex" alignItems="center" mb={2}>
    <Typography variant="body2">Already a user?</Typography>
    <Button
      variant="text"
      sx={{ textTransform: "none", color: "#1E90FF", ml: 1, p: 0 }}
    >
      Login now
    </Button>
  </Box>
);

export default SignUpLink;
