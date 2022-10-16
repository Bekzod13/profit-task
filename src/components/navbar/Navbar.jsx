import './navbar.css';
import {Link} from 'react-router-dom';
import { memo, useState } from 'react';



// import images
import navTopImg from '../../assets/images/nav-top-img.webp';
import logo from '../../assets/images/logo.svg';


// import icons
import {FiChevronDown} from 'react-icons/fi';
import {BiDotsVerticalRounded} from 'react-icons/bi';

const Navbar = () => {

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
                        <img src={logo} alt="FOXIZ" />
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