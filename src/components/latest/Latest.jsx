import Context from '../../context/Context';
import LittleTitle from '../littleTitle/LittleTitle';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './latest.css';


// import icons 
import {BsArrowRightCircle} from 'react-icons/bs';
import {RiBookmarkLine} from 'react-icons/ri';

// import images
import userImg from '../../assets/images/hero/author.webp';

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
        <div className="latest-right"></div>
    </div>
  )
}

export default Latest