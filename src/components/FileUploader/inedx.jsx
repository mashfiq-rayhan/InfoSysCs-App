import { handleRequestError } from "@/api/auth";
import { uploadFileForProcessing } from "@/api/upload";
import { selectAuthState } from "@/store/authSlice";
import { checkAndFormateFiles } from "@/utils";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import AuthModal from "../Auth/AuthModal";
import BasicSelect from "../UI/BasicSelect";
import Loading from "../UI/Loading";
import NotifyAlert from "../UI/NotifyAlert";
import ReportCompletePromt from "./ReportCompletePromt";
import Typography from "@mui/material/Typography";
export default function FileUpload() {
  const authState = useSelector(selectAuthState);
  const [file, setFile] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showDownloadLink, setShowDownloadLink] = useState(false);
  const [type, setType] = useState("");
  const fileTypes = [
    {
      value: "pdf",
      name: "PDF",
    },
    {
      value: "docx",
      name: "DOCX",
    },
  ];
  const handleFileChange = (event) => {
    setFile(event.target.files);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!file || !file.length) {
        setHasError(true);
        setErrorMessage("Please select at least one file");
        return;
      }
      if (!type) {
        setHasError(true);
        setErrorMessage("Please select a file type");
        return;
      }
      if (!acceptTerms) {
        setHasError(true);
        setErrorMessage("Please Read and Accept the Terms and Conditions");
        return;
      }
      const formData = checkAndFormateFiles(file, type);
      setLoading(true);
      const response = await uploadFileForProcessing(formData, type);

      setLoading(false);
      if (!authState.isLogedUser) {
        setOpenModal(true);
      }
      setShowDownloadLink(true);
    } catch (error) {
      setLoading(false);
      if (error.fileError) {
        setHasError(true);
        setErrorMessage(error.message);
      } else if (error?.response?.data?.errors) {
        setHasError(true);
        setErrorMessage(handleRequestError(error.response.data));
      } else {
        setHasError(true);
        setErrorMessage("Something Went Wrong , Please Try Again");
      }
    }
  };

  const selectedFilesText = file?.length
    ? `${file.length} file${file.length > 1 ? "s" : ""} selected`
    : "No file selected";

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ width: "100%" }}>
      <Box
        sx={{
          mt: 4,
          color: "white",
          width: "100%",
          maxWidth: "980px",
          p: { xs: 2, md: 3 },
          borderRadius: "14px",
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.75) 0%, rgba(30, 41, 59, 0.75) 100%)",
          border: "1px solid rgba(92, 225, 230, 0.24)",
          boxShadow: "0 14px 30px rgba(0, 0, 0, 0.3)",
        }}>
        <form onSubmit={handleSubmit}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems={{ xs: "stretch", md: "center" }}
            spacing={{ xs: 2, md: 2 }}>
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="stretch"
              spacing={0.75}>
              <Button
                disabled={loading}
                variant="outlined"
                component="label"
                sx={{
                  px: 2,
                  py: 1.6,
                  width: { xs: "100%", md: "300px" },
                  height: "56px",
                  color: "#f8fafc",
                  border: "1px dashed rgba(92, 225, 230, 0.55)",
                  backgroundColor: "rgba(15, 23, 42, 0.65)",
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: "12px",
                  justifyContent: "flex-start",
                  "&:hover": {
                    border: "1px dashed #5ce1e6",
                    backgroundColor: "rgba(92, 225, 230, 0.12)",
                  },
                }}
                size="medium">
                Choose file(s)
                <input hidden type="file" multiple name="file" onChange={handleFileChange} />
              </Button>
              <Typography sx={{ color: "#cbd5e1", fontSize: "0.8rem", pl: 0.5 }}>
                {selectedFilesText}
              </Typography>
            </Stack>
            <BasicSelect
              items={fileTypes}
              type={type}
              setType={setType}
              sx={{ width: "100%", md: 220 }}
            />
            <Button
              disabled={loading}
              sx={{
                px: 3,
                width: { xs: "100%", md: "220px" },
                height: "56px",
                background: "linear-gradient(135deg, #5ce1e6 0%, #3d8f94 100%)",
                mb: { xs: 0, md: 2.2 },
                fontWeight: 700,
                borderRadius: "12px",
                letterSpacing: "0.2px",
                "&:hover": {
                  background: "linear-gradient(135deg, #7edde8 0%, #4ba6ac 100%)",
                },
              }}
              variant="contained"
              type="submit"
              size="medium">
              Upload File
            </Button>
          </Stack>
        </form>
        <FormGroup sx={{ mt: 2, px: { xs: 0.5, md: 1 } }}>
          <FormControlLabel
            sx={{ width: "100%", m: 0 }}
            control={
              <Checkbox
                color="primary"
                sx={{ color: "#cbd5e1", p: 0.5, pr: 1 }}
                checked={acceptTerms}
                onChange={() => setAcceptTerms((prev) => !prev)}
              />
            }
            label={
              <Typography sx={{ fontSize: "0.92rem", color: "#f1f5f9" }}>
                Acknowledgement of Terms and Conditions
              </Typography>
            }
          />
        </FormGroup>
        <Typography
          variant="body2"
          component="div"
          sx={{
            fontWeight: 400,
            fontSize: "0.9rem",
            color: "#cbd5e1",
            textDecoration: "none",
            px: { xs: 0.8, md: 1 },
            pb: 1,
            pt: 1,
            lineHeight: 1.5,
          }}>
          By using the Software, you acknowledge that you have read these{" "}
          <Typography
            variant="body1"
            component="span"
            sx={{
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "#5ce1e6",
              textDecoration: "underline",
            }}>
            <Link href="/terms-and-conditions">terms and conditions</Link>
          </Typography>
          , understand them, and agree to be bound by them.
        </Typography>
      </Box>
      {loading ? (
        <>
          {/* <CircularProgress /> */}
          <Loading />
        </>
      ) : (
        <>
          {showDownloadLink ? (
            <Box sx={{ p: 3 }}>
              <ReportCompletePromt />
            </Box>
          ) : (
            <></>
          )}
        </>
      )}
      <AuthModal setOpen={setOpenModal} open={openModal} />
      <NotifyAlert open={hasError} setOpen={setHasError} type="error" message={errorMessage} />
    </Stack>
  );
}
