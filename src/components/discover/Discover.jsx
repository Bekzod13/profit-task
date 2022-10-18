import { useContext } from 'react';
import Context from '../../context/Context';
import { Link } from 'react-router-dom';
import LittleTitle from '../littleTitle/LittleTitle';
import './discover.css';


// import images
import img1 from '../../assets/images/discover/1.jpg';
import img2 from '../../assets/images/discover/2.webp';
import img3 from '../../assets/images/discover/3.webp';
import img4 from '../../assets/images/discover/4.webp';

// import icons
import {BsPlusLg} from 'react-icons/bs';

const Discover = () => {

    const {darkMode} = useContext(Context);

  return (
    <div className={darkMode ? "discover darkDis" : "discover"}>

    <div className='container'>
        <LittleTitle title={'Discover Categories'} dark={false}/>
        <div className="discover-main">
            {
                discoverData.map(item=>(
                    <div key={item.id} className={darkMode ? "discover-item darkDis" : "discover-item"}>
                        <div className="discover-item-img">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <Link to='/' className="discover-item-title">
                            {item.title}
                        </Link>
                        <div className="discover-subcount">
                            {item.count} Articles
                        </div>
                        <div className="discover-plus" title='Follow'>
                            <BsPlusLg/>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="discover-footer">
            Discover More of What Matters to You:
            <Link to='/' >
                Politicals
            </Link>
            <Link to='/' >
                Science
            </Link>
            <Link to='/' >
                Life Style
            </Link>
            <Link to='/' >
                Videos
            </Link> 
        </div>
    </div>
    </div>
  )
}

export default Discover;

const discoverData = [
    {
        id:1,
        title: "Business",
        img: img1,
        count: 12
    },
    {
        id:2,
        title: "Entertainment",
        img: img2,
        count: 13
    },
    {
        id:3,
        title: "Technology",
        img: img3,
        count: 17
    },
    {
        id:4,
        title: "Travel",
        img: img4,
        count: 14
    },
]