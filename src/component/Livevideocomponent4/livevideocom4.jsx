import React from "react";
import { Box } from "@mui/material";
import { ExtremeDareCard } from "../ExtremeDareCardHorizontal/ExtremeDareCard";

const Componentfour = () => (
  <Box
    sx={{
      display: "flex",
      
      flexDirection: { xs: "column", sm: "column" ,md:"column",lg:"row"}, // Column for small screens, row for larger
      gap: 2, 
      alignItems: { xs: "center", sm: "center",  },
      justifyContent: { xs: "center", sm: "center", md: "start" },
      width: { xs: "100%", sm: "100%", md:"100%" },// Space out the cards in row layout
      padding: 2,
    }}
  >
    <ExtremeDareCard width="5%" height={75} />
    <ExtremeDareCard width="5%" height={75} />
    <ExtremeDareCard width="5%" height={75} />
  </Box>
);

export default Componentfour;
