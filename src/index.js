import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, injectGlobal } from "styled-components";

import Routes from "./routes";
import StackLayout from "./common/StackLayout";
import Theme, { globalStyles } from "./common/Theme";

injectGlobal`${globalStyles}`;

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <StackLayout>
      <Routes />
    </StackLayout>
  </ThemeProvider>,
  document.getElementById("root")
);
