import { createTheme } from "@mui/material/styles";

const primaryColor = "#5ce1e6";
const primaryDark = "#3d8f94";
const primaryLight = "#7edde8";
const secondaryColor = "#6366f1";
const accentColor = "#f59e0b";
const successColor = "#10b981";
const warningColor = "#f59e0b";
const errorColor = "#ef4444";
const infoColor = "#3b82f6";

const textPrimary = "#f1f5f9";
const textSecondary = "#cbd5e1";
const textTertiary = "#94a3b8";
const bgLight = "#1e293b";
const bgCard = "#2d3748";
const borderColor = "#334155";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      light: primaryLight,
      dark: primaryDark,
      contrastText: "#ffffff",
    },
    secondary: {
      main: secondaryColor,
      light: "#818cf8",
      dark: "#4f46e5",
      contrastText: "#ffffff",
    },
    error: {
      main: errorColor,
      light: "#f87171",
      dark: "#dc2626",
    },
    warning: {
      main: warningColor,
      light: "#fbbf24",
      dark: "#d97706",
    },
    info: {
      main: infoColor,
      light: "#60a5fa",
      dark: "#1d4ed8",
    },
    success: {
      main: successColor,
      light: "#34d399",
      dark: "#059669",
    },
    background: {
      default: "#0f172a",
      paper: "#1e293b",
    },
    mode: "dark",
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      disabled: textTertiary,
    },
    divider: borderColor,
  },
  typography: {
    fontFamily: '"Sora", "IBM Plex Sans", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "-0.5px",
      lineHeight: 1.2,
      color: textPrimary,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "-0.5px",
      lineHeight: 1.2,
      color: textPrimary,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 700,
      letterSpacing: "-0.25px",
      lineHeight: 1.3,
      color: textPrimary,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: 600,
      letterSpacing: "-0.25px",
      lineHeight: 1.4,
      color: textPrimary,
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: 600,
      letterSpacing: "0px",
      lineHeight: 1.4,
      color: textPrimary,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      letterSpacing: "0px",
      lineHeight: 1.5,
      color: textPrimary,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
      color: textSecondary,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.6,
      color: textSecondary,
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      fontSize: "0.875rem",
      letterSpacing: "0px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 20px",
          transition: "all 0.3s ease",
          fontWeight: 600,
          textTransform: "none",
          fontSize: "0.875rem",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryDark} 100%)`,
          color: "#ffffff",
          "&:hover": {
            background: `linear-gradient(135deg, ${primaryDark} 0%, #3f3aca 100%)`,
            boxShadow: "0 12px 24px rgba(99, 102, 241, 0.4)",
          },
        },
        outlined: {
          borderColor: borderColor,
          color: primaryColor,
          "&:hover": {
            borderColor: primaryColor,
            backgroundColor: `${primaryColor}15`,
          },
        },
        text: {
          color: primaryColor,
          "&:hover": {
            backgroundColor: `${primaryColor}15`,
          },
        },
        sizeLarge: {
          padding: "12px 28px",
          fontSize: "1rem",
        },
        sizeSmall: {
          padding: "8px 16px",
          fontSize: "0.75rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          border: `1px solid ${borderColor}`,
          backgroundColor: bgCard,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.5)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          border: `1px solid ${borderColor}`,
          backgroundColor: bgCard,
        },
        elevation0: {
          boxShadow: "none",
        },
        elevation1: {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        },
        elevation2: {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryDark} 100%)`,
          boxShadow: "0 4px 12px rgba(99, 102, 241, 0.15)",
          borderBottom: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            transition: "all 0.3s ease",
            backgroundColor: "#0f172a",
            border: `1px solid ${borderColor}`,
            color: textPrimary,
            "&:hover": {
              borderColor: primaryLight,
              backgroundColor: "#1a2438",
            },
            "&.Mui-focused": {
              boxShadow: `0 0 0 3px ${primaryColor}20`,
              borderColor: primaryColor,
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: borderColor,
          },
          "& .MuiInputBase-input": {
            color: textPrimary,
          },
          "& .MuiInputBase-input::placeholder": {
            color: textTertiary,
            opacity: 1,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          fontWeight: 500,
          fontSize: "0.875rem",
        },
        filled: {
          backgroundColor: `${primaryColor}20`,
          color: primaryColor,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "12px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
          backgroundColor: bgCard,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "8px",
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.4)",
          border: `1px solid ${borderColor}`,
          backgroundColor: bgCard,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#0f172a",
          "& .MuiTableCell-head": {
            color: textPrimary,
            fontWeight: 700,
            fontSize: "0.875rem",
            borderColor: borderColor,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: borderColor,
          padding: "12px 16px",
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
