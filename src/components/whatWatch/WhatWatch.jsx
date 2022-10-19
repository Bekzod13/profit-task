import { Link } from 'react-router-dom';
import LittleTitle from '../littleTitle/LittleTitle';
import './whatWatch.css';

// import icons
import {BsArrowRightCircle} from 'react-icons/bs';
import {RiBookmarkLine} from 'react-icons/ri';

// import images
import userImg from '../../assets/images/hero/author.webp';
import img1 from '../../assets/images/what-watch/img1.webp';
import img2 from '../../assets/images/what-watch/img2.jpg';
import img3 from '../../assets/images/what-watch/img3.webp';
import img4 from '../../assets/images/what-watch/img4.webp';

const WhatWatch = () => {
  return (
    <div className='what-watch'>
        <div className="container what-watch-header">
            <LittleTitle title={'What to Watch'} dark={true} />
            <Link to='/' className="what-watch-all">
                View All 
                <span><BsArrowRightCircle/></span>
            </Link>
        </div>
        <div className="container what-watch-main">
            <div className="what-watch-hero">
                <Link to={'/'} className="what-watch-hero-category">TRAVEL</Link>
                <Link to={'/'} className="what-watch-title">10 Places You Can’t Miss If It’s Your First Time in European</Link>
                <p className="what-watch-text">And then there is the most dangerous risk of all, the risk of spending your life not doing what you want on the bet you can buy yourself the freedom to do it later.</p>
                <div className="what-watch-hero-bottom">
                    <div className="what-watch-hero-user">
                        <img src={userImg} alt="Emma Taylor" />
                    </div>
                    <Link to={'/'} className="what-watch-hero-user-name">Emma Taylor</Link>
                    <span>Sep 2, 2021</span>
                    <div className="what-watch-mark">
                        <RiBookmarkLine/>
                    </div>
                </div>
            </div>
            <div className="what-watch-right">
                {
                    whatWatchData.map(item=>(
                        <div key={item.id} className="what-watch-item">
                            <div className="what-watch-item-left">
                                <Link to={'/'}>{item.title}</Link>
                                <div className='what-watch-item-bottom'>
                                    <span>{item.date}</span>
                                    <b><RiBookmarkLine/></b>
                                </div>
                            </div>
                            <div className="what-watch-item-right">
                                <img src={item.img} alt={item.title} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default WhatWatch;


const whatWatchData = [
    {
        id:1,
        title:"Explained: What are Smart Glasses and How Do It Work?",
        date: "Aug 31, 2021",
        img: img1
    },
    {
        id:2,
        title:"8 Mistakes That Will RUIN Your Weekend Trips Plan",
        date: "Aug 30, 2021",
        img: img2
    },
    {
        id:3,
        title:"16 Top of Our Favorite Outdoor Clothing Brands",
        date: "Aug 29, 2021",
        img: img3
    },
    {
        id:4,
        title:"Garmin Venu Review: Solid Fitness Tracker with Smartwatch Finesse",
        date: "Aug 28, 2021",
        img: img4
    }
]