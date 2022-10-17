import { useState } from 'react';
import {Link} from 'react-router-dom';
import './hero.css';


// import icons 
import {RiFireLine, RiBookmarkLine} from 'react-icons/ri';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';

// import images
import authorImg from '../../assets/images/hero/author.webp'

const Hero = () => {

    const [newsId, setNewsId] = useState(0);

    const nextNews = () => {
        if (newsId < (heroData.length - 1)) {
            setNewsId(newsId + 1);
        }else{
            setNewsId(0);
        }
    }

  return (
    <div className='container'>
        <div className="hero-navbar">
            <div className="hero-nav-mobile">
                {
                    heroNavLinkList.map(item=>(
                        <Link to="/" className="hero-link" key={item.id}>
                            {item.title}
                        </Link>
                    ))
                }
            </div>
            <div className="hero-nav-left">
                <div className="hero-hot-news">
                    <div className="hot-new-icon">
                        <RiFireLine/>
                    </div>
                    <div className="hot-new-text">Hot News</div>
                </div>
                <div className="hero-new-title">
                    {
                        heroData[newsId].title
                    }
                </div>
            </div>
            <div className="hero-nav-right">
                <div className="next-news-btn" onClick={nextNews}>
                    <HiOutlineArrowNarrowRight/>
                </div>
                <p>Quick Links</p>
                <Link to="/" className="hero-nav-link">Technology</Link>
                <Link to="/" className="hero-nav-link">Business</Link>
                <Link to="/" className="hero-nav-link">Science</Link>
                <Link to="/" className="hero-nav-link">Covid-19 Statistics</Link>
            </div>
        </div>
        <div className="hero-nav-mobile-2">
            <div className="hero-new-title hero-new-title-2">
                <div className="hot-new-icon">
                    <RiFireLine/>
                </div>
                {
                    heroData[newsId].title
                }
            </div>
            <div className="next-news-btn-2" onClick={nextNews}>
                <HiOutlineArrowNarrowRight/>
            </div>
        </div>
        <div className="hero-main">
            {
                heroData.map(item=>(
                    <div className={`hero-box hero-box-${item.id}`} 
                        key={item.id}>
                            <div className="hero-bg-gradient"></div>
                            <Link to="/" className="hero-item-category">{item.category}</Link>
                            <Link to="/" className='hero-item-title'>{item.title}</Link> 
                            {
                                item.id === 1 && <p>{item.text}</p>
                            }
                        <div className="hero-item-bottom">
                            <div className="hero-bottom-left">
                                <div className="hero-item-author-img">
                                    <img src={authorImg} alt={item.author} />
                                </div>
                                <div className="hero-item-author">
                                    <b>
                                        {item.author}
                                    </b>
                                </div>
                                <p>{item.date}</p>
                            </div>
                            <div title='Save it' className="hero-bottom-right">
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

export default Hero;


const heroData = [
    {
        id: 1,
        title: "How My Phone’s Most Annoying Feature Saved My Life",
        category: "TECHNOLOGY",
        text: "Modern technology has become a total phenomenon for civilization, the defining force of a new social order in which efficiency is no longer an option but a necessity imposed on all human activity.",
        author: "Taylor Emma",
        date: "Oct 1, 2021",
    },
    {
        id: 2,
        title: "The impact of COVID-19 on The Airport Business",
        category: "BUSINESS",
        text: "Modern technology has become a total phenomenon for civilization, the defining force of a new social order in which efficiency is no longer an option but a necessity imposed on all human activity.",
        author: "Taylor Emma",
        date: "Oct 1, 2021",
    },
    {
        id: 3,
        title: "Bad Credit Shouldn’t Affect Health Insurance, Experts Say",
        category: "POLITICS",
        text: "Modern technology has become a total phenomenon for civilization, the defining force of a new social order in which efficiency is no longer an option but a necessity imposed on all human activity.",
        author: "Taylor Emma",
        date: "Oct 1, 2021",
    },
    {
        id: 4,
        title: "Kuo’s Favorite Levi’s Denim Shorts Are 40% Off on Amazon",
        category: "ENTERTAINMENT",
        text: "Music expresses feeling and thought, without language. It was below and before speech, and it is above and beyond all words.",        banner: "",
        author: "Taylor Emma",
        date: "Oct 1, 2021",
    },
]

const heroNavLinkList = [
    {
        id:1,
        title: "Business"
    },
    {
        id:2,
        title: "Politics"
    },
    {
        id:3,
        title: "Travel"
    },
    {
        id:4,
        title: "Entertainment"
    },
    {
        id:5,
        title: "Science"
    },
    {
        id:6,
        title: "Technology"
    },
    {
        id:7,
        title: "Fashion"
    },
]





