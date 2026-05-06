import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Heading from "./Heading";
import Points from "./Points";
import data from "./TC.json";

export default function TermsAndConditions() {
  const points = data.termsAndConditions;
  const footer = data.termsFooter;
  return (
    <Box sx={{ bgcolor: "#0b1120", py: { xs: 4, md: 6 }, px: { xs: 2, md: 0 } }}>
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            bgcolor: "#111827",
            border: "1px solid rgba(148, 163, 184, 0.18)",
          }}>
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Heading />
            <Typography
              sx={{
                maxWidth: 720,
                mx: "auto",
                color: "#cbd5e1",
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
              variant="body1"
              component="p">
              These terms and conditions explain how you can use InfoSysCS’s qualitative data
              analysis platform. Please read them carefully before continuing to use the service.
            </Typography>
          </Box>
          <Stack direction="column" spacing={2}>
            {points.map((value, index) => (
              <Points count={index + 1} key={index} data={value} />
            ))}
          </Stack>
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography
              sx={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.7 }}
              variant="body2"
              component="p">
              {footer}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
