import './navbar.css';
import {Link} from 'react-router-dom';
import { memo, useContext, useState } from 'react';
import Context from '../../context/Context';



// import images
import navTopImg from '../../assets/images/nav-top-img.webp';
import logo from '../../assets/images/logo.svg';
import logoDark from '../../assets/images/logo-dark.svg';


// import icons
import {FiChevronDown, FiSun} from 'react-icons/fi';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import {RiMoonFill} from 'react-icons/ri';
import {CiBellOn, CiSearch} from 'react-icons/ci';

const Navbar = () => {

    const {darkMode, setDarkMode} = useContext(Context);

    const [navFixed, setNavFixed] = useState(false)

    const scrollDown = () => {
        if(window.scrollY > 30) {
            setNavFixed(true);
        }else{
            setNavFixed(false);
        }
    }

    window.addEventListener("scroll", scrollDown);

  return (
    <div className='nav-wrapper'>
        <div className="nav-top-bg">
            <img src={navTopImg} alt="navTopImg" />
        </div>
        <header className={navFixed ? 'nav-fixed' : ""}>
            <nav className="container">
                <div className="nav-left">
                    <Link className='logo' to={'/'}>
                        {
                            darkMode ? 
                            <img src={logoDark} alt="FOXIZ" />:
                            <img src={logo} alt="FOXIZ" />
                        }
                    </Link>

            {/* nav link list */}
            {
                linkList.map(item=>(
                    <div className="nav-link-box" key={item.id}>
                        <Link className="nav-link" to={"/"}>
                            <span>{item.title}</span>
                            <span className="nav-angle">
                                <FiChevronDown/>
                            </span>
                        </Link>
                    </div>
                        ))
                    }
            {/* nav link list */}
                    <Link to={'/'} className="nav-link-box nav-dots" title='More'>
                        <BiDotsVerticalRounded/>
                    </Link>
                </div>
                <div className="nav-right">
                    <Link className='nav-login-btn' to={'/'}>
                        Sign In
                    </Link>
                    <div className="nav-icon" title='Nofication'>
                        <CiBellOn/>
                    </div>
                    <div className="nav-icon"  title='Search'>
                        <CiSearch/>
                    </div>
                    <div className="dark-btn" onClick={()=>setDarkMode(!darkMode)}>
                        <div className={darkMode? "dark-toggle down":"dark-toggle"}>
                            {
                                darkMode ? 
                                <RiMoonFill/>:
                                <FiSun/>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div className={navFixed ? "nav-free-top" : ""}></div>
    </div>
  )
}

export default memo(Navbar);




const linkList = [
    {
        id: 1,
        title: "home",
    },
    {
        id: 2,
        title: "politics",
    },
    {
        id: 3,
        title: "technology",
    },
    {
        id: 4,
        title: "posts",
    },
    {
        id: 5,
        title: "bookmarks",
    },
    {
        id: 6,
        title: "pages",
    }
]