import Root from "./pages/Root";
import "./App.css";

import Cartt from "./pages/cart/Cartt";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "/Cartt",
    element: <Cartt />,
  },
]);

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
