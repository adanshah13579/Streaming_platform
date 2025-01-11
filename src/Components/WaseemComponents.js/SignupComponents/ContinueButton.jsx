import React from "react";
import { Button, Grid } from "@mui/material";

const ContinueButton = () => {
  return (
    <Grid item xs={12}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          bgcolor: "#1E90FF",
          textTransform: "none",
          borderRadius: 1,
          fontWeight: "bold",
          backgroundColor: "#6C5DD3",
        }}
      >
        Continue
      </Button>
    </Grid>
  );
};

export default ContinueButton;
