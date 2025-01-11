import React from "react";
import { TextField, Grid } from "@mui/material";

const FormInput = ({ label, type = "text" }) => (
  <Grid item xs={12} sm={6}>
    <TextField
      label={label}
      type={type}
      variant="filled"
      fullWidth
      InputProps={{ disableUnderline: true }}
      sx={{
        bgcolor: "#E4E4E41A",
        borderRadius: 1,
        input: { color: "#fff" },
      }}
    />
  </Grid>
);

export default FormInput;
