import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles, theme } from "./styles";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <div>hello</div>
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
