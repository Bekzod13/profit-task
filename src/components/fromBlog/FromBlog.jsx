import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import LittleTitle from '../littleTitle/LittleTitle';
import './fromBlog.css';

// import images
import author from '../../assets/images/writer/writer1.webp';
import noImg from '../../assets/images/noImg.jpg';

// import icons
import {BsBookmark} from 'react-icons/bs';


const FromBlog = () => {

    const [loadCount, setLoadCount] = useState(20);

    const {blogs} = useContext(Context);

    const loadMore = () => {
        setLoadCount(loadCount + 10);
    }

    const showBlogs = blogs.slice(0, loadCount);

    console.log(showBlogs);

  return (
    <div className='container from-blog'>
        <div className="from-blog-title">
            <LittleTitle title={"From The Blog"} dark={false} />
        </div>
        <div className="from-blog-main">
            {
                showBlogs.map((item, index)=>(
                    <div key={index} className="from-blog-item">
                        <div className="from-blog-left">
                            <img src={item.urlToImage || noImg} alt={item.title} />
                                {
                                    index % 3 === 0 &&
                                <div className="from-blog-category orange">
                                    BUSINESS
                                </div>
                                }
                                {
                                    index % 3 === 1 &&
                                <div className="from-blog-category blue">
                                    TRAVEL
                                </div>
                                }
                                {
                                    index % 3 === 2 &&
                                <div className="from-blog-category pink">
                                    ENTERTAIMENT
                                </div>
                                }
                            </div>
                        <div className="from-blog-right">
                            <Link to='/' className="from-blog-item-title">{item.title}</Link>
                            <div className="from-blog-bottom">
                                <div className="from-blog-author-img">
                                    <img src={author} alt={'Taylor Emma'} />
                                </div>
                                <Link className="from-blog-author">
                                    <b>
                                    Taylor Emma
                                    </b>
                                </Link>
                                <span>{item.publishedAt}</span>
                                <div className="from-blog-mark">
                                    <BsBookmark/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="from-blog-load">
            <div onClick={loadMore} className="from-blog-load-btn">Show More</div>
        </div>
    </div>
  )
}

export default FromBlog;