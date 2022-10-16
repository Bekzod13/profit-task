import './footer.css';
import {Link} from 'react-router-dom';
import {memo, useState} from 'react';

// import images
import footLogo from '../../assets/images/footer-s-logo.webp'

// import icons
import {TfiAngleDoubleUp} from 'react-icons/tfi';
import { FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const [topBtn, setTopBtn] = useState(false);

    const toTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    };

    const createToTopBtn = () => {
      if(window.screenY > 600) {
        setTopBtn(true);
      }else{
        setTopBtn(false);
      }
    }

    window.addEventListener("scroll", createToTopBtn);

    return (
        <> 
        <div className='footer' > 
          <footer className="container">
            <div className="foot-box foot-box-1">
                <div className="foot-slash">{"//"}</div>
                <p>
                    <span>W</span>e influence 20 million users and is the number one business and
                    technology news network on the planet</p>
            </div>
            <div className="foot-box foot-box-2">
                <h1>Quick Link</h1>
                <Link to="/" className="foot-link">MY BOOKMARK</Link>
                <Link to="/" className="foot-link">INTERESTS <span className="new-foot">New</span> </Link>
                <Link to="/" className="foot-link">CONTACT US</Link>
                <Link to="/" className="foot-link">BLOG INDEX</Link>
            </div>
            <div className="foot-box foot-box-3">
                <h1>Top Categories</h1>
                <Link to="/" className="foot-link">BUSINESS</Link>
                <Link to="/" className="foot-link">POLITICS</Link>
                <Link to="/" className="foot-link">TECH<span className="hot-foot">Hot</span></Link>
                <Link to="/" className="foot-link">HEALTH</Link>
            </div>
            <div className="foot-box foot-box-4">
                <h1>Sign Up for Our Newsletter</h1>
                <p>Subscribe to our newsletter to get our newest articles instantly!</p>
                <form className='foot-email-form' action="">
                    <input type="text" placeholder='Your email address'/>
                    <button type='submit'>
                        <span>Sign Up Now</span>
                    </button>
                </form>
                    <div>
                        <input type="checkbox" name="" id=""/>
                        <span>I have read and agree to the terms & conditions</span>
                    </div>
            </div>
        </footer>
        <div className="container footer-medium">
          <Link className='footer-medium-logo' to="/">
            <img src={footLogo} alt="Foxiz" />
          </Link>
          <div className="footer-medium-social">
            <span className="follow-us">Follow US</span>
            <a href="https://www.facebook.com">
              <FaFacebook/>
            </a>
            <a href="https://www.twitter.com">
              <FaTwitter/>
            </a>
            <a href="https://www.youtube.com">
              <FaYoutube/>
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
            <div className="foot-left">
                © 2022 Foxiz News Network. Ruby Design Company. All Rights Reserved.
            </div>
            <div className="foot-right">
                <Link to="/" className="foot-bottom-link foot-bottom-link-1">Contact</Link>
                <Link to="/" className="foot-bottom-link">Blog</Link>
                <Link to="/" className="foot-bottom-link">Complaint</Link>
                <Link to="/" className="foot-bottom-link">Advertise</Link>
            </div>
        </div>
    </div>
    {
      topBtn && 
      <div className="back-to-top" onClick={toTop}>
          <TfiAngleDoubleUp/>
      </div>
    }
</>
    )
}

export default memo(Footer);
