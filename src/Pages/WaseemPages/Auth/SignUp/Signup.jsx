import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Box,
  Container,
  SvgIcon,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormInput from "../../../../Components/WaseemComponents.js/SignupComponents/FormInput";
import SocialButton from "../../../../Components/WaseemComponents.js/SignupComponents/SocialButton";
import SignUpLink from "../../../../Components/WaseemComponents.js/SignupComponents/SignUpLink";
import ContinueButton from "../../../../Components/WaseemComponents.js/SignupComponents/ContinueButton";
import { backgroundImage } from "../../../../Styles/globalColors";
import LeftContent from "../../../../Components/WaseemComponents.js/SignupComponents/LeftSideCard";



const SignUpCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        position: "relative",
        backgroundImage: backgroundImage,
        backgroundSize: "120%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <LeftContent />

      {/* Right Box: Form Card */}
      <Box sx={{ width: "40%" }}>
        <Container maxWidth="sm">
          <Card
            sx={{
              bgcolor: "#242731",
              color: "#fff",
              padding: 3,
              borderRadius: 10,
              boxShadow: 3,
              width: "100%",
            }}
          >
            <CardContent>
              <IconButton sx={{ color: "#fff" ,marginLeft:"90%"}}>
                <ArrowBackIcon />
              </IconButton>

              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Sign Up
              </Typography>

              <SignUpLink />

              <Grid container spacing={2}>
                <FormInput label="First Name" />
                <FormInput label="Last Name" />
                <FormInput label="Email Address" />
                <FormInput label="Password" type="password" />

                <ContinueButton />

                <Grid item xs={12}>
                  <Typography align="center" variant="body2" color="gray">
                    Sign up by Open ID
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <SocialButton text="Google Account" />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default SignUpCard;
