import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function Contact() {
  return (
    <Box textAlign="center" p={5}>
      <Typography variant="h4"> <ConnectWithoutContactIcon fontSize="large" sx={{ color: "#1976d2", mr: 1 }} />
       Contact Page</Typography>

      <Typography mt={2}>
       
        You can send message us at @Mehrsakhalaj@gmail.com
      </Typography>

      <Typography mt={2}>OR</Typography>

      <Typography mt={2}>
        You can type your number here:
      </Typography>

      <TextField
        type="tel"
        placeholder="09*********"
        inputProps={{ maxLength: 11 }} 
        sx={{
          mt: 2,
          width: "200px",
          "& input": { textAlign: "center" },
        }}
      />
    </Box>
  );
}
