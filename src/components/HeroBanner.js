import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { xs: '70px', lg: '212px' },
        ml: { sm: '50px' },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        <i>steezy</i> Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      >
        "Don't stop when you're tired, <br /> stop when youre done."
      </Typography>
      <Typography fontSize="22px" lineHeight="35px">
        BECOME MENTALLY STRONG
      </Typography>
    </Box>
  );
};

export default HeroBanner;
