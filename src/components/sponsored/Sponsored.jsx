import { memo, useContext } from 'react';
import {Link} from 'react-router-dom';
import './sponsored.css';
import Context from '../../context/Context';

// import images
import userImg from '../../assets/images/sponsored/sponsor-user.webp';
import sponsor1 from '../../assets/images/sponsored/sponsor-img-1.webp';
import sponsor2 from '../../assets/images/sponsored/sponsor-img-2.webp';
import ad1 from '../../assets/images/sponsored/sponsor-ad-1.webp';
import ad2 from '../../assets/images/sponsored/sponsor-ad-2.webp';

// import icons
import { RiBookmarkLine } from 'react-icons/ri';



const Sponsored = () => {

    const {darkMode} = useContext(Context)

  return (
    <div className='container'>
        <div className="sponsored-wrapper">
            <div className="sponsored-box sponsored-box-1">
                <div className="sponsor-left">
                    <div className="sponsor-category">TECHNOLOGY</div>
                    <Link to="/" className="sponsor-title">Apple Watch Series 9 Reportedly Has Flat Sides and Bigger Screens</Link>
                    <div className="sponsor-user">
                        <div className="sponsor-user-img">
                            <img src={userImg} alt="userImg" />
                        </div>
                        <div className="sponsor-user-title">Jacob</div>
                        <p>Sep 19, 2021</p>
                        <div className="sponsor-save-item">
                            <RiBookmarkLine/>
                        </div>
                    </div>
                </div>
                <div className="sponsor-right">
                    <img src={sponsor1} alt="sponsor1" />
                </div>
            </div>
            <div className="sponsored-box sponsored-box-2">
                <div className="sponsor-left">
                    <div className="sponsor-category">TRAVEL</div>
                    <Link to="/" className="sponsor-title">REVIEW: San Diego City Beat’s a Night at The Besties</Link>
                    <div className="sponsor-bottom">
                        <div className="sponsor-colors">
                            <span className="sponsor-color1"></span>
                            <span className="sponsor-color2"></span>
                            <span className="sponsor-color3"></span>
                            <span className="sponsor-color4"></span>
                            <span className="sponsor-color5"></span>
                        </div>
                        <b>9.6</b>
                        <span>out of 10</span>
                        <div className="sponsor-recomend">Good Place</div>
                        <div className="sponsor-save-item">
                            <RiBookmarkLine/>
                        </div>
                    </div>
                </div>
                <div className="sponsor-right">
                    <img src={sponsor2} alt="sponsor2" />
                </div>
            </div>
        </div>
        <div className="sponsor-ad-title">
            - Sponsored -
        </div>
        <div className="sponsor-ad-main">
            {
                darkMode ? 
                <img src={ad2} alt="ad" />:
                <img src={ad1} alt="ad" />
            }
        </div>
    </div>
  )
}

export default memo(Sponsored);

