import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ThreeVideoButton = ({ isChannelProfilePage }) => {
  const [activeButton, setActiveButton] = useState('all'); // Set 'all' as active by default

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', sm: 'row', md: 'row' }, // Stack buttons on small screens, row on large screens
        justifyContent: 'start',
        gap: '16px',
        width: '100%',
        padding: { xs: '16px', sm: '32px' },
        position: 'relative', // Enables positioning of the right corner button
      }}
    >
      {/* First Button - All Stream Videos */}
      <Button
        sx={{
          backgroundColor: activeButton === 'all' ? '#6C5DD3' : 'rgba(255, 255, 255, 0.1)', // Active button gets color #6C5DD3
          color: '#fff',
          '&:hover': {
            backgroundColor: '#6C5DD3', // Light purple on hover, same as active
          },
          fontSize: { xs: '5px', sm: '7px', md: '8px', lg: '10px' },
          padding: '10px 15px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Slight shadow for glass effect
          backdropFilter: 'blur(5px)', // Glass effect blur
          minHeight: '48px', // Fixed height to ensure all buttons are the same size
          width: '15%', // Ensure the button takes full width
        }}
        onClick={() => setActiveButton('all')} // Set "All" as active
      >
        All
      </Button>

      {/* Second Button - Videos */}
      <Button
        sx={{
          backgroundColor: activeButton === 'videos' ? '#6C5DD3' : 'rgba(255, 255, 255, 0.1)', // Active button gets color #6C5DD3
          color: '#fff',
          '&:hover': {
            backgroundColor: '#6C5DD3', // Light purple on hover, same as active
          },
          fontSize: { xs: '5px', sm: '7px', md: '8px', lg: '10px' },
          padding: '10px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Slight shadow for glass effect
          backdropFilter: 'blur(5px)', // Glass effect blur
          minHeight: '48px', // Fixed height to ensure all buttons are the same size
          width: '15%', // Ensure the button takes full width
        }}
        onClick={() => setActiveButton('videos')} // Set "Videos" as active
      >
        Videos
      </Button>

      {/* Third Button - Placeholder Button */}
      <Button
        sx={{
          backgroundColor: activeButton === 'placeholder' ? '#6C5DD3' : 'rgba(255, 255, 255, 0.1)', // Active button gets color #6C5DD3
          color: '#fff',
          '&:hover': {
            backgroundColor: '#6C5DD3', // Light purple on hover, same as active
          },
          fontSize: { xs: '5px', sm: '7px', md: '8px', lg: '10px' },
          padding: '10px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Slight shadow for glass effect
          backdropFilter: 'blur(5px)', // Glass effect blur
          minHeight: '48px', // Fixed height to ensure all buttons are the same size
          width: '15%', // Ensure the button takes full width
        }}
        onClick={() => setActiveButton('placeholder')} // Set "Placeholder" as active
      >
        Placeholder
      </Button>

      {/* Conditionally Render the Extra Category Button only for ChannelProfile Page */}
      {isChannelProfilePage && (
        <Button
          sx={{
            position: 'absolute',
            right: 0, 
            top: '50%', 
            transform: 'translateY(-50%)', 
            backgroundColor: '#E4E4E41A', 
            color: '#808191',
            padding: '10px 20px',
            borderRadius: '8px',
            minHeight: '48px', 
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          onClick={() => console.log('New Category Button clicked!')} // Add your functionality
        >
          Popular Video
          <ArrowDropDownIcon sx={{ color: 'white' }} />
        </Button>
      )}
    </Box>
  );
};

export default ThreeVideoButton;
