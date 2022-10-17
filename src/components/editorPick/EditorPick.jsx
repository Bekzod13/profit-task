import './editorPick.css';
import { Link } from 'react-router-dom';

// import icons
import {BsFillStarFill} from 'react-icons/bs';
import {RiBookmarkLine} from 'react-icons/ri';

// import images
import userImg from '../../assets/images/hero/author.webp';

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
                            <b>Taylor Emma</b>
                            <span>Aug 18, 2021</span>
                            <div className="editor-pick-mark">
                                <RiBookmarkLine/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="editor-pick-right">

            </div>
        </div>
    </div>
  )
}

export default EditorPick