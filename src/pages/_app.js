import "@/styles/globals.css";
import Layout from "@/components/Navigation";
import Cookies from "universal-cookie";
import { wrapper } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";

function App({ Component, pageProps }) {
  const store = useStore();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PersistGate
        persistor={store.__persistor}
        loading={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
            }}>
            <CircularProgress />
          </div>
        }>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
