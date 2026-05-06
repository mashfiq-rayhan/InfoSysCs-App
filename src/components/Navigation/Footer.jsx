import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import styles from "@/styles/Footer.module.css";
import data from "./CompanyInfo.json";
import Image from "next/image";
import Link from "next/link";
import TestFooter from "./TestFooter";
export default function Footer() {
  const companyInfo = data;
  return (
    <>
      <Toolbar
        sx={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          color: "#ffffff",
          borderTop: "1px solid rgba(99, 102, 241, 0.2)",
          boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.1)",
        }}>
        <TestFooter />
      </Toolbar>
    </>
  );
}
