import MainLayout from "../../layouts/Mainlayout";
import { Box } from "@mui/material";
import colors from "../../style/color";
import ChatDrawer from "../../component/Chatboxx/leftchatdrawer";

import { useState } from "react";
import Chatbox from "../../component/ChatTextbox/chatbox";

const ChatsystemPage = () => {
  const [chatOpen,setChatOpen] = useState(false);

  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "auto",
          flexDirection: {
            xs: "column", 
            sm: "row",    
          },
        }}
      >
        {/* Left-side Chat Drawer */}
        <Box
          sx={{
            flex: 1,
            minWidth: "350px",
            backgroundColor: colors.background,
            p: 2,
            display: {
              xs: chatOpen?"none":"",  // Hide the chat drawer on extra small screens
              sm: "block", 
            },
          }}
        >
          <ChatDrawer setChatState= {()=>setChatOpen(!chatOpen)} />
        </Box>

        
        <Box
          sx={{
            flex: 3,
            display: "flex",
            flexDirection: "column",
            height: "auto",
            width: "100%",
            backgroundColor: colors.background,
            p: 2,
          }}
        >
          <Chatbox  setChatState= {()=>setChatOpen(!chatOpen)} />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default ChatsystemPage;
