import LittleTitle from '../littleTitle/LittleTitle';
import './mostRead.css';
import { Link } from 'react-router-dom';


// import images 
import userImg from '../../assets/images/hero/author.webp';
import hero from '../../assets/images/mostRead/hero.jpg';
import hero2 from '../../assets/images/mostRead/hero2.webp';
import hero3 from '../../assets/images/mostRead/hero3.webp';


// import icons 
import {RiBookmarkLine} from 'react-icons/ri';

const MostRead = () => {
  return (
    <div className='most-read'>
        <div className="container">
            <LittleTitle title={"Most Read"} dark={true}/>
        </div>
        <div className="container most-read-main">
            <div className="most-read-hero">
                <img src={hero} alt="Britain’s Most Unusual" />
                <div className="most-read-hero-details">
                    <Link to='/' className="most-read-category most-read-category-1">BUSINESS</Link>
                    <Link to='/' className="most-read-title">Britain’s Most Unusual Homes for Sale This Year</Link>
                    <div className="most-read-hero-bottom">
                        <div className="most-read-hero-bottom-img">
                            <img src={userImg} alt="Taylor Emma" />
                        </div>
                        <Link to='/'><b>Taylor Emma</b> </Link>
                        <span>Sep 24, 2021</span>
                        <div className="most-read-hero-bottom-mark">
                            <RiBookmarkLine/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="most-read-right">
                <div className="most-read-right-box">
                    <div className="most-read-right-img">
                        <img src={hero2} alt="" />
                    </div>
                    <div className="most-read-category-right most-read-category most-read-category-2">
                        TRAVEL
                    </div>
                    <Link to={'/'} className="most-read-right-title">
                        9 Awesome Destinations for Solo Female Travelers
                    </Link>
                    <div className="most-read-hero-bottom">
                        <div className="most-read-hero-bottom-img">
                            <img src={userImg} alt="Taylor Emma" />
                        </div>
                        <Link to='/'><b>Taylor Emma</b> </Link>
                        <span>Sep 24, 2021</span>
                        <div className="most-read-hero-bottom-mark">
                            <RiBookmarkLine/>
                        </div>
                    </div>
                </div>
                <div className="most-read-right-box">
                    <div className="most-read-right-img">
                        <img src={hero3} alt="" />
                    </div>
                    <div className="most-read-category-right most-read-category most-read-category-1">
                        BUSINESS
                    </div>
                    <Link to={'/'}  className="most-read-right-title">
                        9 Awesome Destinations for Solo Female Travelers
                    </Link>
                    <div className="most-read-hero-bottom">
                        <div className="most-read-hero-bottom-img">
                            <img src={userImg} alt="Taylor Emma" />
                        </div>
                        <Link to='/'><b>Taylor Emma</b> </Link>
                        <span>Sep 24, 2021</span>
                        <div className="most-read-hero-bottom-mark">
                            <RiBookmarkLine/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container most-read-bottom"></div>
    </div>
  )
}

export default MostRead