import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
// This is the chainId your dApp will work on.
// var browser = require("webextension-polyfill");
const activeChainId = 1313161555;
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
    <Router>
      <App />
    </Router>
    </ThirdwebProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
