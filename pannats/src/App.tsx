import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/global";
import { defaultTheme } from "./style/themes/default";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
    <GlobalStyle />
        
    </ThemeProvider>
  )
}
