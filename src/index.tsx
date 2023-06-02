import { Box, ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import * as React from "react";
import Div100vh from "react-div-100vh";
import * as ReactDOM from "react-dom/client";
import Router from "./Router";
import { SettingsProvider } from "./contexts/SettingsContext";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ColorModeScript />

    <ChakraProvider theme={theme}>
      <SettingsProvider>
        <Div100vh>
          <Box
            height={"100%"}
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Router />
          </Box>
        </Div100vh>
      </SettingsProvider>
    </ChakraProvider>
  </React.StrictMode>
);
