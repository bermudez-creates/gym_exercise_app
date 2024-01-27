import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    if (search) {
      console.log(search);
      // const exerciseData = await fetchData
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="50px"
        textAlign="center"
      >
        "We're either getting better or getting worse" <br /> Start now.
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '900px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
            right: '0',
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLocaleLowerCase());
          }}
          placeholder="Search for your next workout"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
