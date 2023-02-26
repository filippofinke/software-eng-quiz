import {
  Box,
  ChakraProvider,
  ColorModeScript,
  Container,
  theme,
} from "@chakra-ui/react";
import * as React from "react";
import Div100vh from "react-div-100vh";
import * as ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./Router";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ColorModeScript />

    <ChakraProvider theme={theme}>
      <Div100vh>
        <Box
          height={"100%"}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Header />
          <Container flex={1} p={2}>
            <Router />
          </Container>
          <Footer />
        </Box>
      </Div100vh>
    </ChakraProvider>
  </React.StrictMode>
);
