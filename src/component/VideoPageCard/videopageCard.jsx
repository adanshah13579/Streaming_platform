import * as React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Avatar,
  IconButton,
  Stack,
  Divider,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import vv1 from "../../assets/images/vv1.png"; // Default image

export default function VideoPageCard({isBelowIcon=true}) {
  return (
    <Card
      sx={{
        maxWidth: 250,
        bgcolor: '#1E1E2F',
        color: '#fff',
        borderRadius: '24px',
        position: 'relative',
        minWidth:250,
       height:!isBelowIcon? "320px":'auto',

      }}
    >
      <CardActionArea>
        {/* Thumbnail with Video Duration */}
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="180"
            image={vv1}
            alt="Video Thumbnail"
            sx={{
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              position: 'relative',
            }}
          />
         
<Box
  sx={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '30%', // Set the width to 30%
    height: '4px',
    bgcolor: '#FF754C', // Set the color to orange
  }}
/>
<Typography
  variant="caption"
  sx={{
    position: 'absolute',
    top: 8,
    right: 8,
    bgcolor: 'rgba(0, 0, 0, 0.52)',
    color: '#fff',
    px: 0.5,
    borderRadius: 1,
    fontSize: '0.75rem',
  }}
>
  10:42
</Typography>

        </Box>

        <CardContent sx={{  p:"15px" ,gap:"5px" }}>
          {/* Video Title */}
          <Typography variant="h6" component="div" sx={{  fontFamily:'Poppins' }}>
            Fake a kidnapping
          </Typography>

          {/* Views and Time */}
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
            {/* Blue Dot */}
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: '#3F8CFF',
                borderRadius: '50%',
              }}
            />
            <Typography variant="body5" color="gray" sx={{ fontSize: '11px' }}>
              8.1M views
            </Typography>

            {/* Green Dot */}
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: '#00FF00',
                borderRadius: '50%',
                ml: 2,
              }}
            />
            <Typography variant="body2" color="gray" sx={{ fontSize: '11px' }}>
              3 months ago
            </Typography>
          </Stack>

          {/* Channel Info */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: 2 }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar
                src="/static/images/avatar/the-pebble.jpg"
                alt="The Pebble"
                sx={{ width: 24, height: 24 }}
              />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                The Pebble
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>

      {/* Divider Line */}
      

      {/* Icons Section */}
      { isBelowIcon && (
        <>
        <Divider sx={{ bgcolor: 'gray', my: 1 }} />
      <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ p: 0.5 }}>
        <IconButton sx={{ color: '#808191', fontSize:"1px" }}>
          <ThumbUpAltIcon sx={{ fontSize:"20px" }}/>
        </IconButton >
        <IconButton sx={{ color: '#808191' }}>
          <ShareIcon sx={{ fontSize:"20px" }}/>
        </IconButton>
        <IconButton sx={{ color: '#808191' }}>
          <PlaylistAddIcon sx={{ fontSize:"20px" }}/>
        </IconButton>
        <IconButton sx={{ color: '#808191' }}>
          <VisibilityIcon sx={{ fontSize:"20px" }}/>
        </IconButton>
    
      </Stack>
      </>
        )}
    </Card>
  );
}
