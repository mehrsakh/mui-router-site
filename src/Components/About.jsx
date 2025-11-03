import React from "react";
import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function About() {
  return (
    <Box textAlign="center" p={5}>
      <Typography
        variant="h4"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <InfoOutlinedIcon fontSize="large" sx={{ color: "#1976d2" }} />
        About Us
      </Typography>


      <Typography mt={3} variant="body1">
        This project demonstrates routing and Material UI components in React.
      
      </Typography>
    </Box>
  );
}
