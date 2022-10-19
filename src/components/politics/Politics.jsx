import LittleTitle from '../littleTitle/LittleTitle';
import './politics.css';

// import images
import img1 from '../../assets/images/politics/img1.webp';
import img2 from '../../assets/images/politics/img2.jpg';
import img3 from '../../assets/images/politics/img3.webp';
import img4 from '../../assets/images/politics/img4.jpg';
import img5 from '../../assets/images/politics/img5.webp';
import userImg from '../../assets/images/hero/author.webp';
import { Link } from 'react-router-dom';


// import icons
import {RiBookmarkLine} from 'react-icons/ri';

const Politics = () => {
  return (
    <>
    <div className="container politic-title">
        <LittleTitle title={"Politics"} dark={false} />
    </div>
    <div className='container politics'>
        {
            politicsData.map((item, index)=>(
                <div className={`politic-item politic-item-${index}`} key={item.id}>
                    <div className="politic-img">
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div className="politic-category">POLITICS</div>
                    <Link to="/" className="politic-item-title">{item.title}</Link>
                    {
                        item.text !== '' && 
                            <p className="politic-text">{item.text}</p>
                    }
                    <div className="politic-item-bottom">
                        {
                            index === 2 &&
                            <div className="politic-item-user-img">
                                    <img src={userImg} alt={item.user} /> 
                            </div>
                        }
                        <div className="politic-item-user">
                            <b>{item.user}</b>
                        </div>
                        <span>{item.date}</span>
                        <div className="politic-item-mark">
                            <RiBookmarkLine/>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Politics;

const politicsData = [
    {
        id: 1,
        title: 'What Is Women’s Equality Day and Why Is It Celebrated?',
        user: 'Taylor Emma',
        date: 'Aug 31, 2021',
        img: img1,
        text: ""
    },
    {
        id: 2,
        title: 'New Census Data Will Shake Up Alabama Politics',
        user: 'Taylor Emma',
        date: 'Aug 30, 2021',
        img: img2,
        text: ""
    },
    {
        id: 3,
        title: 'Bad Credit Shouldn’t Affect Health Insurance, Experts Say',
        user: 'Taylor Emma',
        date: 'Sep 19, 2021',
        img: img3,
        text: "Good web design has visual weight, is optimized for various devices, and has content that is prioritized for the medium. The most important elements of a web page should have…"
    },
    {
        id: 4,
        title: 'The States Braces for Protests Over New COVID Rules',
        user: 'Taylor Emma',
        date: 'Aug 29, 2021',
        img: img4,
        text: ""
    },
    {
        id: 5,
        title: 'One Day Noticed, Politicians Wary Resignation Timetable',
        user: 'Taylor Emma',
        date: 'Aug 28, 2021',
        img: img5,
        text: ""
    }
]


