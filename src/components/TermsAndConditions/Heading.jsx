import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function Heading() {
  return (
    <Box sx={{ textAlign: "center", width: "100%", mb: 2 }}>
      <Typography
        sx={{
          fontSize: { xs: "2rem", md: "2.5rem" },
          fontWeight: 800,
          fontFamily: "Roboto Mono",
          color: "#e2e8f0",
        }}
        variant="h2"
        component="h2">
        Terms And Conditions
      </Typography>
    </Box>
  );
}
