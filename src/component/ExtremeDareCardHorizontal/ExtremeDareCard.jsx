import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import colors from "../../style/color";

export const ExtremeDareCard = ({ backgroundColor = 'red' }) => {
  return (
    <Card
      sx={{
        width: "100%", // Make the card take up full width based on breakpoints
       
        height: 100, // Full height
        display: 'flex',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        boxShadow: 'none',
        overflow: 'hidden',
        
        gap: '8px', // Space between the image and text
        borderRadius: '16px', // No border-radius for image
        '@media (max-width:600px)': {
          maxWidth: '100%',
        },
        '@media (max-width:960px)': {
          maxWidth: '100%',
        },
      }}
    >
      {/* Dummy Image */}
      <Box
        sx={{
          width: 70,
          height: '100%', // Full height
          backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/f0a2/144f/d7bcf674e5b31d84c3c08e7e3bcdbd35?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TC643WpDwdtZZxN4YSyxWv-JxzRMtG-5iTvySWprCRtdaWmpy7FkwqSTk6TXGssDu-pAT6jOvs6akcqqQsn1T~BFi0t~Dtgesy3fwcSOp~-ZPmSOkwSTsA-fIKJDxNzb3Id86t2EAJwKbVr0nfUDD1qv8O7xsHXs-jxC00kqu4UzNsCvcohY6XrzZO6VOJexV0pbtsp0R-GKd1oi7NSzjXU8qVMqCTsv3oXdD5tu4c8g~FnaQgdnp5QrtKHNTKMu4QsPT5HKapX1N7Hw2J6v2aN79ZDwCexlmJiCJRvETdF63LddwwIDAgu2Cf6bEkJ2gAsVUQ~2mKpZsFhFbPR-kQ__)', // Dummy image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
     <CardContent sx={{ padding: 0.5, flex: 1 }}>
  <Typography
    variant="h6"
    sx={{
      fontFamily: 'Poppins',
      fontSize: '15px',
      fontWeight: 500,
      lineHeight: '16px',
      textAlign: 'left',
      textDecoration: 'none',
      textDecorationSkipInk: 'none',
      color: 'white',
    }}
  >
    Extreme Dares
  </Typography>
  <Typography
    variant="caption"
    sx={{
      fontFamily: 'Poppins',
      fontSize: '10px',
      fontWeight: 200,
      lineHeight: '16px',
      textAlign: 'left',
      color: 'rgba(128, 129, 145, 1)',
    }}
  >
    See the crazy side of DareMe
  </Typography>
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      marginTop: '5px', // Add margin to space it a bit
    }}
  >
    <span
      style={{
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 117, 76, 1)',
        marginRight: '5px',
      }}
    ></span>
    <Typography
      variant="caption"
      sx={{
        fontFamily: 'Poppins',
        fontSize: '11px',
        fontWeight: 200,
        lineHeight: '16px',
        textAlign: 'left',
        color: 'rgba(128, 129, 145, 1)',
      }}
    >
      2.8K viewers
    </Typography>
  </Box>
</CardContent>
    </Card>
  );
};
