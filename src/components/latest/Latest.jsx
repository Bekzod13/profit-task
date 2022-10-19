import Context from '../../context/Context';
import LittleTitle from '../littleTitle/LittleTitle';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './latest.css';


// import icons 
import {BsArrowRightCircle} from 'react-icons/bs';
import {RiBookmarkLine} from 'react-icons/ri';
import {CiBellOn} from 'react-icons/ci';
import {MdShowChart} from 'react-icons/md';

// import images
import userImg from '../../assets/images/hero/author.webp';
import img1 from '../../assets/images/latest/img1.webp';
import img2 from '../../assets/images/latest/img2.webp';
import img3 from '../../assets/images/latest/img3.webp';

const Latest = () => {

    const {blogs} = useContext(Context);

    const [blogCount, setBlogCount] = useState(16);

    const loadMore = () => {
        setBlogCount(blogCount + 10);
    }
    const blogsLoad = blogs.slice(0, blogCount);

    console.log(blogsLoad);

  return (
    <div className='container latest'>
        <div className="latest-left">
            <LittleTitle title={"Latest News"} dark={false} />
            <Link to='/' className="latest-left-all">
                View All 
                <span><BsArrowRightCircle/></span>
            </Link>
            <div className="latest-left-main">
                {
                    blogsLoad.map((item, index)=>(
                        <div className="latest-item" key={item.url}>
                            <div className="latest-item-left">
                                <Link to={'/'}>{item.title}</Link>
                                <p>{item.description}</p>
                                <div className="latest-item-bottom">
                                    <div className="latest-item-user-img">
                                        <img src={userImg} alt={item.author} />
                                    </div>
                                    <Link to='/' className="latest-item-author">
                                        <b>
                                            {item.author}
                                        </b>
                                    </Link>
                                    <span>{item.publishedAt}</span>
                                    <div className="latest-item-mark">
                                        <RiBookmarkLine/>
                                    </div>
                                </div>
                            </div>
                            <div className="latest-item-right">
                                {
                                    index % 3 === 0 &&
                                    <div className="latest-item-category red">
                                            FASHION
                                    </div>
                                }
                                {
                                    index % 3 === 1 &&
                                    <div className="latest-item-category blue">
                                            TECHNOLOGY
                                    </div>
                                }
                                {
                                    index % 3 === 2 &&
                                    <div className="latest-item-category green">
                                            BUSINESS
                                    </div>
                                }
                                <img src={item.urlToImage} alt={item.title} />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="latest-left-load-btn" onClick={loadMore}>Show More</div>
        </div>
        <div className="latest-right">
            <div className="latest-banner">
                <h1 className="latest-banner-header">Create an Amazing <br /> Newspaper</h1>
                <p className="latest-banner-text">
                Discover thousands of options, easy to <br /> customize layouts, one-click to import demo <br /> and much more.
                </p>
                <Link to={'/'} className="latest-banner-link">Learn More</Link>
            </div>
            <div className="latest-right-header-small">
                <LittleTitle title={"Sponsored Content"} dark={false} />
            </div>
            <div className="latest-right-news">
                {
                    latestData.map(item=>(
                        <div key={item.id} className="latest-right-new">
                            <div className="latest-right-item-left">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="latest-right-item-right">
                                <Link to={'/'} className="latest-right-item-title">
                                    {item.title}
                                </Link>
                                <div className='latest-right-item-bottom'>
                                    <span><CiBellOn/></span>
                                    <small>Sponsored by</small>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="latest-right-header-small">
                <LittleTitle title={"Global Coronavirus Cases"} dark={false} />
            </div>
            <div className="latest-covid">
                <div className="latest-covid-item">
                    <div>
                        <span><MdShowChart/></span>
                        Confirmed 
                    </div>
                    <div className="latest-covid-donfirm">621.02M</div>
                </div>
                <div className="latest-covid-item">
                    <div>
                        <span><MdShowChart/></span>
                        Death
                    </div>
                    <div className="latest-covid-donfirm red">6.56M</div>
                </div>
                <div className='latest-right-bottom-covid'>
                    <small>More Information:</small>
                    <Link to={'/'}> Covid-19 Statistics</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Latest;


const latestData = [
    {
        id:1,
        title: 'Sony WF-10XM4: Headphones Are Our Absolute Favorite',
        img: img1
    },
    {
        id:2,
        title: 'The Top Secret Sights You Must See in Europe',
        img: img2
    },
    {
        id:3,
        title: '10+ Pics That Prove Jennifer Is a Timeless Beauty',
        img: img3
    },
]



