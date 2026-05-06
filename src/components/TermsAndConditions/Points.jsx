import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Points({ count, data }) {
  return (
    <Box
      sx={{
        backgroundColor: "#1f2937",
        mb: 2,
        p: 3,
        width: "100%",
        boxShadow: `0 12px 30px rgba(0, 0, 0, 0.35)`,
        borderRadius: "16px",
        border: "1px solid rgba(148, 163, 184, 0.12)",
      }}>
      <Stack direction="row" alignItems="flex-start" spacing={2}>
        {count && (
          <Typography
            sx={{ fontSize: "1.25rem", fontWeight: 700, color: "#7dd3fc", minWidth: "2rem" }}
            variant="h6"
            component="span">
            {count}.
          </Typography>
        )}
        <Typography
          sx={{ fontSize: "1rem", color: "#e2e8f0", lineHeight: 1.8 }}
          variant="body1"
          component="p">
          {data}
        </Typography>
      </Stack>
    </Box>
  );
}
