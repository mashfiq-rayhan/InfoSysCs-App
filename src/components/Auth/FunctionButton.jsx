import React from "react";
import Button from "@mui/material/Button";

export default function FunctionButton({ handleClick, children, className }) {
  return (
    <Button
      className={className}
      sx={{
        width: "100%",
        height: "56px",
        mb: "12px",
        textTransform: "none",
        fontWeight: 600,
        background: "linear-gradient(135deg, rgba(92,225,230,0.95) 0%, rgba(61,143,148,0.95) 100%)",
        boxShadow: "0 14px 32px rgba(15,23,42,0.2)",
        "&:hover": {
          background: "linear-gradient(135deg, rgba(92,225,230,1) 0%, rgba(61,143,148,1) 100%)",
        },
      }}
      variant="contained"
      onClick={handleClick}>
      {children}
    </Button>
  );
}
