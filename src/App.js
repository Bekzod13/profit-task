import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";
import MainRoutes from "./routes/MainRoutes";


function App() {

  const [darkMode, setDarkMode] = useState(false);

  const body = document.body;

  darkMode ? (body.className = "dark"):(body.className = "");

  const contextValue = {
    darkMode, 
    setDarkMode
  }

  return (
    <Context.Provider value={contextValue}>
      <BrowserRouter>
        <MainRoutes/>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
