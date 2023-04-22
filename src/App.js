import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./Header.js";
import { Home } from "./Home.js";

import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  let theme = createTheme({
    typography: {
      fontFamily: ["Didot", "Roboto"].join(","),
    },
    status: {
      danger: "#ebaaa7",
    },
    palette: {
      primary: {
        main: "#576b86",
        darker: "#053e85",
      },
      neutral: {
        main: "#576b86",
        contrastText: "#fff",
      },
    },
  });

  return (
    <Router>
      <>
        <Header />
        <div className="App">
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </ThemeProvider>
        </div>
      </>
    </Router>
  );
}

export default App;