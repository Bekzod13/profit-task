import LittleTitle from '../littleTitle/LittleTitle';
import './mostRead.css';
import { Link } from 'react-router-dom';


// import images 
import userImg from '../../assets/images/hero/author.webp';
import hero from '../../assets/images/mostRead/hero.jpg';
import hero2 from '../../assets/images/mostRead/hero2.webp';
import hero3 from '../../assets/images/mostRead/hero3.webp';
import img1 from '../../assets/images/mostRead/img1.webp';
import img2 from '../../assets/images/mostRead/img2.webp';
import img3 from '../../assets/images/mostRead/img3.webp';


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
                <div className="most-read-right-box most-read-right-box-2">
                    <div className="most-read-right-img">
                        <img src={hero3} alt="" />
                    </div>
                    <div className="most-read-category-right most-read-category most-read-category-1">
                        BUSINESS
                    </div>
                    <Link to={'/'}  className="most-read-right-title">
                    Personal loan Interest Rates Rise, Still Much Lower than Same Time Last Year
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
        <div className="container most-read-bottom">
            {
                mostReadData.map(item=>(
                    <div className="most-read-bottom-item" key={item.id}>
                        <div className="most-read-bottom-item-img">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className={`most-read-bottom-item-details most-read-bottom-item-details-${item.id}`}>
                            <Link to={'/'} className="most-read-bottom-item-title">
                                {item.title}
                            </Link>
                            <span>
                                {item.date}
                            </span>
                            <div className="most-read-bottom-mark">
                                <RiBookmarkLine/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MostRead;


const mostReadData = [
    {
        id:1,
        title: "How Fashion Insiders Are Dressing for New York Fashion Week",
        img: img1,
        date: "Sep 9, 2021"
    },
    {
        id:2,
        title: "What Are Some Ways to Prevent the Spread of COVID-19?",
        img: img2,
        date: "Aug 11, 2021"
    },
    {
        id:3,
        title: "A gene-Based Therapy Partially Restored a Blind Man’s Vision",
        img: img3,
        date: "Aug 13, 2021"
    }
]








