import './editorPick.css';
import { Link } from 'react-router-dom';

// import icons
import {BsFillStarFill} from 'react-icons/bs';
import {RiBookmarkLine} from 'react-icons/ri';

// import images
import userImg from '../../assets/images/hero/author.webp';
import editorImg1 from '../../assets/images/editorPick/img1.webp';
import editorImg2 from '../../assets/images/editorPick/img2.webp';
import editorImg3 from '../../assets/images/editorPick/img3.webp';

const EditorPick = () => {
  return (
    <div className='container'>
        <div className="editor-pick-header">
            <span>
                {"/ "}
            </span> 
            Editor's Pick
            <span>
                {" /"}
            </span> 
        </div>
        <div className="editor-pick-main">
            <div className="editor-pick-left">
                <div className="editor-pick-hero">
                    <div className="editor-pick-hero-left">
                        <Link to="/" className="editor-pick-hero-title">Corsair HS80 RGB Wireless Gaming Headset Review</Link>
                        <div className="editor-pick-hero-rating">
                            <span><BsFillStarFill/></span>
                            <span><BsFillStarFill/></span>
                            <span><BsFillStarFill/></span>
                            <span><BsFillStarFill/></span>
                            <span><BsFillStarFill/></span>
                            <b>4.8</b>
                            <span className="editor-pick-hero-middle">out of 5</span>
                            <b>Good</b>
                        </div>
                        <p>As for quality, the HS80's provided clear-cut sound with adequate bass and…</p>
                        <div className="editor-pick-hero-bottom">
                            <div className="editor-pick-hero-user-img">
                                <img src={userImg} alt="user" />
                            </div>
                            <b>
                                <Link to="/">
                                    Taylor Emma
                                </Link>
                            </b>
                            <span>Aug 18, 2021</span>
                            <div className="editor-pick-mark">
                                <RiBookmarkLine/>
                            </div>
                        </div>
                    </div>
                    <div className="editor-pick-hero-right">
                        <div className="editor-pick-category">TECHNOLOGY</div>
                    </div>
                </div>
                <div className="editor-pick-items">
                    {
                        editorData.map(item=>(
                            <div className="editor-pick-item" key={item.id}>
                                <Link to={'/'} className="editor-pick-item-img">
                                    <img src={item.img} alt={item.title} />
                                </Link>
                                <Link to={'/'} className={`editor-pick-item-category editor-pick-item-category-${item.id}`}>
                                    {item.category}
                                </Link>
                                <Link to={'/'} className="editor-pick-item-title">
                                    {item.title}
                                </Link>
                                <div className="editor-pick-item-bottom">
                                    <span>{item.date}</span>
                                    <span className="editor-pick-item-mark">
                                        <RiBookmarkLine/>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="editor-pick-right">
            </div>
        </div>
    </div>
  )
}

export default EditorPick;

const editorData = [
    {
        id: 1,
        category: "TECHNOLOGY",
        title: "Self-Driving Cars: Everything You Need to Know",
        img: editorImg1,
        date: "Aug 7, 2021",
    },
    {
        id: 2,
        category: "SCIENCE",
        title: "Girls in Ocean Science Conference a First at Maritime Museum",
        img: editorImg2,
        date: "Aug 6, 2021",
    },
    {
        id: 3,
        category: "TECHNOLOGY",
        title: "Google Must Allow Developers to Use Other Payment Systems",
        img: editorImg3,
        date: "Aug 6, 2021",
    }
]













