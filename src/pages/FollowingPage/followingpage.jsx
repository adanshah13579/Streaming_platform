import { Box, Checkbox, ListItemText, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import { ExtremeDareCard } from "../../component/ExtremeDareCardHorizontal/ExtremeDareCard";
import Stories from "../../component/Stories/Stories";
import MainLayout from "../../layouts/Mainlayout";
import colors from "../../style/color";
import VideoSlider from "../../component/VideoSlider/videoslider";
import ModernCard from "../../component/Maincard/maincard";
import { useState } from "react"; // Importing useState to manage state

const FollowingPage = () => {
  const [personName, setPersonName] = useState([]); // State to manage selected items
  const names = ["John", "Jane", "Alice", "Bob"]; // Example list of names
  const MenuProps = {}; // Adjust or add your MenuProps as necessary

  const handleChange = (event) => {
    const value = event.target.value;
    setPersonName(value);
  };

  return (
    <MainLayout>
      <Stories grey_color="#242731" />

      <Box
        sx={{
          display: "flex", // Use flexbox layout
          flexDirection: "row", // Align items in a row
          flexWrap: "wrap", // Allow items to wrap onto new lines on smaller screens
          gap: "16px", // Space between cards
          justifyContent: "flex-start", // Align cards to the left
          width: "100%",
          padding: "32px",
          backgroundColor: colors?.background, // Full width of the parent container
        }}
      >
        <ExtremeDareCard backgroundColor={colors?.greycardcolor} />
        <ExtremeDareCard backgroundColor={colors?.greycardcolor} />
        <ExtremeDareCard backgroundColor={colors?.greycardcolor} />
        <ExtremeDareCard backgroundColor={colors?.greycardcolor} />
      </Box>

      <VideoSlider />

      <Box
        sx={{
          display: "flex", // Use flexbox layout for main container
          flexDirection: "column", // Stack the content vertically
          gap: "16px", // Space between the heading and the Select box
          width: "100%", // Full width
          padding: "32px",
          backgroundColor: colors?.background, // Background color
          
        }}
      >
        {/* Heading for the list */}
        <Typography variant="h6" sx={{ fontWeight: "500",color:'white',fontFamily:'Poppins'  }}>
        Follower’s Uploaded Recently
        </Typography>

       
        <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // Allow wrapping on smaller screens
          gap: { xs: 1, sm: 2 }, // Space between cards
          justifyContent: { xs: "center", sm: "flex-start" }, // Centered on small screens, left-aligned on larger screens
        }}
      >
        {/* Render 4 Cards */}
        <ModernCard />
        <ModernCard />
        <ModernCard />
        <ModernCard />
      </Box>

       
      </Box>
    </MainLayout>
  );
};

export default FollowingPage;
