import React from "react";
import { Box, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home'; 

export default function Home() {
  return (
    <Box textAlign="center" p={5}>
      <Typography
        variant="h4"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1} 
      >
        <HomeIcon fontSize="large" sx={{ color: "#1976d2" }} />
        Welcome to the Home Page
      </Typography>


      <Typography mt={3} variant="body1">
        This is a simple website built with React, MUI, and React Router.
      </Typography>
    </Box>
  );
}
