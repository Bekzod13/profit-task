import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";
import MainRoutes from "./routes/MainRoutes";
import Api from './api/Api';
import Spinner from "./components/spinner/Spinner";


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
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

  setTimeout(() => {
    setLoading(true);
  }, 500);



  return (
    <Context.Provider value={contextValue}>
      <BrowserRouter>
      {
        loading ? 
        <MainRoutes/>:
        <Spinner/>
      }
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
