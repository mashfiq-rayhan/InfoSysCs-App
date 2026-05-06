import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HeadUI from "@/components/UI/HeadUI";
import companyInfo from "@/components/Navigation/CompanyInfo.json";

export default function About() {
  return (
    <>
      <HeadUI pageTitle="About" />
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 0 } }}>
        <Paper
          elevation={4}
          sx={{
            background: "#0f172a",
            borderRadius: 4,
            p: { xs: 3, md: 5 },
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.35)",
            border: "1px solid rgba(148, 163, 184, 0.18)",
          }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#7dd3fc",
              fontWeight: 700,
              mb: 1,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}>
            About Us
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 800,
              mb: 2,
              color: "#e2e8f0",
            }}>
            About {companyInfo.name}
          </Typography>
          <Typography sx={{ fontSize: "1.125rem", color: "#cbd5e1", mb: 5, lineHeight: 1.8 }}>
            {companyInfo.about}
          </Typography>
          <Box
            sx={{
              gap: 3,
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            }}>
            <Paper
              elevation={1}
              sx={{
                p: 3,
                bgcolor: "#111827",
                borderRadius: 3,
                border: "1px solid rgba(148, 163, 184, 0.12)",
              }}>
              <Typography sx={{ fontWeight: 700, mb: 1, color: "#e2e8f0" }}>
                Contact Information
              </Typography>
              <Typography sx={{ color: "#cbd5e1", mb: 0.75 }}>
                <strong>Phone:</strong> {companyInfo.phone}
              </Typography>
              <Typography sx={{ color: "#cbd5e1" }}>
                <strong>Address:</strong> {companyInfo.address.address}, {companyInfo.address.area},{" "}
                {companyInfo.address.city} {companyInfo.address.postal}
              </Typography>
            </Paper>
            <Paper
              elevation={1}
              sx={{
                p: 3,
                bgcolor: "#111827",
                borderRadius: 3,
                border: "1px solid rgba(148, 163, 184, 0.12)",
              }}>
              <Typography sx={{ fontWeight: 700, mb: 1, color: "#e2e8f0" }}>What We Do</Typography>
              <Typography sx={{ color: "#cbd5e1", lineHeight: 1.8 }}>
                We help researchers, evaluators, and emergency responders analyze qualitative data
                quickly with AI-powered thematic insights. Upload your scripts and get structured
                results, patterns, and recommendations.
              </Typography>
            </Paper>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
