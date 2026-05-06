import { handleGetUserData } from "@/api/auth";
import FileUpload from "@/components/FileUploader/inedx";
import HeadUI from "@/components/UI/HeadUI";
import { setAuthState } from "@/store/authSlice";
import { wrapper } from "@/store/store";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { getCookies } from "cookies-next";
import React from "react";
import TermsAndCondition from "@/components/TermsAndConditions";
import Link from "next/link";
import { useRouter } from "next/router";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <CssBaseline />
      <HeadUI pageTitle={"Home"}></HeadUI>
      <React.Fragment>
        <Box sx={{ px: 2, pt: 2, pb: 0 }}>
          <Box
            sx={{
              maxWidth: "lg",
              mx: "auto",
              background: "rgba(239, 68, 68, 0.14)",
              border: "1px solid rgba(239, 68, 68, 0.55)",
              color: "#fecaca",
              borderRadius: "10px",
              px: 2,
              py: 1.25,
              fontWeight: 600,
              fontSize: "0.95rem",
              textAlign: "center",
            }}>
            Caution: Open-AI API needs to be coneected!!
          </Box>
        </Box>
        {/* Hero Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #3d8f94 100%)",
            position: "relative",
            overflow: "hidden",
            py: { xs: 8, md: 12 },
            minHeight: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-10%",
              right: "-5%",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
              animation: "pulse 4s ease-in-out infinite",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-5%",
              left: "-10%",
              width: "500px",
              height: "500px",
              background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
              animation: "pulse 5s ease-in-out infinite 0.5s",
            },
          }}>
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              sx={{ textAlign: "center" }}>
              {/* Accent Badge */}
              <Box
                sx={{
                  display: "inline-block",
                  px: 2,
                  py: 0.75,
                  borderRadius: "50px",
                  background: "rgba(255, 255, 255, 0.15)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                  animation: "slideInFromTop 0.8s ease-out",
                }}>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}>
                  🚀 AI-Powered Analysis
                </Typography>
              </Box>

              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2.25rem", sm: "3rem", md: "4rem", lg: "4.5rem" },
                  color: "#ffffff",
                  letterSpacing: "-1.5px",
                  lineHeight: 1.1,
                  textShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  animation: "slideInFromLeft 0.8s ease-out 0.1s both",
                  maxWidth: "900px",
                }}>
                Qualitative Data Analysis Made Effortless
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "1.125rem", md: "1.5rem" },
                  color: "rgba(255, 255, 255, 0.95)",
                  maxWidth: "600px",
                  lineHeight: 1.6,
                  animation: "slideInFromRight 0.8s ease-out 0.2s both",
                }}>
                Thematic Analysis with Intelligent Insights
              </Typography>

              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "rgba(255, 255, 255, 0.85)",
                  maxWidth: "700px",
                  lineHeight: 1.7,
                  mt: 1,
                  animation: "fadeIn 0.8s ease-out 0.3s both",
                }}>
                Transform your research with AI-powered analysis. Upload your data and unlock
                instant thematic insights, patterns, and actionable intelligence in seconds.
              </Typography>

              {/* CTA Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  mt: 3,
                  animation: "fadeIn 0.8s ease-out 0.4s both",
                  justifyContent: "center",
                }}>
                <Button
                  variant="contained"
                  onClick={() => router.push("/register")}
                  sx={{
                    background: "#ffffff",
                    color: "#5ce1e6",
                    fontWeight: 700,
                    fontSize: "1rem",
                    px: 4,
                    py: 1.5,
                    borderRadius: "50px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
                    },
                  }}>
                  Get Started Free
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#ffffff",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    px: 4,
                    py: 1.5,
                    borderRadius: "50px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "#ffffff",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      transform: "translateY(-2px)",
                    },
                  }}>
                  Learn More
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
          <Stack
            sx={{ width: "100%" }}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}>
            {/* Upload Card */}
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                background: "linear-gradient(135deg, #1e293b 0%, #2d3748 100%)",
                border: "2px solid #334155",
                borderRadius: "16px",
                p: { xs: 3, md: 4 },
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 20px 40px rgba(92, 225, 230, 0.25)",
                  borderColor: "#5ce1e6",
                  transform: "translateY(-2px)",
                },
              }}>
              <Stack
                sx={{ width: "100%" }}
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                  sx={{ width: "100%" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "#f1f5f9",
                      mb: 1,
                    }}>
                    Upload Your Data
                  </Typography>
                  <Typography
                    sx={{
                      color: "#cbd5e1",
                      fontSize: "0.95rem",
                    }}>
                    Drag and drop your files or click to browse
                  </Typography>
                </Stack>
                <FileUpload />
              </Stack>
            </Paper>

            {/* Features Section */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              sx={{
                width: "100%",
                mt: { xs: 4, md: 6 },
              }}>
              {[
                {
                  title: "Fast Analysis",
                  description: "Get instant thematic analysis results",
                  icon: "⚡",
                  color: "#5ce1e6",
                },
                {
                  title: "Accurate Results",
                  description: "AI-powered insights with high accuracy",
                  icon: "✓",
                  color: "#5ce1e6",
                },
                {
                  title: "Secure Data",
                  description: "Your data is encrypted and secure",
                  icon: "🔒",
                  color: "#5ce1e6",
                },
              ].map((feature, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    flex: 1,
                    p: 3,
                    borderRadius: "12px",
                    border: "1px solid #334155",
                    background: "#1e293b",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
                      borderColor: feature.color,
                      transform: "translateY(-4px)",
                    },
                  }}>
                  <Stack direction="column" spacing={1.5} alignItems="flex-start">
                    <Typography
                      sx={{
                        fontSize: "2rem",
                      }}>
                      {feature.icon}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#f1f5f9",
                        fontSize: "1.125rem",
                      }}>
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#cbd5e1",
                        fontSize: "0.875rem",
                      }}>
                      {feature.description}
                    </Typography>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Stack>
        </Container>
      </React.Fragment>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
  try {
    let isAuth = "";
    const cookies = getCookies({ req, res });
    if (!cookies.accessToken) {
      return { props: {} };
    }
    isAuth = cookies.accessToken;
    const user = await handleGetUserData(isAuth);
    if (!user) return { props: {} };
    await store.dispatch(
      setAuthState({
        isLogedUser: true,
        accessToken: cookies.accessToken,
        user: user.data,
      }),
    );
    if (cookies.report_auth_token) {
      const foundAndConnected = await connectToReport(isAuth, cookies.report_auth_token);
      if (!foundAndConnected) return { props: {} };
      return {
        props: {},
      };
    }
    return { props: {} };
  } catch (error) {
    return { props: {} };
  }
});
