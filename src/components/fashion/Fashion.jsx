import { Link } from 'react-router-dom';
import { useState } from 'react';
import LittleTitle from '../littleTitle/LittleTitle';
import './fashion.css';

// import images
import author1 from '../../assets/images/writer/writer2.webp';
import author2 from '../../assets/images/writer/writer1.webp';
import img1 from '../../assets/images/fashion/img1.webp';
import img2 from '../../assets/images/fashion/img2.webp';
import img3 from '../../assets/images/fashion/img3.webp';
import img4 from '../../assets/images/fashion/img4.webp';
import img5 from '../../assets/images/fashion/img5.webp';
import img6 from '../../assets/images/fashion/img6.webp';


// import icons
import {BsBookmark} from 'react-icons/bs';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

const Fashion = () => {

    const [fashionItems, setFashionItems] = useState(0);

    const nextData = () => {
        if(showItems[0].id < 7){
            setFashionItems( fashionItems + 3);
        }
    }
    const prevData = () => {
        if(showItems[0].id > 3){
            setFashionItems( fashionItems - 3);
        }
    }

    const showItems = fashionData.slice(fashionItems, (fashionItems + 3));

  return (
    <div className='container fashion'>
        <LittleTitle title={'Fashion'} dark={false} />
        <div className="fashion-main">
            {
                showItems.map(item=> (
                    <div key={item.id} className="fashion-item">
                        <div className="fashion-item-img">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <Link to={'/'} className="fashion-item-category">FASHION</Link>
                        <Link className="fashion-item-title">{item.title}</Link>
                        <div className="fashion-item-bottom">
                            <div className="fashion-auther-img">
                                <img src={item.authorImg} alt={item.author} />
                            </div>
                            <Link to={'/'} className="fashion-author">
                                <b>{item.author}</b>
                            </Link>
                            <span>{item.date}</span>
                            <div className="fashion-item-mark">
                                <BsBookmark/>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="fashion-control">
            <div  onClick={prevData}  className="fashion-control-btn fashion-control-btn-prev">
                <span><FaAngleLeft/></span> Previus
            </div>
            <div onClick={nextData} className="fashion-control-btn fashion-control-btn-next">
                Next<span><FaAngleRight/></span>
            </div>
        </div>
    </div>
  )
}

export default Fashion;


const fashionData = [
    {
        id: 1,
        author: "Jacob",
        title: "How Fashion Insiders Are Dressing for New York Fashion Wee ",
        date: 'Sep 9, 2021',
        img: img1,
        authorImg: author2
    },
    {
        id: 2,
        author: "Taylor Emma",
        title: "18 Top Fall Fashion Trends from New York Fashion",
        date: 'Sep 9, 2021',
        img: img2,
        authorImg: author1
    },
    {
        id: 3,
        author: "Taylor Emma",
        title: "How To Wear Brown In 15 Easy And Stylish Ways",
        date: 'Aug 29, 2021',
        img: img3,
        authorImg: author2
    },
    {
        id: 4,
        author: "Taylor Emma",
        title: "16 Top of Our Favorite Outdoor Clothing Brands",
        date: 'Aug 29, 2021',
        img: img4,
        authorImg: author2
    },
    {
        id: 5,
        author: "Taylor Emma",
        title: "Men’s Streetwear: Get Your Fashion for This Summer",
        date: 'Aug 29, 2021',
        img: img5,
        authorImg: author2
    },
    {
        id: 6,
        author: "Taylor Emma",
        title: "Hidden Ways To Save Money That You Might Be Missing",
        date: 'Aug 28, 2021',
        img: img6,
        authorImg: author2
    },
    {
        id: 7,
        author: "Taylor Emma",
        title: "16 Top of Our Favorite Outdoor Clothing Brands",
        date: 'Aug 29, 2021',
        img: img2,
        authorImg: author2
    },
    {
        id: 8,
        author: "Taylor Emma",
        title: "Men’s Streetwear: Get Your Fashion for This Summer",
        date: 'Aug 29, 2021',
        img: img1,
        authorImg: author2
    },
    {
        id: 9,
        author: "Taylor Emma",
        title: "Hidden Ways To Save Money That You Might Be Missing",
        date: 'Aug 28, 2021',
        img: img4,
        authorImg: author2
    },
]

