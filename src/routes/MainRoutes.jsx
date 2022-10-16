import {Routes, Route} from 'react-router-dom';

// import components
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';


// import pages
import Home from '../pages/Home';

const MainRoutes = () => {


  return (
    <>
        <Navbar/>
        <main>
            <Routes>
                <Route path='/' element={
                    <Home/>} />
            </Routes>
        </main>
        <Footer/>   
    </>
  )
}

export default MainRoutes