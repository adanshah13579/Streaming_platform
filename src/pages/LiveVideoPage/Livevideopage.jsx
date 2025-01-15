import React from "react";
import { Box } from "@mui/material";
import MainLayout from "../../layouts/Mainlayout";
import colors from "../../style/color";
import Livevideobox from "../../component/LiveVideoComponent/livevideocomponent";
import ChatBox from "../../component/ChatBox/chatbox";
import LiveVideoProfile from "../../component/LiveVideoProfile/livevideoprofile";
import Componentfour from "../../component/Livevideocomponent4/livevideocom4";
import VideoPageCard from "../../component/VideoPageCard/videopageCard";
import ResponsiveUnderlineNav from "../../component/Videopagenav/videopagenav";

const LiveVideoPage = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 2,
          width: "100%",
          backgroundColor: colors.background,
          minHeight: "100%",
          maxHeight: "auto",
        }}
      >
        {/* Row 1: Component 1 and Component 2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" }, // Stack vertically for xs and sm, row for md and above
            gap: 2,
            width: "100%",
            height: "auto",
          }}
        >
          {/* Component 1 */}
          <Box
            sx={{
              backgroundColor: "lightblue",
              flex: { xs: "0 1 100%", md: "0 1 60%" }, // Full width on xs and sm, 60% on md and above
              height: "auto", // Ensuring height consistency across sizes
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Livevideobox />
          </Box>

          {/* Component 2 */}
          <Box
            sx={{
              backgroundColor: "lightgreen",
              flex: { xs: "0 1 100%", md: "0 1 35%" }, // Full width on xs and sm, 35% on md and above
              height: { xs: "350px", sm: "450px", md: "450px" },
              height: "auto", // Ensuring height consistency across sizes
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <ChatBox />
          </Box>
        </Box>

        {/* Row 2: Component 3 */}
        <Box
          sx={{
            backgroundColor: "lightcoral",
            width: { xs: "100%", sm: "100%", md: "70%" },
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,

            alignSelf: { md: "flex-start" },
          }}
        >
          <LiveVideoProfile />
        </Box>

        {/* Row 3: Component 4 */}
        <Box
          sx={{
            backgroundColor: colors.background,
            width: { xs: "100%", sm: "100%" },
            height: "auto",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            maxWidth: { xs: "100%", sm: "100%", lg: "80%" },
            alignItems: { xs: "center", sm: "center" },
            justifyContent: { xs: "center", sm: "center", md: "center" },
            borderRadius: 2,
          }}
        >
          <Componentfour />
        </Box>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            backgroundColor:"red",
            justifyContent: { xs: "column", sm: "row", md: "start" }
            
          }}
        >
          <ResponsiveUnderlineNav />
        </Box>
        <Box
          sx={{
            padding: "30px",
            height: "auto",
            flexDirection: { xs: "column", sm: "row", md: "row" }, // Column for xs, row for sm and md
            maxWidth: { xs: "100%", sm: "100%", lg: "80%" }, // Responsive width
            display: "flex",
            gap: "15px",
            flexWrap: "wrap", // Allows wrapping to the next row
            justifyContent: { xs: "center", sm: "space-around", md: "start" }, // Center or spread components
            alignItems: "center", // Align items to center vertically
          }}
        >
          <VideoPageCard isBelowIcon={false} />
          <VideoPageCard isBelowIcon={false} />
          <VideoPageCard isBelowIcon={false} />
          <VideoPageCard isBelowIcon={false} />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default LiveVideoPage;
