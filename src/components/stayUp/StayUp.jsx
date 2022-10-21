import './stayUp.css';

// import images
import img from '../../assets/images/stayUp/emailBg.webp';

const StayUp = () => {
  return (
    <div className='container stay-up'>
        <div className="stay-up-left">
            <div className="stay-up-img">
                <img src={img} alt="sign-up" />
            </div>
            <div className="stay-up-title">
                <h3>Stay Up to Date</h3>
                <p>Subscribe to our newsletter to get our newest articles instantly!</p>
            </div>
        </div>
        <form action='' className="stay-up-right">
            <div className="stay-up-main">
                <input type="text" placeholder='Your email address' />
                <button>Sign Up Now</button>
            </div>
            <input type="checkbox" id="checkboxSignUpNow" />
            <label htmlFor="checkboxSignUpNow">I have read and agree to the terms & conditions</label>
        </form>
    </div>
  )
}

export default StayUp;