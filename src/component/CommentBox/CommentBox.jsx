import { Box, IconButton, Divider, TextField, Typography } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import MicIcon from "@mui/icons-material/Mic";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import colors from "../../style/color";

const Commentbox = () => {
  return (
    <Box
      sx={{
        position: "relative",
        bottom: 0,
        width: "100%",
        padding: "10px",
        backgroundColor:"#E4E4E4",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Icons Row */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Left Side Icons */}
        <Box sx={{ display: "flex", gap: "10px" }}>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <SentimentSatisfiedAltIcon />
          </IconButton>
          <IconButton>
            <MicIcon />
          </IconButton>
        </Box>

        {/* Right Side Add Icon */}
        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </Box>

      {/* Input Field */}
      <Box sx={{ marginTop: "10px" }}>
        <TextField
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          placeholder="Type a message"
          sx={{
            borderRadius: "20px",
            backgroundColor: "#fff",
            paddingLeft: "10px",
            paddingRight: "10px",
            marginTop: "10px",
          }}
        />
      </Box>

      {/* Divider */}
      <Divider sx={{ marginTop: "15px" }} />

      {/* Blue Text */}
      <Box sx={{ marginTop: "10px", display: "flex", justifyContent: "center" }}>
        <Typography sx={{ color: "blue", fontSize: "14px" }}>
          Send a message!
        </Typography>
      </Box>
    </Box>
  );
};

export default Commentbox;
