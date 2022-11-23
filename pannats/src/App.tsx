import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/global";
import { defaultTheme } from "./style/themes/default";
import { Router } from "./Router";
import DefaultLayout from "./layouts/DefaultLayout/Index";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </ThemeProvider>
  )
}
