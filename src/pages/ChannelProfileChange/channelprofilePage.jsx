import React from "react";
import StreamingScreen from "../../component/StartStreaming/startStreaming";
import MainLayout from "../../layouts/Mainlayout";
import { Box } from "@mui/material";
import Channelherosection from "../../component/ChannelHerosection/Channelherosection";
import Channelprofilecomponent from "../../component/Channelprofilecomponent/Channelprofilecomponent";
import ResponsiveUnderlineNav from "../../component/Videopagenav/videopagenav";
import colors from "../../style/color";
import ThreeVideoButton from "../../component/ThreeVideosButton/ThreeVideoButton";
import VideoPageCard from "../../component/VideoPageCard/videopageCard";
import ChannelPageCardGrid from "../../component/Channelpagecards/channelpagecards";
import AchievementsBadges from "../../component/AchievmentandBadges/AchievementsBadgesbox";

const ChannelProfilePage = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          width: "100%",
        }}
      >
        {/* Full-width Box for Channelherosection */}
        <Box
          sx={{
            width: "100%", // Ensure it takes up the full width
          }}
        >
          <Channelherosection />
        </Box>

        {/* Other components */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: colors.background,
            display: "flex",

            justifyContent: "flex-start",
          }}
        >
          <Channelprofilecomponent />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "start",

            backgroundColor: colors.background,
            padding: "0 20px",
            padding: "0px 40px",
          }}
        >
          <ResponsiveUnderlineNav />
        </Box>

        <Box
          sx={{
            width: "100%",
            backgroundColor: colors.background,
             padding:"0px 35px"
          }}
        >
          <ThreeVideoButton isChannelProfilePage={true} />
        </Box>
        <Box sx={{ width: "100%", backgroundColor: colors.background , padding:"0px 40px"}}>
          <ChannelPageCardGrid />
        </Box>
        <Box sx={{ width: "100%", backgroundColor: colors.background, padding:"0px 40px" }}>
          <AchievementsBadges />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default ChannelProfilePage;
