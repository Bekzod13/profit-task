import { Link } from 'react-router-dom';
import LittleTitle from '../littleTitle/LittleTitle';
import './writer.css';


// import images
import img1 from '../../assets/images/writer/writer1.webp';
import img2 from '../../assets/images/writer/writer2.webp';
import banner from '../../assets/images/writer/banner.webp';

// import icons
import {BsPlusLg} from 'react-icons/bs';

const Writer = () => {
  return (
    <>
    <div className='container writer'>
        <div className="writer-title">
            <LittleTitle title={'Follow Writers'} dark={false}/>
        </div>
        <div className="writer-main">
            {
                writerData.map(item=>(
                    <div key={item.id} className="writer-item">
                        <div className="writer-left">
                            <div className="writer-name">
                                <h4>
                                    <Link to="/">
                                        {item.name}
                                    </Link>
                                </h4>
                                <span>/{" "} {item.countWork} Articles</span>
                            </div>
                            <p className="writer-text">{item.text}</p>
                            <Link to={'/'} className="writer-plus" title='Follow'>
                                <BsPlusLg/>
                            </Link>
                        </div>
                        <div className="writer-right">
                            <div className="writer-img">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="writer-position">{item.position}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    <Link to='/' className="container writer-ad-banner">
        <img src={banner} alt="Foxiz" />
    </Link>
    </>
  )
}

export default Writer;

const writerData = [
    {
        id: 1,
        name: "Taylor Emma",
        text: "A senior editor for The Mars that left the company to join the team of Foxiz as a news editor and content creator. An artist…",
        countWork: "106",
        img: img1,
        position: "Senior Editor"
    },
    {
        id: 2,
        name: "Jacob",
        text: "Inspiring the world through Personal Development and Entrepreneurship. Experimenter in life, productivity, and creativity. Work in Foxiz.",
        countWork: "7",
        img: img2,
        position: "Foxiz Contributor"
    }
]


