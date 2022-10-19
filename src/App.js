import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";
import MainRoutes from "./routes/MainRoutes";
import Api from './api/Api';


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const body = document.body;

  darkMode ? (body.className = "dark"):(body.className = "");


  useEffect(() => {

    async function fetchData() {
      const response = await Api.get("").then(res=>res.data);
      setBlogs(response.articles)
    }
    fetchData();

  }, []);

  const contextValue = {
    darkMode, 
    setDarkMode,
    blogs, 
    setBlogs
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
