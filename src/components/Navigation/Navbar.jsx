import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import Profile from "./Profile";

const pages = [
  { name: "About", value: "/about" },
  { name: "Terms", value: "/terms-and-conditions" },
];
const settings = ["Dashboard", "Logout"];
const appName = "InfoSysCS";

function NavBar({ isLogedUser }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(135deg, #0f172a 0%, #111827 55%, #1e293b 100%)",
        boxShadow: "0 12px 28px rgba(0, 0, 0, 0.45)",
        borderBottom: "1px solid rgba(92, 225, 230, 0.22)",
        backdropFilter: "blur(10px)",
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Logo */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 2,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              p: 0.5,
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              },
            }}>
            <IconButton size="large" color="inherit">
              <Image
                style={{
                  borderRadius: "8px",
                }}
                src="/favicon.svg"
                alt="Picture of the Company"
                width={48}
                height={48}
              />
            </IconButton>
          </Box>

          {/* Desktop Logo Text */}
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="h2"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: "-0.5px",
                fontSize: "1.25rem",
                textDecoration: "none",
                color: "#ffffff",
                transition: "all 0.3s ease",
                "&:hover": {
                  opacity: 0.8,
                },
              }}>
              {appName}
            </Typography>
          </Link>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" color="inherit" onClick={handleOpenNavMenu}>
              <Image
                style={{
                  borderRadius: "8px",
                }}
                src="/favicon.svg"
                alt="Picture of the Company"
                width={32}
                height={32}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  borderRadius: "12px",
                  mt: 1,
                  background: "#1e293b",
                  border: "1px solid #334155",
                  boxShadow: "0 16px 30px rgba(0, 0, 0, 0.35)",
                },
              }}>
              {pages.map((page) => (
                <MenuItem
                  key={page.value}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  href={page.value}
                  sx={{
                    color: "#f1f5f9",
                    fontWeight: 600,
                    borderRadius: "8px",
                    mx: 0.5,
                    my: 0.25,
                    "&:hover": {
                      backgroundColor: "rgba(92, 225, 230, 0.12)",
                    },
                  }}>
                  {page.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo Text */}
          <Link href="/">
            <Typography
              variant="h6"
              noWrap
              component="span"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: "-0.5px",
                fontSize: "1rem",
                color: "#ffffff",
                textDecoration: "none",
                ml: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  opacity: 0.8,
                },
              }}>
              {appName}
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 0, mr: 3, display: { xs: "none", md: "flex" }, gap: 1 }}>
            {pages.map((page) => (
              <Link key={page.name} href={page.value}>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    px: 1.25,
                    transition: "all 0.3s ease",
                    position: "relative",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#5ce1e6",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}>
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Auth Button */}
          {isLogedUser ? (
            <Profile settings={settings} />
          ) : (
            <Button
              variant="contained"
              onClick={() => router.push("/login")}
              sx={{
                background: "#ffffff",
                color: "#124447",
                fontWeight: 700,
                fontSize: "0.875rem",
                px: 2.75,
                py: 1,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                borderRadius: "999px",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 24px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  background: "#f8fafc",
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.28)",
                  transform: "translateY(-2px)",
                },
              }}>
              Login
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
